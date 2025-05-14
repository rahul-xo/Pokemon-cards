import React from "react";

const Card = ({data}) => {
  return (
    <div
      className="rounded-xl p-4 flex flex-col items-center w-56 h-72
                bg-white/5 backdrop-blur-xl
                border border-gray-600
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-2xl hover:cursor-pointer"
    >
      <img
        src={`${data.sprites.other.dream_world.front_default}`}
        alt="Image"
        className="w-full h-auto max-h-40 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold text-white mb-1">{data.name}</h2>
      <div className="flex justify-between w-full text-sm text-gray-300">
        <span>Height: 10</span>
        <span>Power: 50</span>
      </div>
    </div>
  );
};

export default Card;
