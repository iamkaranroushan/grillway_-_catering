"use client";

type Props = {
  form: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  setForm: (data: any) => void;
  onBack: () => void;
  onSubmit: () => void;
};

export default function ContactFormStep({
  form,
  setForm,
  onBack,
  onSubmit,
}: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Contact Information
      </h2>

      <p className="text-center text-stone-400 mb-10">
        Leave your details and our catering team will contact you with a quote.
      </p>

      <div className="flex flex-col gap-5">
        <input
          value={form.name}
          placeholder="Full Name"
          className="bg-stone-700 border border-stone-600 p-3 rounded-lg focus:outline-none focus:border-white"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          value={form.phone}
          placeholder="Phone Number"
          className="bg-stone-700 border border-stone-600 p-3 rounded-lg focus:outline-none focus:border-white"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          value={form.email}
          placeholder="Email Address"
          className="bg-stone-700 border border-stone-600 p-3 rounded-lg focus:outline-none focus:border-white"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          value={form.address}
          placeholder="Event Address"
          className="bg-stone-700 border border-stone-600 p-3 rounded-lg focus:outline-none focus:border-white"
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />
      </div>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onBack}
          className="text-stone-400 hover:text-white"
        >
          ← Back
        </button>

        <button
          onClick={onSubmit}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-90"
        >
          Submit Enquiry
        </button>
      </div>
    </div>
  );
}