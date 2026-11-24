"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { ease } from "./Reveal";

export default function Footer() {
  const { contact } = site;
  return (
    <footer className="relative overflow-hidden border-t border-fg/10 bg-bg px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-2xl border border-fg/10 bg-white p-2 shadow-xl shadow-black/10 dark:shadow-black/30">
              <Image src="/logo.svg" alt={`${site.name} logo`} width={112} height={112} className="h-28 w-28" />
            </div>
            <p className="mt-5 max-w-xs text-fg/50">{site.tagline}.</p>
            <motion.a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center gap-3 rounded-xl border border-fg/15 bg-fg/5 px-5 py-3 text-sm font-medium hover:border-volt/40"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
              Follow us on Facebook
            </motion.a>
          </div>

          <div>
            <p className="font-display font-bold">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-fg/50">
              {site.services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition hover:text-accent">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-fg/50">
              <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-accent">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a></li>
              <li>{contact.address}</li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
          className="font-display mt-16 select-none text-center text-[17vw] font-black leading-none tracking-tighter text-accent/[0.08] md:text-[13rem]"
        >
          {site.shortName}
        </motion.p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-fg/10 pt-6 text-sm text-fg/40 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#top" className="hover:text-accent">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
