import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Maximize2,
  Upload,
  RefreshCw,
  Layers,
  ChevronRight,
  ShieldCheck,
  Eye,
  Check,
  Image as ImageIcon,
  Grid,
  FileImage,
  X,
  ZoomIn
} from 'lucide-react';
import { MascotSvg } from './ToffeemanVisualCards';

interface PoseItem {
  id: string;
  name: string;
  badge: string;
  prop: string;
  actionDesc: string;
  marketingUse: string;
  expression: string;
  image: string;
}

export const POSES_DATA: PoseItem[] = [
  {
    id: 'standard',
    name: 'STANDARD',
    badge: 'Flagship Anchor',
    prop: 'Golden Scepter & Foil Candy',
    actionDesc: 'Upright formal stance facing camera, friendly reassuring eye contact, royal scepter planted firmly.',
    marketingUse: 'Hero website assets, primary packaging front, retail shelf-talkers, institutional signage.',
    expression: 'Warm, dependable, dignified smile.',
    image: '/toffeeman/pose_standard.png'
  },
  {
    id: 'presenting',
    name: 'PRESENTING',
    badge: 'Hospitality & Taste',
    prop: 'Engraved Silver Platter & Umbrella Cane',
    actionDesc: 'Serving assorted artisanal butter toffees on an engraved silver salver, umbrella cane resting.',
    marketingUse: 'Sampling booth signage, gifting box lids, holiday hamper collateral, tasting menus.',
    expression: 'Gracious, inviting, refined confectionery host.',
    image: '/toffeeman/pose_presenting.png'
  },
  {
    id: 'juggling',
    name: 'JUGGLING',
    badge: 'Playful Energy',
    prop: '3 Airborne Wrapped Candies',
    actionDesc: 'Dynamic hopping posture, playfully tossing three golden-wrapped toffees in a parabolic arc.',
    marketingUse: 'Party packs, social media motion stickers, animated email banners, product range promos.',
    expression: 'Cheeky, high-energy, infectious delight.',
    image: '/toffeeman/pose_juggling.png'
  },
  {
    id: 'disdain',
    name: 'DISDAIN',
    badge: 'Artisanal Standards',
    prop: 'Raw Inferior Toffee Block',
    actionDesc: 'Skeptical arched brow, inspecting a dull mass-market confectionery block with deadpan disapproval.',
    marketingUse: '"Us vs Them" comparison campaigns, ingredient purity educational carousels, meme marketing.',
    expression: 'Wry, discerning, unapologetic connoisseur.',
    image: '/toffeeman/pose_disdain.png'
  },
  {
    id: 'excitement',
    name: 'EXCITEMENT',
    badge: 'Pure Dopamine',
    prop: 'Raised Scepter & Golden Bar',
    actionDesc: 'Mid-air leap of jubilant victory! Open-mouthed cheer signaling the rush of caramelized crunch.',
    marketingUse: 'Flash sales, new flavor drops, contest winner announcements, celebratory notifications.',
    expression: 'Unrestrained joy, triumphant cheer.',
    image: '/toffeeman/pose_excitement.png'
  },
  {
    id: 'confusion',
    name: 'CONFUSION',
    badge: 'Relatable Empathy',
    prop: 'Head Scratch & Floating "?"',
    actionDesc: 'Head tilted quizzically, scratching velvet hat with one hand, mouth open in puzzled curiosity.',
    marketingUse: 'Interactive polls, consumer quizzes ("Which flavor are you?"), FAQ sections, customer support.',
    expression: 'Puzzled, endearing, humble question.',
    image: '/toffeeman/pose_confusion.png'
  },
  {
    id: 'posing',
    name: 'POSING',
    badge: 'Charismatic Wink',
    prop: 'Hand-on-Hip Swagger',
    actionDesc: 'Suave wink directly at viewer, left hand resting casually on hip, exuding effortless charm.',
    marketingUse: 'VIP loyalty program branding, influencer partnership collaterals, limited edition sleeve covers.',
    expression: 'Charming wink, self-assured charisma.',
    image: '/toffeeman/pose_posing.png'
  },
  {
    id: 'shock',
    name: 'SHOCK',
    badge: 'Dramatic Surprise',
    prop: 'Hand-to-Mouth Gasp',
    actionDesc: 'Wide-eyed comical gasp with hand covering mouth, body leaning back in sudden disbelief.',
    marketingUse: 'Black Friday reveals, secret recipe unveilings, high-retention TikTok hook frames.',
    expression: 'Astonished gasp, wide ocular opening.',
    image: '/toffeeman/pose_shock.png'
  },
  {
    id: 'pride',
    name: 'PRIDE',
    badge: 'Crown Jewel',
    prop: 'Two-Handed Product Presentation',
    actionDesc: 'Chest puffed proudly forward, presenting the golden Toffeeman bar like an imperial treasure.',
    marketingUse: 'Awards celebrations, heritage storytelling, anniversary editions, premium gift boxes.',
    expression: 'Puffed chest, proud artisan satisfaction.',
    image: '/toffeeman/pose_pride.png'
  }
];

export const ToffeemanPosesVisual: React.FC<{ customImage?: string }> = ({ customImage: propCustomImage }) => {
  const [selectedPose, setSelectedPose] = useState<PoseItem>(POSES_DATA[0]);
  const [masterSheetUrl, setMasterSheetUrl] = useState<string>(
    propCustomImage || '/toffeeman/toffee_man_design_one.png'
  );
  const [poseImages, setPoseImages] = useState<Record<string, string>>({
    standard: '/toffeeman/pose_standard.png',
    presenting: '/toffeeman/pose_presenting.png',
    juggling: '/toffeeman/pose_juggling.png',
    disdain: '/toffeeman/pose_disdain.png',
    excitement: '/toffeeman/pose_excitement.png',
    confusion: '/toffeeman/pose_confusion.png',
    posing: '/toffeeman/pose_posing.png',
    shock: '/toffeeman/pose_shock.png',
    pride: '/toffeeman/pose_pride.png',
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const targetPoseUploadRef = useRef<string | null>(null);

  // Initialize and load saved 9-pose assets from server & localStorage
  const loadSavedPoseAssets = async () => {
    // 1. Check local storage
    try {
      const savedMaster = localStorage.getItem('toffeeman_9pose_master_sheet');
      if (savedMaster) {
        setMasterSheetUrl(savedMaster);
      }
      const savedPoses = localStorage.getItem('toffeeman_individual_poses_map');
      if (savedPoses) {
        const parsed = JSON.parse(savedPoses);
        if (parsed && typeof parsed === 'object') {
          setPoseImages((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {}

    // 2. Fetch from server disk
    try {
      const res = await fetch('/api/toffeeman-assets');
      if (res.ok) {
        const data = await res.json();
        if (data.files && Array.isArray(data.files)) {
          // Look for 9-pose sheet or recent uploads
          const sheetCandidate = data.files.find((f: string) => {
            const lower = f.toLowerCase();
            return (
              lower.includes('toffee_man_design_one') ||
              lower.includes('design_one') ||
              (lower.includes('9') && lower.includes('pose')) ||
              lower.includes('model_sheet')
            );
          });

          if (sheetCandidate) {
            const url = `/toffeeman/${sheetCandidate}`;
            setMasterSheetUrl(url);
          }

          // Map any custom uploaded pose files
          const newMap: Record<string, string> = {};
          POSES_DATA.forEach((pose) => {
            const match = data.files.find((f: string) => {
              const lower = f.toLowerCase();
              return lower === `pose_${pose.id}.png` || lower.includes(`pose_${pose.id}`);
            });
            if (match) {
              newMap[pose.id] = `/toffeeman/${match}`;
            }
          });

          if (Object.keys(newMap).length > 0) {
            setPoseImages((prev) => ({ ...prev, ...newMap }));
          }
        }
      }
    } catch (err) {
      console.log('Server asset check completed');
    }
  };

  useEffect(() => {
    loadSavedPoseAssets();
  }, []);

  // Handle Master 9-Pose Sheet Upload
  const handleSheetUpload = async (files: FileList | null, specificPoseId?: string) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);
    setUploadMessage('Saving 9-Pose Model Sheet to server disk...');

    const file = files[0];
    try {
      const safeName = `9_pose_model_sheet_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const arrayBuffer = await file.arrayBuffer();

      const res = await fetch(`/api/upload-toffeeman-image?filename=${encodeURIComponent(safeName)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: arrayBuffer
      });

      let uploadedUrl = '';
      if (res.ok) {
        const json = await res.json();
        uploadedUrl = json.url;
      } else {
        uploadedUrl = URL.createObjectURL(file);
      }

      if (specificPoseId) {
        // Individual pose upload
        setPoseImages((prev) => {
          const updated = { ...prev, [specificPoseId]: uploadedUrl };
          try {
            localStorage.setItem('toffeeman_individual_poses_map', JSON.stringify(updated));
          } catch (e) {}
          return updated;
        });
        setUploadMessage(`Saved photo for ${specificPoseId.toUpperCase()}!`);
      } else {
        // Master 9-pose sheet upload
        setMasterSheetUrl(uploadedUrl);
        try {
          localStorage.setItem('toffeeman_9pose_master_sheet', uploadedUrl);
        } catch (e) {}
        setUploadMessage('Master 9-Pose Model Sheet saved permanently!');
      }
    } catch (err: any) {
      const localUrl = URL.createObjectURL(file);
      if (specificPoseId) {
        setPoseImages((prev) => ({ ...prev, [specificPoseId]: localUrl }));
      } else {
        setMasterSheetUrl(localUrl);
      }
      setUploadMessage('Asset loaded successfully!');
    } finally {
      setIsUploading(false);
      targetPoseUploadRef.current = null;
      setTimeout(() => setUploadMessage(null), 5000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleSheetUpload(e.target.files, targetPoseUploadRef.current || undefined)}
      />

      {/* Main Overview & Model Sheet Upload Banner */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleSheetUpload(e.dataTransfer.files);
        }}
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-950/60 via-amber-900/30 to-black/70 border border-amber-500/30 backdrop-blur-md shadow-2xl relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Character Animation Matrix</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 text-[11px] font-mono border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Permanent Storage Ready</span>
              </span>
              {masterSheetUrl && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono border border-amber-400/30">
                  <Check className="w-3 h-3" />
                  <span>Master Sheet Synced</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              Action Sheet
            </h3>

            <p className="text-xs sm:text-sm text-rose-100/80 font-sans leading-relaxed">
              9-Pose Mascot Model Sheet: A modular 3D character rigging system engineered for omni-channel marketing—from formal shelf packaging and premium gifting to high-retention social memes and gamified rewards.
            </p>
          </div>

          {/* Action Bar */}
          {masterSheetUrl && (
            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-end">
              <button
                onClick={() => setLightboxImage({ src: masterSheetUrl, title: 'Master 9-Pose Mascot Model Sheet' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-mono font-bold text-xs shadow-lg shadow-amber-900/40 transition-all transform active:scale-95 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Inspect Fullscreen</span>
              </button>
            </div>
          )}
        </div>

        {/* Upload Notification Message */}
        {uploadMessage && (
          <div className="mt-4 p-3 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{uploadMessage}</span>
          </div>
        )}
      </div>

      {/* MASTER MODEL SHEET DISPLAY SECTION */}
      {masterSheetUrl && (
        <div className="p-6 rounded-3xl bg-black/60 border border-amber-500/25 shadow-xl space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h4 className="text-white font-serif text-lg">
                Master 9-Pose Reference Model Sheet
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 text-[10px] font-mono border border-amber-400/20">
                Rigging & Production Reference
              </span>
            </div>

            <button
              onClick={() => setLightboxImage({ src: masterSheetUrl, title: 'Master 9-Pose Mascot Model Sheet' })}
              className="text-xs font-mono text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click image to zoom</span>
            </button>
          </div>

          <div
            onClick={() => setLightboxImage({ src: masterSheetUrl, title: 'Master 9-Pose Mascot Model Sheet' })}
            className="group relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black/70 cursor-pointer shadow-inner"
          >
            <img
              src={masterSheetUrl}
              alt="Master 9-Pose Mascot Model Sheet"
              referrerPolicy="no-referrer"
              className="w-full max-h-[550px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
              <span className="text-xs font-mono text-white">Click to view full-resolution inspection zoom</span>
              <span className="px-3 py-1 rounded-xl bg-amber-400 text-amber-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect High-Res</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3x3 MATRIX BREAKDOWN */}
      <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h4 className="text-white font-serif text-xl">3x3 Pose Breakdown & Brand Applications</h4>
              <p className="text-zinc-400 text-xs font-sans">
                Each pose is calibrated for specific consumer touchpoints across retail, motion, and digital campaigns.
              </p>
            </div>
            <div className="text-xs font-mono text-amber-300/80">
              9 Canonical Brand Postures
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSES_DATA.map((pose, idx) => {
              const isSelected = selectedPose.id === pose.id;
              const poseCustomImg = poseImages[pose.id];

              return (
                <div
                  key={pose.id}
                  onClick={() => setSelectedPose(pose)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-amber-400/15 border-amber-400 shadow-xl shadow-amber-950/40 scale-[1.01]'
                      : 'bg-black/30 border-white/10 hover:border-amber-400/50 hover:bg-black/40'
                  }`}
                >
                  <div>
                    {/* Visual Graphic Representation */}
                    <div className="relative w-full aspect-square max-h-52 rounded-2xl bg-gradient-to-b from-amber-900/20 to-black/60 border border-white/10 overflow-hidden flex items-center justify-center p-3 mb-4">
                      {poseCustomImg ? (
                        <img
                          src={poseCustomImg}
                          alt={pose.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : masterSheetUrl ? (
                        /* If master sheet is uploaded but no individual pose image, show styled vector with quick option */
                        <MascotSvg variant="gentleman" className="w-full h-full max-h-40" />
                      ) : (
                        <MascotSvg variant="gentleman" className="w-full h-full max-h-40" />
                      )}

                      {/* Pose Number Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-amber-300 font-mono text-[10px] border border-amber-400/20">
                        Pose 0{idx + 1}
                      </div>

                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-mono text-[10px] font-bold shadow">
                        {pose.badge}
                      </div>

                      {/* Hover action to inspect */}
                      {poseCustomImg && (
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            title="Inspect high-res"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxImage({ src: poseCustomImg, title: `Pose 0${idx + 1}: ${pose.name}` });
                            }}
                            className="p-1.5 rounded-lg bg-black/80 hover:bg-amber-400 hover:text-amber-950 text-amber-300 border border-amber-400/40 transition-all cursor-pointer"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-serif text-white font-medium flex items-center justify-between">
                        <span>{pose.name}</span>
                        <span className="text-xs font-mono text-amber-300/80 font-normal">#{idx + 1}</span>
                      </h4>
                      <p className="text-xs font-mono text-amber-200/70">
                        Prop: <span className="text-white">{pose.prop}</span>
                      </p>
                      <p className="text-xs text-rose-100/80 font-sans leading-relaxed pt-1">
                        {pose.actionDesc}
                      </p>
                    </div>
                  </div>

                  {/* Marketing Application Tag */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-rose-200/70 truncate max-w-[200px]">{pose.marketingUse}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      {/* Selected Pose Deep Dive Bar */}
      <div className="p-6 rounded-3xl bg-black/60 border border-amber-400/30 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              const img = poseImages[selectedPose.id] || selectedPose.image;
              if (img) setLightboxImage({ src: img, title: `${selectedPose.name} - ${selectedPose.badge}` });
            }}
            className="w-20 h-20 rounded-2xl overflow-hidden border border-amber-400/40 bg-black/80 flex items-center justify-center shrink-0 cursor-pointer group relative shadow-md"
          >
            <img
              src={poseImages[selectedPose.id] || selectedPose.image}
              alt={selectedPose.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-amber-300">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 text-xs font-mono font-bold">
                {selectedPose.name}
              </span>
              <span className="text-xs font-mono text-amber-200/80">• {selectedPose.badge}</span>
            </div>
            <p className="text-sm text-white font-sans max-w-2xl">
              <strong className="text-amber-300 font-medium">Expression Dynamics:</strong> {selectedPose.expression}
            </p>
            <p className="text-xs text-rose-100/80 font-mono">
              <strong className="text-amber-200 font-medium">Brand Deployment:</strong> {selectedPose.marketingUse}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={() => {
              const img = poseImages[selectedPose.id] || selectedPose.image;
              if (img) setLightboxImage({ src: img, title: `${selectedPose.name} - ${selectedPose.badge}` });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black/60 hover:bg-black/80 text-amber-300 border border-amber-400/40 text-xs font-mono transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect Pose</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] bg-[#1a1410] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10">
              <span className="text-sm font-mono text-amber-300 font-medium">{lightboxImage.title}</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-black/80">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[78vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
