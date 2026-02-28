import HomeBanner from "./components/HomeBanner";
import CoBranded from "./components/CoBranded";

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
    </section>
  );
}
