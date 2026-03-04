const RIDES = [
  {
    title: "About the bikes",
    location: "Mostar",
    image: "/rides/ride1.jpg",
    text: [
      "We’re a small adventure company just getting started, and our fleet begins with two highly capable bikes built for the rugged terrain of Herzegovina: the 2025 Honda CRF300L. Lightweight, reliable, and incredibly versatile, the CRF300L is widely considered one of the best dual-sport bikes for exploring trails, gravel roads, and mountain terrain thanks to its agile handling, smooth power delivery, and long-travel suspension. Our bikes are equipped with quality upgrades including ProTaper handlebars, Acerbis handguards, Acerbis skid plates and more. We’re starting small with two well-prepared machines, but our goal is to continue expanding the fleet as Mostar ADV grows.",
    ],
  },
  {
    title: "Mountain View Climb",
    location: "Herzegovina Hills",
    image: "/rides/ride2.jpg",
    text: [
      "If you only have one day in Mostar and want views that stay with you long after you leave, here’s the move. Stay close to the city and ride up to Fortica and Hum — two iconic vantage points that offer completely different angles of Mostar. From the Fortica skywalk to the ridge beneath the Millennium Cross on Hum, these are easily the best views of the city and my go-to recommendation for anyone short on time..",
    ],
  },
  {
    title: "Old Road Escape",
    location: "Backroads",
    image: "/rides/ride3.jpg",
    text: [
      "One of many views from Hum.",
      "Stopped for a view from Hum. One of those places where you end up staying longer than planned.",
    ],
  },
  {
    title: "Sunset Gravel Loop",
    location: "Local Favorite",
    image: "/rides/ride4.jpg",
    text: [
      "On the climb toward Fortica ",
      "On the way up to Fortica, it’s worth turning off into one of the quiet valleys that run between the hills toward Velež. These old water valleys cut through the limestone long before the city existed, and riding through them feels far more remote than you’d expect this close to Mostar..",
    ],
  },
];

export default function RoutesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs tracking-[0.25em] text-white/55">ROUTES & RIDES</p>

      <h1 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
        Routes & Rides
      </h1>

      <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
        Herzegovina isn’t something you pass through — it’s something you explore.
        Scenic roads, light gravel, viewpoints, and short adventure escapes from Mostar.
      </p>

      {/* Fixed-size tiles grid (always ordered, never massive) */}
      <div className="mt-14 grid justify-center gap-8 [grid-template-columns:repeat(auto-fit,260px)]">
        {RIDES.map((ride) => (
          <div
            key={ride.title}
            className="w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
          >
            {/* FIXED image box: same size for every photo */}
            <div className="relative h-[120px] w-[260px] overflow-hidden">
              <img
                src={ride.image}
                alt={ride.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3">
                <div className="rounded-lg bg-black/55 px-2 py-1 backdrop-blur-sm">
                  <div className="text-sm font-semibold leading-snug">
                    {ride.title}
                  </div>
                  <div className="text-xs text-white/70">{ride.location}</div>
                </div>
              </div>
            </div>

            {/* FIXED text area: keeps cards same height */}
            <div className="p-4">
              <div className="h-[88px] overflow-hidden">
                <p className="text-sm leading-relaxed text-white/75">
                  {ride.text[0]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {ride.text[1] ?? ""}
                </p>
              </div>

              <a
                href="/contact"
                className="mt-4 inline-block text-sm font-semibold text-white/90 hover:text-white"
              >
                Request the track →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-sm font-semibold">Want the route?</div>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Message us with the ride name and your riding level — we’ll send the most suitable version of the track.
        </p>
      </div>
    </div>
  );
}