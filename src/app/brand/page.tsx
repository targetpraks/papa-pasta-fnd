"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function BrandPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="kicker mb-6">The Papa Pasta brand</div>
          <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(48px,6vw,96px)] mb-6">
            Two obsessions.<br />
            <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">One crest.</em>
          </h1>
          <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[680px] mb-8">
            Papa Pasta is built on two non-negotiables: pasta made fresh every morning in-store, and a crest that belongs to the city it feeds. One is about the food. One is about the founder. Together they make a brand worth franchising.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#pasta" className="inline-flex items-center gap-2 bg-white border border-[color:var(--color-pp-line)] px-5 py-2.5 rounded-[var(--radius-pill)] text-sm font-medium hover:shadow-[var(--shadow-1)] hover:-translate-y-0.5 transition-all">
              <span className="text-[color:var(--color-pp-tertiary)] font-bold">01</span> The Pasta
            </Link>
            <Link href="#colour" className="inline-flex items-center gap-2 bg-white border border-[color:var(--color-pp-line)] px-5 py-2.5 rounded-[var(--radius-pill)] text-sm font-medium hover:shadow-[var(--shadow-1)] hover:-translate-y-0.5 transition-all">
              <span className="text-[color:var(--color-pp-tertiary)] font-bold">02</span> Colour & Territory
            </Link>
          </div>
        </div>
      </section>

      <section id="pasta" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="kicker mb-6">01 · The Pasta</div>
            <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-6">
              Made at 6am.<br />
              <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">Served by noon.</em>
            </h2>
            <p className="text-[19px] text-[color:var(--color-pp-mute)] leading-relaxed mb-10">
              Every Papa Pasta store rolls its pasta fresh each morning behind a glass counter, in full view of the queue. No freezers. No parcooked sauces from a commissary truck. Flour, egg, semolina, water — the four things an Italian grandmother would recognise, and nothing she wouldn't.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { n: "00", u: ":00", l: "hours frozen", d: "Nothing leaves the counter more than four hours after it's cut." },
                { n: "4", u: "", l: "ingredients", d: "Flour. Egg. Semolina. Water. Salt optional. Nothing else lives in our dough." },
                { n: "6", u: "am", l: "roll starts", d: "Morning pasta-making is theatre. The queue forms before we open because of it." },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-[family-name:var(--font-serif)] text-3xl font-bold">
                    {s.n}<small>{s.u}</small>
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-pp-mute)] mt-1">
                    {s.l}
                  </div>
                  <p className="text-sm text-[color:var(--color-pp-mute)] mt-2 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <blockquote className="border-l-2 border-[color:var(--color-pp-tertiary)] pl-6 italic text-lg text-[color:var(--color-pp-ink)] mb-8">
              "The moment you taste pasta that was flour an hour ago, frozen pasta becomes a memory of a mistake."
              <cite className="block not-italic font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-pp-mute)] mt-3">
                — Chef Giovanni Rossi, Culinary Director
              </cite>
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <Link href="/franchise/" className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all">
                See the unit economics <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/create/" className="inline-flex items-center gap-2.5 border border-[color:var(--color-pp-line)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(10,22,40,0.03)] transition-all">
                Design your crest
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-core-8-dishes.png" alt="Core dishes" width={600} height={400} className="rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] w-full object-cover" />
            <div className="grid grid-cols-2 gap-4">
              <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-pasta-shape-pairing.png" alt="Shape pairing" width={300} height={200} className="rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] w-full object-cover" />
              <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/menu-sauce-production.png" alt="Sauce production" width={300} height={200} className="rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="colour" className="py-16 md:py-24 bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)]">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="kicker kicker-dark mb-6">02 · Colour & Territory</div>
            <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-6">
              Colour is <em className="text-[color:var(--color-pp-tertiary)] not-italic font-medium">territory.</em>
            </h2>
            <p className="text-[19px] text-[rgba(245,230,200,0.82)] leading-relaxed mb-4">
              Most restaurant brands pick a palette and protect it. Papa Pasta does the opposite. Every crest is a negotiation between a founder and the city they serve. The brand you see in Sandton is not the brand you see in Stellenbosch — and that is exactly the point.
            </p>
            <p className="text-[19px] text-[rgba(245,230,200,0.82)] leading-relaxed mb-8">
              When you sign, you don't rent a logo — you become its custodian. Your crest carries your colours, your city's name, and a territory radius that belongs only to you.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Your colours", "Your city", "Your influence", "Your legacy"].map((t, i) => (
                <div key={t} className="bg-[rgba(245,230,200,0.05)] rounded-[var(--radius-lg)] p-5 border border-[rgba(245,230,200,0.1)]">
                  <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-pp-tertiary)] mb-1">
                    {String(i + 1).padStart(2, "0")} · {t}
                  </div>
                  <p className="text-sm text-[rgba(245,230,200,0.7)]">
                    {i === 0 ? "Picked with our team, signed off by you." : i === 1 ? "3km exclusive radius around your door." : i === 2 ? "You vote on menu specials, events, and partnerships." : "The crest retires when you retire."}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/create/" className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:brightness-105 transition-all">
                Build your crest <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/interest/" className="inline-flex items-center gap-2.5 border border-[rgba(245,230,200,0.2)] text-[color:var(--color-pp-cream)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(245,230,200,0.05)] transition-all">
                See which cities are open
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-colour-reveal.png" alt="Colour reveal" width={600} height={500} className="rounded-[var(--radius-xl)] w-full object-cover border border-[rgba(245,230,200,0.1)]" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="kicker mb-4">03 · Takeovers & Partnerships</div>
              <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-4">
                When a brand partners with Papa Pasta,<br/>
                <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">the whole store changes colour.</em>
              </h2>
            </div>
            <p className="text-sm text-[color:var(--color-pp-mute)] max-w-[40ch]">
              From MTN to the Springboks — our takeovers turn a Papa Pasta store into a temporary brand temple. Franchisees benefit from the traffic and the PR.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["takeover-mtn", "takeover-nedbank", "takeover-vodacom", "takeover-springboks"].map((name) => (
              <Image key={name} src={`https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/${name}.png`} alt={name.replace(/-/g, " ")} width={400} height={300} className="w-full rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] object-cover" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
