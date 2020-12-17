import React from "react";

interface CustomInputContextState {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const defaultCustomInputContextState = {
  id: "",
  value: "",
  onChange: () => undefined,
};

const CustomInputContext = React.createContext<CustomInputContextState>(defaultCustomInputContextState);

const { Provider, Consumer } = CustomInputContext;

const useCustomInputContext = () => {
  const context = React.useContext(CustomInputContext);
  if (!context) {
    throw new Error(`CustomInputGroup compound components cannot be rendered outside the CustomInputGroup component`);
  }
  return context;
};

export { Provider as CustomInputContextProvider, Consumer as CustomInputContextConsumer, useCustomInputContext };
