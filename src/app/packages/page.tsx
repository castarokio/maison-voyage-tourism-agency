import Image from "next/image";
import Link from "next/link";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { PackageCard } from "@/components/Cards";
import { Footer, Header } from "@/components/SiteChrome";
import { destinations, packages } from "@/data/travel";

const filters = ["Destination", "Budget", "Trip type", "Duration", "Departure date"];

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fff8ec]">
        <section className="brand-gradient relative overflow-hidden px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
          <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" alt="Luxury travel landscape" fill priority sizes="100vw" className="object-cover opacity-38" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-[#0a3a58]/70 to-[#061827]/35" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#6ee7db]">Package listing</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">Browse by destination, then refine the dream.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Une page de recherche premium, volontairement moins chargee que les marketplaces classiques.</p>
          </div>
        </section>

        <section className="sticky top-20 z-30 border-y border-[#cfe5dc] bg-[#fff8ec]/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex min-h-14 flex-1 items-center gap-3 rounded-full bg-white px-5 shadow-sm">
              <Search size={18} className="text-[#067b7b]" />
              <span className="text-sm font-semibold text-[#687587]">Search Dubai, Omra, Sahara, Maldives...</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {filters.map((filter) => (
                <button key={filter} className="shrink-0 rounded-full border border-[#d7d0c1] bg-white px-4 py-3 text-sm font-bold text-[#071323] transition hover:border-[#b89550] hover:text-[#9a7631]">
                  {filter}
                </button>
              ))}
              <button className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0a3a58] text-white">
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="hidden h-fit rounded-[2rem] bg-white p-6 shadow-[0_20px_70px_rgba(8,20,33,.07)] lg:block">
              <div className="flex items-center gap-2 font-bold"><Filter size={18} /> Premium filters</div>
              <div className="mt-6 grid gap-5">
                {filters.map((filter) => (
                  <label key={filter} className="grid gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a96a5]">{filter}</span>
                    <div className="rounded-2xl border border-[#e5ded0] px-4 py-3 text-sm text-[#526273]">Any {filter.toLowerCase()}</div>
                  </label>
                ))}
              </div>
            </aside>
            <div>
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {destinations.slice(0, 3).map((item) => (
                  <Link key={item.name} href="#packages" className="group relative h-44 overflow-hidden rounded-[1.5rem]">
                    <Image src={item.image} alt={item.name} fill sizes="33vw" className="object-cover transition group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071323]/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 font-serif text-2xl text-white">{item.name}</span>
                  </Link>
                ))}
              </div>
              <div id="packages" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {packages.map((item) => <PackageCard key={item.slug} item={item} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
