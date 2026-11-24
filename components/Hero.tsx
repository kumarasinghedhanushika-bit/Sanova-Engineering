"use client";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CircleCheck, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import Magnetic from "./Magnetic";
import CircuitBackground from "./CircuitBackground";
import Bolt from "./Bolt";
import { ease } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / 25);
    my.set((e.clientY - r.top - r.height / 2) / 25);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="blob absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-glow/70 blur-[120px]" />
        <div className="blob blob-2 absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-volt/15 blur-[140px]" />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <CircuitBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.25fr_1fr]"
      >
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-4 py-1.5 text-sm font-medium text-accent dark:text-volt-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
            </span>
            {site.tagline}
          </motion.span>

          <h1 className="font-display mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {site.headline.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom last:mr-0">
                <motion.span
                  className={`inline-block ${i === site.headline.length - 1 ? "text-volt-gradient" : ""}`}
                  initial={{ y: "110%", rotate: 8 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease }}
            className="mx-auto mt-7 max-w-xl text-lg text-fg/65 lg:mx-0"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Magnetic>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-xl bg-volt px-8 py-4 font-bold text-navy-900 shadow-[0_0_40px_rgba(255,194,14,0.4)]"
              >
                Our services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`https://wa.me/${site.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-fg/20 bg-fg/5 px-8 py-4 font-semibold backdrop-blur transition hover:border-volt/50 hover:bg-fg/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start"
          >
            {site.sectors.map((s) => (
              <span key={s.title} className="inline-flex items-center gap-1.5 text-sm text-fg/60">
                <CircleCheck className="h-4 w-4 text-accent" />
                {s.title}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ x: sx, y: sy }} className="relative mx-auto w-full max-w-[440px]">
          <Bolt />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-fg/30 pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-volt"
          />
        </div>
      </motion.div>
    </section>
  );
}
