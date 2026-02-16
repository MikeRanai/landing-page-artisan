"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";

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
  const beforeClipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const handleElRef = useRef<HTMLDivElement>(null);
  const beforeLabelRef = useRef<HTMLSpanElement>(null);
  const afterLabelRef = useRef<HTMLSpanElement>(null);
  const isDragging = useRef(false);
  const positionRef = useRef(50);
  const rafId = useRef(0);

  const applyPosition = useCallback((percent: number) => {
    positionRef.current = percent;
    if (beforeClipRef.current)
      beforeClipRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    if (lineRef.current) lineRef.current.style.left = `${percent}%`;
    if (handleElRef.current) handleElRef.current.style.left = `${percent}%`;
    if (beforeLabelRef.current)
      beforeLabelRef.current.style.opacity = percent < 30 ? "0" : "1";
    if (afterLabelRef.current)
      afterLabelRef.current.style.opacity = percent > 70 ? "0" : "1";
  }, []);

  const getPercent = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return 50;
    const rect = container.getBoundingClientRect();
    return Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100),
    );
  }, []);

  const springTo = useCallback(
    (target: number) => {
      let current = positionRef.current;
      let velocity = 0;
      const step = () => {
        const distance = target - current;
        velocity = (velocity + distance * 0.08) * 0.75;
        current += velocity;
        if (Math.abs(distance) < 0.1 && Math.abs(velocity) < 0.1) {
          applyPosition(target);
          return;
        }
        applyPosition(current);
        rafId.current = requestAnimationFrame(step);
      };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(step);
    },
    [applyPosition],
  );

  // Native event listeners — bypass React synthetic events for minimal latency
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    applyPosition(50);

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      isDragging.current = true;
      container.setPointerCapture(e.pointerId);
      applyPosition(getPercent(e.clientX));
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      // Apply immediately — no rAF throttle, DOM manipulation is cheap enough
      applyPosition(getPercent(e.clientX));
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    const onDoubleClick = () => {
      if (!isDragging.current) springTo(50);
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    // Listen on window for pointerup — finger can release anywhere
    window.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("dblclick", onDoubleClick);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("dblclick", onDoubleClick);
      cancelAnimationFrame(rafId.current);
    };
  }, [applyPosition, getPercent, springTo]);

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <h3 className="text-lg font-semibold text-secondary">{label}</h3>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-grab select-none overflow-hidden rounded-2xl border border-zinc-200 shadow-sm active:cursor-grabbing"
        style={{ touchAction: "none", WebkitUserSelect: "none" }}
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
        <div
          ref={beforeClipRef}
          className="absolute inset-0"
          style={{ clipPath: "inset(0 50% 0 0)", willChange: "clip-path" }}
        >
          <Image
            src={beforeImage}
            alt="Avant travaux"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Barre de séparation */}
        <div
          ref={lineRef}
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
          style={{ left: "50%", willChange: "left" }}
        />

        {/* Poignée */}
        <div
          ref={handleElRef}
          className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", willChange: "left" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
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
          </div>
        </div>

        {/* Labels Avant / Après */}
        <span
          ref={beforeLabelRef}
          className="absolute top-4 left-4 z-10 rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-opacity duration-150"
        >
          Avant
        </span>
        <span
          ref={afterLabelRef}
          className="absolute top-4 right-4 z-10 rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-secondary backdrop-blur-sm transition-opacity duration-150"
        >
          Après
        </span>
      </div>
    </div>
  );
}
