import {
  Zap, Cable, CircuitBoard, Sun, ShieldCheck, Wrench,
  House, Building2, Factory, type LucideIcon,
} from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };
export type Sector = { title: string; text: string; icon: LucideIcon };

export const site = {
  name: "Sanova Engineering",
  shortName: "SANOVA",
  tagline: "Electrical engineering you can trust",
  // Hero headline, one word per item. The last word gets the glowing gradient.
  headline: ["Engineering", "power", "you", "can", "trust."],
  description:
    "From new installations to panel boards and solar systems, Sanova Engineering delivers safe, efficient and reliable electrical solutions for homes, businesses and industry.",
  heroBadges: ["Safety first", "Quality workmanship"],

  about:
    "Sanova Engineering is built on one simple belief: electrical work should be done right the first time. Our team combines technical skill, careful planning and strict safety standards to deliver installations that keep your home, business and facility running reliably for years to come.",

  sectors: [
    { title: "Residential", text: "Homes, apartments and villas — new wiring, upgrades and repairs.", icon: House },
    { title: "Commercial", text: "Offices, shops, hotels and restaurants that can't afford downtime.", icon: Building2 },
    { title: "Industrial", text: "Factories and plants that need heavy-duty power and control systems.", icon: Factory },
  ] as Sector[],

  // ← Edit to match exactly what Sanova offers
  services: [
    { title: "Electrical Installations", description: "Complete electrical installations for new homes, offices and industrial buildings, designed and built to standard.", icon: Zap },
    { title: "Wiring & Rewiring", description: "Safe, neat wiring for new builds and full rewiring for older properties with outdated or faulty systems.", icon: Cable },
    { title: "Panel Boards", description: "Design, supply and installation of distribution boards and control panels for reliable power distribution.", icon: CircuitBoard },
    { title: "Solar Power Systems", description: "Solar PV solutions that cut your electricity bills and keep you powered with clean energy.", icon: Sun },
    { title: "Earthing & Lightning Protection", description: "Proper earthing and lightning protection to keep people, equipment and buildings safe.", icon: ShieldCheck },
    { title: "Maintenance & Repairs", description: "Fault finding, breakdown repairs and preventive maintenance to keep your systems running smoothly.", icon: Wrench },
  ] as Service[],

  process: [
    { title: "Site inspection", text: "We visit, understand your requirements and check existing systems." },
    { title: "Design & quotation", text: "A clear plan and a transparent, itemised quote — no surprises." },
    { title: "Installation", text: "Our team carries out the work neatly, safely and on schedule." },
    { title: "Testing & handover", text: "Every system is tested before handover, with support afterwards." },
  ],

  // ⚠ Replace with Sanova's REAL numbers before going live
  stats: [
    { value: 5, suffix: "+", label: "Years of experience" },
    { value: 200, suffix: "+", label: "Projects completed" },
    { value: 150, suffix: "+", label: "Happy clients" },
    { value: 100, suffix: "%", label: "Safety focus" },
  ],

  reasons: [
    { title: "Skilled team", text: "Trained electricians and engineers who know the job inside out." },
    { title: "Safety first", text: "Every job follows strict safety practices, from planning to handover." },
    { title: "Quality materials", text: "We use reliable, approved brands — never cheap shortcuts." },
    { title: "Transparent pricing", text: "Clear, itemised quotes so you know exactly what you're paying for." },
    { title: "On-time delivery", text: "We respect your schedule and keep you updated throughout." },
    { title: "After-service support", text: "We're a call away when you need us after the job is done." },
  ],

  // Paste REAL reviews from the Facebook page here. The section stays hidden while empty.
  testimonials: [] as { name: string; text: string }[],

  // ⚠ Replace with real contact details
  contact: {
    phone: "+94 74 256 1777",
    whatsapp: "94742561777", // digits only, with country code
    email: "sanovaengineering@gmail.com",
    address: "Your address, Sri Lanka",
    hours: "Mon – Sat · 8:00 AM – 6:00 PM",
  },
  facebook: "https://www.facebook.com/profile.php?id=61596272140148",
};
