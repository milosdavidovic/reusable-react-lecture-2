import { useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(ref: React.RefObject<T>, callback: () => void): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    console.log("adding handler");
    document.addEventListener("click", handleClick);

    return () => {
      console.log("removing handler");
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);
};

export default useOutsideClick;
