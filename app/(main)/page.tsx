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

export default function HomePage() {
  return (
    <main>
      {/* <Preloader /> */}
      <FirstScreen />
      <CircleAnimation />
      <AboutUs />
      <Services />
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
