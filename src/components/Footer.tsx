import { personalInfo } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#8A8A8A] py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/signature.svg"
            alt="Johann Avramov"
            className="h-12 w-auto brightness-0 invert"
          />
          <span>
            &copy; {currentYear} {personalInfo.name}
          </span>
        </div>

        <div className="text-sm font-light">
          Designed for clarity. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
