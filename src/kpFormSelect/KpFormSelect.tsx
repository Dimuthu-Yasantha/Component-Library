import { InputLabel, Box, styled, Select, MenuItem, SelectChangeEvent, FormControl, OutlinedInput, TextField, InputAdornment } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { useEffect, useMemo, useRef, useState } from "react";
import ErrorIcon from '@mui/icons-material/Error';
import SearchIcon from '@mui/icons-material/Search';

export interface FormSelect {
    register?: any;
    hasLabel: boolean;
    label?: string;
    placeholder: string;
    value?: number;
    hasHelperText: boolean;
    helperText?: string;
    isMandatory?: boolean;
    isMandatoryColor?: string;
    onChange: (value: any) => void;
    disabled: boolean;
    error: boolean;
    data: Array<any>,
    withSearch?: boolean,
    searchFieldPlaceholder?: string
}
const FormControlWrapper = styled(FormControl)({
    width: "100%",
})
const SelectField = styled(Select)({
        width: '100%',
        fontSize: '14px',
        textAlign: 'start',
        fontFamily: "Inter",
        height: '40px',
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: "#C1C4CD",
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#253378",
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "#C1C4CD",
        },
})

const SelectMenuItem = styled(MenuItem)({
    fontFamily: "Inter",
    fontSize: '12px'
})

const FieldLabel = styled(InputLabel)({
    textAlign: 'left',
    fontSize: '12px',
    paddingBottom: '4px',
    fontFamily: "Inter"
})

const HelperLabel = styled(InputLabel)({
    float: 'left',
    fontSize: '12px',
    paddingTop: '4px',
    fontFamily: "Inter"
})

const Placeholder = styled(InputLabel)({
    float: 'left',
    fontSize: '12px',
    fontFamily: "Inter"
})

const Error = styled(ErrorIcon)({
    color: "#C64343", 
    fontSize: "18px" 
})

const InputField = styled(TextField)({
    width: '98%',
    margin: '10px',
    fontSize: '14px',
})

function getStyles(name: string, Option: readonly string[], theme: Theme) {
    return {
      fontWeight:
        Option.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

export const KpFormSelect = ({
    register,
    hasLabel,
    label,
    placeholder,
    value,
    hasHelperText,
    helperText,
    isMandatory,
    isMandatoryColor,
    onChange,
    disabled,
    error,
    data,
    withSearch = false,
    searchFieldPlaceholder = "Type to search..."
}: FormSelect) => {
    const theme = useTheme();
    const color = disabled ? "#9E9E9E" : error ? "#C64343" : null
    const [Option, setOption] = useState<any[]>([]);
    const [focused, setFocused] = useState<boolean>(false);
    const selectRef = useRef(null);
    const [searchText, setSearchText] = useState("");

    const containsText = (text: string, searchText: string) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

    const displayedOptions = useMemo(
        () => data.filter((option) => containsText(option, searchText)),
        [searchText]
    )
    const handleChange = (event: SelectChangeEvent<any>) => {
        const {
          target: { value },
        } = event;
        setOption(
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(()=> {
        onChange(Option)
    }, [Option, onChange])

    useEffect(()=> {
        if (typeof value !== 'undefined' && value !== null) {
            setOption(typeof data[value] === 'string' ? data[value].split(',') : data[value])
        }
    }, [])

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
          function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setFocused(false)
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }
    useOutsideAlerter(selectRef);
   
    return (
        <>  
            {hasLabel && (
                <FieldLabel
                sx={
                    isMandatory
                    ? {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                        "&::after": { content: '"*"', color: isMandatoryColor },
                        }
                    : {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                        }
                }
                >
                {label}
                </FieldLabel>
            )}
            <FormControlWrapper variant="outlined" required={isMandatory}>
                <SelectField
                {...(register ? {...register} : { ref: selectRef })}
                onFocus={()=> setFocused(true)}
                displayEmpty
                disabled={disabled}
                value={Option}
                onChange={handleChange}
                renderValue={(selected: any) => {
                    if (selected.length === 1) {
                        return selected.join(', ');
                    }
                    return <Placeholder>{placeholder}</Placeholder>;
                    
                }}
                >
                    {
                        withSearch && 
                        <InputField 
                            size="small" 
                            autoFocus
                            placeholder={searchFieldPlaceholder}
                            fullWidth
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            onKeyDown={(e) => {
                            if(e.key !== "Escape") {
                                e.stopPropagation();
                            }  
                            }}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    }
                    {displayedOptions.map((dataObj) => (
                    <SelectMenuItem
                        key={dataObj}
                        value={dataObj}
                        style={getStyles(dataObj, Option, theme)}
                    >
                    {dataObj}
                    </SelectMenuItem>
                    ))}
                </SelectField>
            </FormControlWrapper>
            {
                hasHelperText && <HelperLabel sx={{ color: color }}>{helperText}</HelperLabel>
            }
        </>
    )
}