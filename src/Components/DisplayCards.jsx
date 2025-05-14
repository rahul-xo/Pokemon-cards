import React, { useState } from "react";
import Card from "./Card";
import FetchApi from "../Api/FetchApi";

const DisplayCards = () => {
  const [data, setData] = useState({});
  return (
    <div
      className="min-h-screen p-12 flex flex-wrap gap-4 items-start 
               bg-[url('https://images4.alphacoders.com/641/641968.jpg')] bg-cover bg-center bg-blend-darken bg-black/65"
    >
      <FetchApi setData={setData} />
      {Object.keys(data).length === 0? null : <Card data={data}/>}
    </div>
  );
};

export default DisplayCards;
