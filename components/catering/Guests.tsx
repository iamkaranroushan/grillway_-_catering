"use client";

type Props = {
  guests: number;
  setGuests: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function GuestSelectionStep({
  guests,
  setGuests,
  onNext,
  onBack,
}: Props) {
  const increase = () => setGuests(guests + 10);

  const decrease = () => {
    if (guests > 10) setGuests(guests - 10);
  };

  return (
    <div className="text-center max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-3">
        Number of Guests
      </h2>

      <p className="text-stone-400 mb-10">
        Approximate number of guests attending the event.
      </p>

      <div className="flex justify-center items-center gap-8 mb-10">
        <button
          onClick={decrease}
          className="border border-stone-600 w-12 h-12 rounded-full text-xl hover:border-white transition"
        >
          -
        </button>

        <span className="text-4xl font-bold w-24 text-center">
          {guests}
        </span>

        <button
          onClick={increase}
          className="border border-stone-600 w-12 h-12 rounded-full text-xl hover:border-white transition"
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-stone-400 hover:text-white"
        >
          ← Back
        </button>

        <button
          onClick={onNext}
          className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}