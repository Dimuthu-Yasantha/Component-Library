import React, {useEffect, useState} from 'react';
import {styled} from '@mui/system';
import {Box, Button, Container, Typography} from "@mui/material";
//import {Icon, ICONS, IconSide} from "../Icon";
import { Icon, IconSide, IconType } from "../kpIcons/KpIcon";
import {green} from "@mui/material/colors";
import {ButtonColor} from "../kpButton/KpButton";


export enum VARIANTS {
    DEFAULT = "Default",
    SECONDARY = "Secondary",
    TERTIARY = "Tertiary"
}

export enum STATUS {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    SUCCESS = "Success",
    WARNING = "Warning",
    ERROR = "Error",
    INFO = "Info",
    DISABLED = "Disabled"
}

interface LabelProps {
    /**
     * Is this the principal call to action on the Label?
     */
    variant?: VARIANTS,
    /**
     * status of Label
     */
    status: string,
    /**
     * contents of Label
     */
    content: string,
    /**
     * Has an icon
     */
    hasIconStatus: boolean,
    /**
     * Icon
     */
    icon?: string | null | JSX.Element;
    /**
   * Left Icon Type
   */
    leftIconType:  IconType;
     /**
   *  Icon color
   */
     iconColor:  string;


}

/**
 * Primary UI component for user interaction
 */
export const KpLabel = ({
                            variant = VARIANTS.DEFAULT,
                            status = STATUS.PRIMARY,
                            content,
                            hasIconStatus,
                            icon,
                            leftIconType,
                            iconColor,
                            ...props
                        }: LabelProps) => {
    const checkVariant = (type: string) => {
        if (VARIANTS.DEFAULT === type) {
            return "contained";
        } else if (VARIANTS.SECONDARY === type) {
            return "outlined";
        } else if (VARIANTS.TERTIARY === type) {
            return "text";
        } else {
            return "text";
        }
    };

    let iconTheamColor = '';

    const styleOptions = (variant: VARIANTS, status: string) => {
        if (STATUS.PRIMARY === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    iconTheamColor = '#ffff';
                    return {
                        backgroundColor: "#253378",
                        "&:hover": {
                            backgroundColor: "#253378",
                            boxShadow: 'none'
                        },
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#253378";
                    return {
                        backgroundColor: "#EDEFF8",
                        color:"#253378",
                        "&:hover": {
                            backgroundColor: "#EDEFF8",
                            boxShadow: 'none',
                            border: 'none'
                        },
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = '#253378';
                    return {
                        backgroundColor:"#ffff",
                        color: '#253378',
                        border: '1px solid #253378',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        },
                    };
            }
        } else if (STATUS.SECONDARY === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#2D3D90",
                        "&:hover": {
                            backgroundColor: "#2D3D90",
                            boxShadow: 'none'
                        },
                    };
                case VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#EDEFF8",
                        "&:hover": {
                            backgroundColor: "#EDEFF8",
                            boxShadow: 'none',
                            border: 'none'
                        },
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = '#2D3D90';
                    return {
                        backgroundColor: "#ffff",
                        color: "#2D3D90",
                        border: '1px solid #2D3D90',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        },
                    };
            }
        } else if (STATUS.SUCCESS === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#5FA562",
                        "&:hover": {
                            backgroundColor: "#5FA562",
                            boxShadow: 'none'
                        },
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#5FA562";
                    return {
                        backgroundColor: "#EFF6EF",
                        color: '#5FA562',
                        "&:hover": {
                            backgroundColor: "#EFF6EF",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = "#5FA562";
                    return {
                        backgroundColor: "#ffff",
                        color:'#5FA562',
                        border: '1px solid #5FA562',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        } else if (STATUS.INFO === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    iconTheamColor = '#ffff';
                    return {
                        backgroundColor: "#4387C6",
                        "&:hover": {
                            backgroundColor: "#4387C6",
                            boxShadow: 'none'
                        }
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#4387C6";
                    return {
                        backgroundColor: "#ECF3F9",
                        color:"#4387C6",
                        "&:hover": {
                            backgroundColor: "#ECF3F9",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = "#4387C6";
                    return {
                        backgroundColor: "#ffff",
                        border: '1px solid #4387C6',
                        color: "#4387C6",
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (STATUS.ERROR === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    iconTheamColor = '#ffff';
                    return {
                        backgroundColor: "#C64343",
                        "&:hover": {
                            backgroundColor: "#C64343",
                            boxShadow: 'none'
                        }
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#C64343";
                    return {
                        backgroundColor: "#F9ECEC",
                        color: "#C64343",
                        "&:hover": {
                            backgroundColor: "#F9ECEC",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = "#C64343";
                    return {
                        backgroundColor: '#ffff',
                        border: '1px solid #C64343',
                        color: "#C64343",
                        "&:hover": {
                            backgroundColor: '#ffff',
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (STATUS.WARNING === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    iconTheamColor = '#ffff';
                    return {
                        backgroundColor: "#EA9B42",
                        "&:hover": {
                            backgroundColor: "#EA9B42",
                            boxShadow: 'none'
                        }
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#EA9B42";
                    return {
                        backgroundColor: "#FDF5EC",
                        color: "#EA9B42",
                        "&:hover": {
                            backgroundColor:  "#FDF5EC",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = "#EA9B42";
                    return {
                        backgroundColor: "#ffff",
                        color: "#EA9B42",
                        border: '1px solid #EA9B42',
                        "&:hover": {
                            backgroundColor:  "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (STATUS.DISABLED === status) {
            switch (variant) {
                case VARIANTS.DEFAULT:
                    iconTheamColor = '#ffff';
                    return {
                        backgroundColor: "#9BA0AF",
                        "&:hover": {
                            backgroundColor: "#9BA0AF",
                            boxShadow: 'none'
                        }
                    };
                case VARIANTS.SECONDARY:
                    iconTheamColor = "#9BA0AF";
                    return {
                        backgroundColor: "#E0E1E6",
                        color: "#9BA0AF",
                        "&:hover": {
                            backgroundColor:  "#E0E1E6",
                            boxShadow: 'none',
                            border : 'none'
                        }
                    };
                case VARIANTS.TERTIARY:
                    iconTheamColor = "#9BA0AF";
                    return {
                        backgroundColor: "#ffff",
                        color: "#9BA0AF",
                        border: '1px solid #9BA0AF',
                        "&:hover": {
                            backgroundColor:  "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
    }

const BoxComponent = styled(Button)({
    display: 'inline-flex',
    alignItems: 'flex-start',
    m: 1,
    p: 1,
    fontSize: '12px',
    "&:hover": {
        backgroundColor: 'none',
        boxShadow: 'none',
        border: 'none !important' 
      },
      cursor: 'default',
      lineHeight: '18px',
    padding: '5px 5px 3px 4px',
    border: 'none',
    boxShadow: 'none',
    borderRadius: "2px",
    textOverflow: 'ellipsis',
    justifyContent: 'space-between',
    fontFamily: "Inter",
    ...styleOptions(variant, status)
});



return (
    <>
    {
        <BoxComponent disableRipple 
            variant={checkVariant(variant)}>
            <>
                <> {hasIconStatus ?
                    <Icon
                        iconName={icon as any}
                        side='left'
                        type={leftIconType}
                        color={iconColor}
                        iconSize={0.9}
                        {...props}    
                    />

                    : null}
                </>
                {content}
            </>
        </BoxComponent>
    }
    </>
);
};