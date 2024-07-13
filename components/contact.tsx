"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contato"
      ref={ref}
      className="mb-20 sm:mb-28 px-8 w-[min(100%,38rem)] text-center"
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
        once: true,
      }}
    >
      <SectionHeading>Entre em contato</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Entre em contato comigo por email{" "}
        <a className="underline" href="mailto:sunilmaurya71297@gmail.com">
          adndrate_teacher@gmail.com
        </a>{" "}
        ou através do formulário
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          // const { data, error } = await sendEmail(formData);
          // if (error) {
          //   toast.error(error);
          //   return;
          // }
          // toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg my-3 borderBlack dark:bg-[#00000050] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderName"
          type="text"
          required
          maxLength={50}
          placeholder="Digite seu nome..."
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-[#00000050] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Digite seu email..."
        />
        <select className="h-14 mt-3 px-4 rounded-lg borderBlack dark:bg-[#00000050] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none">
          <option disabled selected>
            Qual o nivel do seu inglês?
          </option>
          <option className="bg-background" value="other">
            Básico
          </option>
          <option className="bg-background" value="other">
            Intermediário
          </option>
          <option className="bg-background" value="other">
            Avançado
          </option>
        </select>
        <textarea
          className="h-52 my-3 rounded-lg  resize-none borderBlack p-4 dark:bg-[#00000050] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Escreva sua mensagem..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
