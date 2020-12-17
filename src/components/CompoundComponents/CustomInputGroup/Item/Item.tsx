import React from "react";
import classNames from "classnames";
import styles from "../../CompoundComponents.module.css";

const Item: React.FC = ({ children }) => {
  return <div className={classNames(styles.inputGroupItem)}>{children}</div>;
};

export default Item;
