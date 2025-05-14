import React, { useEffect } from "react";

const FetchApi = ({ setData }) => {
  const API = "https://pokeapi.co/api/v2/pokemon/ditto";


  const apiCall=async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(()=>{
    apiCall();
  }, []);
};

export default FetchApi;
