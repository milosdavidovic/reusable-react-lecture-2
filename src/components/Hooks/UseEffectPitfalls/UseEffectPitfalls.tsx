import React, { useEffect, useState } from "react";
import { MdCached } from "react-icons/md";

const UseEffectPitfalls = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // effect
    console.log("I run every render");
  }); // no deps array

  // useEffect(() => {
  //   // effect
  //   console.log("I run only once, when component mounts");
  //   return () => {
  //     // cleanup
  //     console.log("I run when component unmounts");
  //   };
  // }, []); // deps array empty

  // useEffect(() => {
  //   // effect
  //   console.log(`I run when "count" changes: ${count}`);
  //   return () => {
  //     // cleanup
  //     console.log(`I am cleaning up after previous effect (count: ${count})`);
  //   };
  // }, [count]); // no deps array

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <h1>useEffect pitfalls</h1>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <button
          onClick={() => {
            setCount((s) => s + 1);
          }}
        >
          <MdCached size={20} />
        </button>
      </div>
    </div>
  );
};

export default UseEffectPitfalls;
