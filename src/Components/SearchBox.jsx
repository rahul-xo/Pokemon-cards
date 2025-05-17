import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = ({ data, setData, setFilterData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (searchTerm.trim() === "") {
      setFilterData(data);
    } else {
      const updatedList = data.filter((currEle) =>
        currEle.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      setFilterData(updatedList);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2.5 bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 rounded-full shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
