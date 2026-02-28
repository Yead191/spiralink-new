import HomeBanner from "./components/HomeBanner";
import CoBranded from "./components/CoBranded";
import ChooseExperts from "./components/ChooseExperts";
import ClearResponsibility from "./components/ClearResponsibility";
import DirectCommunication from "./components/DirectCommunication";
import SpiralinkDelivers from "./components/SpiralinkDelivers";

export default function HomePage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/home_bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden"
    >
      <HomeBanner />
      <CoBranded />
      <ChooseExperts />
      <ClearResponsibility />
      <DirectCommunication />
      <SpiralinkDelivers />
    </section>
  );
}
