"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-ink py-section text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_60%)]" />
      </div>

      <div className="container-luxe relative text-center">
        <p className="mb-6 text-[11px] uppercase tracking-luxe text-gold">
          The Inner Circle
        </p>

        <RevealText
          as="h2"
          text="Receive the House Letter"
          className="mx-auto justify-center font-cormorant text-4xl font-light md:text-6xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-md text-[15px] text-cream/70"
        >
          Private previews, atelier stories, and first access to limited
          editions — delivered with intention.
        </motion.p>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-2 border-b border-cream/30 pb-3 transition-colors focus-within:border-gold"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 bg-transparent text-center text-base text-cream placeholder:text-cream/40 focus:outline-none md:text-left"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            data-cursor="Join"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-ink transition-transform hover:scale-110"
          >
            {sent ? (
              <Check className="h-5 w-5" />
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </button>
        </motion.form>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-gold"
          >
            Welcome to the House. Check your inbox.
          </motion.p>
        )}
      </div>
    </section>
  );
}
