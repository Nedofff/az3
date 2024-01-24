import type { Metadata } from "next";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Advantages from "@/components/HomePage/Advantages/Advantages";
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import Feedback from "@/components/HomePage/Feedback/Feedback";
import FirstScreen from "@/components/HomePage/FirstScreen/FirstScreen";
import News from "@/components/HomePage/News/News";
import Services from "@/components/HomePage/Services/Services";
import YandexMap from "@/components/HomePage/YandexMap/YandexMap";
import FeedbackModal from "@/components/Modals/FeedbackModal";
import TestModal from "@/components/Modals/TestModal";
import CircleAnimation from "@/components/HomePage/CircleAnimation/CircleAnimation";
import Preloader from "@/components/Preloader/Preloader";

export const metadata: Metadata = {
  description: 'Аудиторская группа "Аземша и партнеры" предоставляет широкий спектр профессиональных услуг по аудиту, налоговому консультированию, бухгалтерскому учету и финансовому анализу. На сайте вы найдете информацию о нашей команде экспертов, портфолио успешных проектов, а также полезные статьи и новости из мира бизнеса и финансов. Наша миссия - помогать компаниям и предпринимателям добиваться финансовой прозрачности и эффективного управления. С нами ваш бизнес всегда будет на верном пути к успеху.'
};

export default function HomePage() {
  return (
    <main className="overflow-hidden w-full">
      <Preloader />
      <FirstScreen />
      <CircleAnimation />
      <Services />
      <AboutUs />
      <Advantages />
      <News />
      <Feedback />
      <ContactBlock />
      <YandexMap />
      <FeedbackModal />
      <TestModal />
    </main>
  );
}
