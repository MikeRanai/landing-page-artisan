import Hero from "@/sections/Hero";
import APropos from "@/sections/APropos";
import Services from "@/sections/Services";
import Garanties from "@/sections/Garanties";
import Realisations from "@/sections/Realisations";
import Temoignages from "@/sections/Temoignages";
import ZoneIntervention from "@/sections/ZoneIntervention";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <APropos />
      <Services />
      <Garanties />
      <Realisations />
      <Temoignages />
      <ZoneIntervention />
      <FAQ />
      <Contact />
    </>
  );
}
