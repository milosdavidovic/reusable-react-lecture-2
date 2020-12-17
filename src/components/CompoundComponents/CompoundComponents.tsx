import React, { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import CustomInputGroup from "./CustomInputGroup";
import styles from "./CompoundComponents.module.css";

const CompoundComponents = () => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      setValue(e.currentTarget.value);
    }
  };

  return (
    <div style={{ width: 500, margin: "auto" }}>
      <h1>Compound components</h1>
      <div style={{ margin: 48 }}>
        <CustomInputGroup id="my-input-1" value={value} onChange={handleOnChange}>
          <CustomInputGroup.Label className={styles.bgDark}>Search</CustomInputGroup.Label>
          <CustomInputGroup.Input></CustomInputGroup.Input>
          <CustomInputGroup.Item>
            <MdSearch size={20} />
          </CustomInputGroup.Item>
        </CustomInputGroup>
      </div>
      {/* <div style={{ margin: 48 }}>
        <CustomInputGroup id="my-input-2" value={value} onChange={handleOnChange}>
          <CustomInputGroup.Input></CustomInputGroup.Input>
          <CustomInputGroup.Label className={styles.bgDark}>EUR</CustomInputGroup.Label>
        </CustomInputGroup>
      </div>
      <div style={{ margin: 48 }}>
        <CustomInputGroup id="my-input-3" value={value} onChange={handleOnChange}>
          <CustomInputGroup.Input></CustomInputGroup.Input>
          <CustomInputGroup.Item>
            <button>
              <MdCached size={20} />
            </button>
          </CustomInputGroup.Item>
        </CustomInputGroup>
      </div> */}
    </div>
  );
};

export default CompoundComponents;
