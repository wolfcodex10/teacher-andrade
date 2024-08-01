import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lesson1 from "@/public/lesson1.jpeg";
import lesson2 from "@/public/lesson2.jpg";
import lesson3 from "@/public/lesson3.jpg";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mim",
    hash: "#quem-sou-eu",
  },
  {
    name: "Planos",
    hash: "#planos",
  },
  {
    name: "Benefícios",
    hash: "#beneficios",
  },
  {
    name: "Aulas",
    hash: "#aulas",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pacote individual",
    description: "Conheça as vantagens do Pacote individual",
    imageUrl: lesson1,
    style: {
      background:
        "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    },
    benefits: [
      "Plataforma inclusa",
      "Aulas gravadas",
      "Aulas ao vivo individuais 1x por semana (2x por semana a negociar)",
      "Material Didático digital disponibilizado",
      "Certificado de conclusão de cada nível da plataforma",
      "Acompanhamento pedagógico constante",
      "Suporte tira dúvidas por email ou whatsapp, direto com o teacher",
    ],
    mediaDetail: {
      type: "image",
      source: "/lesson1.jpeg",
    },
  },
  {
    title: "Pacote em turma",
    description: "Conheça as vantagens do Pacote em turma",
    imageUrl: lesson2,
    style: {
      background: "linear-gradient(120deg, #e03091 0%, #978106 100%)",
    },
    benefits: [
      "Plataforma inclusa",
      "Aulas gravadas",
      "Aulas ao vivo 1x por semana em turma de até 8 pessoas podendo participar de outras turmas com agendamento prévio",
      "Material Didático digital disponibilizado",
      "Certificado de conclusão de cada nível da plataforma",
      "Acompanhamento pedagógico constante",
      "Suporte tira dúvidas por email ou whatsapp, direto com o teacher",
    ],
    mediaDetail: {
      type: "image",
      source: "/lesson2.jpg",
    },
  },
  {
    title: "Pacote turma fechada",
    description: "Conheça as vantagens do Pacote turma fechada",
    imageUrl: lesson3,
    style: {
      background: "linear-gradient(90deg, #12cc4a 0%, #093c88 100%)",
    },
    benefits: [
      "Plataforma inclusa",
      "Aulas gravadas",
      "Aulas ao vivo individuais 1x por semana (2x por semana a negociar)",
      "Material Didático digital disponibilizado",
      "Certificado de conclusão de cada nível da plataforma",
      "Acompanhamento pedagógico constante",
      "Suporte tira dúvidas por email ou whatsapp, direto com o teacher",
    ],
    mediaDetail: {
      type: "image",
      source: "/lesson3.jpg",
    },
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
