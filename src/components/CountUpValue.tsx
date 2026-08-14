"use client";

import { useEffect, useRef, useState } from "react";

/** Splits "960+" into a numeric target (960) and trailing suffix ("+"). */
function parseValue(value: string): { target: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  if (!match) return { target: 0, prefix: "", suffix: value };
  const [, prefix, digits, suffix] = match;
  return { target: Number(digits.replace(/,/g, "")), prefix, suffix };
}

export function CountUpValue({ value, className }: { value: string; className?: string }) {
  const { target, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(prefix + "0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || target === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.unobserve(node);

        if (prefersReducedMotion) {
          setDisplay(prefix + target.toLocaleString() + suffix);
          return;
        }

        const duration = 1400;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(prefix + current.toLocaleString() + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
