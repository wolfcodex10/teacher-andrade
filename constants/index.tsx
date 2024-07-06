import { IoShieldCheckmark } from "react-icons/io5";
import { IoMdBookmarks, IoMdChatboxes } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Plataforma Completa",
    icon: <IoShieldCheckmark size={28} color="#fff" />,
    variant: "#22cc63",
    description:
      "Tenha acesso a uma plataforma de estudos moderna e intuitiva, disponível 24/7.",
  },
  {
    title: "Interação Constante",
    icon: <IoMdChatboxes size={28} color="#fff" />,
    variant: "#276bc4",
    description:
      "Nossas aulas são interativas, focadas em conversação e tópicos do dia a dia, garantindo que você pratique e aprenda de forma relevante e prática.",
  },
  {
    title: "Aulas ao Vivo e Gravadas",
    icon: <RiLiveFill size={28} color="#fff" />,
    variant: "#c0405c",
    description:
      "Participe de aulas ao vivo dinâmicas ou assista a gravações no seu próprio ritmo.",
  },
  {
    title: "Material Didático Digital",
    icon: <IoMdBookmarks size={26} color="#fff" />,

    variant: "#d1682b",
    description:
      "Receba todo o material utilizado nas aulas diretamente em formato digital, para facilitar seu estudo.",
  },
  {
    title: "Acompanhamento Personalizado",
    icon: <HiUserGroup size={28} color="#fff" />,

    variant: "#6c36c4",
    description:
      "Monitoramos a performance dos nossos alunos através da nossa plataforma e das aulas ao vivo, dando feedbacks frequentes.",
  },
  {
    title: "Professores Dedicados",
    icon: <FaUserGraduate size={28} color="#fff" />,
    variant: "#b5dd26",
    description:
      "Nossa equipe está comprometida com o seu aprendizado, oferecendo suporte contínuo para superar suas dificuldades de forma leve e sem pressão.",
  },
];
