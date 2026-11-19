import React from "react";
import MediaCard from "./MediaCard";

const Cards = ({ data, title }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-[1800px] bg-[#1f1e24] py-4">
      {title && (
        <h1 className="mb-5 text-2xl font-bold text-zinc-300 md:text-3xl">
          {title}
        </h1>
      )}

      <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {data.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;