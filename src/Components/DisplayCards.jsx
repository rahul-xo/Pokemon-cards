import React, { useState } from "react";
import Card from "./Card";
import FetchApi from "../Api/FetchApi";
import SearchBox from "./SearchBox";
import Loader from './Loader'

const DisplayCards = () => {
  const [data, setData] = useState([]);
  const [filterData,setFilterData]=useState([]);
  return (
    <div
      className="min-h-screen p-12 flex flex-wrap gap-3 items-start 
               bg-[url('https://images4.alphacoders.com/641/641968.jpg')] bg-cover bg-center bg-blend-darken bg-black/65"
    >
      <SearchBox data={data} setFilterData={setFilterData}/>
      <FetchApi setData={setData} setFilterData={setFilterData}/>

      {(!data.length) ? <Loader/> : filterData.map((currEle)=><Card pokemon={currEle.name} image={currEle.sprites.other.dream_world.front_default} key={currEle.id} height={currEle.height} weight={currEle.weight}/>)}
    </div>
  );
};

export default DisplayCards;
