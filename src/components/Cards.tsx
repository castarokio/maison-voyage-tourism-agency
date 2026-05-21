"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Star } from "lucide-react";

type Package = {
  slug: string;
  destination: string;
  title: string;
  duration: string;
  price: string;
  rating: string;
  image: string;
  highlights: string[];
};

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#067b7b]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-[#071323] md:text-6xl">{title}</h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4f5f70]">{copy}</p>}
    </div>
  );
}

export function PackageCard({ item }: { item: Package }) {
  return (
    <Link href={`/packages/${item.slug === "sahara-luxe" ? item.slug : "sahara-luxe"}`} className="group block overflow-hidden rounded-[2rem] border border-[#d8eadf] bg-white shadow-[0_24px_70px_rgba(8,20,33,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(8,68,78,.18)]">
      <div className="relative aspect-[1.22] overflow-hidden">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071323]/72 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1.5 text-xs font-bold text-[#071323] backdrop-blur">{item.destination}</div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
          <span className="flex items-center gap-2 text-sm"><Clock3 size={16} /> {item.duration}</span>
          <span className="flex items-center gap-1 rounded-full bg-[#f0b84d] px-3 py-1 text-sm font-bold text-[#061827]"><Star size={14} fill="currentColor" /> {item.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl leading-tight text-[#071323]">{item.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-[#e5f8f4] px-3 py-1 text-xs font-semibold text-[#067b7b]">{highlight}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-bold text-[#071323]">{item.price}</span>
          <span className="grid size-11 place-items-center rounded-full bg-[#0a3a58] text-white transition group-hover:bg-[#f26f4f]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
