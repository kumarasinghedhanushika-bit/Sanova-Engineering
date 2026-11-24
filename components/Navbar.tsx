"use client";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { site } from "@/lib/site";
import LogoMark from "./LogoMark";
import { ease } from "./Reveal";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Why us", "#why"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
    setShowFab(v > 600);
  });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-volt shadow-[0_0_12px_#ffc20e]"
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "border border-fg/10 bg-surface/70 shadow-2xl shadow-black/10 dark:shadow-black/40 backdrop-blur-xl" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <LogoMark />
            <span className="leading-none">
              <span className="font-display block text-lg font-extrabold tracking-tight">{site.shortName}</span>
              <span className="mt-1 block text-[0.6rem] font-bold tracking-[0.35em] text-accent">ENGINEERING</span>
            </span>
          </a>

          <ul className="hidden gap-1 lg:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="group relative px-4 py-2 text-sm font-medium text-fg/70 transition hover:text-fg">
                  {label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-volt transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
          <ThemeToggle className="relative z-50" />
          <a
            href="#contact"
            className="hidden rounded-xl bg-volt px-5 py-2.5 text-sm font-bold text-navy-900 shadow-[0_0_24px_rgba(255,194,14,0.35)] transition hover:scale-105 lg:inline-flex"
          >
            Get a quote
          </a>
          <button onClick={() => setOpen(!open)} className="relative z-50 lg:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-bg lg:hidden"
          >
            {links.map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, ease }}
                className="font-display text-4xl font-extrabold hover:text-accent"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFab && (
          <motion.a
            href={`https://wa.me/${site.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
            <MessageCircle className="relative h-6 w-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
