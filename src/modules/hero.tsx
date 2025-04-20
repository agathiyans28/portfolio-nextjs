import HeroCard from "./home/heroCard";
import Summary from "./home/summay";

export default function Hero() {
  return (
    <section className=" grid md:grid-cols-2 min-h-screen text-white">
      <Summary />
      <HeroCard />
    </section>
  );
}
