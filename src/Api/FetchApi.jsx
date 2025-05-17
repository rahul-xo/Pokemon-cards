import React, { useEffect } from "react";

const FetchApi = ({ setData , setFilterData }) => {
  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=100";

  const apiCall = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const updatedData=data.results.map(async (currEle)=>{
        const res= await fetch(currEle.url);
        const data=await res.json();
        return data;
      })
      const updatedResponse=await Promise.all(updatedData);
      console.log(updatedResponse);
      setData(updatedResponse);
      setFilterData(updatedResponse);
      
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
};

export default FetchApi;
