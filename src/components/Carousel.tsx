"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { projectsData } from "@/data/projects";

export default function Carousel() {
  return (
    <section id="carousel" className="py-20 px-6 bg-background-500/5">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-8">
        Projects Highlights
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectsData.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div className="bg-background-500/20 p-6 rounded-xl shadow-md h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">
                {proj.title}
              </h3>
              {proj.period && (
                <p className="text-white/70 mb-3 text-sm">{proj.period}</p>
              )}
              <p className="text-white/80 text-sm flex-grow">{proj.details}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-accent-500 hover:underline"
                >
                  View code
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
