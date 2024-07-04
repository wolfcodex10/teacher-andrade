"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { IoPlayCircleOutline, IoPlayCircleSharp } from "react-icons/io5";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 md:max-w-[80rem] flex-col md:flex-row flex items-center gap-20 text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div>
        <Image
          src="/about-me.png"
          alt="Andrade Souza"
          className=" w-full md:w-[900px] h-[400px] md:h-[700px] object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="md:max-w-[50%] px-8 w-full">
        <SectionHeading>Quem sou eu?</SectionHeading>
        <p className="mb-3">
          Olá! Eu sou o Teacher Andrade Souza, tenho 41 anos. Sou formado em
          Letras - Inglês e Português, com certificação internacional CELTA. Sou
          casado e pai de 2 filhos e, por alguns anos da minha vida, também fui
          músico profissional.
        </p>

        <p className="mb-3">
          Bem, minha jornada no aprendizado de inglês começou em 2012 e, desde
          então, me apaixonei pelo idioma. Essa paixão é algo que levo para
          dentro das minhas aulas.
        </p>
        <p className="mb-6">
          No meu curso, procuro transmitir esse entusiasmo aos meus alunos,
          guiando-os rumo à fluência com métodos envolventes e eficazes. Sou
          apaixonado pelo que faço e acredito que essa paixão é essencial para o
          sucesso no ensino. Minhas aulas são pensadas para criar um ambiente
          leve e descontraído, onde cada aluno se sinta à vontade e relaxado,
          favorecendo assim a aprendizagem.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-lg dark:shadow-2xl cursor-pointer group rounded-xl dark:shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl dark:bg-gray-950/50 ring-1 bg-white text-gray-700 dark:text-white dark:ring-white/10 ">
              <span>Entre em contato</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
          <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-lg dark:shadow-2xl cursor-pointer group rounded-xl dark:shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
            <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl dark:bg-gray-950/50 ring-1 bg-white text-gray-700 dark:text-white dark:ring-white/10 ">
              <span>Apresentação</span>
              <IoPlayCircleOutline size={20} />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
        {/* <p className="mb-3">
          Para mim, cada aluno é único e especial. Não vejo os alunos apenas
          como números, mas como indivíduos em busca de conhecimento e
          crescimento pessoal. Estou aqui para ser a ponte que os levará a
          atingir seus objetivos.
        </p> */}
      </div>
    </motion.section>
  );
}
