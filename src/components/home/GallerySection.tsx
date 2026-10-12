"use client";

import { galleryImages } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close]);

  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galleryImages.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/80 bg-card text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none">
            <div className="relative aspect-4/3 w-full sm:aspect-auto sm:min-h-[200px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="absolute right-3 bottom-3 left-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                {item.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={close}>
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close gallery preview">
            <X className="size-6" />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video max-h-[85vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">{active.alt}</p>
            <div className="mt-4 flex justify-center gap-2">
              <button
                type="button"
                disabled={activeIndex === 0}
                onClick={() =>
                  setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))
                }
                className={cn(
                  "rounded-full border border-white/20 px-4 py-2 text-sm text-white disabled:opacity-40",
                )}>
                Previous
              </button>
              <button
                type="button"
                disabled={activeIndex === galleryImages.length - 1}
                onClick={() =>
                  setActiveIndex((i) =>
                    i !== null && i < galleryImages.length - 1 ? i + 1 : i,
                  )
                }
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white disabled:opacity-40">
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
