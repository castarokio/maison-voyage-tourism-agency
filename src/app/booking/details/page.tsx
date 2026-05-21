import { BookingHeroShell, TravelerDetailsForm } from "@/components/BookingFlow";
import { Footer, Header } from "@/components/SiteChrome";

export default function DetailsPage() {
  return (
    <>
      <Header />
      <BookingHeroShell
        eyebrow="Etape 3 / Coordonnees"
        title="Identifiez le dossier client."
        copy="Nom, telephone, email et notes importantes. L'agence utilisera ces informations pour relier le paiement CCP et reprendre la demande."
      >
        <TravelerDetailsForm />
      </BookingHeroShell>
      <Footer />
    </>
  );
}
