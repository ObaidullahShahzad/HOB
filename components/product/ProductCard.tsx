"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const [wished, setWished] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-beige">
        {/* Base image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Hover swap image */}
        <Image
          src={product.hoverImage}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="bg-vintage/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-ink backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={() => setWished((w) => !w)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-vintage/90 text-ink backdrop-blur transition-colors hover:text-accent"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-accent text-accent")}
          />
        </button>

        {/* Quick actions */}
        <div className="absolute inset-x-3 bottom-3 flex translate-y-4 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            data-cursor="Add"
            className="flex flex-1 items-center justify-center gap-2 bg-ink py-3 text-[10px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-accent"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </button>
          <button
            aria-label="Quick view"
            className="flex h-[42px] w-[42px] items-center justify-center bg-vintage text-ink transition-colors hover:bg-gold"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
            {product.category}
          </p>
          <h3 className="mt-1 font-cormorant text-xl font-medium text-ink">
            {product.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-medium text-ink">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="text-xs text-ink-soft/40 line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
