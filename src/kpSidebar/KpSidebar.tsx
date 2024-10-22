import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Drawer,
  styled,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ICONS, Icon, IconType } from "../kpIcons/KpIcon";
import { Link, useLocation } from "react-router-dom";
import "../fonts/fonts.css";
import "./KpSidebar.css";
import KpSidebarMenu from "./KpSidebarMenu";

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

interface IGroupDetails {
  groupId: number;
  currentGroupItemId: number;
  completedGroupItemId: number;
  uniqueValue: string;
}

export interface IGroupItem {
  id: number;
  content: string;
  url: string;
}

export interface IGroup {
  id: number;
  groupName: string;
  color: "#666C7F" | "#5FA562";
  groupItems: IGroupItem[];
}

export interface subItems {
  id: number;
  listIcon?: JSX.Element;
  listText: string;
  active?: boolean;
  url?: string;
  group?: IGroup;
}

export interface listItem {
  id: number;
  listIcon?: JSX.Element;
  listText: string;
  subItems?: subItems[] | undefined;
  active?: boolean;
  url?: string;
  group?: IGroup;
}

export interface SidebarProps {
  /**
   * Sidebar Title String value
   */
  title?: string;
  /**
   * listItems this should be a JSX.Eliment
   */
  listItems?: listItem[];
  /**
   * Sidebar Footer String value or JSX.Element
   */
  footer?: JSX.Element | string;
  /**
   * Sidebar Background color String value
   */
  backGroundColor?: string;
  /**
   * Menu Active Color this Object is a String value
   */
  activeMenuColor?: string;
  /**
   * Item Onclick Function
   */
  onClick?: (id: number) => void;
  /**
   * Sidbar toggle click function
   * */
  sidbarToggleClick?: (value?: boolean) => boolean | void | undefined;

  groupDetails?: IGroupDetails;

  sidebarHeight?: string;
  // allow sidebar with menu
  isMenuSideBar?: boolean;

  // current route;
  currentRoute?: string;

  //menu rout change
  onMenuRouteChange?: (
    path: string,
    setMenu: Dispatch<SetStateAction<IMenuItem[] | undefined>>
  ) => void;

  // Parent item index which owns the current subitem.
  activeParentSubitemIndex?: number;

  // Prevent the collapse behavior of sub items when selecting other menu item
  preventCollapseOnSelect?: boolean;

  /**
   * Primary UI component hide menu text
   */
  hideText?: boolean;

  /**
   * Primary UI component onHover menu text
   */
  onHoverText?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const KpSidebar: React.FC<SidebarProps> = ({
  listItems,
  title,
  footer,
  activeMenuColor,
  backGroundColor,
  sidebarHeight,
  sidbarToggleClick,
  onClick,
  isMenuSideBar = false,
  currentRoute = "/",
  onMenuRouteChange,
  preventCollapseOnSelect,
  hideText,
  onHoverText,
  ...props
}) => {
  //if (listItems && listItems?.length === 0) return null;

  const [open, setOpen] = useState<boolean>(true);
  const [openSubItem, setOpenSubItem] = useState<boolean>(false);
  const [subItemIndex, setSubItemIndex] = useState<number | null>(null);
  const [openedSubItems, setOpenedSubItems] = useState<number[]>([]);

  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    sessionStorage.removeItem("openedSubItems");
  }, []);
  useEffect(() => {
    listItems?.forEach((data: listItem, index: number) => {
      setActiveParentItemIndex(data, index);
    });
  }, [listItems]);

  const location = useLocation();

  // Checks for active sub-items. If any sub-item is active, it sets the parent's index as selected.
  const setActiveParentItemIndex = (
    dataObject: listItem,
    parentIndex: number
  ) => {
    if (
      "subItems" in dataObject &&
      dataObject.subItems?.find((item) => item.active)
    ) {
      onSubitemClick(parentIndex);
      setOpenedSubItems((prevState) => [...prevState, parentIndex]);
      const sessionStorageArray = sessionStorage.getItem("openedSubItems");
      const storedArray = sessionStorageArray
        ? [...JSON.parse(sessionStorageArray), parentIndex]
        : [];
      sessionStorage.setItem("openedSubItems", JSON.stringify(storedArray));
    }
  };
  const toggleSlider = () => {
    setOpen(!open);
    sidbarToggleClick && sidbarToggleClick(!open);
  };

  const handleListItemClick = (event: any, listItem: listItem) => {
    if (listItem.group) {
      setSelectedGroup(listItem.id);
    } else {
      setSelectedGroup(0);
      setSelectedItem(listItem.id);
    }
    localStorage.setItem("selectedItem", JSON.stringify(listItem.id));
    onClick && onClick(listItem.id);
  };

  const onSubitemClick = (index: number) => {
    if (preventCollapseOnSelect) {
      if (!openedSubItems.includes(index)) {
        setOpenedSubItems((prevState) => {
          const newState = [...prevState, index];
          sessionStorage.setItem("openedSubItems", JSON.stringify(newState));
          return newState;
        });
      } else {
        setOpenedSubItems((prevState) => {
          const newState = prevState.filter((item) => item !== index);
          sessionStorage.setItem("openedSubItems", JSON.stringify(newState));
          return newState;
        });
      }
    } else {
      if (subItemIndex === index) {
        setOpenSubItem(!openSubItem);
      } else {
        setOpenSubItem(true);
      }
      setSubItemIndex(index);
    }
  };

  const subMenuStyle = () => {
    return {
      backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
      display: "block",
    };
  };

  const listItemTextStyle = (isSelected: boolean) => {
    if (isSelected)
      return {
        fontWeight: "700",
        color: "#1E2332",
      };
    else
      return {
        fontWeight: "400",
        color: "#666C7F",
      };
  };

  const subItems = (sublistItems: subItems[], index: number) => {
    const openedSubItemsJson = sessionStorage.getItem("openedSubItems");
    const openedSubItems = openedSubItemsJson
      ? JSON.parse(openedSubItemsJson)
      : [];
    const getRenderConditions = (): boolean => {
      if (preventCollapseOnSelect) {
        return openedSubItems.includes(index);
      }
      return subItemIndex === index && openSubItem;
    };
    return (
      <>
        {getRenderConditions() && (
          <Box
            component="div"
            style={{ ...subMenuStyle() }}
            className={!open && hideText ? "hide-SubMenu-list" : ""}
          >
            <List>
              {sublistItems &&
                sublistItems.map((listItem: listItem, index: number) => {
                  return (
                    <>
                      <ListItem
                        sx={{ paddingTop: "0px" }}
                        {...props}
                        key={index}
                      >
                        {listItem.url ? (
                          <ListItemButton
                            to={listItem.url}
                            component={Link}
                            sx={
                              (location.pathname === listItem.url &&
                                listItem.id === selectedItem) ||
                              listItem?.active
                                ? {
                                    backgroundColor: "white",
                                    borderRadius: "6px",
                                    ":hover": {
                                      borderRadius: "6px",
                                      backgroundColor: "white",
                                    },
                                  }
                                : {
                                    ":hover": {
                                      borderRadius: "6px",
                                    },
                                  }
                            }
                            onClick={(event) =>
                              handleListItemClick(event, listItem)
                            }
                            className={
                              !open && hideText ? "hide-SideMenu-text" : ""
                            }
                          >
                            {listItem && listItem.listIcon && (
                              <>
                                <ListItemText
                                  sx={{
                                    paddingLeft: listItem.listIcon
                                      ? "0px"
                                      : "0px",
                                    marginRight: "20px",
                                    marginBottom: "0px",
                                    marginLeft: listItem.listIcon
                                      ? "20px"
                                      : "-20px",
                                  }}
                                  primaryTypographyProps={listItemTextStyle(
                                    (location.pathname === listItem.url &&
                                      listItem.id === selectedItem) ||
                                      !!listItem.active
                                  )}
                                  primary={
                                    listItem.listText.length !== 0
                                      ? listItem.listText
                                      : "Item Name"
                                  }
                                  className={
                                    !open && hideText
                                      ? "hide-SideMenu-text"
                                      : ""
                                  }
                                />
                              </>
                            )}
                          </ListItemButton>
                        ) : (
                          <>
                            {listItem && listItem.listIcon && (
                              <span>{listItem.listIcon}</span>
                            )}
                            {listItem && (
                              <span
                                className={
                                  !open && hideText ? "hide-SideMenu-text" : ""
                                }
                              >
                                {listItem.listText.length !== 0
                                  ? listItem.listText
                                  : "Item Name"}
                              </span>
                            )}
                          </>
                        )}
                      </ListItem>
                      {listItem.group && (
                        <Box
                          sx={{
                            display:
                              listItem.group.id === selectedGroup
                                ? "block"
                                : "none",
                            backgroundColor: "white",
                            padding: "8px 16px",
                            margin: "8px 0px",
                            borderRadius: "6px",
                            userSelect: "none",
                          }}
                        >
                          <Box sx={{ textAlign: "center", margin: "16px 0px" }}>
                            {listItem.group.groupName.length !== 0
                              ? listItem.group.groupName
                              : "Group Name"}
                          </Box>
                          {listItem.group.groupItems.map((groupItem, index) => {
                            return (
                              <Box
                                key={index}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  backgroundColor:
                                    groupItem.url === location.pathname
                                      ? "#F4F4F6"
                                      : "",
                                  gap: "8px",
                                  padding: "8px 16px",
                                  marginBottom: "8px",
                                  borderRadius: "6px",
                                  marginLeft: "32px",
                                }}
                              >
                                <Box
                                  sx={{
                                    backgroundColor:
                                      groupItem.url === location.pathname
                                        ? listItem.group?.color
                                        : "",
                                    border:
                                      groupItem.url === location.pathname
                                        ? ""
                                        : "1px solid #1E2332",
                                    color:
                                      groupItem.url === location.pathname
                                        ? "white"
                                        : "#1E2332",
                                    width: "24px",
                                    height: "24px",
                                    padding: "2px 7px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "12px",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                  }}
                                  className={
                                    !open && hideText
                                      ? "hide-SideMenu-text"
                                      : ""
                                  }
                                >
                                  {groupItem.id}
                                </Box>
                                <Box sx={{ marginTop: "2px" }}>
                                  {groupItem.content}
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                      )}
                    </>
                  );
                })}
            </List>
          </Box>
        )}
      </>
    );
  };

  const footerCss = () => {
    return {
      fontSize: "12px",
      lineHeight: "18px",
      backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
      width: "250px",
      marginLeft: open ? "0" : "-235px",
      padding: "0 15px",
      boxSizing: "border-box",
      fontFamily: "Inter",
    };
  };

  const SideBarComponent = styled(Box)({
    flex: 1,
    backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
    width: !open && hideText ? "78px" : "250px",
    marginLeft: !open && hideText ? "0px" : open ? "0" : "-235px",
    padding: "0 15px",
    boxSizing: "border-box",
    fontFamily: "Inter",
  });
  const getRenderConditionsForArrowIcons = (index: number): boolean => {
    const openedSubItemsJson = sessionStorage.getItem("openedSubItems");
    const openedSubItems = openedSubItemsJson
      ? JSON.parse(openedSubItemsJson)
      : [];
    if (preventCollapseOnSelect) {
      return openedSubItems.includes(index);
    }
    return subItemIndex === index && openSubItem;
  };
  const sideList = () => (
    <>
      {!open ? (
        <IconButton
          onClick={toggleSlider}
          style={{
            background: "transparent",
            position: "absolute",
            right: "-27px",
            top: "15px",
          }}
        >
          <Icon
            color="#fff"
            iconName="SVG-chevronRight"
            iconSize={2}
            side="left"
            type={IconType.SVG}
          />
        </IconButton>
      ) : (
        <IconButton
          onClick={toggleSlider}
          style={{
            background: "transparent",
            position: "absolute",
            right: "-27px",
            top: "15px",
          }}
        >
          <Icon
            color="#fff"
            iconName="SVG-chevronLeft"
            iconSize={2}
            side="left"
            type={IconType.SVG}
          />
        </IconButton>
      )}
      <SideBarComponent
        component="div"
        className={hideText ? "setMargin-top" : ""}
      >
        {title && !hideText && (
          <h3
            style={{
              color: "#666C7F",
              padding: "10px 16px",
              fontSize: "16px",
              letterSpacing: "0.15px",
            }}
          >
            {!open && hideText ? "" : title}
          </h3>
        )}
        {!isMenuSideBar ? (
          <List>
            {listItems &&
              listItems.map((listItem: listItem, index: number) => (
                <>
                  <ListItem
                    {...props}
                    key={index}
                    onClick={() => onSubitemClick(index)}
                    sx={{ padding: "0px", margin: "8px 0px" }}
                  >
                    {listItem.url ? (
                      <ListItemButton
                        to={listItem.url}
                        component={Link}
                        onClick={(event) =>
                          handleListItemClick(event, listItem)
                        }
                        sx={
                          (location.pathname === listItem.url &&
                            listItem.id === selectedItem) ||
                          listItem?.active
                            ? {
                                backgroundColor: "white",
                                borderRadius: "6px",
                                height: "40px",
                                ":hover": {
                                  borderRadius: "6px",
                                  backgroundColor: "white",
                                },
                              }
                            : {
                                ":hover": {
                                  borderRadius: "6px",
                                },
                                height: "40px",
                              }
                        }
                        className={
                          !open && hideText ? "hide-SideMenu-text" : ""
                        }
                      >
                        {listItem && (
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {listItem?.listIcon && (
                              <ListItemIcon sx={{ minWidth: "0px" }}>
                                <span className={`icon-wrapper ${!open && hideText && onHoverText
                                  ? "sideMenu-hover"
                                  : ""}`}>
                                  {listItem.listIcon}
                                  {!open && hideText && onHoverText && (
                                <span className="menuHover-Text">
                                  {listItem.listText.length !== 0
                                    ? listItem.listText
                                    : "Item Name"}
                                </span>
                              )}
                                </span>
                              </ListItemIcon>
                            )}
                            <ListItemText
                              primary={
                                listItem.listText.length !== 0
                                  ? listItem.listText
                                  : "Item Name"
                              }
                              primaryTypographyProps={listItemTextStyle(
                                (location.pathname === listItem.url &&
                                  listItem.id === selectedItem) ||
                                  !!listItem.active
                              )}
                              className={!open && hideText ? "hide-text" : ""}
                            />
                          </Box>
                        )}
                        {listItem && listItem.subItems && (
                          <span
                            style={{
                              position: "absolute",
                              right: "0",
                              top: "10px",
                            }}
                          >
                            <Icon
                              color={listItem.active ? "#1E2332" : "#666C7F"}
                              iconName={
                                getRenderConditionsForArrowIcons(index)
                                  ? ICONS.ARROWTOP
                                  : ICONS.ARROWDOWN
                              }
                              iconSize={1.5}
                              side="left"
                              type={IconType.MUI}
                            />
                          </span>
                        )}
                      </ListItemButton>
                    ) : (
                      <Box
                        sx={{
                          padding: "8px 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {listItem && listItem.listIcon && (
                          <>
                            <span
                              className={
                                !open && hideText && onHoverText
                                  ? "sideMenu-hover"
                                  : ""
                              }
                            >
                              {listItem.listIcon}
                              {!open && hideText && onHoverText && (
                                <span className="menuHover-Text">
                                  {listItem.listText.length !== 0
                                    ? listItem.listText
                                    : "Item Name"}
                                </span>
                              )}
                            </span>
                          </>
                        )}
                        {listItem && (
                          <span
                            style={{
                              marginLeft: `${
                                listItem.listIcon ? "0px" : "32px"
                              }`,
                              fontSize: "14px",
                              color: "#666C7F",
                              lineHeight: "21px",
                            }}
                            className={
                              !open && hideText ? "hide-SideMenu-text" : ""
                            }
                          >
                            {listItem.listText.length !== 0
                              ? listItem.listText
                              : "Item Name"}
                          </span>
                        )}
                        {listItem && listItem.subItems && (
                          <span
                            style={{ position: "absolute", right: "0" }}
                            className={
                              !open && hideText ? "hide-SideMenu-text" : ""
                            }
                          >
                            <Icon
                              color={listItem.active ? "#1E2332" : "#666C7F"}
                              iconName={
                                getRenderConditionsForArrowIcons(index)
                                  ? ICONS.ARROWTOP
                                  : ICONS.ARROWDOWN
                              }
                              iconSize={1.5}
                              side="left"
                              type={IconType.MUI}
                            />
                          </span>
                        )}
                      </Box>
                    )}
                  </ListItem>
                  {listItem &&
                    listItem.subItems &&
                    subItems(listItem.subItems, index)}
                  {listItem.group && (
                    <Box
                      sx={{
                        display:
                          listItem.group.id === selectedGroup
                            ? "block"
                            : "none",
                        backgroundColor: "white",
                        padding: "8px 16px",
                        margin: "8px 0px",
                        borderRadius: "6px",
                        userSelect: "none",
                      }}
                    >
                      <Box sx={{ margin: "16px 0px", marginLeft: "32px" }}>
                        {listItem.group.groupName.length !== 0
                          ? listItem.group.groupName
                          : "Group Name"}
                      </Box>
                      {listItem.group.groupItems.map((groupItem, index) => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor:
                                groupItem.url === location.pathname
                                  ? "#F4F4F6"
                                  : "",
                              gap: "8px",
                              padding: "8px 16px",
                              marginBottom: "8px",
                              borderRadius: "6px",
                              marginLeft: "32px",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor:
                                  groupItem.url === location.pathname
                                    ? listItem.group?.color
                                    : "",
                                border:
                                  groupItem.url === location.pathname
                                    ? ""
                                    : "1px solid #1E2332",
                                color:
                                  groupItem.url === location.pathname
                                    ? "white"
                                    : "#1E2332",
                                width: "24px",
                                height: "24px",
                                padding: "2px 7px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "12px",
                                fontSize: "14px",
                                fontWeight: "700",
                              }}
                            >
                              {groupItem.id}
                            </Box>
                            <Box sx={{ marginTop: "2px", fontWeight: "700" }}>
                              {groupItem.content}
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </>
              ))}
          </List>
        ) : (
          <KpSidebarMenu
            currentRoute={currentRoute}
            open={open}
            onRouteChange={function (
              path: string,
              setMenu: React.Dispatch<
                React.SetStateAction<IMenuItem[] | undefined>
              >
            ): void {
              onMenuRouteChange && onMenuRouteChange(path, setMenu);
            }}
          />
        )}
      </SideBarComponent>
      <div style={{ ...(footerCss() as any) }}>{footer && footer}</div>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      anchor="left"
      onClose={toggleSlider}
      sx={{
        backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
        "& .MuiDrawer-root": {
          position: "absolute",
        },
        "& .MuiPaper-root": {
          position: "absolute",
        },
        height: sidebarHeight,
      }}
      className="custom-sidebar"
    >
      <>{sideList()}</>
    </Drawer>
  );
};
