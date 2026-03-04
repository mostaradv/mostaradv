type Props = {
  phoneE164: string;
  message?: string;
};

export default function WhatsAppButton({ phoneE164, message }: Props) {
  const phone = phoneE164.replace(/\+/g, "");
  const text =
    message ??
    "Hi MostarADV! I’m interested in renting a bike.";

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: "#25D366", color: "#ffffff" }}
      className="fixed bottom-6 right-6 z-50 rounded-full px-5 py-3 font-semibold shadow-lg hover:scale-105 transition"
    >
      WhatsApp
    </a>
  );
}