"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site, type Service } from "@/lib/site";
import { Reveal, ease } from "./Reveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);
  const spotlight = useMotionTemplate`radial-gradient(350px circle at ${mx}px ${my}px, rgba(255,194,14,0.14), transparent 65%)`;
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="group relative overflow-hidden rounded-3xl border border-fg/10 bg-surface/60 p-8 transition-colors hover:border-volt/40"
    >
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-volt text-navy-900 shadow-[0_0_30px_rgba(255,194,14,0.35)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <span className="font-display text-sm font-extrabold text-fg/20">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-display relative mt-6 text-2xl font-bold">{service.title}</h3>
      <p className="relative mt-3 leading-relaxed text-fg/60">{service.description}</p>
      <a href="#contact" className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Get a quote
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
      <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-volt shadow-[0_0_12px_#ffc20e] transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-glow/40 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
              Complete electrical <br className="hidden md:block" />
              <span className="text-volt-gradient">solutions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-fg/60">
              One team for everything electrical — from the first cable to the final safety test.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
