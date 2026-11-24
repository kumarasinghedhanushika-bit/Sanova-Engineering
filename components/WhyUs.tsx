"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal, ease } from "./Reveal";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyUs() {
  return (
    <section id="why" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
              Built on skill.
              <br />
              Driven by <span className="text-volt-gradient">safety.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-fg/10 bg-surface/60 p-6">
                  <p className="font-display text-4xl font-extrabold text-accent md:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-fg/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="space-y-4">
          {site.reasons.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="flex gap-5 rounded-3xl border border-fg/10 bg-gradient-to-br from-surface-2/50 to-transparent p-7 transition-colors hover:border-volt/30"
            >
              <span className="font-display pt-1 text-sm font-bold text-fg/25">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display flex items-center gap-2 text-xl font-bold">
                  <Check className="h-5 w-5 text-accent" />
                  {r.title}
                </h3>
                <p className="mt-2 text-fg/60">{r.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
