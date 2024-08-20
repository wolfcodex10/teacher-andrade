"use client";
import { FEATURES } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { FeatureItem } from "./feature-item";

const Features = () => {
  const { ref } = useSectionInView("Benefícios");

  return (
    <motion.section
      ref={ref}
      id="beneficios"
      className="mb-28 md:max-w-[80rem] flex-col md:flex-row flex items-center gap-20 text-left leading-8 sm:mb-40 scroll-mt-28"
    >
      <div className="max-container px-8 padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/sobre-beneficios.png"
            alt="phone"
            width={440}
            height={1000}
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col lg:w-[60%]">
          <SectionHeading>
            Transforme seu inglês com nosso curso online!{" "}
          </SectionHeading>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                variant={feature.variant}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
