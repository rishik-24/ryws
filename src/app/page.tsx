import { GallerySection } from "@/components/home/GallerySection";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionHeading } from "@/components/home/SectionHeading";
import { SiteFooter } from "@/components/home/SiteFooter";
import { DotPattern } from "@/components/shadcnui/dot-pattern";
import {
  contact,
  impactStats,
  ngoPhoto,
  pastWorks,
  programs,
  testimonials,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Quote,
  Shirt,
  Stethoscope,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rudrapur Youth Welfare Society | Community welfare & youth programs",
  description:
    "Rudrapur Youth Welfare Society (RYWS) serves Baduria and North 24 Parganas through blood donation camps, health check-ups, student felicitation, and relief work since 2017.",
};

const programIcons = {
  "heart-pulse": HeartPulse,
  shirt: Shirt,
  "graduation-cap": GraduationCap,
  stethoscope: Stethoscope,
} as const;

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />

      <section className="relative mx-auto max-w-7xl px-0 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="border-border/80 bg-card/80 rounded-2xl border p-6 text-center shadow-sm backdrop-blur-sm">
              <p className="text-2xl font-bold text-emerald-600 sm:text-3xl dark:text-emerald-400">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-2 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-border/60 bg-muted/20 relative scroll-mt-24 border-y py-20 sm:py-24">
        <DotPattern
          glow
          width={22}
          height={22}
          className="mask-[radial-gradient(ellipse_at_center,white,transparent_70%)] text-emerald-500/15"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-0 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="Rooted in Rudrapur, driven by youth"
            description="Rudrapur Youth Welfare Society is a registered community organisation working in Baduria, North 24 Parganas. We mobilise young volunteers to run blood donation camps, health initiatives, student recognition programmes, and relief activities for neighbours who need a hand."
          />
          <div className="border-border relative overflow-hidden rounded-3xl border shadow-lg">
            <div className="relative aspect-4/3">
              <Image
                src={ngoPhoto("logo.jpeg")}
                alt="RYWS logo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute right-4 bottom-4 left-4 text-sm text-white/90">
              {contact.registration} · Serving the community since 2017
            </p>
          </div>
        </div>
      </section>

      <section
        id="programs"
        className="relative scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-0">
          <SectionHeading
            eyebrow="What we do"
            title="Programs that meet real community needs"
            description="Our work is practical and local—planned with schools, blood banks, and health partners so every camp reaches the people who need it most."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => {
              const Icon = programIcons[program.icon];
              return (
                <article
                  key={program.title}
                  className="group border-border/80 bg-card rounded-2xl border p-6 shadow-sm transition hover:border-emerald-500/30 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon
                      className="size-6"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {program.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="works"
        className="border-border/60 bg-muted/15 relative scroll-mt-24 border-t py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-0">
          <SectionHeading
            eyebrow="Past works"
            title="Moments from the field"
            description="A snapshot of camps, ceremonies, and outreach that our volunteers and supporters have made possible over the years."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {pastWorks.map((work) => (
              <article
                key={work.title}
                className="border-border/80 bg-card overflow-hidden rounded-2xl border shadow-sm">
                <div className="relative aspect-video">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {work.year}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{work.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-0">
          <SectionHeading
            eyebrow="Testimonials"
            title="Voices from our community"
            description="Neighbours, parents, and volunteers who experience RYWS programmes firsthand."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="border-border/80 bg-card flex h-full flex-col rounded-2xl border p-6 shadow-sm">
                <Quote
                  className="size-8 text-emerald-500/40"
                  aria-hidden
                />
                <p className="mt-4 flex-1 leading-relaxed text-pretty">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="border-border/60 mt-6 border-t pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-muted-foreground text-sm">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="border-border/60 bg-muted/20 relative scroll-mt-24 border-t py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-0">
          <SectionHeading
            eyebrow="Gallery"
            title="Life at RYWS"
            description="Tap any photo to view it larger. Images from blood camps, felicitation events, health drives, and community outreach."
          />
          <GallerySection />
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-0">
          <div className="border-border via-card to-card overflow-hidden rounded-3xl border bg-linear-to-br from-emerald-500/10 p-8 sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Get involved"
                  title="Volunteer, donate, or partner with us"
                  description="Whether you can give time, resources, or expertise, RYWS welcomes supporters who want to strengthen Rudrapur and nearby villages."
                />
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="mailto:contact@ryws.org"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-400",
                    )}>
                    <Mail className="size-4" />
                    Email us
                  </Link>
                  <Link
                    href="#gallery"
                    className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition">
                    View gallery
                  </Link>
                </div>
              </div>
              <ul className="space-y-6 text-sm sm:text-base">
                <li className="border-border/80 bg-background/60 flex gap-4 rounded-2xl border p-5 backdrop-blur-sm">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground mt-1">
                      {contact.location}
                    </p>
                  </div>
                </li>
                <li className="border-border/80 bg-background/60 flex gap-4 rounded-2xl border p-5 backdrop-blur-sm">
                  <Mail className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-muted-foreground hover:text-foreground mt-1 underline-offset-4 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
