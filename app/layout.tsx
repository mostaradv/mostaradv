import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "MostarADV",
  description: "Dual-sport motorcycle rentals in Mostar",
  verification: {
    google: "googledc74872afad89d05.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050507] text-white min-h-screen">
        <div className="relative">

          {/* HEADER */}
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

              {/* Logo + Brand */}
              <a href="/" className="flex items-center gap-3">
                <img
  src="/mostaradv.png"
  alt="MostarADV logo"
   className="h-20 w-20 object-contain"
/>
                <span className="text-lg font-semibold tracking-wide">
                  MostarADV
                </span>
              </a>

              {/* Navigation */}
              <nav className="hidden gap-6 text-sm text-white/80 md:flex">
  <a href="/rentals" className="hover:text-white">Rentals</a>
  <a href="/routes" className="hover:text-white">Routes &amp; Rides</a>
  <a href="/reviews" className="hover:text-white">Reviews</a>
  <a href="/about" className="hover:text-white">About</a>
  <a href="/contact" className="hover:text-white">Contact</a>
</nav>

              {/* CTA */}
              <a
                href="/contact"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                Contact
              </a>

            </div>
          </header>

          <main>{children}</main>

          <WhatsAppButton
            phoneE164="+387603290968"
            message="Hi MostarADV! I’m interested in renting a bike. My dates are: ___ to ___. My riding experience is: ___."
          />

        </div>
      </body>
    </html>
  );
}
