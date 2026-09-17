import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Upload,
  Film,
  CheckCircle2,
  Loader2
} from 'lucide-react';

const DB_NAME = 'LotusVideoStorage';
const DB_VERSION = 1;
const STORE_NAME = 'videos';
const KEY_NAME = 'lotus_high5_ad';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveVideoBlob(blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(blob, KEY_NAME);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    console.warn('Could not save to IndexedDB:', e);
  }
}

async function loadSavedVideoBlob(): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY_NAME);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

export const AdFilmPlayer: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoFileName, setVideoFileName] = useState<string>('Lotus_High5_Commercial.mp4');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSavedPermanently, setIsSavedPermanently] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check both Server and IndexedDB on startup
  useEffect(() => {
    let active = true;

    async function checkVideo() {
      // 1. First check server endpoint
      try {
        const res = await fetch('/api/video-status');
        if (res.ok) {
          const data = await res.json();
          if (data.exists && data.url) {
            if (active) {
              setVideoUrl(data.url);
              setIsSavedPermanently(true);
              setSyncStatus('Loaded from Server');
              return;
            }
          }
        }
      } catch (err) {
        console.log('Server video check fallback to IndexedDB:', err);
      }

      // 2. Check IndexedDB backup
      const blob = await loadSavedVideoBlob();
      if (active && blob) {
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setIsSavedPermanently(true);
        setSyncStatus('Loaded from Permanent Storage');

        // Background sync to server if needed
        try {
          fetch('/api/upload-video', {
            method: 'POST',
            body: blob,
          }).catch(() => {});
        } catch {
          // ignore
        }
      }
    }

    checkVideo();

    return () => {
      active = false;
    };
  }, []);

  const handleFileSelect = async (file: File) => {
    if (!file) return;
    if (!file.type.startsWith('video/')) {
      alert('Please select a valid video file (.mp4, .mov, .webm, etc.)');
      return;
    }

    setIsUploading(true);
    setSyncStatus('Saving permanently to server...');

    try {
      // Instant local playback
      const localUrl = URL.createObjectURL(file);
      setVideoUrl(localUrl);
      setVideoFileName(file.name);
      setIsPlaying(true);

      // 1. Save to local IndexedDB
      await saveVideoBlob(file);

      // 2. Upload to Server so all users / sessions see it permanently
      const res = await fetch('/api/upload-video', {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'video/mp4',
        },
        body: file,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.url) {
          setVideoUrl(data.url);
        }
        setIsSavedPermanently(true);
        setSyncStatus('Permanently Saved on Server');
      } else {
        setIsSavedPermanently(true);
        setSyncStatus('Saved in Permanent Browser Storage');
      }
    } catch (err) {
      console.error('Upload sync notice:', err);
      setIsSavedPermanently(true);
      setSyncStatus('Saved in Permanent Browser Storage');
    } finally {
      setIsUploading(false);
      setTimeout(() => setSyncStatus(''), 4000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (!duration && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    videoRef.current.playbackRate = playbackSpeed;
    videoRef.current.play().catch(() => {});
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRef.current.muted = nextMuted;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative rounded-2xl overflow-hidden bg-zinc-950 border transition-all duration-300 shadow-2xl flex flex-col ${
        isDragging ? 'border-pink-500 ring-2 ring-pink-500/40 bg-pink-950/20' : 'border-zinc-800'
      }`}
    >
      {/* Top Header Bar */}
      <div className="px-4 py-2.5 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] font-mono font-bold">
            <Film className="w-3 h-3" />
            <span>LOTUS HIGH 5 • TV COMMERCIAL</span>
          </div>

          {isSavedPermanently && (
            <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              <span>{syncStatus || 'SAVED PERMANENTLY'}</span>
            </span>
          )}

          {isUploading && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>SAVING PERMANENTLY...</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer border border-zinc-700/60">
            <Upload className="w-3 h-3 text-pink-400" />
            <span>{videoUrl ? 'Replace Video' : 'Upload Video File'}</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileSelect(f);
              }}
            />
          </label>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Floating Center Play/Pause on hover */}
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-10"
            >
              <div className="w-16 h-16 rounded-full bg-pink-500/90 text-white flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </div>
            </div>
          </>
        ) : (
          /* Empty / Upload Dropzone State */
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-8 text-center cursor-pointer space-y-4 hover:bg-zinc-900/60 transition-colors w-full h-full"
          >
            <div className="w-20 h-20 rounded-full bg-pink-500/10 border-2 border-dashed border-pink-500/50 flex items-center justify-center text-pink-400 transform hover:scale-105 transition-transform shadow-lg">
              <Upload className="w-8 h-8" />
            </div>

            <div className="space-y-1.5 max-w-md">
              <h3 className="font-syne font-bold text-lg text-white">
                Upload Lotus High 5 Commercial Video
              </h3>
              <p className="text-xs text-zinc-400 font-outfit">
                Drag & drop your video file (.mp4, .mov, .webm) here or click to select. It is stored permanently on the server and loads automatically every time you or any visitor opens the project.
              </p>
            </div>

            <div className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-syne font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-pink-500/20">
              Select Video File
            </div>
          </div>
        )}
      </div>

      {/* Video Controls Bar */}
      {videoUrl && (
        <div className="p-4 bg-zinc-900/95 border-t border-zinc-800 space-y-3 z-20">
          {/* Seek Bar */}
          <div className="space-y-1">
            <div
              onClick={handleSeek}
              className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden cursor-pointer relative group/bar"
            >
              <div
                className="h-full bg-gradient-to-r from-pink-500 via-amber-400 to-red-500 transition-all duration-75 relative"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-pink-500 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-0.5">
              <span className="text-pink-400 font-bold">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <span className="text-zinc-400 truncate max-w-[200px]">
                {videoFileName}
              </span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-pink-500 hover:bg-pink-400 text-white font-syne font-bold transition-all shadow-lg flex items-center gap-1.5 px-3.5 text-xs cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Restart Video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={toggleMute}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  isMuted
                    ? 'bg-zinc-800 border-zinc-700 text-zinc-500'
                    : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                }`}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Playback speed selector */}
              <div className="flex items-center gap-1 bg-zinc-800 p-0.5 rounded-lg border border-zinc-700/60">
                {[0.5, 1, 1.25, 1.5, 2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => handleSpeedChange(spd)}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                      playbackSpeed === spd
                        ? 'bg-pink-500 text-white font-bold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
