"use client";
import { FEATURES } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";

const Features = () => {
  const { ref } = useSectionInView("Benefícios");

  return (
    <motion.section
      ref={ref}
      id="features"
      className="mb-28 md:max-w-[80rem] flex-col md:flex-row flex items-center gap-20 text-left leading-8 sm:mb-40 scroll-mt-28"
    >
      <div className="max-container px-8 padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/about-me.png"
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

type FeatureItem = {
  title: string;
  icon: any;
  description: string;
  variant: string;
};

const FeatureItem = ({ title, icon, description, variant }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div
        className={`rounded-full  p-3 lg:p-7 `}
        style={{
          backgroundColor: variant,
          boxShadow: `0px 10px 30px ${variant}`,
        }}
      >
        {icon}
      </div>
      <h2 className="font-bold text-lg mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
