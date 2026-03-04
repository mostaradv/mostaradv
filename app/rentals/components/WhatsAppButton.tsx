type Props = {
  phoneE164: string; // e.g. +38761111222
  message?: string;
};

export default function WhatsAppButton({ phoneE164, message }: Props) {
  const phone = phoneE164.replace(/\+/g, "");
  const text =
    message ??
    "Hi MostarADV! I’m interested in renting a bike. My dates are: ___ to ___. My riding experience is: ___.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-white/15"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* simple WhatsApp-ish icon */}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20.5 11.9c0 4.7-3.8 8.6-8.6 8.6-1.4 0-2.8-.3-4-.9L3.5 20.5l.9-4.2c-.6-1.2-1-2.6-1-4.1 0-4.7 3.8-8.6 8.6-8.6s8.5 3.9 8.5 8.3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 8.7c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.6 2.9.6.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.3-.2-.6-.4l-1.4-.7c-.2-.1-.4-.1-.6.1l-.5.6c-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </a>
  );
}
