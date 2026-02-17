import React from "react";

export const AddCardButton = () => {
  return (
    <button
      aria-label="Add card"
      className="absolute bottom-4 right-4 rounded-full px-4 py-2 shadow-lg
                     bg-black text-white text-sm font-medium hover:shadow-xl
                     hover:opacity-90 active:scale-95 transition cursor-pointer"
    >
      + Add Card
    </button>
  );
};
