export default function ReviewsPage() {
  const reviews = [
    {
      name: "Martin (Germany)",
      rating: 5,
      date: "25-May",
      text:
        "Perfect way to explore around Mostar. The bike was in great condition and the GPX route suggestions were spot on. Super easy pickup and quick support on WhatsApp.",
    },
    {
      name: "Lea (France)",
      rating: 5,
      date: "02-Jul",
      text:
        "Amazing weekend ride into the mountains. Clear instructions, local tips, and the CRF300L was ideal for the terrain. Would 100% rent again.",
    },
    {
      name: "James (UK)",
      rating: 5,
      date: "13-Sep",
      text:
        "If you want a real Herzegovina adventure, this is it. Everything was smooth, and the routes felt curated — not generic tourist stuff. Great experience.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Reviews</h1>
      <p className="mt-2 text-white/70">
        A few words from riders who explored Herzegovina with MostarADV.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="mt-1 text-xs text-white/60">{r.date}</div>
              </div>

              <div
                className="text-sm text-white/90"
                aria-label={`${r.rating} out of 5 stars`}
                title={`${r.rating} / 5`}
              >
                {"★★★★★".slice(0, r.rating)}
                <span className="text-white/30">
                  {"★★★★★".slice(r.rating)}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              “{r.text}”
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Want to leave a review?</h2>
        <p className="mt-2 text-sm text-white/70">
          Leave us a review on Google or social media — we’ll feature it here.
        </p>
      </div>
    </div>
  );
}