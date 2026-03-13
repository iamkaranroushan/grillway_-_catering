export default function FindUs() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[500px]">
      {/* Left: Map */}
      <div className="flex-1 h-[250px] md:h-auto relative border-8 border-black overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=GrillWay%20%26%20Catering%2C%20817%20Bedford%20Hwy%2C%20Bedford%2C%20NS&output=embed"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Right: Restaurant Info */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start bg-black px-8 py-6 text-center md:text-left">
        <div className="flex items-center mb-2 text-stone-400 text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          <span>Find us at</span>
        </div>

        <h3 className="text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-4 text-white">
          Grillway and Catering
        </h3>

        <p className="text-[clamp(1rem,3vw,1.8rem)] sm:text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-snug text-stone-400">
          817 Bedford Hwy,
          <br />
          Bedford, NS B4A 0K1,
          <br />
          Canada
        </p>
      </div>
    </div>
  );
}
