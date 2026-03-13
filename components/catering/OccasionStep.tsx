"use client";

type Props = {
  onSelect: (occasion: string) => void;
};

const occasions = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Other",
];

export default function OccasionStep({ onSelect }: Props) {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-3">
        What is the occasion?
      </h2>

      <p className="text-stone-400 mb-10">
        Select the type of event you are planning.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {occasions.map((occasion) => (
          <button
            key={occasion}
            onClick={() => onSelect(occasion)}
            className="border border-stone-700 py-4 rounded-lg hover:border-white hover:bg-stone-700 transition"
          >
            {occasion}
          </button>
        ))}
      </div>
    </div>
  );
}