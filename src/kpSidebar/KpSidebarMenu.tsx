import { Dispatch, SetStateAction, useEffect, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IMenuItem {
  id: string;
  title: string;
  isParent: boolean;
  link: string;
  isGroupItem: boolean;
  isGroupParent: boolean;
  isBackAllow: boolean;
  icon?: React.ReactNode;
  isCompletedStep?: boolean;
  isCurrentStep: boolean;
}

export default function KpSidebarMenu({
  currentRoute,
  open,
  onRouteChange,
}: {
  currentRoute: string;
  open: boolean;
  onRouteChange: (path: string, setMenu:  Dispatch<SetStateAction<IMenuItem[] | undefined>>) => void;
}) {
  const [menu, setMenu] = useState<IMenuItem[]>();
  const [isSideBarOpen, setIsSideBarOpen] = useState(open);
  const navigate = useNavigate();

  useEffect(() => {
    organizeMenu(currentRoute);
  }, [currentRoute]);

  const organizeMenu = (path: string) => {
    onRouteChange(path, setMenu);
  };

  const onMenuItemClick = (menuItem: IMenuItem) => {
    navigate(menuItem.link);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
     
      >
        {isSideBarOpen &&
          menu?.map((menuItem, index) => {
            return (
              <ListItemButton
                sx={{
                  backgroundColor: menuItem.isCurrentStep ? "white" : "",
                  pointerEvents: menuItem.isGroupItem ? "none" : "",
                  borderRadius: "6px",
                  marginRight: "10px",
                  marginLeft: "10px",
                  marginBottom: "6px",
                }}
                onClick={() => onMenuItemClick(menuItem)}
                key={menuItem.id}
              >
                {/*  menu item icon */}
                {menuItem.icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      opacity:
                        menuItem.isGroupItem &&
                        !menuItem.isCompletedStep &&
                        !menuItem.isCurrentStep
                          ? "0.2"
                          : "1",
                    }}
                  >
                    {menuItem.icon}
                  </ListItemIcon>
                )}

                {/* group item step */}
                {menuItem.isGroupItem && (
                  <Box
                    sx={{
                      marginRight: "1rem",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor:
                        menuItem.isCompletedStep && index !== 4
                          ? "#666C7F"
                          : "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                      color:
                        menuItem.isCompletedStep && index !== 4
                          ? "#fff"
                          : "#1E2332",
                      border:
                        menuItem.isCompletedStep && index !== 4
                          ? ""
                          : "1px solid #1E2332",
                      opacity:
                        menuItem.isGroupItem &&
                        !menuItem.isCompletedStep &&
                        !menuItem.isCurrentStep
                          ? "0.2"
                          : "1",
                    }}
                  >
                    {index}
                  </Box>
                )}

                {/*   menu icon text */}
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: menuItem.isCurrentStep
                      ? "700 !important"
                      : "400 !important",
                  }}
                  sx={{
                    color: "black",
                    opacity:
                      menuItem.isGroupItem &&
                      !menuItem.isCompletedStep &&
                      !menuItem.isCurrentStep
                        ? "0.2"
                        : "1",
                  }}
                  primary={menuItem.title}
                />

                {/*   parent menu item forward arrow */}
                {menuItem.isParent && !menuItem.isBackAllow && (
                  <ListItemIcon sx={{ marginLeft: "6rem" }}>
                    <ArrowForwardIcon />
                  </ListItemIcon>
                )}
              </ListItemButton>
            );
          })}
      </List>
    </Box>
  );
}



