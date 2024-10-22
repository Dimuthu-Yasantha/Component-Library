import React from "react";
import {
  Add,
  Mode,
  Delete,
  ArrowBackIos,
  ArrowBack,
  ArrowForward,
  ArrowForwardIos,
  Error,
  ErrorOutline,
  ReportGmailerrorred,
  WarningAmber,
  Inventory,
  Inventory2Outlined,
  NotificationsNoneOutlined,
  InsertInvitationOutlined,
  DoDisturbOutlined,
  CheckCircleOutline,
  CheckCircle,
  Check,
  KeyboardDoubleArrowLeftOutlined,
  KeyboardDoubleArrowRightOutlined,
  KeyboardArrowDownOutlined,
  KeyboardControlKeyOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  KeyboardArrowUpOutlined,
  Circle,
  Cancel,
  HighlightOffOutlined,
  SettingsOutlined,
  CreditCardOutlined,
  MoreHorizOutlined,
  MoreVertOutlined,
  DownloadOutlined,
  SentimentVerySatisfiedOutlined,
  SentimentSatisfiedOutlined,
  SentimentNeutralOutlined,
  VisibilityOutlined,
  CardGiftcardOutlined,
  HelpOutlineOutlined,
  InfoOutlined,
  SearchOutlined,
  MenuOutlined,
  RemoveOutlined,
  StarPurple500Outlined,
  StarBorderPurple500Outlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
  UnfoldMoreOutlined,
  UploadOutlined,
  CloseOutlined,
  UnfoldLessOutlined,
  GroupsOutlined,
  PersonSearchOutlined,
  RestartAlt,
} from "@mui/icons-material";
import {
  Atom,
  Clock,
  EmoConfused,
  EmoCry,
  FilterOutline,
  FinanceOutline,
  HandShake,
  ShieldAccount,
  TextBoxEdit,
  TrashICon,
  ReloadIcon,
  AddAccount,
  LockAccount,
  BellHornIcon,
  ChevronLeft,
  ChevronRight,
  Summary,
  Analytics,
  BullHorn,
  UserLock,
  Ignite,
  Pulse,
  Amplify,
  Reporting,
  PlatformFaceBook,
  PlatformBing,
  PlatformGoogleAds,
  Inspire,
  KPIIcons,
  CustomerTrends,
  CustomerFlows,
  Diagnose,
  Scheduler,
} from "../assets/svg";

export enum IconType {
  MUI = "MUI",
  SVG = "SVG",
}

export interface IconProps {
  /**
   * This Icon should be a string value.
   */
  iconName: string;
  /**
   * Icon size should be a number. This icon size is only applied to MUI Icons.
   */
  iconSize?: number;
  /**
   * The icon side should be a string value. This value should be right or left.
   */
  side?: string;
  /**
   * The color should be a string value.
   */
  color?: string;
  /**
   * The icon type should be a MUI or SVG. All the SVG icons an names should be started with an SVG-Icon name.
   */
  type: IconType | string;
}

export enum IconSide {
  LEFtSIDE = "left",
  RIGHTSIDE = "right",
}

export enum ICONS {
  ADD = "Add",
  CREATEICON = "Mode",
  DELETE = "Delete",
  ARROWBACKIOS = "ArrowBackIos",
  ARROWBACK = "ArrowBack",
  ARROWFORWARD = "ArrowForward",
  ARROWFORWARDIOS = "ArrowForwardIos",
  ERROR = "Error",
  ERROROUTLINE = "ErrorOutline",
  REPORTGMAILERROR = "ReportGmailerrorred",
  WARNINGAMBER = "WarningAmber",
  INVENTORY = "Inventory",
  INVENTORYOUTLINE = "Inventory2Outlined",
  NOTIFICATIONOUTLINE = "NotificationsNoneOutlined",
  INVITATION = "InsertInvitationOutlined",
  ATOM = "SVG-Atom",
  CANCELICON = "DoDisturbOutlined",
  CHECKOUTLINE = "CheckCircleOutline",
  CHECKCIRCLE = "CheckCircle",
  CHECK = "Check",
  DOUBLEARROWLEFT = "KeyboardDoubleArrowLeftOutlined",
  DOUBLEARROWRIGHT = "KeyboardDoubleArrowRightOutlined",
  ARROWDOWN = "KeyboardArrowDownOutlined",
  ARROWTOP = "KeyboardControlKeyOutlined",
  ARROWLEFT = "KeyboardArrowLeftOutlined",
  ARROWRIGHT = "KeyboardArrowRightOutlined",
  ARROWUP = "KeyboardArrowUpOutlined",
  CIRCLE = "Circle",
  CLOCK = "SVG-Clock",
  CANCEL = "Cancel",
  CANCELOUTLINE = "HighlightOffOutlined",
  SETTINGSICON = "SettingsOutlined",
  CREDITCARD = "CreditCardOutlined",
  DOTSHORIZOUTLINE = "MoreHorizOutlined",
  DOTSVERTLINE = "MoreVertOutlined",
  DOWNLOADICON = "DownloadOutlined",
  EMOCONFUSED = "SVG-EmoConfused",
  EMOCRY = "SVG-EmoCry",
  EMOEXCITED = "SentimentVerySatisfiedOutlined",
  EMOSATISFIED = "SentimentSatisfiedOutlined",
  EMONEUTRAL = "SentimentNeutralOutlined",
  VISIBILITY = "VisibilityOutlined",
  FILTEROUTLINE = "SVG-FilterOutline",
  FINANCEOUTLINE = "SVG-FinanceOutline",
  GIFTCARD = "CardGiftcardOutlined",
  HANDSHAKE = "SVG-HandShake",
  HELPCERCLE = "HelpOutlineOutlined",
  RESETICON = 'RestartAlt',
  INFOOUTLINE = "InfoOutlined",
  SEARCHIOCN = "SearchOutlined",
  MENUOUTLINE = "MenuOutlined",
  REMOVEICON = "RemoveOutlined",
  PERSONSEARCH = "PersonSearchOutlined",
  SHIELDACCOUNT = "SVG-ShieldAccount",
  STARICON = "StarPurple500Outlined",
  STARICONPLUS = "StarBorderPurple500Outlined",
  TEXTBOXEDIT = "SVG-TextBoxEdit",
  THUMBDOWN = "ThumbDownAltOutlined",
  THUMBUP = "ThumbUpAltOutlined",
  TRASHICON = "SVG-TrashICon",
  UNFOLDMORE = "UnfoldMoreOutlined",
  UPLOADICON = "UploadOutlined",
  WINDOWCLOSE = "CloseOutlined",
  RELOADICON = "SVG-ReloadIcon",
  UNFOLDLESSICON = "UnfoldLessOutlined",
  GROUPOUTLINE = "GroupsOutlined",
  ADDACCOUNT = "SVG-AddAccount",
  LOCKACCOUNT = "SVG-LockAccount",
  BELLHORNICON = "SVG-BellHornIcon",
  CHEVRONLEFT = "SVG-chevronLeft",
  CHEVRONRIGHT = "SVG-chevronRight",
  SUMMARY = "SVG-summary",
  ANALYTICS = "SVG-analytics",
  BULLHORN = "SVG-bullHorn",
  USERLOCK = "SVG-UserLock",
  IGNITE = "SVG-Ignite",
  PULSE = "SVG-Pulse",
  AMPLIFY = "SVG-Amplify",
  REPORTING = "SVG-Reporting",
  PLATFORMFACEBOOK = "SVG-PlatformFaceBook",
  PLATFORMBING = "SVG-PlatformBing",
  PLATFORMGOOGLEADS = "SVG-PlatformGoogleAds",
  INSPIRE = "SVG-Inspire",
  KPIICONS = "KPIIcons",
  CUSTOMERTRENDS = "CustomerTrends",
  CUSTOMERFLOWS = "CustomerFlows",
  DIAGNOSE = "Diagnose",
  SCHEDULER = "Scheduler",
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  iconSize,
  side,
  color,
  type,
}) => {
  const customStyle = () => {
    if (side === IconSide.LEFtSIDE) {
      return {
        fontSize: iconSize && iconSize.toString() + "rem",
        marginRight: "8px",
        marginTop: "8px",
        color: color,
      };
    } else if (side === IconSide.RIGHTSIDE) {
      return {
        fontSize: iconSize && iconSize.toString() + "rem",
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "8px",
        color: color,
      };
    } else {
      return {
        fontSize: iconSize && iconSize.toString() + "rem",
        marginRight: "8px",
        marginTop: "8px",
        color: color,
      };
    }
  };

  const buttonIcon = (iconName: string) => {
    if (!iconName && type) return null;

    if (type === IconType.MUI) {
      switch (iconName) {
        case ICONS.ADD:
          return <Add fontSize="small" style={customStyle()} />;
        case ICONS.CREATEICON:
          return <Mode style={customStyle()} />;
        case ICONS.DELETE:
          return <Delete fontSize="small" style={customStyle()} />;
        case ICONS.ARROWBACKIOS:
          return <ArrowBackIos fontSize="small" style={customStyle()} />;
        case ICONS.ARROWBACK:
          return <ArrowBack fontSize="small" style={customStyle()} />;
        case ICONS.ARROWFORWARD:
          return <ArrowForward fontSize="small" style={customStyle()} />;
        case ICONS.ARROWFORWARDIOS:
          return <ArrowForwardIos fontSize="small" style={customStyle()} />;
        case ICONS.ERROR:
          return <Error fontSize="small" style={customStyle()} />;
        case ICONS.ERROROUTLINE:
          return <ErrorOutline fontSize="small" style={customStyle()} />;
        case ICONS.REPORTGMAILERROR:
          return <ReportGmailerrorred fontSize="small" style={customStyle()} />;
          case ICONS.RESETICON:
            return <RestartAlt fontSize="small" style={customStyle()} />;  
        case ICONS.WARNINGAMBER:
          return <WarningAmber fontSize="small" style={customStyle()} />;
        case ICONS.INVENTORY:
          return <Inventory fontSize="small" style={customStyle()} />;
        case ICONS.INVENTORYOUTLINE:
          return <Inventory2Outlined fontSize="small" style={customStyle()} />;
        case ICONS.NOTIFICATIONOUTLINE:
          return (
            <NotificationsNoneOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.INVITATION:
          return (
            <InsertInvitationOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.CANCELICON:
          return <DoDisturbOutlined fontSize="small" style={customStyle()} />;
        case ICONS.CHECK:
          return <Check fontSize="small" style={customStyle()} />;
        case ICONS.CHECKOUTLINE:
          return <CheckCircleOutline fontSize="small" style={customStyle()} />;
        case ICONS.CHECKCIRCLE:
          return <CheckCircle fontSize="small" style={customStyle()} />;
        case ICONS.DOUBLEARROWLEFT:
          return (
            <KeyboardDoubleArrowLeftOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.DOUBLEARROWRIGHT:
          return (
            <KeyboardDoubleArrowRightOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.ARROWDOWN:
          return (
            <KeyboardArrowDownOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.ARROWTOP:
          return (
            <KeyboardControlKeyOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.ARROWLEFT:
          return (
            <KeyboardArrowLeftOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.ARROWRIGHT:
          return (
            <KeyboardArrowRightOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.ARROWUP:
          return (
            <KeyboardArrowUpOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.CIRCLE:
          return <Circle fontSize="small" style={customStyle()} />;
        case ICONS.CANCEL:
          return <Cancel fontSize="small" style={customStyle()} />;
        case ICONS.CANCELOUTLINE:
          return (
            <HighlightOffOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.SETTINGSICON:
          return <SettingsOutlined fontSize="small" style={customStyle()} />;
        case ICONS.PERSONSEARCH:
          return (
            <PersonSearchOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.CREDITCARD:
          return <CreditCardOutlined fontSize="small" style={customStyle()} />;
        case ICONS.DOTSHORIZOUTLINE:
          return <MoreHorizOutlined fontSize="small" style={customStyle()} />;
        case ICONS.DOTSVERTLINE:
          return <MoreVertOutlined fontSize="small" style={customStyle()} />;
        case ICONS.DOWNLOADICON:
          return <DownloadOutlined fontSize="small" style={customStyle()} />;
        case ICONS.SEARCHIOCN:
          return <SearchOutlined fontSize="small" style={customStyle()} />;
        case ICONS.EMOEXCITED:
          return (
            <SentimentVerySatisfiedOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.EMOSATISFIED:
          return (
            <SentimentSatisfiedOutlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.EMONEUTRAL:
          return (
            <SentimentNeutralOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.VISIBILITY:
          return <VisibilityOutlined fontSize="small" style={customStyle()} />;
        case ICONS.GIFTCARD:
          return (
            <CardGiftcardOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.HELPCERCLE:
          return <HelpOutlineOutlined fontSize="small" style={customStyle()} />;
        case ICONS.INFOOUTLINE:
          return <InfoOutlined fontSize="small" style={customStyle()} />;
        case ICONS.MENUOUTLINE:
          return <MenuOutlined fontSize="small" style={customStyle()} />;
        case ICONS.REMOVEICON:
          return <RemoveOutlined fontSize="small" style={customStyle()} />;
        case ICONS.STARICON:
          return (
            <StarPurple500Outlined fontSize="small" style={customStyle()} />
          );
        case ICONS.STARICONPLUS:
          return (
            <StarBorderPurple500Outlined
              fontSize="small"
              style={customStyle()}
            />
          );
        case ICONS.THUMBDOWN:
          return (
            <ThumbDownAltOutlined fontSize="small" style={customStyle()} />
          );
        case ICONS.THUMBUP:
          return <ThumbUpAltOutlined fontSize="small" style={customStyle()} />;
        case ICONS.UNFOLDMORE:
          return <UnfoldMoreOutlined fontSize="small" style={customStyle()} />;
        case ICONS.UPLOADICON:
          return <UploadOutlined fontSize="small" style={customStyle()} />;
        case ICONS.WINDOWCLOSE:
          return <CloseOutlined fontSize="small" style={customStyle()} />;
        case ICONS.UNFOLDLESSICON:
          return <UnfoldLessOutlined fontSize="small" style={customStyle()} />;
        case ICONS.GROUPOUTLINE:
          return <GroupsOutlined fontSize="small" style={customStyle()} />;
      }
    } else {
      switch (iconName) {
        case ICONS.ATOM:
          return <Atom color={color} side={side} />;
        case ICONS.CLOCK:
          return <Clock color={color} side={side} />;
        case ICONS.EMOCONFUSED:
          return <EmoConfused color={color} side={side} />;
        case ICONS.EMOCRY:
          return <EmoCry color={color} side={side} />;
        case ICONS.FILTEROUTLINE:
          return <FilterOutline color={color} side={side} />;
        case ICONS.FINANCEOUTLINE:
          return <FinanceOutline color={color} side={side} />;
        case ICONS.HANDSHAKE:
          return <HandShake color={color} side={side} />;
        case ICONS.SHIELDACCOUNT:
          return <ShieldAccount color={color} side={side} />;
        case ICONS.TEXTBOXEDIT:
          return <TextBoxEdit color={color} side={side} />;
        case ICONS.TRASHICON:
          return <TrashICon color={color} side={side} />;
        case ICONS.RELOADICON:
          return <ReloadIcon color={color} side={side} />;
        case ICONS.ADDACCOUNT:
          return <AddAccount color={color} side={side} />;
        case ICONS.LOCKACCOUNT:
          return <LockAccount color={color} side={side} />;
        case ICONS.BELLHORNICON:
          return <BellHornIcon color={color} side={side} />;
        case ICONS.CHEVRONLEFT:
          return <ChevronLeft color={color} side={side} />;
        case ICONS.CHEVRONRIGHT:
          return <ChevronRight color={color} side={side} />;
        case ICONS.SUMMARY:
          return <Summary color={color} side={side} />;
        case ICONS.ANALYTICS:
          return <Analytics color={color} side={side} />;
        case ICONS.BULLHORN:
          return <BullHorn color={color} side={side} />;
        case ICONS.USERLOCK:
          return <UserLock color={color} side={side} />;
        case ICONS.IGNITE:
          return <Ignite color={color} side={side} />;
        case ICONS.PULSE:
          return <Pulse color={color} side={side} />;
        case ICONS.AMPLIFY:
          return <Amplify color={color} side={side} />;
        case ICONS.REPORTING:
          return <Reporting color={color} side={side} />;
        case ICONS.PLATFORMFACEBOOK:
          return <PlatformFaceBook color={color} side={side} />;
        case ICONS.PLATFORMBING:
          return <PlatformBing color={color} side={side} />;
        case ICONS.PLATFORMGOOGLEADS:
          return <PlatformGoogleAds color={color} side={side} />;
        case ICONS.INSPIRE:
          return <Inspire color={color} side={side} />;
        case ICONS.KPIICONS:
          return <KPIIcons color={color} side={side} />;  
        case ICONS.CUSTOMERTRENDS:
          return <CustomerTrends color={color} side={side} />;  
        case ICONS.CUSTOMERFLOWS:
          return <CustomerFlows color={color} side={side} />;    
        case ICONS.DIAGNOSE:
          return <Diagnose color={color} side={side} />;   
        case ICONS.SCHEDULER:
          return <Scheduler color={color} side={side} />;    
      }
    }
  };
  return <>{buttonIcon(iconName)}</>;
};
