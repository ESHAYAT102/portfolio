import Banner from "../sections/Banner";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";
import Certificates from "../sections/Certificates";

export default function Home() {
  return (
    <>
      <Banner />
      <TechStack />
      <Projects />
      <Experience />
      <Certificates />
    </>
  );
}
