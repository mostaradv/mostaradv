import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* HERO ROW: text left, logo right (desktop) */}
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* LEFT: Hero text */}
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-white/60">
            RIDE • STAY • EXPLORE
          </p>

          <h1 className="mt-5 text-5xl font-medium leading-[1.03] md:text-7xl">
            MostarADV
          </h1>

          <p className="mt-4 text-lg text-neutral-600 md:text-2xl">
            Your base for adventure in Herzegovina and beyond.
          </p>

          <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
            Lightweight dual-sport rentals with accommodation in heart of Mostar
            — close to scenic routes, gravel tracks, and sections of the Balkan
            TET.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Contact
            </a>
            <a
              href="/rentals"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View rentals
            </a>
          </div>
        </div>

        {/* RIGHT: Logo (hidden on mobile) */}
        <div className="hidden md:block pt-2">
          <img
            src="/mostaradv.png"
            alt="MostarADV logo"
            className="w-56 opacity-90 object-contain"
          />
        </div>
      </div>

      {/* Offers */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {/* Day Ride */}
        <Link
          href="/rentals"
          className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] transition hover:bg-white/[0.06] hover:-translate-y-0.5"
        >
          <div className="relative h-44 w-full">
            <img
              src="/offers/day.jpg"
              alt="Day Ride around Mostar"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          </div>

          <div className="p-6">
            <div className="text-xl font-semibold text-white">Day Ride</div>
            <div className="mt-3 text-base text-white/80">
              Perfect for a quick escape - includes route suggestions.
            </div>
            <div className="mt-4 text-sm font-semibold text-white/90">
              View rentals →
            </div>
          </div>
        </Link>

        {/* Weekend Escape */}
        <Link
          href="/rentals"
          className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] transition hover:bg-white/[0.06] hover:-translate-y-0.5"
        >
          <div className="relative h-44 w-full">
            <img
              src="/offers/weekend.jpg"
              alt="Weekend Escape in Herzegovina"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          </div>

          <div className="p-6">
            <div className="text-xl font-semibold text-white">Weekend Escape</div>
            <div className="mt-3 text-base text-white/80">
              2-3 days with GPX tracks and local tips.
            </div>
            <div className="mt-4 text-sm font-semibold text-white/90">
              View rentals →
            </div>
          </div>
        </Link>

        {/* Multi-Day Adventure */}
        <Link
          href="/rentals"
          className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] transition hover:bg-white/[0.06] hover:-translate-y-0.5"
        >
          <div className="relative h-44 w-full">
            <img
              src="/offers/multiday.jpg"
              alt="Multi-Day Adventure across Herzegovina"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          </div>

          <div className="p-6">
            <div className="text-xl font-semibold text-white">
              Multi-Day Adventure
            </div>
            <div className="mt-3 text-base text-white/80">
              4+ days exploring Herzegovina properly, including TET.
            </div>
            <div className="mt-4 text-sm font-semibold text-white/90">
              View rentals →
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}