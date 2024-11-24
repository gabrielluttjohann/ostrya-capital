import About from "@/components/sections/About/About";
import Assistance from "@/components/sections/Assistance/Assistance";
import Contact from "@/components/sections/ContactForm/ContactForm";
import Credit from "@/components/sections/Credit/Credit";
import CTA from "@/components/sections/CTA/CTA";
import Finance from "@/components/sections/Finance/Finance";
import Hero from "@/components/sections/Hero/Hero";
import Team from "@/components/sections/Partners/Team";
import Resources from "@/components/sections/Resources/Resources";
import Section from "@/components/sections/Section/Section";

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Assistance />
    <CTA />
    <Resources />
    <Section />
    <Credit />
    <Finance />
    <Team />
    <Contact />
  </>
);

export default Home;
