interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-350
        mx-auto
        px-[clamp(1.2rem,4vw,2rem)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}