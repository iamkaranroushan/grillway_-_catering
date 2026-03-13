export default function OpeningHours() {
  const hours = [
    { day: "Monday", time: "12:00 PM – 8:00 PM" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "11:00 AM – 8:00 PM" },
    { day: "Thursday", time: "11:00 AM – 8:00 PM" },
    { day: "Friday", time: "12:00 PM – 8:00 PM" },
    { day: "Saturday", time: "11:00 AM – 8:00 PM" },
    { day: "Sunday", time: "12:00 PM – 8:00 PM" },
  ];

  const today = new Date().getDay(); // 0 = Sunday

  const getDayIndex = (day: string) => {
    if (day === "Monday") return 1;
    if (day === "Tuesday") return 2;
    if (day === "Wednesday") return 3;
    if (day === "Thursday") return 4;
    if (day === "Friday") return 5;
    if (day === "Saturday") return 6;
    if (day === "Sunday") return 0;
    return -1;
  };

  return (
    <section className="bg-stone-900 text-white py-[clamp(4rem,8vw,8rem)] px-4 sm:px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-12 sm:mb-16">
          Opening Hours
        </h2>

        <div className="flex flex-col divide-y divide-stone-700 text-left">
          {hours.map((item, idx) => {
            const isToday = today === getDayIndex(item.day);

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 sm:py-6 ${
                  isToday ? "text-white font-extrabold" : "text-stone-400"
                }`}
              >
                <span className="text-[clamp(1.4rem,4vw,2rem)]">
                  {item.day}
                </span>

                <span className="text-[clamp(1.1rem,3vw,1.5rem)] mt-1 sm:mt-0">
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}