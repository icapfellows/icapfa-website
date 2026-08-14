"use client";

import { memo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export interface CarouselPhoto {
  src: string;
  alt: string;
}

const transition = { duration: 0.15, ease: [0.32, 0.72, 0, 1] as const };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const };

const Carousel = memo(
  ({
    handleClick,
    controls,
    photos,
    isCarouselActive,
  }: {
    handleClick: (src: string) => void;
    controls: ReturnType<typeof useAnimation>;
    photos: CarouselPhoto[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 1500 : 2600;
    const faceCount = photos.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

    return (
      <div
        className="flex h-full items-center justify-center bg-surface-soft"
        style={{ perspective: "1000px", transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
            })
          }
          animate={controls}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={`${photo.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <button
                type="button"
                onClick={() => handleClick(photo.src)}
                aria-label={`View larger: ${photo.alt}`}
                className="block h-full w-full cursor-pointer overflow-hidden rounded border border-maroon/10 bg-white shadow-[0_4px_16px_rgba(69,16,22,0.12)]"
              >
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  layoutId={`carousel-img-${photo.src}`}
                  className="pointer-events-none h-full w-full object-cover"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export function PhotoCarousel3D({ photos }: { photos: CarouselPhoto[] }) {
  const [activeImg, setActiveImg] = useState<{ src: string; alt: string } | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const handleClick = (src: string) => {
    const photo = photos.find((p) => p.src === src);
    if (!photo) return;
    setActiveImg(photo);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout="position"
            role="dialog"
            aria-modal="true"
            aria-label={activeImg.alt}
            onClick={handleClose}
            onKeyDown={(e) => e.key === "Escape" && handleClose()}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-dark/80 p-6 sm:p-16"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <motion.img
              layoutId={`carousel-img-${activeImg.src}`}
              src={activeImg.src}
              alt={activeImg.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded shadow-2xl"
              style={{ willChange: "transform" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[300px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          photos={photos}
          isCarouselActive={isCarouselActive}
        />
      </div>
      <p className="mt-4 text-center text-xs text-ink/50">Drag to explore, or click a photo to enlarge.</p>
    </motion.div>
  );
}
