import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-stone-900 text-stone-400 py-12 overflow-hidden">
      {/* Subtle background text */}
      <span className="absolute inset-0 flex justify-center items-center text-[clamp(6rem,12vw,25rem)] font-extrabold text-white opacity-5 select-none pointer-events-none">
        Grillway
      </span>

      {/* Foreground content */}
      <div className="relative z-10 flex justify-center items-center gap-2 text-sm flex-wrap">
        <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
        <span className="lg:flex hidden">|</span>
        <span>
          Designed & Developed with <FaHeart className="text-red-500 inline-block mx-1" /> by karanroushan
        </span>
      </div>
    </footer>
  );
}