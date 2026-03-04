const PACKAGES = [
  {
    name: "Day Ride",
    price: "From €90 / day",
    desc: "Perfect for a quick escape around Mostar and nearby viewpoints.",
    bullets: [
      "Lightweight dual-sport bike rental (easy to handle)",
      "Helmet and safety gear available (depending on your setup)",
      "Pickup & return in Mostar (garage pickup)",
      "Fast WhatsApp support if you get stuck",
    ],
    cta: "Contact for dates",
  },
  {
    name: "Weekend Escape",
    price: "From €80 / day",
    desc: "2–3 days with curated routes and local tips — ride more, plan less.",
    bullets: [
      "Everything in Day Ride",
      "Weekend route plan (scenic / mixed / gravel)",
      "Optional stay at house in Mostar (depending on availability)",
      "Priority support during your ride",
    ],
    cta: "Get a quote",
    featured: true,
  },
  {
    name: "Multi-Day Adventure",
    price: "From €70 / day",
    desc: "4–7 days exploring Herzegovina properly — gravel, mountains, and remote roads.",
    bullets: [
      "Everything in Weekend Escape",
      "Multi-day planning (fuel/food/water stops)",
      "Optional GPX pack for each day",
      "Logistics tips (terrain, weather, timing)",
    ],
    cta: "Plan my trip",
  },
];

const INCLUDED = [
  { title: "Local routes", text: "Scenic + gravel options, matched to your comfort level." },
  { title: "Simple pickup", text: "Easy handover in Mostar — quick, friendly, no drama." },
  { title: "Real terrain advice", text: "What’s rideable today, where to fuel, where to stop." },
  { title: "Fast support", text: "If something feels off, message us and we’ll help quickly." },
  { title: "Gear options", text: "Helmet + add-ons available (depending on your setup)." },
  { title: "No fluff", text: "Straightforward rental, clear expectations, good bikes." },
];

const FAQ = [
  {
    q: "What do I need to rent a bike?",
    a: "A valid driver’s license, passport/ID, and confidence riding a manual motorcycle. If you’re unsure which terrain fits you, tell us your experience and we’ll suggest the right routes.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes — if you can ride a manual bike comfortably. We’ll keep beginners on easier scenic routes and recommend tougher gravel only if it matches your skill level.",
  },
  {
    q: "What’s included with the rental?",
    a: "Bike rental + handover + local guidance. GPX tracks and gear options can be included depending on the package and setup.",
  },
  {
    q: "Can I ride outside Mostar or do multi-day trips?",
    a: "Yes. Weekend and multi-day rentals are ideal for exploring Herzegovina properly. Share your dates and style (scenic vs gravel) and we’ll help plan something realistic.",
  },
  {
    q: "How do pickup/return and support work?",
    a: "Pickup/return is in Mostar (garage pickup). We agree times in advance. If you have an issue during the ride, message/call and we’ll help you troubleshoot fast.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="text-xs tracking-[0.25em] text-white/55">{eyebrow}</p>
      ) : null}
      <h1 className="mt-4 text-4xl font-medium leading-[1.05] md:text-5xl">{title}</h1>
      {desc ? <p className="mt-4 max-w-2xl text-white/70">{desc}</p> : null}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/12 bg-white/[0.03] p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function RentalsPage() {
  const waHref =
    "https://wa.me/387603290968?text=" +
    encodeURIComponent(
      "Hi MostarADV! I’m interested in renting a bike. My dates are: ___ to ___. My riding experience is: ___."
    );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        eyebrow="RENTALS"
        title="Choose your ride"
        desc="Simple rental packages for exploring Mostar and the best of Herzegovina — scenic roads, gravel tracks, and viewpoints."
      />

      {/* Packages */}
      <div className="grid gap-4 md:grid-cols-3">
        {PACKAGES.map((p) => (
          <GlassCard
            key={p.name}
            className={
              p.featured
                ? "border-white/20 bg-white/[0.05] ring-1 ring-white/10"
                : ""
            }
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-white/60">{p.price}</div>
              </div>
              {p.featured ? (
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Popular
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-sm text-white/70">{p.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[2px] inline-block h-4 w-4 rounded-md border border-white/20 bg-white/5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                {p.cta}
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                WhatsApp
              </a>

              <a
                href="mailto:MostarADV@gmail.com?subject=MostarADV%20Rental%20Inquiry"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Email
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Included */}
      <div className="mt-16">
        <SectionTitle
          eyebrow="WHAT YOU GET"
          title="Built for real riding"
          desc="Not a polished tour company vibe — just good bikes, local knowledge, and clear expectations."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {INCLUDED.map((i) => (
            <GlassCard key={i.title}>
              <div className="text-sm font-semibold">{i.title}</div>
              <p className="mt-2 text-sm text-white/70">{i.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <SectionTitle eyebrow="FAQ" title="Everything you need to know" />
        <div className="grid gap-4">
          {FAQ.map((item) => (
            <GlassCard key={item.q}>
              <div className="text-sm font-semibold">{item.q}</div>
              <p className="mt-3 text-sm text-white/70">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
          <div className="text-xs tracking-[0.25em] text-white/55">READY</div>
          <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
            Tell us your dates — we’ll confirm the best option.
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Share your riding experience and what terrain you want (scenic road / mixed / gravel-heavy).
            We’ll reply with availability and a simple plan.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Go to contact
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              href="mailto:MostarADV@gmail.com?subject=MostarADV%20Rental%20Inquiry"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Email MostarADV@gmail.com
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">
            Next step: we’ll send you the options + what to bring + pickup details.
          </p>
        </div>
      </div>
    </div>
  );
}