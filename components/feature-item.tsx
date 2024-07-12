"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

type FeatureItem = {
  title: string;
  icon: any;
  description: string;
  variant: string;
};

export const FeatureItem = ({
  title,
  icon,
  description,
  variant,
}: FeatureItem) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
        transform: "translateY(-50px)",
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transform: "translateY(0px)",
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex group w-full flex-1 flex-col items-start"
    >
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
    </motion.div>
  );
};
