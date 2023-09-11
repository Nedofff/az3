import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Advantages from "@/components/HomePage/Advantages/Advantages";
import Feedback from "@/components/HomePage/Feedback/Feedback";
import FirstScreen from "@/components/HomePage/FirstScreen/FirstScreen";
import News from "@/components/HomePage/News/News";
import Services from "@/components/HomePage/Services/Services";

export default function HomePage() {
  return (
    <main>
      <FirstScreen/>
      <AboutUs/>
      <Services/>
      <Advantages/>
      <News/>
      <Feedback/>
    </main>
  )
}
