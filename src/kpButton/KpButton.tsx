import { Button } from "@mui/material";
import { Icon, IconSide, IconType } from "../kpIcons/KpIcon";
import { styled } from "@mui/system";
import "../fonts/fonts.css";

export enum VARIANT {
  PRIMARY = "Primary",
  SECONDARY = "Secondary",
  TERTIARY = "Tertiary",
  TEXT = "Text",
}

export enum ButtonColor {
  PRIMARY = "Primary",
  SECONDARY = "Secondary",
}

interface ButtonProps {
  /**
   * Is this the principal call to action on the Button?
   */
  variant?: VARIANT | string;
  /**
   * Disabled button
   */
  disabled: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional Size handler
   */
  size?: "default" | "small";
  /**
   * Optional custom style handler
   */
  customStyle?: any;

  /**
   * Optional custom Background Colors
   */
  buttonColor?: ButtonColor | string;
  /**
   * Left Icon Type
   */
  leftIconType: IconType | string;
  /**
   * Optional custom Left Icon Has
   */
  hasLeftIcon: boolean;
  /**
   * Optional custom Left Icon
   */
  leftIcon?: string | null | JSX.Element;
  /**
   * Optional custom Right Icon Has
   */
  hasRightIcon: boolean;

  /**
   * Right Icon Type
   */
  rightIconType: IconType | string;
  /**
   * Optional custom Right Icon
   */
  rightIcon?: string | null | JSX.Element;
  /**
   * Optional Left Icon Size
   */
  leftIconSize?: number;
  /**
   * Optional Right Icon Size
   */
  rightIconSize?: number;

  /**
   * This is valid to custom SVG only
   */
  iconColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const KpButton = ({
  variant = VARIANT.PRIMARY,
  disabled,
  size,
  label,
  customStyle,
  buttonColor,
  hasLeftIcon,
  leftIcon,
  hasRightIcon,
  rightIcon,
  leftIconSize,
  rightIconSize,
  iconColor,
  rightIconType,
  leftIconType,
  ...props
}: ButtonProps) => {
  const checkVariant = (type: VARIANT | string | undefined) => {
    if (VARIANT.PRIMARY === type) {
      return "contained";
    } else if (VARIANT.SECONDARY === type) {
      return "outlined";
    } else if (VARIANT.TERTIARY === type) {
      return "text";
    } else {
      return "text";
    }
  };
  const buttonDisabled = (disabled: boolean, borderColor: string) => {
    if (disabled) {
      return { border: "none !important" };
    } else {
      return { borderColor: borderColor };
    }
  };

  const styleOptions = (
    variant: VARIANT | string | undefined,
    color: ButtonColor | undefined | string,
    disabled: boolean
  ) => {
    if (ButtonColor.PRIMARY === color) {
      switch (variant) {
        case VARIANT.PRIMARY:
          return {
            ...customStyle,
            backgroundColor: disabled ? "#E0E1E6 !important" : "#253378",
            "&:hover": {
              backgroundColor: "#1E2961",
              boxShadow: "none",
            },
            "&:focus": {
              backgroundColor: "#151D44",
              color: "#fff",
              boxShadow: "none",
            },
          };
        case VARIANT.SECONDARY:
          return {
            ...customStyle,
            backgroundColor: disabled ? "#E0E1E6" : "#EDEFF8",
            color: "#253378",
            ...buttonDisabled(disabled, "#253378"),
            "&:hover": {
              backgroundColor: "#253378",
              color: "#fff",
              border: "1px solid #D9D9D9",
              boxShadow: "none",
            },
            "&:focus": {
              backgroundColor: "#1E2961",
              color: "#fff",
              boxShadow: "none",
            },
          };
        case VARIANT.TERTIARY:
          return {
            ...customStyle,
            color: "#253378",
            "&:hover": {
              backgroundColor: "#EDEFF8",
              color: "#253378",
              boxShadow: "none",
            },
            "&:focus": {
              backgroundColor: "#253378",
              color: "#fff",
              boxShadow: "none",
            },
          };
        case VARIANT.TEXT:
          return {
            ...customStyle,
            color: "#2D3D90",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#fff",
              boxShadow: "none",
            },
          };
        default:
          return {
            ...customStyle,
          };
      }
    } else {
      switch (variant) {
        case VARIANT.PRIMARY:
          return {
            ...customStyle,
            backgroundColor: disabled ? "#E0E1E6 !important" : "#2D3D90",
            "&:hover": {
              backgroundColor: "#243173",
              boxShadow: "none",
            },
          };
        case VARIANT.SECONDARY:
          return {
            ...customStyle,
            backgroundColor: disabled ? "#E0E1E6" : "#EDEFF8",
            color: "#2D3D90",
            ...buttonDisabled(disabled, "#2D3D90"),
            "&:hover": {
              backgroundColor: "#2D3D90",
              color: "#fff",
              border: "1px solid #D9D9D9",
              boxShadow: "none",
            },
          };
        case VARIANT.TERTIARY:
          return { ...customStyle, color: "#2D3D90", padding: "8px 16px" };
        default:
          return {
            ...customStyle,
            color: "#2D3D90",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#fff",
            },
          };
      }
    }
  };
  const ButtonComponent = styled(Button)({
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "14px",
    letterSpacing: "1px",
    padding: size === "small" ? "6px 12px" : "8px 16px",
    minWidth: size === "small" ? "81px" : "97px",
    boxShadow: "none",
    ...styleOptions(variant, buttonColor, disabled),
  });

  return (
    <ButtonComponent
      {...props}
      variant={checkVariant(variant)}
      disabled={disabled}
    >
      {hasLeftIcon && leftIcon && (
        <Icon
          iconName={leftIcon as any}
          iconSize={leftIconSize && leftIconSize}
          side={IconSide.LEFtSIDE}
          color={iconColor}
          type={leftIconType}
        />
      )}
      {label}
      {hasRightIcon && rightIcon && (
        <Icon
          iconName={rightIcon as any}
          iconSize={rightIconSize && rightIconSize}
          side={IconSide.RIGHTSIDE}
          color={iconColor}
          type={rightIconType}
        />
      )}
    </ButtonComponent>
  );
};
