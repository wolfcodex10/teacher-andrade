"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  style,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group  last:mb-0 col-span-12 lg:col-span-6"
    >
      <section
        style={style}
        className={` pb-20 sm:pb-0  max-w-[42rem] rounded-lg 
           overflow-hidden sm:pr-8 relative sm:h-[20rem] mx-auto  transition   
           `}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%]  flex flex-col h-full ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="w-full flex">
            <button className="rounded bg-background w-fit px-5 py-2 mt-3 shadow-md">
              Saber mais
            </button>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute w-[240px] h-[100px] sm:!h-[90%] object-cover bottom-0 sm:bottom-0 right-0 sm:block sm:-right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        sm:group-hover:scale-[1.04]
        sm:group-hover:-translate-x-3
        sm:group-hover:translate-y-3
        sm:group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
