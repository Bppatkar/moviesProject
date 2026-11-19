import React, { useRef } from "react";
import Dropdown from "./Dropdown";
import MediaCard from "./MediaCard";

const HorizontalCards = ({ data, title, category, setCategory }) => {
  const scrollRef = useRef(null);

  if (!data || data.length === 0) return null;

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 py-5 md:px-10">
      {/* Header section with Title and Dropdown */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-zinc-300 md:text-3xl">
          {title}
        </h1>

        {setCategory && (
          <Dropdown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
        )}
      </div>

      {/* Horizontal Scrollable Row */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex w-full cursor-grab gap-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent active:cursor-grabbing"
      >
        {data.map((item) => (
          <MediaCard key={item.id} item={item} variant="horizontal" />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;