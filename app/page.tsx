import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Advantages from "@/components/HomePage/Advantages/Advantages";
import FirstScreen from "@/components/HomePage/FirstScreen/FirstScreen";
import Services from "@/components/HomePage/Services/Services";

export default function HomePage() {
  return (
    <main>
      <FirstScreen/>
      <AboutUs/>
      <Services/>
      <Advantages/>
    </main>
  )
}
