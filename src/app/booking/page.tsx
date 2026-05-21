import { BookingHeroShell, ServiceChoice } from "@/components/BookingFlow";
import { Footer, Header } from "@/components/SiteChrome";

export default function BookingPage() {
  return (
    <>
      <Header />
      <BookingHeroShell
        eyebrow="Etape 1 / Service"
        title="Choisissez le service avant de parler prix."
        copy="Choisissez le type d'accompagnement. Ensuite, un QCM intelligent affine la demande et propose les services les plus coherents."
      >
        <ServiceChoice />
      </BookingHeroShell>
      <Footer />
    </>
  );
}
