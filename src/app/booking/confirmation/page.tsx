import { BookingHeroShell, ConfirmationPanel } from "@/components/BookingFlow";
import { Footer, Header } from "@/components/SiteChrome";

export default function ConfirmationPage() {
  return (
    <>
      <Header />
      <BookingHeroShell
        eyebrow="Confirmation"
        title="La demande attend la revue agence."
        copy="Cette etape evite les confirmations automatiques tant que la preuve de paiement et le dossier ne sont pas verifies."
      >
        <ConfirmationPanel />
      </BookingHeroShell>
      <Footer />
    </>
  );
}
