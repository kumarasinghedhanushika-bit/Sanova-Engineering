"use client";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const BOLT = "M62 4 L14 68 H46 L34 116 L86 48 H54 L72 4 Z";
const sparks: [number, number][] = [
  [-130, -60], [120, -90], [-90, 110], [140, 70], [10, -150], [-160, 20],
];

export default function Bolt() {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-[18%] rounded-full bg-volt/25 blur-3xl" />

      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-volt/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt shadow-[0_0_20px_#ffc20e]" />
      </motion.div>

      <motion.div
        className="absolute inset-[12%] rounded-full border border-fg/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-fg shadow-[0_0_12px_var(--fg)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[24%] rounded-full border border-volt/25 bg-surface/40 backdrop-blur-sm"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 100 120"
        className="glow flicker absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
        aria-hidden
      >
        <motion.path
          d={BOLT}
          fill="none"
          stroke="#ffc20e"
          strokeWidth={2.5}
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d={BOLT}
          fill="#ffc20e"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </svg>

      {sparks.map(([dx, dy], i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_10px_#ffc20e]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, dx], y: [0, dy], scale: [1, 0.3] }}
          transition={{ duration: 2.2, delay: 2.2 + i * 0.35, repeat: Infinity, repeatDelay: 1.5, ease: "easeOut" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { delay: 2.4, duration: 0.6 },
          x: { delay: 2.4, duration: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -left-2 top-[14%] flex items-center gap-2 rounded-2xl border border-fg/10 bg-surface/80 px-4 py-3 text-sm font-semibold shadow-xl backdrop-blur-xl"
      >
        <ShieldCheck className="h-5 w-5 text-accent" />
        {site.heroBadges[0]}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.7, duration: 0.6 },
          x: { delay: 2.7, duration: 0.6 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-2 bottom-[14%] flex items-center gap-2 rounded-2xl border border-fg/10 bg-surface/80 px-4 py-3 text-sm font-semibold shadow-xl backdrop-blur-xl"
      >
        <BadgeCheck className="h-5 w-5 text-accent" />
        {site.heroBadges[1]}
      </motion.div>
    </div>
  );
}
