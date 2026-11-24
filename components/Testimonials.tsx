"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export default function Testimonials() {
  if (site.testimonials.length === 0) return null;
  const items = [...site.testimonials, ...site.testimonials];

  return (
    <section className="overflow-hidden py-24">
      <Reveal className="mx-auto mb-12 max-w-6xl px-6">
        <p className="eyebrow">Client feedback</p>
        <h2 className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
          What our <span className="text-volt-gradient">clients</span> say
        </h2>
      </Reveal>
      <motion.div
        className="flex w-max gap-6 px-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {items.map((t, i) => (
          <figure key={i} className="w-[340px] shrink-0 rounded-3xl border border-fg/10 bg-surface/60 p-7">
            <span className="font-display text-5xl leading-none text-accent">“</span>
            <blockquote className="mt-2 text-fg/80">{t.text}</blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-fg/50">— {t.name}</figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
