import React from "react";
import classNames from "classnames";
import { useCustomInputContext } from "../CustomInputContext";
import styles from "../../CompoundComponents.module.css";

interface Props {
  className?: string;
}

const Label: React.FC<Props> = ({ className, children }) => {
  const { id } = useCustomInputContext();

  return (
    <label htmlFor={id} className={classNames(styles.label, styles.inputGroupItem, className)}>
      {children}
    </label>
  );
};

export default Label;
