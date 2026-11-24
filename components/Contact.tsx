"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send, Zap } from "lucide-react";
import { site } from "@/lib/site";
import { ease } from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(site.services[0].title);
  const [message, setMessage] = useState("");
  const { contact } = site;

  const items = [
    { icon: Phone, label: "Call us", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Location", value: contact.address },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi ${site.name}! I'm ${name}.\nService: ${service}\n${message}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const cardClass =
    "flex h-full items-start gap-3 rounded-2xl border border-fg/10 bg-fg/5 p-4 transition hover:border-volt/40 hover:bg-fg/10";

  return (
    <section id="contact" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-volt/20 bg-gradient-to-br from-surface-2 via-surface to-bg p-8 md:p-16"
      >
        <div className="blob pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-volt/20 blur-[100px]" />
        <Zap className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rotate-12 text-accent/10" fill="currentColor" />

        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="font-display mt-4 text-4xl font-extrabold md:text-6xl">
              Ready to power up your <span className="text-volt-gradient">project?</span>
            </h2>
            <p className="mt-6 max-w-md text-fg/60">
              Tell us what you need — a new installation, an upgrade or a repair — and we’ll get back to you with a clear quote.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {items.map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <>
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-fg/40">{label}</p>
                      <p className="mt-1 text-sm font-medium">{value}</p>
                    </div>
                  </>
                );
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease }}
                  >
                    {href ? (
                      <a href={href} className={cardClass}>{inner}</a>
                    ) : (
                      <div className={cardClass}>{inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={send}
            className="flex flex-col gap-4 rounded-3xl border border-fg/10 bg-bg/50 p-6 backdrop-blur-xl md:p-8"
          >
            <label className="text-sm text-fg/70">
              Your name
              <input required value={name} onChange={(e) => setName(e.target.value)} className="field" placeholder="Your name" />
            </label>
            <label className="text-sm text-fg/70">
              Service needed
              <select value={service} onChange={(e) => setService(e.target.value)} className="field">
                {site.services.map((s) => (
                  <option key={s.title} className="bg-surface">{s.title}</option>
                ))}
                <option className="bg-surface">Other</option>
              </select>
            </label>
            <label className="text-sm text-fg/70">
              Project details
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="field resize-none"
                placeholder="Tell us about your site, timeline and requirements…"
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-volt px-6 py-4 font-bold text-navy-900 shadow-[0_0_30px_rgba(255,194,14,0.35)]"
            >
              Send on WhatsApp <Send className="h-4 w-4" />
            </motion.button>
            <p className="text-center text-xs text-fg/40">Opens WhatsApp with your message ready to send.</p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
