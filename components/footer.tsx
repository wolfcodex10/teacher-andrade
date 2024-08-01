"use client";
import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Footer() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      className="w-full"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: false,
      }}
    >
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 w-full">
        <div className="mx-auto  text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            TEACHER ANDRADE SOUZA
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Junte-se a nós e conquiste a fluência que sempre desejou.
            Inscreva-se agora e comece a tranformar seu inglês hoje mesmo.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a
                href="#quem-sou-eu"
                onClick={() => {
                  setActiveSection("Sobre mim");
                  setTimeOfLastClick(Date.now());
                }}
                className="mr-4 hover:underline md:mr-6 "
              >
                Quem sou eu?
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                onClick={() => {
                  setActiveSection("Benefícios");
                  setTimeOfLastClick(Date.now());
                }}
                className="mr-4 hover:underline md:mr-6"
              >
                Benefícios
              </a>
            </li>
            <li>
              <a
                href="#aulas"
                onClick={() => {
                  setActiveSection("Aulas");
                  setTimeOfLastClick(Date.now());
                }}
                className="mr-4 hover:underline md:mr-6 "
              >
                Aulas
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("Contato");
                  setTimeOfLastClick(Date.now());
                }}
                className="mr-4 hover:underline md:mr-6"
              >
                Entrar em contato
              </button>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 - {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Andrade
            </a>
            . Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </motion.section>
  );
}
