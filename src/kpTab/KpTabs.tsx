import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

export interface TabDataObject {
  /**
   * Title
   */
  tabLable: string;
  /**
   * status
   */
  disabled: boolean;
  /**
   * Title
   */
  tabCode: string;

  tabContent: null | JSX.Element;
  /**
   *  Custom Icons
   */
  icons?: null | JSX.Element;
  /**
   * Icon position MUI string Value
   */
  iconPosition?: "bottom" | "top" | "end" | "start";
}

interface TabsProps {
  /**
   * tasDataArray
   */
  tabsDataArray?: TabDataObject[];
  currentTab?: string;
}

export const tabJsxElement = (word: string) => {
  return <Typography sx={{ fontFamily: "Inter" }}>{word}</Typography>;
};

export const tabImageJSX = () => {
  return <PhoneMissedIcon />;
};

/**
 * Primary UI component for user interaction
 */
export const KpTabs = ({ tabsDataArray, ...props }: TabsProps) => {
  const data = tabsDataArray || [];
  const [value, setValue] = React.useState(props.currentTab || "1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const TabComponent = styled(Tab)({
    fontSize: "14px",
    fontFamily: "Inter",
    height: "21px",
    padding: "0 7.5px",
    maxWidth: "200px",
    textTransform: "none",
    color: "#151D44",
    "&.Mui-selected": {
      fontSize: "14px",
      fontFamily: "Inter",
      color: "#151D44",
      fontWeight: 600,
    },
  });

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#151D44",
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {data &&
                data.map((item) => (
                  <TabComponent
                    disabled={item.disabled}
                    label={item.tabLable}
                    key={item.tabCode}
                    value={item.tabCode}
                    icon={item?.icons ? item?.icons : ""}
                    iconPosition={
                      item?.iconPosition ? item?.iconPosition : "end"
                    }
                  />
                ))}
            </TabList>
          </Box>
          {data &&
            data.map((item) => (
              <TabPanel value={item.tabCode} key={item.tabCode}>
                {item.tabContent}
              </TabPanel>
            ))}
        </TabContext>
      </Box>
    </>
  );
};
