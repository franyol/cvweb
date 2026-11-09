import { Mail } from "lucide-react";

interface ContactButtonProps {
  label?: string;
  email?: string;
  subject?: string;
  message?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export function ContactButton({
  label = "Contact Me",
  email = "f.valbuenao64@gmail.com",
  subject = "Service Inquiry",
  message = "",
  variant = "primary",
  className = "",
}: ContactButtonProps) {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90",
    outline:
      "border border-border hover:bg-muted",
    ghost:
      "hover:bg-muted",
  };

  return (
    <a
      href={mailto}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      <Mail size={16} />
      {label}
    </a>
  );
}

