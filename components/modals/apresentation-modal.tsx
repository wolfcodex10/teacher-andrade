"use client";

import { Modal } from "@/components/ui/modal";
import JolPlayer from "jol-player";

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
      <div className="pt-6 w-flex h-[200px] bg-red-200">
        <JolPlayer
          className=" h-[200px] !w-full"
          option={{
            videoSrc: "/apresentation.mp4",
            autoPlay: true,
            height: 200,
            language: "en",
            isShowMultiple: false,
            isShowPauseButton: true,
            isShowWebFullScreen: true,
          }}
        />
      </div>
    </Modal>
  );
};
