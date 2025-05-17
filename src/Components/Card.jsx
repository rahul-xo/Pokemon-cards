import React from "react";

const Card = ({pokemon,image,height,weight}) => {
  return (
    <div
      className="rounded-xl p-4 flex flex-col items-center w-56 h-72
                bg-white/5 backdrop-blur-md
                border border-gray-600
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-2xl hover:cursor-pointer"
    >
      <img
        src={image}
        alt="Image"
        className="w-full h-auto max-h-40 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold text-white mb-1">{pokemon}</h2>
      <div className="flex justify-between w-full text-sm text-gray-300">
        <span>Height: {height}</span>
        <span>Weight: {weight}</span>
      </div>
    </div>
  );
};

export default Card;
