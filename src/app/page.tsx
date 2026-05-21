"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin, Search, SlidersHorizontal, Users } from "lucide-react";
import { useState } from "react";
import { PackageCard, Reveal, SectionIntro } from "@/components/Cards";
import { Footer, Header } from "@/components/SiteChrome";
import { destinations, experiences, heroImages, packages, trustItems } from "@/data/travel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Destinations />
        <Experiences />
        <FeaturedPackages />
        <Trust />
        <Religious />
        <Testimonials />
        <CustomTrip />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="noise brand-gradient relative min-h-screen px-4 pb-10 pt-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[.82fr_1.18fr]">
          <div className="bg-[linear-gradient(135deg,rgba(240,184,77,.20),transparent_34rem)]" />
          <div className="relative hidden overflow-hidden lg:block">
            <Image src={heroImages[0]} alt="Luxury resort terrace at sunset" fill priority sizes="60vw" className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061827] via-[#0a3a58]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/72 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#6ee7db] backdrop-blur">Luxury travel marketplace curated by experts</p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">Explore Journeys Worth Remembering</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">Des voyages internationaux, experiences locales, Omra/Hajj et itineraires prives, orchestres avec la precision d&apos;une maison de luxe.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/packages" className="sunrise-button group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold text-[#061827] transition hover:-translate-y-1">
              Voir les packages <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </Link>
            <Link href="/booking" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#6ee7db]/70">
              Creer mon voyage
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative lg:min-h-[610px]">
          <div className="relative aspect-[.85] overflow-hidden rounded-[2.5rem] border border-white/14 shadow-[0_35px_120px_rgba(0,0,0,.36)] lg:ml-auto lg:w-[82%]">
            <Image src={heroImages[1]} alt="Private island luxury travel" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-[#061827]/58 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/60">Signature escape</p>
              <p className="mt-1 font-serif text-3xl">Maldives Private Blue</p>
            </div>
          </div>
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}

function SearchBar() {
  const fields = [
    { icon: MapPin, label: "Destination", value: "Dubai, Omra, Sahara..." },
    { icon: CalendarDays, label: "Dates", value: "Choisir les dates" },
    { icon: Users, label: "Voyageurs", value: "2 adultes" },
    { icon: SlidersHorizontal, label: "Type d'experience", value: "Luxury / Spiritual" },
  ];

  return (
    <div className="glass relative z-10 mx-auto mt-5 grid max-w-5xl gap-2 rounded-[2rem] p-3 text-[#082235] lg:absolute lg:-bottom-10 lg:-left-[85%] lg:mt-0 lg:w-[185%] lg:max-w-none lg:grid-cols-[repeat(4,1fr)_auto]">
      {fields.map((field) => (
        <button key={field.label} className="group flex min-h-20 items-center gap-3 rounded-[1.35rem] bg-white/88 px-4 text-left transition hover:bg-white">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#dff8f4] text-[#067b7b]"><field.icon size={18} /></span>
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#687587]">{field.label}</span>
            <span className="mt-1 block text-sm font-bold">{field.value}</span>
          </span>
        </button>
      ))}
      <button className="sunrise-button flex min-h-16 items-center justify-center gap-2 rounded-[1.35rem] px-6 font-bold text-[#061827] transition lg:min-h-20">
        <Search size={18} /> Rechercher
      </button>
    </div>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionIntro eyebrow="Dream" title="Destinations qui ouvrent l'imaginaire" copy="Six portes d'entree vers des voyages grands formats, selectionnees pour leur force emotionnelle et leur qualite d'accueil." />
      </Reveal>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.04}>
            <article className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] ${index === 0 || index === 3 ? "lg:col-span-2" : ""}`}>
              <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071323]/80 via-[#071323]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h3 className="font-serif text-4xl">{item.name}</h3>
                <p className="mt-2 text-sm text-white/72">{item.tag}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="brand-gradient px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#6ee7db]">Trust</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">Curated experiences, not generic trips</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">Une collection courte, precise, et suffisamment flexible pour devenir personnelle.</p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
        {experiences.map((item) => (
          <Reveal key={item.title}>
            <div className="h-full rounded-[1.7rem] border border-white/14 bg-white/[0.07] p-6 transition hover:-translate-y-2 hover:border-[#6ee7db]/50 hover:bg-white/[0.12]">
              <ExperienceMark title={item.title} />
              <h3 className="mt-8 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ExperienceMark({ title }: { title: string }) {
  const base = "relative block size-[4.25rem] overflow-hidden rounded-full border border-[#ffe2a3]/55 bg-gradient-to-br from-[#f6cc67] via-[#f0b84d] to-[#f26f4f] shadow-[0_16px_35px_rgba(0,0,0,.2)]";

  if (title === "Luxury Escapes") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-1/2 top-3 h-9 w-9 -translate-x-1/2 rotate-45 border border-[#071323]" />
        <span className="absolute left-1/2 top-5 h-px w-10 -translate-x-1/2 bg-[#071323]/70" />
        <span className="absolute bottom-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#071323]" />
      </span>
    );
  }

  if (title === "Spiritual Journeys") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-4 top-4 h-10 w-10 rounded-full border-2 border-[#071323]" />
        <span className="absolute left-7 top-2 h-10 w-10 rounded-full bg-[#d8b46a]" />
        <span className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-[#071323]" />
        <span className="absolute bottom-6 left-1/2 h-px w-7 -translate-x-1/2 bg-[#071323]/60" />
      </span>
    );
  }

  if (title === "Romantic Getaways") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-4 top-5 h-6 w-6 rotate-45 rounded-tl-full rounded-br-full border border-[#071323]" />
        <span className="absolute right-4 top-5 h-6 w-6 -rotate-45 rounded-tr-full rounded-bl-full border border-[#071323]" />
        <span className="absolute bottom-4 left-1/2 h-5 w-px -translate-x-1/2 bg-[#071323]" />
      </span>
    );
  }

  if (title === "Family Adventures") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-[1.55rem] top-3 size-4 rounded-full border border-[#071323]" />
        <span className="absolute left-4 top-8 h-5 w-9 rounded-t-full border border-[#071323]" />
        <span className="absolute right-3 top-8 size-3 rounded-full bg-[#071323]" />
        <span className="absolute bottom-4 left-3 h-px w-11 bg-[#071323]/65" />
      </span>
    );
  }

  return (
    <span className={base} aria-hidden="true">
      <span className="absolute left-2 top-8 h-px w-14 rotate-[-12deg] bg-[#071323]" />
      <span className="absolute left-2 top-9 h-px w-14 rotate-[10deg] bg-[#071323]/60" />
      <span className="absolute right-4 top-4 h-7 w-7 rounded-full border border-[#071323]" />
      <span className="absolute right-[1.35rem] top-[1.35rem] size-2 rounded-full bg-[#071323]" />
    </span>
  );
}

function FeaturedPackages() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionIntro eyebrow="Booking" title="Premium packages, carefully limited" copy="Une selection de 6 voyages pour garder l'experience claire, inspiree et facile a reserver." />
      </Reveal>
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => <PackageCard key={item.slug} item={item} />)}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-6 shadow-[0_28px_90px_rgba(8,20,33,.08)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#b89550]">Pourquoi nous choisir</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#071323] md:text-5xl">La confiance avant la reservation.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-[#f8f5ee] p-5">
                <item.icon className="text-[#b89550]" size={22} />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667487]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Religious() {
  return (
    <section id="religious" className="relative overflow-hidden bg-[linear-gradient(135deg,#fff0d7_0%,#e4f8f4_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#067b7b]">Omra & Hajj</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-[#071323]">Voyager avec calme, clarte et accompagnement.</h2>
            <p className="mt-6 text-lg leading-8 text-[#586779]">Packages religieux avec hotels proches, visa, transferts, encadrement francophone et assistance continue. Le ton reste sobre, digne et rassurant.</p>
            <Link href="/packages/sahara-luxe" className="mt-8 inline-flex rounded-full bg-[#0a3a58] px-6 py-4 font-bold text-white transition hover:-translate-y-1">Voir les programmes spirituels</Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="relative aspect-[1.1] overflow-hidden rounded-[2.3rem] shadow-[0_30px_90px_rgba(8,20,33,.18)]">
            <Image src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1400&auto=format&fit=crop" alt="Sacred travel atmosphere" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071323]/55 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    ["Nadia B.", "Alger", "L'equipe a transforme Dubai en voyage prive, fluide, avec des attentions que je n'aurais jamais trouvees seule."],
    ["Samir K.", "Oran", "Notre Omra etait parfaitement accompagnee. On a senti la maitrise, mais surtout une grande douceur."],
    ["Lina & Yanis", "Paris", "Le Sahara etait cinematographique. Camp superbe, guide brillant, aucun stress logistique."],
  ];
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const next = () => setActive((current) => (current + 1) % reviews.length);
  const previous = () => setActive((current) => (current - 1 + reviews.length) % reviews.length);
  const portraitId = active === 0 ? "1494790108377-be9c29b29330" : active === 1 ? "1500648767791-00dcc994a43e" : "1524504388940-b1c1722653e1";

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionIntro eyebrow="Reviews" title="Des clients qui reviennent avec des histoires" />
      </Reveal>
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_28px_90px_rgba(8,20,33,.09)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_.78fr]">
            <div className="p-8 md:p-12">
              <div className="flex gap-1 text-xl tracking-[0.12em] text-[#f0a84b]">★★★★★</div>
              <motion.p
                key={review[2]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-8 font-serif text-3xl leading-snug text-[#071323] md:text-5xl"
              >
                &quot;{review[2]}&quot;
              </motion.p>
              <div className="mt-10 flex items-center gap-4">
                <Image src={`https://images.unsplash.com/photo-${portraitId}?q=80&w=240&auto=format&fit=crop`} alt={review[0]} width={64} height={64} className="size-16 rounded-full object-cover" />
                <div>
                  <p className="text-lg font-extrabold">{review[0]}</p>
                  <p className="text-[#6b7887]">{review[1]}</p>
                </div>
              </div>
            </div>
            <div className="relative hidden min-h-full overflow-hidden bg-[#071323] lg:block">
              <Image src={active === 0 ? "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop" : active === 1 ? "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=900&auto=format&fit=crop" : "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=900&auto=format&fit=crop"} alt="Review travel memory" fill sizes="35vw" className="object-cover opacity-82" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6ee7db]">Guest story</p>
                <p className="mt-3 font-serif text-3xl text-white">{active + 1} / {reviews.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={previous} aria-label="Previous review" className="grid size-12 place-items-center rounded-full border border-[#d7d0c1] bg-white text-[#071323] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b89550]">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((item, index) => (
              <button key={item[0]} onClick={() => setActive(index)} aria-label={`Show review ${index + 1}`} className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-[#0aa6a6]" : "w-2 bg-[#c9c1b3]"}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next review" className="grid size-12 place-items-center rounded-full border border-[#d7d0c1] bg-white text-[#071323] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b89550]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CustomTrip() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="brand-gradient relative mx-auto overflow-hidden rounded-[2.7rem] p-8 text-white md:p-14 lg:p-20">
        <Image src={heroImages[2]} alt="Curated private journey" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061827] via-[#0a3a58]/82 to-[#0aa6a6]/30" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#6ee7db]">Custom trip</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight">Design your journey with a real travel expert.</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Dites-nous le reve, les contraintes, le rythme et le budget. Nous revenons avec une proposition elegante, claire et ajustable.</p>
          <Link href="/booking" className="sunrise-button mt-8 inline-flex rounded-full px-6 py-4 font-bold text-[#061827] transition hover:-translate-y-1">Commencer la creation</Link>
        </div>
      </div>
    </section>
  );
}
