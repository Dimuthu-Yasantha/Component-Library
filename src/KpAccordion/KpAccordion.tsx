import React, { useEffect } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionObject {
    id: number;
    accordionTitle: string;
    accordionborderColor?: string;
    accordionContent?: React.JSX.Element;
    accordionSubContent?: AccordionObject[];
}

interface KpAccordionProps {
    activeAccordionIds?: number[]; // Change to an array of active accordion IDs
    accordionContent: AccordionObject[];
    border?: string;
    boxShadow?: string;
    borderRadius?: string;
    isExpandMoreLeft?: boolean;
    onChange?: (value: any) => void;
}

export const KpAccordion = ({
                                activeAccordionIds,
                                accordionContent,
                                border,
                                boxShadow,
                                borderRadius,
                                isExpandMoreLeft,
                                onChange,
                            }: KpAccordionProps) => {

    const [expanded, setExpanded] = React.useState(activeAccordionIds || []);


    useEffect(() => {
        if (onChange) {
            onChange(expanded);
        }
    }, [expanded]);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        if (isExpanded) {
            setExpanded([...expanded, panel]);
        } else {
            setExpanded(expanded.filter(id => id !== panel));
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {accordionContent.map((item, index) => (
                <Accordion
                    expanded={expanded.includes(item.id)}  // Check if item's ID is in the array
                    onChange={handleChange(item.id)} // Use a function to handle expansion
                    sx={{
                        boxShadow: boxShadow || "none",
                        borderBottom: 'none',
                        '&:before': {
                            display: 'none',
                        },
                        border: border || "none",
                        borderRadius: borderRadius + 'px !important',
                        borderColor: item.accordionborderColor ,
                    }}
                    key={index}
                    disableGutters={true}
                >
                    <AccordionSummary
                        sx={{borderBottom: 'none', flexDirection: isExpandMoreLeft ? 'row-reverse' : 'row'}}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{fontSize:'1rem', fontWeight:'700', fontFamily:'Inter'}}>{item.accordionTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{borderTop:border,  borderColor: item.accordionborderColor }}>
                        {item.accordionContent && (
                            <>{item.accordionContent}</>
                        )}
                        {item.accordionSubContent && (
                            <KpAccordion
                                activeAccordionIds={activeAccordionIds}
                                accordionContent={item.accordionSubContent}
                            />
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
