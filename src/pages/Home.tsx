import Banner from "../sections/Banner";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import OpenSource from "../sections/OpenSource";
import TechStack from "../sections/TechStack";
import Certificates from "../sections/Certificates";

export default function Home() {
  return (
    <>
      <Banner />
      <TechStack />
      <Projects />
      <OpenSource />
      <Experience />
      <Certificates />
    </>
  );
}
