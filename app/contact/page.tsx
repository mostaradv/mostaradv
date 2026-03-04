export default function ContactPage() {
  const phoneE164 = "+387603290968";
  const email = "MostarADV@gmail.com";
  const instagramUrl =
    "https://www.instagram.com/mostaradv?igsh=djdoODgyOXFwM2Ri&utm_source=qr";

  const waHref =
    "https://wa.me/387603290968?text=" +
    encodeURIComponent(
      "Hi MostarADV! I’m interested in renting a bike.\n\nDates: ___ to ___\nRiding experience: ___\nDo you require helmet/safety gear?: Yes/No\n\nThanks!"
    );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.25em] text-white/55">CONTACT</p>

      <h1 className="mt-4 text-4xl font-medium leading-[1.05] md:text-5xl">
        Let’s get you riding.
      </h1>

      <p className="mt-4 max-w-2xl text-white/70">
        The fastest way to reach us is WhatsApp. Send your dates and riding
        experience — we’ll confirm availability and the best option for your trip.
      </p>

      {/* Primary CTA */}
      <div className="mt-10 rounded-3xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
        <div className="text-sm font-semibold">WhatsApp (fastest)</div>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Tap the button below to message us with your dates. We usually reply quickly.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Message on WhatsApp →
          </a>

          <div className="text-sm text-white/60">{phoneE164}</div>
        </div>

        <div className="mt-6 text-xs text-white/50">
          Tip: include your riding level and confirm if you require helmet or safety gear.
        </div>
      </div>

      {/* Secondary contact methods */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Email</div>
          <p className="mt-2 text-sm text-white/70">
            If you prefer email, send us your dates and questions.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                "MostarADV Rental Inquiry"
              )}`}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Email us
            </a>
            <span className="text-sm text-white/60">{email}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold">Instagram</div>
          <p className="mt-2 text-sm text-white/70">
            Follow for routes, ride clips, and updates from Herzegovina.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open Instagram →
            </a>
            <span className="text-sm text-white/60">@mostaradv</span>
          </div>
        </div>
      </div>

      {/* What to send */}
      <div className="mt-12 rounded-2xl border border-white/12 bg-white/[0.03] p-6">
        <div className="text-sm font-semibold">What to send us</div>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>• Your dates (start / end)</li>
          <li>• Your riding experience</li>
          <li>• Preferred terrain: scenic roads / mixed / gravel-heavy</li>
          <li>• Solo or group (and how many riders)</li>
          <li>• Whether you require helmet/safety gear</li>
        </ul>
      </div>
    </div>
  );
}