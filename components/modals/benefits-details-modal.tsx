"use client";

import { Modal } from "@/components/ui/modal";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  projetct: Project;
}

interface Style {
  background: string;
}

interface MediaDetail {
  type: string;
  source: string;
}

interface Project {
  title: string;
  description: string;
  imageUrl: string | any;
  style: Style;
  benefits: string[] | any;
  mediaDetail: MediaDetail;
}

export const BenefitsModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  projetct,
}) => {
  return (
    <Modal title="" description="" isOpen={isOpen} onClose={onClose}>
      <div className="pt-6">
        <h3 className="text-2xl font-semibold mb-3">{projetct.title}</h3>
        {projetct.mediaDetail.type === "image" ? (
          <Image
            src={projetct.mediaDetail.source}
            alt={projetct.title}
            width={500}
            height={500}
          />
        ) : (
          <iframe
            width="100%"
            height="200px"
            className="mx-auto bg-[#f0f0f0] rounded-lg"
            src={projetct.mediaDetail.source}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
        <ul className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {projetct.benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-4 h-4">
                <IoIosCheckmarkCircle size={16} color="#22cc63" />
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </Modal>
  );
};
