export function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Francisco Valbuena Ortega
        </p>

        <p>
          Electrical Engineer · Software Engineer · Mazda Colombia
        </p>
      </div>
    </footer>
  );
}
