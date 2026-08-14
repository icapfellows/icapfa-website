"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms — pass i * 80 from a map() for sequential reveals. */
  delay?: number;
  /** Direction the content slides in from. */
  from?: "up" | "left" | "right";
}

const fromClasses = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
};

export function Reveal({ children, className, delay = 0, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : cn("opacity-0", fromClasses[from]),
        className
      )}
    >
      {children}
    </div>
  );
}
