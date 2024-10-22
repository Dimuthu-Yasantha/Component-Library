import { useEffect, useRef, useState } from "react";
import { TextField, InputLabel, IconButton, Box, styled } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ErrorIcon from "@mui/icons-material/Error";
import { NumericFormat } from "react-number-format";

export interface FormInputProps {
  register?: any;
  hasLabel: boolean;
  label?: string;
  size?: "small" | "medium" | undefined;
  isMandatory: boolean;
  isMandatoryColor: string;
  placeholder?: string;
  hasIcon: boolean;
  onClick?: () => void;
  onChange?: (value: any) => void;
  hasHelperText: boolean;
  helperText?: string;
  hasCharCount: boolean;
  maxChars?: number;
  disabled: boolean;
  error: boolean;
  errorIcon: boolean;
  defaultValue?: any;
  isNumberInput: boolean;
}
// temp solution
const styles = {
  input: {
    "&::placeholder": {
      fontSize: "12px",
      fontFamily: "Inter",
    },
  },
};
const TextInput = styled(TextField)({
  width: "100%",
  fontSize: "14px",
  fontFamily: "Inter",
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#253378",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "#253378",
    },
  },
  "& .MuiInputLabel-asterisk": {
    color: "red",
  },
});

const SearchIcon = styled(SearchOutlinedIcon)({
  fontSize: "18px",
});

const Error = styled(ErrorIcon)({
  color: "#C64343",
  fontSize: "18px",
});

const Wrapper = styled(Box)({
  display: "block",
  width: "100%",
  marginTop: "4px",
});

const CounterLabel = styled(InputLabel)({
  float: "right",
  fontFamily: "Inter",
  fontSize: "12px",
});

const FieldLabel = styled(InputLabel)({
  textAlign: "left",
  fontSize: "12px",
  paddingBottom: "4px",
  fontFamily: "Inter",
});

const HelperLabel = styled(InputLabel)({
  float: "left",
  fontSize: "12px",
  fontFamily: "Inter",
});
/**
 * Primary UI component for user interaction
 */
export const KpFormInput = ({
  register,
  hasLabel,
  label,
  size = "medium",
  isMandatory,
  isMandatoryColor,
  placeholder,
  hasIcon,
  hasHelperText,
  helperText,
  maxChars,
  onClick,
  hasCharCount,
  disabled,
  error,
  errorIcon,
  onChange,
  defaultValue,
  isNumberInput = false,
  ...props
}: FormInputProps) => {
  const [textCount, setTextCount] = useState<number>(0);
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    typeof defaultValue !== "undefined" ? defaultValue : ""
  );
  const changeItem = (e: any) => {
    setTextCount(e.target.value.length);
    setValue(e.target.value);
  };
  useEffect(() => {
    if (isNumberInput) {
      let stringWithoutCommas = String(value).split(",").join("");
      onChange && onChange(stringWithoutCommas);
    } else {
      onChange && onChange(value);
    }
  }, [value]);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFocused(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const color = disabled ? "#9E9E9E" : error ? "#C64343" : null;

  const inputRef = useRef(null);
  useOutsideAlerter(inputRef);

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
      {isNumberInput ? (
        <NumericFormat
          value={value}
          thousandSeparator=","
          customInput={TextInput}
          {...props}
          {...(register ? { ...register } : { ref: inputRef })}
          disabled={disabled}
          inputProps={{ maxLength: maxChars }}
          onChange={(e) => changeItem(e)}
          id="search"
          size={size}
          variant="outlined"
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          sx={{ ...styles }}
          InputProps={{
            endAdornment: (
              <>
                {hasIcon && (
                  <IconButton disabled={disabled} onClick={onClick && onClick}>
                    <SearchIcon />
                  </IconButton>
                )}
                {errorIcon && error && <Error />}
              </>
            ),
          }}
          InputLabelProps={{ sx: { color: color, fontSize: "14px" } }}
        />
      ) : (
        <TextInput
          {...props}
          {...(register ? { ...register } : { ref: inputRef })}
          disabled={disabled}
          inputProps={{ maxLength: maxChars }}
          onChange={(e) => changeItem(e)}
          id="search"
          size={size}
          variant="outlined"
          onFocus={() => setFocused(true)}
          value={value}
          placeholder={placeholder}
          sx={{ ...styles }}
          InputProps={{
            endAdornment: (
              <>
                {hasIcon && (
                  <IconButton disabled={disabled} onClick={onClick && onClick}>
                    <SearchIcon />
                  </IconButton>
                )}
                {errorIcon && error && <Error />}
              </>
            ),
          }}
          InputLabelProps={{ sx: { color: color, fontSize: "14px" } }}
        />
      )}

      {hasHelperText && (
        <Wrapper>
          <HelperLabel sx={{ color: color }}>{helperText}</HelperLabel>
          {hasCharCount && (
            <CounterLabel sx={{ color: color }}>
              {textCount}/{maxChars}
            </CounterLabel>
          )}
        </Wrapper>
      )}
    </>
  );
};
