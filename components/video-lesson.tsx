"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

export default function Videos() {
  return (
    <section className="scroll-mt-28 mb-28 w-full">
      <SectionHeading>Veja como funciona nossas aulas</SectionHeading>
      <div className=" sm:max-w-[80rem] mx-auto w-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          navigation
          className="mySwiper h-[330px] items-center"
        >
          <SwiperSlide className="w-full flex items-center justify-center">
            <iframe
              width="80%"
              className="mx-auto"
              height="300px"
              src="https://www.youtube.com/embed/YdSXMMNJ8xs?si=Oa1AKMysXUpOJGh7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <iframe
              width="80%"
              className="mx-auto"
              height="300px"
              src="https://www.youtube.com/embed/1m0hqj92ff4?si=Oa1AKMysXUpOJGh7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="w-full flex items-center justify-center">
            <iframe
              width="80%"
              className="mx-auto"
              height="300px"
              src="https://www.youtube.com/embed/d21EWSFty6M?si=Oa1AKMysXUpOJGh7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center mt-5">
        <Link
          href={
            "https://student.flexge.com/v2/placement-register?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55IjoiNjNiNGRjNjBiYWUyMDA0NGU3YTJlMmZkIiwicm9sZSI6IlNUVURFTlRfUExBQ0VNRU5UX1JFR0lTVEVSIiwiaWF0IjoxNjczMDUyMDU2LCJleHAiOjE4MzA4NDAwNTYsImlzcyI6ImZsZXhnZS1hcGkiLCJzdWIiOiJwbGFjZW1lbnQtdGVzdC1yZWdpc3RlciJ9.fH9FW3-9KIKto0y4NEEtRZx3mdr5fj_5bnBhOu5rUsQ"
          }
          target="_blank"
          className="btn-donate"
        >
          QUERO TESTAR MEU INGLÊS
        </Link>
      </div>
    </section>
  );
}
