import { BookingHeroShell, SmartQuestionnaire } from "@/components/BookingFlow";
import { Footer, Header } from "@/components/SiteChrome";

export default function QuestionnairePage() {
  return (
    <>
      <Header />
      <BookingHeroShell
        eyebrow="Etape 2 / QCM intelligent"
        title="Quelques questions utiles, pas un formulaire fatigue."
        copy="Chaque reponse deplace la recommandation. Le but est de comprendre l'intention, les risques et le style de voyage avant de montrer les services matches."
      >
        <SmartQuestionnaire />
      </BookingHeroShell>
      <Footer />
    </>
  );
}
