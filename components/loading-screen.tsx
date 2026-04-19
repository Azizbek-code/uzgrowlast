"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initial loading delay to show the animation
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        if (onLoadingComplete) onLoadingComplete();
      }, 800); // Match this with CSS transition duration
    }, 2500); // How long the video stays visible

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-white",
        fadeOut && "fade-out"
      )}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover bg-white"
        >
          <source src="/uzgrow_leaf.gif.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional Logo overlay or progress bar if needed */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2">
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-progress-glow" />
          </div>
          <span className="text-xs font-medium text-gray-400 tracking-widest uppercase animate-pulse">
            Yuklanmoqda...
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-glow {
          animation: progress 2s ease-out forwards;
          box-shadow: 0 0 10px var(--primary);
        }
      `}</style>
    </div>
  );
}
