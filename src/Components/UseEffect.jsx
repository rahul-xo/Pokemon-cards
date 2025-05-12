import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setInterval(()=>{
        const updatedDate= `${new Date().toLocaleDateString()} and time is ${new Date().toLocaleTimeString()}`;
        setDate(updatedDate);
    },1000)
  }, []);

  return (
    <div className="flex items-center gap-5 flex-col">
      <h1>Using Use Effect</h1>
      <p>Date : {date} </p>
    </div>
  );
};

export default UseEffect;
