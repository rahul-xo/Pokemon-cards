import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount=setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return ()=>{clearInterval(updateCount)}
  }, [count]);
  return (
    <div className="flex justify-center gap-6 items-center p-7">
      <h1>counter is : {count}</h1>
    </div>
  );
};

export default CleanUp;
