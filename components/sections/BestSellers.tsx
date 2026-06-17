"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

import "swiper/css";
import "swiper/css/free-mode";

export default function BestSellers() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="best-sellers" className="overflow-hidden bg-beige py-section">
      <div className="container-luxe mb-12 flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Most Coveted"
          title="The Best Sellers"
          description="The pieces our patrons return to, season after season."
        />
        <div className="hidden gap-3 md:flex">
          <button
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-cream"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="pl-6 md:pl-12 xl:pl-20">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          modules={[Autoplay, FreeMode]}
          freeMode
          grabCursor
          spaceBetween={20}
          slidesPerView={1.25}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.25 },
            1024: { slidesPerView: 3.25 },
            1440: { slidesPerView: 4.25 },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
