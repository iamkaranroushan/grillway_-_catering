interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`
        py-[clamp(8rem,10vw,12rem)]
        ${className}
      `}
    >
      {children}
    </section>
  );
}