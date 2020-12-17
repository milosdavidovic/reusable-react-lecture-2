import React, { ReactNode } from "react";
import { CustomInputContextProvider } from "./CustomInputContext";
import styles from "../CompoundComponents.module.css";
import Input from "./Input";
import Item from "./Item";
import Label from "./Label";

interface Props {
  children: ReactNode;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInputGroup = ({ children, id, value, onChange }: Props) => {
  return (
    <CustomInputContextProvider value={{ id, value, onChange }}>
      <div className={styles.container}>{children}</div>
    </CustomInputContextProvider>
  );
};

CustomInputGroup.Label = Label;
CustomInputGroup.Input = Input;
CustomInputGroup.Item = Item;

export default CustomInputGroup;
