import React, { useEffect } from "react";

const FetchApi = ({setData}) => {
  const API = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((output) => setData(output))
      .catch((err) => console.log(err));
  }, []);
};

export default FetchApi;
