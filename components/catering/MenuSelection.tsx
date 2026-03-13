"use client";

import { useState } from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const menus = [
    {
        name: "Kabsa",
        image: "/image/kabsa.png",
        description: "Traditional rice dish served with spiced meat.",
    },
    {
        name: "Lahm Bi Ajin",
        image: "/image/lahm_bi_ajin.png",
        description: "Flatbread topped with minced lamb and spices.",
    },
    {
        name: "Lamb Ouzi",
        image: "/image/lamb_ouzi.png",
        description: "Slow roasted lamb served with aromatic rice.",
    },
    {
        name: "Whole Lamb",
        image: "/image/whole_lamb.png",
        description: "Full roasted lamb perfect for large events.",
    },
];

export default function MenuSelectionStep({
    onSelect,
    onBack,
}: {
    onSelect: (menus: string[]) => void;
    onBack: () => void;
}) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleMenu = (name: string) => {
        setSelected((prev) =>
            prev.includes(name)
                ? prev.filter((m) => m !== name)
                : [...prev, name]
        );
    };

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center mb-2">
                Select Your Preferred Dishes
            </h2>

            <p className="text-center text-stone-400 mb-10">
                Choose as many dishes as you like. Our catering team will later
                prepare an estimated quote based on your selection.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menus.map((menu) => {
                    const isSelected = selected.includes(menu.name);

                    return (
                        <button
                            key={menu.name}
                            onClick={() => toggleMenu(menu.name)}
                            className={`relative group rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition duration-300 hover:-translate-y-2
              
              ${isSelected
                                    ? "bg-stone-700 border-2 border-white"
                                    : "bg-stone-800 border border-stone-700 hover:bg-stone-700"
                                }`}
                        >
                            {/* Tick Icon */}
                            {isSelected && (
                                <div className="absolute top-3 right-3 bg-white text-black rounded-full p-1">
                                    <FiCheck size={18} />
                                </div>
                            )}

                            <Image
                                src={menu.image}
                                alt={menu.name}
                                width={220}
                                height={220}
                                className="object-contain mb-6 transition duration-500 group-hover:scale-110"
                            />

                            <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>

                            <p className="text-sm text-stone-400">
                                {menu.description}
                            </p>
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-between items-center mt-12">
                <button
                    onClick={onBack}
                    className="text-stone-400 hover:text-white"
                >
                    ← Back
                </button>

                <button
                    onClick={() => onSelect(selected)}
                    disabled={selected.length === 0}
                    className="bg-white text-black px-6 py-3 rounded-full  font-semibold disabled:opacity-40"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}