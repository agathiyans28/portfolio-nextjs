import Contact from "@/modules/contact/contact";
import Hero from "@/modules/hero";
import Project from "@/modules/projects/project";
import Stacks from "@/modules/stacks/stacks";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Project />
        <Stacks />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}
