"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  label?: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  label,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const position = useMotionValue(50);
  const clipPath = useTransform(position, (v) => `inset(0 ${100 - v}% 0 0)`);

  const beforeOpacity = useTransform(position, [0, 30, 50], [0, 1, 1]);
  const afterOpacity = useTransform(position, [50, 70, 100], [1, 1, 0]);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      position.set(percent);
    },
    [position],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleReset = useCallback(() => {
    if (!isDragging) {
      animate(position, 50, { type: "spring", stiffness: 300, damping: 25 });
    }
  }, [isDragging, position]);

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <h3 className="text-lg font-semibold text-secondary">{label}</h3>
      )}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleReset}
        className="relative aspect-[4/3] w-full cursor-grab select-none overflow-hidden rounded-2xl border border-zinc-200 shadow-sm active:cursor-grabbing"
      >
        {/* After image (fond) */}
        <Image
          src={afterImage}
          alt="Après travaux"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        {/* Before image (clip) */}
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <Image
            src={beforeImage}
            alt="Avant travaux"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Barre de séparation */}
        <motion.div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
          style={{ left: useTransform(position, (v) => `${v}%`) }}
        />

        {/* Poignée */}
        <motion.div
          className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: useTransform(position, (v) => `${v}%`) }}
        >
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M8 3L3 8l5 5" />
              <path d="M16 3l5 5-5 5" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Labels Avant / Après */}
        <motion.span
          className="absolute top-4 left-4 z-10 rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
          style={{ opacity: beforeOpacity }}
        >
          Avant
        </motion.span>
        <motion.span
          className="absolute top-4 right-4 z-10 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-secondary backdrop-blur-sm"
          style={{ opacity: afterOpacity }}
        >
          Après
        </motion.span>
      </div>
    </div>
  );
}
