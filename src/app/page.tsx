import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Abordagem from "@/components/sections/Abordagem";
import ModalidadesAtendimento from "@/components/sections/ModalidadesAtendimento";
import Modalidades from "@/components/sections/Modalidades";
import InvestimentoLocal from "@/components/sections/InvestimentoLocal";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Sobre />
        <Abordagem />
        <ModalidadesAtendimento />
        <Modalidades />
        <InvestimentoLocal />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}