import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { KpButton } from "../kpButton/KpButton";
import SelectBox from "./selectBox";
import { FormControlLabel, styled } from "@mui/material";

interface dataTypes {
  label: string;
  dataValues: string[];
}

interface filterData {
  section: string;
  sectionData?: dataTypes[];
}

interface IFilter {
  /**
   * Filter data Array values?
   */
  filterData: filterData[] | [];
  /**
   * Filter save button label names?
   */
  saveButtonLabel: string;
  /**
   * Filter cancel button label names?
   */
  cancelButtonLabel: string;
}

export const KpFilter: React.FC<IFilter> = ({
  filterData,
  saveButtonLabel,
  cancelButtonLabel,
}) => {
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

  const CheckBoxValue = styled(Checkbox)({
    color: "#C1C4CD",
    "&.Mui-checked": {
      color: "#253378",
    },
  });

  const CheckBoxWrapper = styled(FormControlLabel)({
    color: "#1E2332",
    fontSize: "14px",
  });

  const logoStyles = {
    width: "303px",
    boxShadow: "1px -1px 50px -14px rgba(0,0,0,0.17)",
    padding: "20px",
    borderRadius: "5px",
    overflow: "hidden",
  };

  return (
    <div style={logoStyles}>
      {filterData &&
        filterData.length > 0 &&
        filterData.map((item, index) => {
          return (
            <div key={index}>
              <CheckBoxWrapper
                control={<CheckBoxValue />}
                label={item?.section}
                sx={{marginTop: '15px'}}
              />
              {item?.sectionData &&
                item?.sectionData.length > 0 &&
                item?.sectionData.map((data, index) => {
                  return (
                    <div style={{ display: "block"}} key={index}>
                      <CheckBoxWrapper
                        control={<CheckBoxValue />}
                        label={data?.label}
                      />
                      {data?.dataValues && data?.dataValues.length > 0 && (
                        <SelectBox selectData={data?.dataValues} />
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}
      <div style={{ float: "right" }}>
        <KpButton
          buttonColor="Secondary"
          customStyle={{}}
          iconColor="#fff"
          label={cancelButtonLabel}
          leftIcon="Mode"
          leftIconSize={0.9}
          leftIconType="MUI"
          onClick={() => {}}
          rightIcon="ArrowForwardIos"
          rightIconSize={0.9}
          rightIconType="MUI"
          size="small"
          variant="Tertiary"
          disabled={false}
          hasLeftIcon={false}
          hasRightIcon={false}
        />
        <KpButton
          buttonColor="Secondary"
          customStyle={{}}
          iconColor="#fff"
          label={saveButtonLabel}
          leftIcon="Mode"
          leftIconSize={0.9}
          leftIconType="MUI"
          onClick={() => {}}
          rightIcon="ArrowForwardIos"
          rightIconSize={0.9}
          rightIconType="MUI"
          size="small"
          variant="Tertiary"
          disabled={false}
          hasLeftIcon={false}
          hasRightIcon={false}
        />
      </div>
    </div>
  );
};
