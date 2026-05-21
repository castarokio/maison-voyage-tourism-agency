import { BookingHeroShell, PaymentProofForm } from "@/components/BookingFlow";
import { Footer, Header } from "@/components/SiteChrome";

export default function PaymentPage() {
  return (
    <>
      <Header />
      <BookingHeroShell
        eyebrow="Etape 4 / Paiement"
        title="Paiement CCP puis preuve a envoyer."
        copy="Payez via CCP, ajoutez la preuve, puis le dossier passe en attente de validation manuelle par l'agence."
      >
        <PaymentProofForm />
      </BookingHeroShell>
      <Footer />
    </>
  );
}
