"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock3, UploadCloud } from "lucide-react";
import { useState } from "react";
import { bookingServices, ccpPayment, serviceMatches, smartQuestions } from "@/data/booking";

const storageKey = "maison-voyage-booking";

function saveBookingPatch(patch: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const current = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
  window.localStorage.setItem(storageKey, JSON.stringify({ ...current, ...patch }));
}

export function BookingHeroShell({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: React.ReactNode;
}) {
  return (
    <main className="brand-gradient min-h-screen px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#6ee7db]">{eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{copy}</p>
          </div>
          <div className="relative hidden h-80 overflow-hidden rounded-[2.4rem] lg:block">
            <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="Curated journey planning" fill sizes="45vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/72 to-transparent" />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

export function ServiceChoice() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const selectedService = bookingServices.find((service) => service.id === selected);

  return (
    <section className="mt-12 rounded-[2.4rem] bg-white p-4 text-[#071323] shadow-[0_30px_90px_rgba(0,0,0,.22)] md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        {bookingServices.map((service) => (
          <button
            key={service.id}
            onClick={() => {
              setSelected(service.id);
              saveBookingPatch({ service: service.title });
            }}
            className={`group rounded-[1.8rem] border p-6 text-left transition hover:-translate-y-1 ${
              selected === service.id ? "border-[#0aa6a6] bg-[#e4f8f4] shadow-[0_16px_45px_rgba(10,166,166,.18)]" : "border-[#e1dacd] bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#067b7b]">{service.accent}</p>
                <h2 className="mt-4 font-serif text-3xl">{service.title}</h2>
              </div>
              <span className={`grid size-10 shrink-0 place-items-center rounded-full border ${selected === service.id ? "border-[#0a3a58] bg-[#0a3a58] text-white" : "border-[#cfc6b7]"}`}>
                {selected === service.id && <Check size={18} />}
              </span>
            </div>
            <p className="mt-4 leading-7 text-[#596879]">{service.copy}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#697789]">{selectedService ? `${selectedService.title} sera affine par le QCM avant les coordonnees.` : "Choisissez d'abord un service pour lancer le QCM."}</p>
        <button
          disabled={!selectedService}
          onClick={() => {
            if (!selectedService) return;
            saveBookingPatch({ service: selectedService.title });
            router.push("/booking/questionnaire");
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a3a58] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Commencer le QCM <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export function SmartQuestionnaire() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const question = smartQuestions[index];
  const done = index === smartQuestions.length;
  const intent = answers.intent || "luxury";
  const matches = serviceMatches[intent as keyof typeof serviceMatches] || serviceMatches.luxury;

  const progress = Math.round((Math.min(index, smartQuestions.length) / smartQuestions.length) * 100);

  return (
    <section className="mx-auto mt-12 max-w-5xl">
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div className="teal-line h-full rounded-full" animate={{ width: `${progress}%` }} />
      </div>
      <div className="overflow-hidden rounded-[2.4rem] bg-white text-[#071323] shadow-[0_30px_90px_rgba(0,0,0,.22)]">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={question.id} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }} className="p-5 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#067b7b]">Question {index + 1} / {smartQuestions.length}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{question.title}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#647284]">{question.helper}</p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.value }))}
                    className={`rounded-[1.4rem] border p-5 text-left transition hover:-translate-y-1 ${
                      answers[question.id] === option.value ? "border-[#0aa6a6] bg-[#e4f8f4]" : "border-[#e2dbce] bg-[#fbfaf6]"
                    }`}
                  >
                    <span className="font-extrabold">{option.label}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#697789]">{option.hint}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between">
                <button disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))} className="inline-flex items-center gap-2 rounded-full border border-[#d7d0c1] px-5 py-3 font-bold disabled:opacity-35">
                  <ArrowLeft size={18} /> Retour
                </button>
                <button
                  disabled={!answers[question.id]}
                  onClick={() => {
                    const nextAnswers = { ...answers };
                    const nextIntent = nextAnswers.intent || "luxury";
                    const nextMatches = serviceMatches[nextIntent as keyof typeof serviceMatches] || serviceMatches.luxury;
                    if (index + 1 === smartQuestions.length) saveBookingPatch({ answers: nextAnswers, matches: nextMatches });
                    setIndex((value) => value + 1);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a3a58] px-6 py-3 font-bold text-white disabled:opacity-35"
                >
                  Suivant <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="matches" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="p-5 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#067b7b]">Services recommandes</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Voici les services les plus coherents.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {matches.map((match, matchIndex) => (
                  <article key={match} className="rounded-[1.5rem] border border-[#e3dccc] bg-[#fbfaf6] p-5">
                    <span className="grid size-10 place-items-center rounded-full bg-[#f0b84d] font-bold">{matchIndex + 1}</span>
                    <h3 className="mt-5 font-serif text-2xl">{match}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#657486]">Selectionnee selon votre intention, votre niveau d&apos;accompagnement et le point de risque a proteger.</p>
                  </article>
                ))}
              </div>
              <button
                onClick={() => {
                  saveBookingPatch({ matches });
                  router.push("/booking/details");
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a3a58] px-6 py-4 font-bold text-white"
              >
                Continuer avec mes coordonnees <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function TravelerDetailsForm() {
  const router = useRouter();
  const [details, setDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    notes: "",
  });
  const canContinue = details.fullName.trim().length > 2 && details.phone.trim().length > 7 && details.email.includes("@");

  const updateDetails = (key: keyof typeof details, value: string) => {
    const nextDetails = { ...details, [key]: value };
    setDetails(nextDetails);
    saveBookingPatch({ traveler: nextDetails });
  };

  return (
    <section className="mt-12 grid gap-6 rounded-[2.4rem] bg-white p-5 text-[#071323] shadow-[0_30px_90px_rgba(0,0,0,.22)] lg:grid-cols-[1fr_340px] md:p-8">
      <form className="grid gap-5 md:grid-cols-2">
        <InputField label="Nom complet" value={details.fullName} onChange={(value) => updateDetails("fullName", value)} />
        <InputField label="Telephone WhatsApp" value={details.phone} onChange={(value) => updateDetails("phone", value)} />
        <InputField label="Email" value={details.email} onChange={(value) => updateDetails("email", value)} />
        <InputField label="Ville de depart" value={details.city} onChange={(value) => updateDetails("city", value)} />
        <label className="grid gap-2 md:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7d8998]">Notes importantes</span>
          <textarea value={details.notes} onChange={(event) => updateDetails("notes", event.target.value)} className="min-h-32 rounded-2xl border border-[#ded6c8] bg-[#f8f5ee] p-4 outline-none transition focus:border-[#b89550]" placeholder="Passeports, enfants, personnes agees, contrainte hotel, budget maximal..." />
        </label>
      </form>
      <aside className="rounded-[2rem] bg-[#f8f5ee] p-6">
        <h2 className="font-serif text-3xl">Avant paiement</h2>
        <p className="mt-4 leading-7 text-[#5e6d7d]">Vos informations permettent a l&apos;agence de relier la preuve CCP a votre dossier et de vous rappeler apres verification.</p>
        <button
          disabled={!canContinue}
          onClick={() => router.push("/booking/payment")}
          className="sunrise-button mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold text-[#061827] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Aller au paiement CCP <ArrowRight size={18} />
        </button>
        {!canContinue && <p className="mt-3 text-sm text-[#7b8795]">Nom, telephone et email sont requis pour continuer.</p>}
      </aside>
    </section>
  );
}

function InputField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7d8998]">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} className="min-h-14 rounded-2xl border border-[#ded6c8] bg-[#f8f5ee] px-4 outline-none transition focus:border-[#b89550]" placeholder={label} />
    </label>
  );
}

export function PaymentProofForm() {
  const router = useRouter();
  const [fileName, setFileName] = useState("");
  const receipt = "MV-CCP-441970-33";

  return (
    <section className="mt-12 grid gap-6 rounded-[2.4rem] bg-white p-5 text-[#071323] shadow-[0_30px_90px_rgba(0,0,0,.22)] lg:grid-cols-[.82fr_1.18fr] md:p-8">
      <aside className="rounded-[2rem] bg-[#0a3a58] p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6ee7db]">Paiement CCP</p>
        <h2 className="mt-4 font-serif text-4xl">Versement ou virement</h2>
        <div className="mt-6 grid gap-3">
          <PaymentLine label="Numero CCP" value={ccpPayment.number} />
          <PaymentLine label="Cle" value={ccpPayment.key} />
          <PaymentLine label="Beneficiaire" value={ccpPayment.accountName} />
          <PaymentLine label="Reference dossier" value={receipt} />
        </div>
      </aside>
      <div>
        <h2 className="font-serif text-4xl">Ajouter la preuve de paiement</h2>
        <p className="mt-4 leading-7 text-[#647284]">Ajoutez une photo ou un PDF du reçu CCP. Ensuite, l&apos;agence verifiera le paiement avant de confirmer la demande.</p>
        <label className="mt-7 grid min-h-64 cursor-pointer place-items-center rounded-[2rem] border-2 border-dashed border-[#d5cab8] bg-[#fbfaf6] p-6 text-center transition hover:border-[#b89550]">
          <UploadCloud className="text-[#067b7b]" size={42} />
          <span className="mt-4 block font-bold">{fileName || "Choisir une preuve de paiement"}</span>
          <span className="mt-2 block text-sm text-[#718093]">Image ou PDF du versement CCP.</span>
          <input
            type="file"
            className="hidden"
            accept="image/*,.pdf"
            onChange={(event) => {
              const name = event.target.files?.[0]?.name || "";
              setFileName(name);
              saveBookingPatch({ paymentProof: name, receipt });
            }}
          />
        </label>
        <button
          disabled={!fileName}
          onClick={() => router.push("/booking/confirmation")}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0a3a58] px-6 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Envoyer pour verification <ArrowRight size={18} />
        </button>
        {!fileName && <p className="mt-3 text-sm text-[#7b8795]">La preuve de paiement est requise avant l&apos;envoi du dossier.</p>}
      </div>
    </section>
  );
}

function PaymentLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">{label}</p>
      <p className="mt-2 text-xl font-extrabold tracking-wide">{value}</p>
    </div>
  );
}

export function ConfirmationPanel() {
  return (
    <section className="mx-auto mt-12 max-w-4xl rounded-[2.4rem] bg-white p-6 text-center text-[#071323] shadow-[0_30px_90px_rgba(0,0,0,.22)] md:p-12">
      <span className="sunrise-button mx-auto grid size-20 place-items-center rounded-full text-[#061827]"><Clock3 size={34} /></span>
      <h2 className="mt-7 font-serif text-5xl">Demande envoyee pour revue agence.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#647284]">Votre demande est en attente de verification du paiement CCP. Un conseiller Maison Voyage vous contactera apres validation pour confirmer le service, les dates et les prochaines etapes.</p>
      <div className="mt-8 rounded-[1.5rem] bg-[#f8f5ee] p-5 text-left">
        <p className="font-bold">Message de suivi</p>
        <p className="mt-2 leading-7 text-[#5c6b7b]">Merci. Votre demande n&apos;est pas encore confirmee. Elle sera revue par l&apos;agence apres controle de la preuve de paiement.</p>
      </div>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0a3a58] px-6 py-4 font-bold text-white">Retour accueil</Link>
    </section>
  );
}
