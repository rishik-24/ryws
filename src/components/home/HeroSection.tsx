"use client";

import { AnimatedGradientText } from "@/components/shadcnui/animated-gradient-text";
import { LightRays } from "@/components/shadcnui/light-rays";
import { heroImage, NGO_NAME, NGO_TAGLINE } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { ArrowDown, HeartHandshake } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative -mx-6 -mt-3 overflow-hidden rounded-b-3xl border-b border-border/60 sm:-mx-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={`${NGO_NAME} community event`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-background" />
        <LightRays
          count={5}
          color="rgba(16, 185, 129, 0.35)"
          className="opacity-60 mix-blend-screen"
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-7xl flex-col justify-center px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-md">
            <HeartHandshake className="size-4 text-emerald-300" />
            <AnimatedGradientText className="font-medium text-white">
              Youth-led welfare since 2017
            </AnimatedGradientText>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {NGO_NAME}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty sm:text-xl">
            {NGO_TAGLINE}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400">
              Partner with us
            </Link>
            <Link
              href="#works"
              className={cn(
                "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20",
              )}>
              See our work
            </Link>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-flex w-fit items-center gap-2 text-sm text-white/70 transition hover:text-white"
          aria-label="Scroll to about section">
          <ArrowDown className="size-4 animate-bounce" />
          Explore
        </motion.a>
      </div>
    </section>
  );
}
