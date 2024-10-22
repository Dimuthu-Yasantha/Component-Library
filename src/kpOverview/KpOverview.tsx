import {useState} from "react";
import {InputLabel, styled, Typography} from "@mui/material";
import { Icon, IconType } from "../kpIcons/KpIcon";
import Stack from "@mui/material/Stack";

export interface Overview {
  // type: string;
  stepper?: boolean;
  title: string;
  content: string;
  contentLength: number;
  contentDismissible: string;
  navigationText?: string;
  navigationIcon?: string | null | JSX.Element;
  onNavPress?: () => void;
  iconType: IconType;
  withNavigation: boolean;
  showActionButton: boolean;
  onActionBtnClick?: (title: string) => void;
  actionBtnText?: string;
}

const TitleLabel = styled(InputLabel)({
  fontSize: "32px",
  fontWeight: 500,
  lineHeight: "38.19px",
  color: "#1E2332",
  fontFamily: "Inter"
});

const DismissOverview = styled(InputLabel)({
  color: "#253378",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
  textDecoration: "underline",
  textDecorationColor: "#253378",
  marginTop: "16px",
  cursor: 'pointer',
  fontFamily: "Inter"
});

const ContentData = styled(Typography)({
  display: "flex",
  fontSize: "16px",
  color: "#1E2332",
  lineHeight: "21px",
  fontWeight: 400,
  alignItems: "center",
  marginTop: "8px",
  fontFamily: "Inter"
});

const TextControllerExpand = styled(InputLabel)({
  color: "#253378",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
  textDecoration: "underline",
  textDecorationColor: "#253378",
  cursor: 'pointer',
  fontFamily: "Inter"
});

const TextControllerCollapse = styled(InputLabel)({
  color: "#253378",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
  textDecoration: "underline",
  textDecorationColor: "#253378",
  cursor: 'pointer',
  fontFamily: "Inter",
});

const NavWrapper = styled('div')({
    display: 'table',
    cursor: 'pointer',
})

const NavIcon = styled(Icon)({
    color: "#243173",
    display: "table-cell",
    verticalAlign: "middle"
})

const NavText = styled(Typography)({
    color: "#243173",
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '21px',
    fontFamily: "Inter",
    display: "table-cell",
    verticalAlign: "middle",
})

export const KpOverview = ({
  // type,
  stepper,
  title,
  content,
  contentLength,
  contentDismissible,
  navigationText,
  navigationIcon,
  iconType,
  onNavPress,
  withNavigation,
  showActionButton = true,
  onActionBtnClick,
  actionBtnText,
  ...props
}: Overview) => {
  const [isExpanded, setExpand] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const onBtnClick = () => {
    if (typeof onNavPress !== 'undefined') {
      onNavPress();
    }
  };
  return (
    <>
      {
        withNavigation &&
        <NavWrapper onClick={onBtnClick}>
          <NavIcon iconName={navigationIcon as any} type={iconType} color="#243173"/>
          <NavText>{navigationText}</NavText>
        </NavWrapper>
      }
      <Stack direction="row" spacing={4} mt={1} mr={3} sx={{alignItems: "center"}}>
      <TitleLabel>{title}</TitleLabel>
        {showActionButton &&
            <NavText sx={{cursor: 'pointer', textTransform: "uppercase", alignItems: "right"}} onClick={(e) => onActionBtnClick?.(title)}>{actionBtnText}</NavText>
       }
      </Stack>
      {!dismiss && (
        <>
          {content.length > contentLength ? (
            <>
              {!isExpanded ? (
                <>
                  <ContentData>{content.slice(0, contentLength)}</ContentData>
                  <TextControllerExpand onClick={() => setExpand(true)}>
                    Expand content
                  </TextControllerExpand>
                </>
              ) : (
                <>
                  <ContentData>{content}</ContentData>
                  <TextControllerCollapse onClick={() => setExpand(false)}>
                    Collapse content
                  </TextControllerCollapse>
                </>
              )}
            </>
          ) : (
            <>
              <ContentData>{content}</ContentData>
            </>
          )}
        </>
      )}
      {!dismiss && contentDismissible !== "" && (
        <DismissOverview onClick={() => setDismiss(true)}>
          {contentDismissible}
        </DismissOverview>
      )}
    </>
  );
};
