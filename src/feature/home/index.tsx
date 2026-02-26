import HomeBanner from "./components/HomeBanner";

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
    </section>
  );
}
