import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Layout className="flex flex-col sm:pt-36 pt-28 items-center px-4">
      <Intro />
      <SectionDivider />
      {/* <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </Layout>
  );
}
