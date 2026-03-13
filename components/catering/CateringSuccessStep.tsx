"use client";

import { FiPhone, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function CateringSuccessStep({ onClose }: Props) {
  const phoneNumber = "+353 123 4567";
  const [copied, setCopied] = useState(false);

 const copyNumber = async () => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(phoneNumber);
    } else {
      // fallback for mobile browsers
      const textArea = document.createElement("textarea");
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Copy failed", err);
  }
};

  return (
    <div className="text-center max-w-xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Enquiry Submitted
      </h2>

      <p className="text-stone-400 mb-8 text-sm md:text-base">
        Our catering team has received your enquiry and will contact you shortly.
      </p>

      {/* CALL OPTION */}
      <div className="bg-stone-700/60 border border-stone-600 rounded-xl p-5 md:p-6 mb-8">
        <p className="text-sm text-stone-400 mb-4">
          Want to speak with our catering team immediately?
        </p>

        {/* PHONE + COPY */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-lg md:text-xl font-semibold">
            {phoneNumber}
          </span>

          <button
            onClick={copyNumber}
            className="p-2 border border-stone-600 rounded-md hover:border-white transition"
          >
            {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
          </button>
        </div>

        {/* CALL BUTTON */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-md font-semibold hover:opacity-90 w-full md:w-auto md:inline-flex"
        >
          <FiPhone />
          Call Catering Team
        </a>
      </div>

      <button
        onClick={onClose}
        className="px-6 md:px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-90"
      >
        Close
      </button>
    </div>
  );
}