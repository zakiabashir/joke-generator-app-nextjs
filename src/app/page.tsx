

import AboutSection from "@/components/about";
import Contact from "@/components/Contact";
import RandomJoke from "@/components/random-joke";

export default function Home() {
  return (
    <div>
      
      <RandomJoke />
      <AboutSection/>
     <Contact/>
    </div>
  );
}