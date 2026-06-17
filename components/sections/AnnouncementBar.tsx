"use client";

import { announcements } from "@/lib/data";
import Marquee from "@/components/ui/Marquee";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-ink py-2.5 text-cream">
      <Marquee
        speed={38}
        items={announcements.map((a) => (
          <span
            key={a}
            className="text-[10px] font-light uppercase tracking-[0.3em] md:text-[11px]"
          >
            {a}
          </span>
        ))}
      />
    </div>
  );
}
