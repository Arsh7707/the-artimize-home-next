import Announce from "@/components/Announce";
import Nav from "@/components/Nav";
import TopCats from "@/components/TopCats";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Marquee from "@/components/Marquee";
import BestSellers from "@/components/BestSellers";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Proof from "@/components/Proof";
import InstaFeed from "@/components/InstaFeed";
import Offer from "@/components/Offer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import ExitModal from "@/components/ExitModal";

export default function Home() {
  return (
    <>
      <Announce />
      <Nav />
      <TopCats />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Featured />
        <BestSellers />
        <Marquee />
        <Story />
        <Values />
        <Proof />
        <InstaFeed />
        <Offer />
        <Faq />
      </main>
      <Footer />
      <MobileCta />
      <ExitModal />
    </>
  );
}
