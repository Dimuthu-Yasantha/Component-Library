import React, { useState } from "react";
import Select from "@mui/material/Select";
import { FormControlLabel, MenuItem, styled } from "@mui/material";

interface SelectData {
    selectData: string[];
}

interface SelectDataArray {
    data: SelectData;
  }

const SelectBox: React.FC<SelectData> = ({ selectData }) => {
  const [selectValue, setSelectValue] = useState<string>("");
  const SelectField = styled(Select)({
    width: "100%",
    fontSize: "14px",
    textAlign: "start",
    fontFamily: "Inter",
    height: "40px",
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#C1C4CD",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#253378",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#C1C4CD",
    },
  });
  const valueChange = (event: any) => {
    setSelectValue(event.target.value);
  };
  return (
    <SelectField
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectValue}
      label="Age"
      onChange={(e) => valueChange(e)}
    >
      {selectData &&
        selectData.length > 0 &&
        selectData.map((value, index) => {
          return (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          );
        })}
    </SelectField>
  );
};

export default SelectBox;