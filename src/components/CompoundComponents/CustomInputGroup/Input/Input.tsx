import React from "react";
import classNames from "classnames";
import { useCustomInputContext } from "../CustomInputContext";
import styles from "../../CompoundComponents.module.css";

const Input: React.FC = () => {
  const { id, value, onChange } = useCustomInputContext();

  return (
    <input
      id={id}
      autoComplete="off"
      value={value}
      onChange={onChange}
      className={classNames(styles.inputGroupItem, styles.input)}
    />
  );
};

export default Input;
