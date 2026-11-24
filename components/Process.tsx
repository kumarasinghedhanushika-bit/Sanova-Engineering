"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: { title: string; text: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const lit = useTransform(progress, [start, start + 0.06], [0, 1]);
  const shadow = useTransform(lit, [0, 1], ["0 0 0px rgba(255,194,14,0)", "0 0 40px rgba(255,194,14,0.6)"]);

  return (
    <div className="relative pl-20 lg:pl-0">
      {/* Unlit base uses theme tokens; the volt layer fades in on top (framer can't tween CSS vars). */}
      <motion.div
        style={{ boxShadow: shadow }}
        className="font-display absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-fg/10 bg-surface-2 text-lg font-extrabold text-fg/60 lg:relative"
      >
        {String(index + 1).padStart(2, "0")}
        <motion.span
          style={{ opacity: lit }}
          className="absolute inset-0 flex items-center justify-center bg-volt text-navy-900"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </motion.div>
      <h3 className="font-display text-xl font-bold lg:mt-8">{step.title}</h3>
      <p className="mt-2 text-fg/60">{step.text}</p>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.5"] });

  return (
    <section id="process" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
            From first call to <span className="text-volt-gradient">power on.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-7 right-0 top-7 hidden h-[2px] bg-fg/10 lg:block">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-volt shadow-[0_0_12px_#ffc20e]" />
          </div>
          <div className="absolute bottom-0 left-7 top-0 w-[2px] bg-fg/10 lg:hidden">
            <motion.div style={{ scaleY: scrollYProgress }} className="h-full w-full origin-top bg-volt shadow-[0_0_12px_#ffc20e]" />
          </div>

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {site.process.map((s, i) => (
              <Step key={s.title} step={s} index={i} total={site.process.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
