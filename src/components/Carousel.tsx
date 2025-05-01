// src/components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { projectsData } from "@/data/projects";

export default function Carousel() {
  return (
    <section id="carousel" className="py-20 bg-background-500/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary-500 text-center mb-8">
          Project Highlights
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.2}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {projectsData.map((proj) => (
            <SwiperSlide key={proj.id} className="flex justify-center">
              <div className="w-64 h-full p-6 rounded-2xl flex flex-col bg-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">
                  {proj.title}
                </h3>
                {proj.period && (
                  <p className="text-sm text-gray-300 mb-2">{proj.period}</p>
                )}
                <p className="text-gray-200 flex-grow text-sm">
                  {proj.details}
                </p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-accent-500 font-medium hover:underline"
                  >
                    View project →
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
