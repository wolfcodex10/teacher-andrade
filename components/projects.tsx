"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Planos", 0.5);

  return (
    <section ref={ref} id="planos" className="scroll-mt-28 mb-28 w-full">
      <SectionHeading>Conheça nossos planos</SectionHeading>
      <div className=" grid grid-cols-12 gap-4 sm:max-w-[80rem] mx-auto w-full">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
