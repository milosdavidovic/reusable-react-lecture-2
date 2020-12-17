import React, { useEffect, useRef, useState } from "react";
import styles from "./ReusableLogic.module.css";
import { MdCached } from "react-icons/md";

// useState vs useRef

// How to avoid events adding and removing

// not that important to show bunch of examples, but rather to show some common pitfalls and weird parts

const ReusableLogic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [, setCounter] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
        alert("clicked");
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <h1>Reuse logic with custom hooks</h1>
      <div className={styles.container}>
        <div ref={ref} className={styles.card}>
          <span>Click outside!</span>
          <button
            onClick={() => {
              setCounter((s) => s + 1);
            }}
          >
            <MdCached size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableLogic;
