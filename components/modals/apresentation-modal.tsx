"use client";

import { Modal } from "@/components/ui/modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApresentationModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal title="" description="" isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 w-flex h-[315px] ">
        <iframe
          width="100%"
          height="100%"
          className="mx-auto"
          src="https://www.youtube.com/embed/qvA47oyt-sE?si=Oa1AKMysXUpOJGh7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};
