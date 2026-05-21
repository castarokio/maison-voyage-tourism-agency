"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Packages", href: "/packages" },
  { label: "Omra & Hajj", href: "/#religious" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#061827]/88 shadow-[0_20px_60px_rgba(0,0,0,.18)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 text-white">
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[#f0b84d]/55 bg-[#061827]/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,.08)] backdrop-blur">
            <span className="absolute inset-x-1 bottom-1 h-4 rounded-full bg-[#0aa6a6]/55" />
            <span className="absolute h-px w-9 rotate-45 bg-[#f0b84d]/70" />
            <span className="absolute h-px w-9 -rotate-45 bg-[#f26f4f]/55" />
            <span className="relative font-serif text-[18px] font-semibold tracking-[-0.08em] text-[#ffe2a3]">MV</span>
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[1.35rem] tracking-[0.02em]">Maison Voyage</span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.38em] text-[#6ee7db]">Travel atelier</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-white/78 transition hover:text-[#e4c783]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Search" className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-[#6ee7db]/70 hover:text-[#6ee7db]">
            <Search size={18} />
          </button>
          <Link href="/booking" className="sunrise-button rounded-full px-5 py-3 text-sm font-bold text-[#061827] transition hover:-translate-y-0.5">
            Creer mon voyage
          </Link>
        </div>

        <button className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button aria-label="Close menu backdrop" className="fixed inset-0 z-50 bg-[#061827]/70 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside className="brand-gradient fixed bottom-0 right-0 top-0 z-50 w-[88vw] max-w-sm p-5 text-white shadow-2xl lg:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.28 }}>
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif text-2xl">Maison Voyage</span>
                <button className="grid size-11 place-items-center rounded-full bg-white/10" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="grid gap-3">
                {nav.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="group rounded-[1.25rem] border border-white/14 bg-white/[0.07] px-5 py-5 transition hover:border-[#6ee7db]/55 hover:bg-white/[0.11]">
                    <span className="block text-[1.15rem] font-extrabold leading-none tracking-normal text-white">{item.label}</span>
                    <span className="teal-line mt-2 block h-0.5 w-10 transition group-hover:w-16" />
                  </Link>
                ))}
              </div>
              <Link href="/booking" className="sunrise-button mt-6 block rounded-full px-5 py-4 text-center font-bold text-[#061827]">
                Creer mon voyage
              </Link>
              <p className="mt-8 text-sm leading-6 text-white/55">Interface francaise, architecture prete pour bascule arabe RTL.</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="brand-gradient px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_.8fr_.8fr_.8fr]">
        <div>
          <div className="font-serif text-3xl">Maison Voyage</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">Luxury travel marketplace curated by experts. Voyages internationaux, tourisme local, Omra/Hajj et itineraires sur mesure.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6ee7db]">
            <span>CCP</span>
            <span>Preuve requise</span>
            <span>Validation agence</span>
          </div>
        </div>
        <FooterColumn title="Destinations" items={["Dubai", "Istanbul", "Maldives", "Sahara", "Bali"]} />
        <FooterColumn title="Contact" items={["+213 555 018 777", "hello@maisonvoyage.dz", "Hydra, Alger"]} />
        <FooterColumn title="Langues" items={["Francais", "العربية", "English", "Instagram / Facebook"]} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/38">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-white/70">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
