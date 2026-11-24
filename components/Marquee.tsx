"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { site } from "@/lib/site";

function Row({ items, reverse = false, className }: { items: string[]; reverse?: boolean; className: string }) {
  return (
    <motion.div
      className="flex w-max whitespace-nowrap"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      {items.map((t, i) => (
        <span key={i} className={`font-display flex items-center text-xl font-extrabold uppercase md:text-3xl ${className}`}>
          <span className="px-6">{t}</span>
          <Zap className="h-5 w-5 md:h-7 md:w-7" fill="currentColor" />
        </span>
      ))}
    </motion.div>
  );
}

export default function Marquee() {
  const titles = site.services.map((s) => s.title);
  const items = [...titles, ...titles];

  return (
    <div className="relative h-44 overflow-hidden md:h-52">
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-3 border-y border-white/10 bg-navy-800 py-4">
        <Row items={items} reverse className="text-white/70" />
      </div>
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 -rotate-2 bg-volt py-4 shadow-[0_0_60px_rgba(255,194,14,0.35)]">
        <Row items={items} className="text-navy-900" />
      </div>
    </div>
  );
}
