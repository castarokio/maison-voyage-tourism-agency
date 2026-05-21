import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Check, Clock3, HelpCircle, Map, Star, X } from "lucide-react";
import { Footer, Header } from "@/components/SiteChrome";
import { packages } from "@/data/travel";

const pkg = packages[0];
const gallery = [
  pkg.image,
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
];

export default function PackageDetailPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fff8ec]">
        <section className="brand-gradient relative min-h-[76vh] overflow-hidden px-4 pb-10 pt-28 text-white sm:px-6 lg:px-8">
          <Image src={pkg.image} alt={pkg.title} fill priority sizes="100vw" className="object-cover opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-[#0a3a58]/48 to-[#061827]/15" />
          <div className="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-end">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#6ee7db]">Package detail</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">{pkg.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/14 px-4 py-2 backdrop-blur">{pkg.destination}</span>
              <span className="rounded-full bg-white/14 px-4 py-2 backdrop-blur">{pkg.duration}</span>
              <span className="rounded-full bg-[#f0b84d] px-4 py-2 font-bold text-[#061827]">★ {pkg.rating}</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
            <div className="grid gap-10">
              <div className="grid gap-3 md:grid-cols-4">
                {gallery.map((image, index) => (
                  <div key={image} className={`relative overflow-hidden rounded-[1.5rem] ${index === 0 ? "md:col-span-2 md:row-span-2 aspect-[1.35]" : "aspect-[1.25]"}`}>
                    <Image src={image} alt={`Gallery ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 35vw" className="object-cover" />
                  </div>
                ))}
              </div>

              <DetailBlock title="Itinerary timeline">
                {["Arrivee et route panoramique vers le camp prive", "Lever de soleil, oasis cachee et dejeuner nomade", "Dunes, atelier culture locale et diner sous les etoiles", "Journee libre avec spa desert ou 4x4 soft adventure", "Retour avec concierge jusqu'a l'aeroport"].map((day, index) => (
                  <div key={day} className="grid grid-cols-[48px_1fr] gap-4">
                    <div className="grid size-12 place-items-center rounded-full bg-[#0a3a58] font-bold text-[#6ee7db]">{index + 1}</div>
                    <div className="border-b border-[#ded6c8] pb-5">
                      <h3 className="font-bold">Jour {index + 1}</h3>
                      <p className="mt-1 text-[#5d6c7d]">{day}</p>
                    </div>
                  </div>
                ))}
              </DetailBlock>

              <DetailBlock title="Hotel information">
                <div className="rounded-[1.7rem] bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-3xl">Private desert camp, suite tente premium</h3>
                  <p className="mt-3 leading-7 text-[#5d6c7d]">Lits king-size, salle d&apos;eau privee, cuisine locale haut de gamme, observation astronomique et service discret.</p>
                </div>
              </DetailBlock>

              <div className="grid gap-5 md:grid-cols-2">
                <DetailBlock title="Included">
                  {["Hotels et camp premium", "Transferts prives", "Guide expert", "Petits-dejeuners et diners"].map((item) => <p key={item} className="flex gap-3 text-[#314153]"><Check className="text-[#b89550]" /> {item}</p>)}
                </DetailBlock>
                <DetailBlock title="Not included">
                  {["Vols internationaux", "Assurance optionnelle", "Depenses personnelles"].map((item) => <p key={item} className="flex gap-3 text-[#314153]"><X className="text-[#9f5f51]" /> {item}</p>)}
                </DetailBlock>
              </div>

              <DetailBlock title="Map section">
                <div className="relative h-80 overflow-hidden rounded-[2rem] bg-[#0a3a58]">
                  <div className="absolute inset-8 rounded-[2rem] border border-[#6ee7db]/45" />
                  <Map className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#6ee7db]" size={72} />
                  <p className="absolute bottom-8 left-8 max-w-sm text-white/70">Route suggeree: aeroport, oasis, dunes privees, village artisan, retour concierge.</p>
                </div>
              </DetailBlock>

              <DetailBlock title="FAQs">
                {["Le voyage est-il adapte aux familles ?", "Peut-on privatiser le camp ?", "Quel niveau de confort faut-il attendre ?"].map((q) => (
                  <details key={q} className="rounded-2xl bg-white p-5">
                    <summary className="flex cursor-pointer list-none items-center gap-3 font-bold"><HelpCircle size={18} className="text-[#b89550]" /> {q}</summary>
                  <p className="mt-3 text-[#657486]">Oui. L&apos;itineraire peut etre ajuste selon le rythme, la saison et le profil des voyageurs.</p>
                  </details>
                ))}
              </DetailBlock>
            </div>

            <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-[0_30px_90px_rgba(8,20,33,.12)] lg:sticky lg:top-28">
              <p className="text-sm text-[#687587]">Starting price</p>
              <p className="mt-1 font-serif text-4xl">{pkg.price}</p>
              <div className="mt-6 grid gap-3">
                {[
                  ["Dates", "15-20 Octobre", CalendarDays],
                  ["Duration", pkg.duration, Clock3],
                  ["Rating", `${pkg.rating} guest score`, Star],
                ].map(([label, value, Icon]) => (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-[#f8f5ee] p-4">
                    <Icon className="text-[#b89550]" size={20} />
                    <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a96a5]">{label as string}</p><p className="font-bold">{value as string}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[#e5ded0] p-4">
                <p className="font-bold">Pricing options</p>
                <div className="mt-3 grid gap-2 text-sm text-[#5d6c7d]">
                  <span>Essential private: 189 000 DA</span>
                  <span>Signature suite: 248 000 DA</span>
                  <span>Fully bespoke: on request</span>
                </div>
              </div>
              <Link href="/booking" className="mt-6 block rounded-full bg-[#0a3a58] px-6 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-[#067b7b]">Demander ce voyage</Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-5 font-serif text-4xl text-[#071323]">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
