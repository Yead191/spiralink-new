import HomeBanner from "./components/HomeBanner";
import CoBranded from "./components/CoBranded";
import ChooseExperts from "./components/ChooseExperts";

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
    </section>
  );
}
