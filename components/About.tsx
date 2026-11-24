"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = site.about.split(" ");

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="eyebrow mb-8">About {site.name}</p>
      </Reveal>
      <p ref={ref} className="font-display text-3xl font-bold leading-tight md:text-5xl">
        {words.map((w, i) => {
          const start = i / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
              {w}
            </Word>
          );
        })}
      </p>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {site.sectors.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="group h-full rounded-3xl border border-fg/10 bg-gradient-to-br from-surface-2/60 to-surface/40 p-7 transition hover:border-volt/40">
                <Icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-display mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-fg/60">{s.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
