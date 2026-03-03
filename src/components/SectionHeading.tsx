export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#4A4A4A] max-w-2xl">{subtitle}</p>
      )}
      <div className="w-12 h-1 bg-[#D03A27] mt-6 rounded-full" />
    </div>
  );
}
