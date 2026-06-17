"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { instagramImages } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InstagramGallery() {
  return (
    <section className="bg-beige py-section">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <SectionHeading
            align="center"
            eyebrow="@houseofbina"
            title="Follow the House"
            description="Step inside our world — campaigns, ateliers, and the everyday poetry of dressing well."
          />
        </div>

        <div className="columns-2 gap-4 [column-fill:_balance] md:columns-4">
          {instagramImages.map((src, i) => (
            <motion.a
              key={i}
              href="#"
              data-cursor="View"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 block break-inside-avoid overflow-hidden"
              style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : "1 / 1" }}
            >
              <Image
                src={src}
                alt="House of Bina on Instagram"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40">
                <Camera className="h-7 w-7 scale-0 text-cream transition-transform duration-500 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
