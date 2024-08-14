"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 px-8 max-w-7xl flex flex-col md:flex-row text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex-1 order-2 md:order-1">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="md:text-left mt-4 text-center text-2xl font-bold !leading-[1.5] sm:text-4xl">
            Olá, eu sou o Teacher Andrade Souza
          </span>
          <span className="mb-5 text-left  font-regular !leading-[1.5]">
            Olá! Eu sou Andrade Souza, um professor de inglês apaixonado por
            ajudar alunos a alcançar seus objetivos de fluência na língua. Com
            12 anos de experiência no ensino de inglês para falantes de diversas
            línguas, eu ofereço aulas personalizadas que atendem às necessidades
            específicas de cada aluno.
          </span>
          <span className="mb-10 text-left  font-regular !leading-[1.5]">
            Aqui no meu site, você encontrará recursos valiosos, dicas de
            aprendizado e informações sobre como minhas aulas podem ajudá-lo a
            melhorar suas habilidades no inglês.
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-start gap-6 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="https://api.whatsapp.com/send/?phone=5511948637739&text=Ol%C3%A1%2C%20encontrei%20seu%20site%20e%20estou%20muito%20interessado%20em%20aprender%20ingl%C3%AAs.%20Como%20posso%20come%C3%A7ar%3F&type=phone_number&app_absent=0"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            target="_blank"
            onClick={() => {
              setActiveSection("Contato");
              setTimeOfLastClick(Date.now());
            }}
          >
            Entre em contato
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <div className="flex gap-3 items-center">
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.instagram.com/andrade_teacher/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.facebook.com/andrade.souza.1447"
              target="_blank"
            >
              <FaFacebook />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.youtube.com/@englishbyteacherandrade"
              target="_blank"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex order-1 md:order-2 flex-1 items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/file.enc"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-[330px] w-[330px] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-[-10px] text-7xl shadow-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <img src="/eua.svg" alt="Andrade Souza" className="w-28 h-28" />
          </motion.span>
        </div>
      </div>
    </section>
  );
}
