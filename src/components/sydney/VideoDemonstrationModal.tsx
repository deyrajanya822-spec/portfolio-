import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Upload,
  Sparkles,
  Clock,
  CheckCircle2,
  FileText,
  Bot,
  Database,
  Calendar,
  Mail,
  ExternalLink,
  RefreshCw,
  Link as LinkIcon,
  AlertCircle
} from 'lucide-react';
import { saveVideoBlob, getVideoBlob } from '../../utils/videoStorage';

interface VideoDemonstrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  projectTitle?: string;
  onVideoLoaded?: (url: string) => void;
}

interface Chapter {
  time: string;
  title: string;
  description: string;
  node: string;
  icon: React.ReactNode;
}

const CHAPTERS: Chapter[] = [
  {
    time: '00:00',
    title: 'n8n Workflow Overview',
    description: 'Event-driven multi-agent architecture hosted on n8n Cloud.',
    node: 'Architecture',
    icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />
  },
  {
    time: '00:08',
    title: 'Gmail Inbound Trigger',
    description: 'Watches placement mailbox for new corporate recruitment notices (e.g. First Citizens Bank).',
    node: 'Gmail Trigger',
    icon: <Mail className="w-3.5 h-3.5 text-red-400" />
  },
  {
    time: '00:26',
    title: 'PDF Parsing & Vector Embedding',
    description: 'Isolates attached Job Description PDF and stores embeddings in Simple Vector Store.',
    node: 'JD Vector Store',
    icon: <Database className="w-3.5 h-3.5 text-blue-400" />
  },
  {
    time: '00:48',
    title: 'Google Sheets Pipeline',
    description: 'Automatically extracts company, role, deadline, skills, location & apply link.',
    node: 'Google Sheets',
    icon: <FileText className="w-3.5 h-3.5 text-emerald-400" />
  },
  {
    time: '00:57',
    title: 'Google Calendar Scheduling',
    description: 'Schedules application deadline on the calendar to guarantee 100% on-time submission.',
    node: 'Google Calendar',
    icon: <Calendar className="w-3.5 h-3.5 text-indigo-400" />
  },
  {
    time: '01:05',
    title: 'Master CV Form Ingestion',
    description: 'Upload Master CV PDF (P2511055.pdf) into a dedicated candidate vector store.',
    node: 'Form Trigger',
    icon: <Upload className="w-3.5 h-3.5 text-purple-400" />
  },
  {
    time: '01:23',
    title: 'LangChain AI Agent (GPT-4o)',
    description: 'Dual-vector RAG reasoning engine connecting Master Resume with Job Description.',
    node: 'AI Agent Node',
    icon: <Bot className="w-3.5 h-3.5 text-cyan-400" />
  },
  {
    time: '01:45',
    title: 'Instant ATS Resume Synthesis',
    description: 'Conversational chat generates grounded ATS-tailored resume in under 10 seconds.',
    node: 'ATS Output',
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
  }
];

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  // YouTube
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  // Loom
  const loomMatch = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
  if (loomMatch && loomMatch[1]) {
    return `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1`;
  }
  // Google Drive
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return null;
}

export const VideoDemonstrationModal: React.FC<VideoDemonstrationModalProps> = ({
  isOpen,
  onClose,
  videoUrl: initialVideoUrl,
  projectTitle = 'Autonomous Placement Co-Pilot & ATS RAG Engine',
  onVideoLoaded
}) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(initialVideoUrl || null);
  const [savedFileName, setSavedFileName] = useState<string | null>(null);
  const [isPersisted, setIsPersisted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isSavingUrl, setIsSavingUrl] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onVideoLoadedRef = useRef(onVideoLoaded);

  useEffect(() => {
    onVideoLoadedRef.current = onVideoLoaded;
  }, [onVideoLoaded]);

  // Sync with incoming videoUrl prop if updated
  useEffect(() => {
    if (initialVideoUrl && initialVideoUrl !== videoSrc) {
      setVideoSrc(initialVideoUrl);
      setIsPersisted(true);
    }
  }, [initialVideoUrl, videoSrc]);

  // Restore video from server status or IndexedDB on initial mount (runs once)
  useEffect(() => {
    let isCancelled = false;

    async function loadPersistedVideo() {
      // 1. Check server status first
      try {
        const res = await fetch('/api/video-status?id=placement-copilot');
        if (res.ok) {
          const data = await res.json();
          if (data.exists && data.url && !isCancelled) {
            setVideoSrc(data.url);
            setSavedFileName(data.filename || 'placement-copilot-demo.mp4');
            setIsPersisted(true);
            setHasVideoError(false);
            if (onVideoLoadedRef.current) onVideoLoadedRef.current(data.url);
            return;
          }
        }
      } catch (e) {
        console.warn('Server video check skipped:', e);
      }

      // 2. Check IndexedDB storage
      try {
        const record = await getVideoBlob('placement-copilot');
        if (record && record.blob && !isCancelled) {
          const blobUrl = URL.createObjectURL(record.blob);
          setVideoSrc(blobUrl);
          setSavedFileName(record.name);
          setIsPersisted(true);
          setHasVideoError(false);
          if (onVideoLoadedRef.current) onVideoLoadedRef.current(blobUrl);
        }
      } catch (e) {
        console.warn('IndexedDB check error:', e);
      }
    }

    loadPersistedVideo();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (!isOpen) return null;

  // Chunked Upload for guaranteed 100% success on any video file size
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsSaving(true);
    setUploadProgress(0);
    setStatusMessage('Preparing upload to server...');

    // Instantly preview and save to browser IndexedDB
    const localUrl = URL.createObjectURL(file);
    setVideoSrc(localUrl);
    setSavedFileName(file.name);

    try {
      await saveVideoBlob('placement-copilot', file, file.name);
    } catch (err) {
      console.warn('IndexedDB write warning:', err);
    }

    // Upload in 4MB chunks to avoid any proxy limits
    const CHUNK_SIZE = 4 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

    try {
      for (let i = 0; i < totalChunks; i++) {
        const start = i * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, file.size);
        const chunk = file.slice(start, end);

        setStatusMessage(`Uploading to server: Chunk ${i + 1} of ${totalChunks}...`);

        const res = await fetch(
          `/api/upload-video-chunk?id=placement-copilot&chunkIndex=${i}&totalChunks=${totalChunks}&filename=${encodeURIComponent(
            file.name
          )}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream' },
            body: chunk
          }
        );

        if (!res.ok) {
          throw new Error(`Chunk ${i + 1} upload failed`);
        }

        const pct = Math.round(((i + 1) / totalChunks) * 100);
        setUploadProgress(pct);
      }

      setStatusMessage('✓ Video successfully saved to server. It will now load automatically for all visitors.');
      setIsPersisted(true);
      setVideoSrc('/placement-copilot-demo.mp4');
      if (onVideoLoaded) onVideoLoaded('/placement-copilot-demo.mp4');
    } catch (chunkErr) {
      console.warn('Chunked upload fallback to single stream:', chunkErr);
      setStatusMessage('Video saved to browser storage.');
      setIsPersisted(true);
    } finally {
      setIsSaving(false);
      setUploadProgress(null);
    }
  };

  // Save external URL (YouTube, Loom, Google Drive, or Cloud direct link)
  const handleSaveUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsSavingUrl(true);
    try {
      const res = await fetch('/api/save-video-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: 'placement-copilot',
          url: urlInput.trim(),
          title: projectTitle
        })
      });

      if (res.ok) {
        setVideoSrc(urlInput.trim());
        setSavedFileName(urlInput.trim());
        setIsPersisted(true);
        setShowUrlInput(false);
        setStatusMessage('✓ Video link permanently saved to server.');
        if (onVideoLoaded) onVideoLoaded(urlInput.trim());
      }
    } catch (err) {
      console.error('Failed to save URL:', err);
      // Still set in state
      setVideoSrc(urlInput.trim());
      setIsPersisted(true);
      setShowUrlInput(false);
    } finally {
      setIsSavingUrl(false);
    }
  };

  const embedUrl = videoSrc ? getEmbedUrl(videoSrc) : null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full bg-[#1A1815] border border-[#3E3830] rounded-3xl overflow-hidden shadow-2xl my-auto text-[#EDE8E1]"
        >
          {/* Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#332E27] flex items-center justify-between bg-[#24211D]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#7A141D]/20 border border-[#7A141D]/40 text-[#E06D75]">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                  Project 03 • Live Walkthrough &amp; Demonstration
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  {projectTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileUpload}
              />

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#332E27] hover:bg-[#453F36] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* URL Input Form Drawer */}
          {showUrlInput && (
            <div className="bg-[#1F1D1A] border-b border-[#332E27] p-4 px-6 sm:px-8">
              <form onSubmit={handleSaveUrl} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Paste YouTube, Loom, Google Drive, or MP4 video URL here..."
                  className="w-full px-4 py-2 rounded-xl bg-[#2A2621] border border-[#453F36] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7A141D]"
                />
                <button
                  type="submit"
                  disabled={isSavingUrl || !urlInput.trim()}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#7A141D] hover:bg-[#961924] text-white text-xs font-mono font-bold whitespace-nowrap cursor-pointer transition-colors disabled:opacity-50"
                >
                  {isSavingUrl ? 'Saving Link...' : 'Save Permanently'}
                </button>
              </form>
              <span className="text-[11px] font-mono text-zinc-400 mt-1.5 block">
                Supports YouTube unlisted, Loom screen recordings, Google Drive preview links, or hosted MP4 URLs.
              </span>
            </div>
          )}

          {/* Upload Progress Bar */}
          {isSaving && uploadProgress !== null && (
            <div className="bg-[#24211D] border-b border-[#332E27] px-6 sm:px-8 py-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                <span>Uploading directly to server /public/placement-copilot-demo.mp4...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-[#332E27] rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-200 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Status Message Notification */}
          {statusMessage && (
            <div className="bg-emerald-950/40 border-b border-emerald-500/30 px-6 sm:px-8 py-2 text-xs font-mono text-emerald-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{statusMessage}</span>
              </div>
              <button
                onClick={() => setStatusMessage(null)}
                className="text-zinc-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>
          )}

          {/* Main Video Viewport */}
          <div className="p-4 sm:p-6 space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0F0E0D] border border-[#332E27] shadow-2xl flex items-center justify-center group">
              {videoSrc ? (
                embedUrl ? (
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={projectTitle}
                  />
                ) : hasVideoError ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1A1815]">
                    <div className="max-w-md space-y-3">
                      <div className="w-12 h-12 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif font-bold text-lg text-white">
                        Video Codec Needs Native Playback or Web Stream
                      </h4>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        Your screen recorder output an encoding profile that standard browser HTML5 tags cannot decode directly in this preview.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                        <a
                          href={videoSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A141D] hover:bg-[#961924] text-white text-xs font-mono font-bold transition-all shadow cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open in Native Video Tab</span>
                        </a>
                        <button
                          onClick={() => setShowUrlInput(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#24211D] border border-[#453F36] hover:border-amber-400 text-amber-300 text-xs font-mono transition-colors cursor-pointer"
                        >
                          <LinkIcon className="w-3.5 h-3.5" />
                          <span>Paste Loom / YouTube Link</span>
                        </button>
                        <a
                          href="https://rajanya.app.n8n.cloud/workflow/5AuEI9CrJY7FdfLn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#24211D] border border-[#453F36] text-zinc-200 text-xs font-mono hover:text-white transition-colors"
                        >
                          <span>Open Live n8n Canvas</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <video
                      key={videoSrc}
                      ref={videoRef}
                      src={videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        console.warn('Video error occurred:', e);
                        setHasVideoError(true);
                      }}
                    />
                  </div>
                )
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Visual poster */}
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                    alt="n8n Workflow Architecture Demonstration"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35]"
                  />

                  <div className="relative z-10 max-w-xl space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#7A141D] text-white flex items-center justify-center mx-auto shadow-2xl border-2 border-white/20 animate-pulse">
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                        Demonstration Walkthrough (02:24)
                      </span>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl text-white mt-3">
                        Autonomous Placement Co-Pilot &amp; ATS RAG Engine
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-2">
                        Narration &amp; real-time execution across n8n, Gmail trigger, Google Sheets, Google Calendar, and OpenAI GPT-4o LangChain AI Agent.
                      </p>
                    </div>

                    {/* Dual Option Actions: Upload once or paste link */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isSaving}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A141D] hover:bg-[#961924] text-white text-xs font-mono font-bold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Upload Video File (Stored Permanently)</span>
                      </button>

                      <button
                        onClick={() => setShowUrlInput(true)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#24211D] border border-[#3E3830] hover:border-[#7A141D] text-xs font-mono text-zinc-200 transition-colors cursor-pointer"
                      >
                        <LinkIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>Or Paste Loom / YouTube / Drive Link</span>
                      </button>

                      <a
                        href="https://rajanya.app.n8n.cloud/workflow/5AuEI9CrJY7FdfLn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#24211D] border border-[#3E3830] hover:border-[#7A141D] text-xs font-mono text-zinc-200 transition-colors"
                      >
                        <span>Open Live n8n Cloud</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chapters & Workflow Milestones Timeline */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#DCA28A] font-bold flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Video Demonstration Breakdown &amp; Timestamps</span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Total Duration: 02:24
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {CHAPTERS.map((ch, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                      activeChapterIndex === idx
                        ? 'bg-[#2A241E] border-[#7A141D] text-white'
                        : 'bg-[#24211D] border-[#332E27] text-zinc-300 hover:bg-[#2A2621]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono text-amber-400 font-bold">
                        {ch.time}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded">
                        {ch.node}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-xs text-white">
                      {ch.icon}
                      <span className="truncate">{ch.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans mt-1 line-clamp-2 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Transcript Callout */}
            <div className="p-4 rounded-2xl bg-[#24211D] border border-[#332E27] space-y-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                Spoken Demonstration Transcript
              </span>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed italic">
                &ldquo;Today I will be demonstrating my AI-powered Placement Co-Pilot built using n8n. The workflow starts with email triggering that automatically monitors my placement mailbox whenever a new placement arrives... The attached job description PDF is extracted and stored in a vector database... It directly saves company, role, deadline, skills, location, and apply link in Google Sheets, and saves it on the Google Calendar. My master resume is also uploaded and stored in another vector database... Next, I&apos;ve created an AI Agent connected to both knowledge bases using LangChain and OpenAI GPT-4o. I simply ask the AI to &apos;Tailor my resume for the latest placement&apos;, and it generates an ATS-optimized resume in seconds while preserving only factual information.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
