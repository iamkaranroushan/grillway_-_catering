interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse
        rounded-md
        bg-neutral-200/80
        dark:bg-neutral-800/80
        ${className}
      `}
    />
  );
}