import { useCallback, useMemo, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import {
  styled,
  Box,
  Chip,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  checkboxClasses,
  Select,
  MenuItem,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { Icon, IconType } from '../kpIcons/KpIcon'
import { KpButton } from '../kpButton/KpButton';
import { KpFormInput } from '../kpFormInput/KpFromInput';

interface TableHeaderProps {
  tableTitle?: string;
  onSearchTermChange?: Function;
  dropDownOpenIcon?: string | null | JSX.Element,
  dropDownCloseIcon?: string | null | JSX.Element,
  dropDownIconSize?: number,
  iconColor?: string,
  iconType?: IconType,
  isFilterEnabled?: boolean,
  filterValues?: IFilterData[],
  maxHeight?: string | number,
  onFilterApply?: (value: IFilterData[]) => IFilterData[],
  onFilterItemsHeightChange?: React.Dispatch<React.SetStateAction<number>>;
  searchOnButtonClick?: boolean;
  onSearchButtonClick?: Function;
  searchQueryValue: string | undefined;
}

interface DropDownMenu {
  dropDownOpenIcon: string | null | JSX.Element,
  dropDownCloseIcon: string | null | JSX.Element,
  dropDownIconSize?: number,
  iconColor?: string,
  iconType: IconType,
  content: null | JSX.Element
}

interface IChipData {
  key: number;
  label: string;
}

interface IFilterDropDown {
  id: string,
  value: string
}

export interface IFilterData {
  id: number;
  type: 'CHECK_BOX' | 'DROP_DOWN',
  name: string,
  value: string | string[],
  isChecked: boolean,
  selectedValue?: string,
}

const ContentHolder = styled('div')({
  display: 'flex',
  position: 'absolute',
  backgroundColor: '#ffffff',
  zIndex: 50,
  top: '50px',
  overflow: 'hidden',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '4px'
})
const IconBtnDropDown = styled(IconButton)({
  width: '24px',
  height: '24px',
  marginLeft: '14px'
})

export const DropDownMenu = ({
  dropDownOpenIcon,
  dropDownCloseIcon,
  dropDownIconSize,
  iconColor,
  iconType,
  content,
  ...props
}: DropDownMenu) => {
  const [isOpen, setOpen] = useState(false)
  const toggleBtn = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <IconBtnDropDown
        onClick={toggleBtn}
      >
        <Icon
          iconName={isOpen ? dropDownCloseIcon as any : dropDownOpenIcon as any}
          iconSize={dropDownIconSize}
          color={iconColor}
          type={iconType}
        />
        {
          isOpen &&
          <ContentHolder
            {...props}
          >
            {content}
          </ContentHolder>
        }
      </IconBtnDropDown>
    </>
  );
};

const SwitcherWrapper = styled('div')({
  width: '185px',
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '8px',
  paddingLeft: '16px',
  alignItems: 'center',
})
// temp solution
const inputStyles = {
  fontFamily: 'Inter',
  'input': {
    '&::placeholder': {
      fontSize: '12px',
      fontFamily: 'Inter'
    }
  }
};

export const TableHeaderComponent = ({
  tableTitle,
  onSearchTermChange,
  isFilterEnabled,
  filterValues,
  maxHeight,
  onFilterApply,
  onFilterItemsHeightChange,
  searchOnButtonClick,
  onSearchButtonClick,
  searchQueryValue,
  ...props
}: TableHeaderProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterItemsHeight, setFilterItemsHeight] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const onClickFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [filterData, setFilterData] = useState<IFilterData[]>(filterValues || [])

  const filterItemsWrapperRef = useCallback((node: any) => {
    if (node !== null) {
      setFilterItemsHeight(node.getBoundingClientRect().height);
    } else {
      setFilterItemsHeight(0);
    }
  }, []);

  useMemo(() => {
    onFilterItemsHeightChange && onFilterItemsHeightChange(filterItemsHeight);
  }, [filterItemsHeight, onFilterItemsHeightChange]);

  const onFilterItemClick = (item: IFilterData, isChecked: boolean) => {
    const updatedFilteredList = filterData.map(filterItem => (filterItem.id === item.id ? { ...filterItem, isChecked: isChecked } : filterItem)).map(filterItem => filterItem.id === item.id && filterItem.isChecked === false && filterItem.type === 'DROP_DOWN' ? { ...filterItem, selectedValue: 'Select an option' } : filterItem)
    setFilterData(updatedFilteredList)

  }

  const clearFilter = () => {
    setFilterData((filterList) => filterList.map(filterItem => { return { ...filterItem, isChecked: false, selectedValue: 'Select an option' } }))
  }


  const deleteChip = (chipToDelete: IFilterData) => {
    setFilterData((filterList) => filterList.map(filterItem => (filterItem.id === chipToDelete.id ? { ...filterItem, isChecked: false, selectedValue: 'Select an option' } : filterItem)))
  }

  const filterDropDownItemSelect = (item: IFilterData, value: any) => {
    setFilterData((filterList) => filterList.map(filterItem => (filterItem.id === item.id ? { ...filterItem, selectedValue: value } : filterItem)));
  }

  const renderDropDownContent = (value: string[] | string) => {
    if (Array.isArray(value)) {
      return value.map((item, index) => <MenuItem disabled={item === 'Select an option'} key={index} value={item}>{item}</MenuItem>)

    }
  
  }

  const setFilterContent = () => {
    return (
      <>
        <FormGroup>
          {
            filterData.map((item, index) => {
            switch (item.type) {
              case 'CHECK_BOX':
                return <FormControl key={index} >
                    <FormControlLabel
                      control={<Checkbox
                          sx={{
                            [`&, &.${checkboxClasses.colorPrimary}`]: {
                              color: '#C1C4CD',
                            },
                            [`&, &.${checkboxClasses.checked}`]: {
                              color: '#253378',
                            },
                          }}
                          name="subscribe"
                          checked={item.isChecked}
                          onChange={(e) => { onFilterItemClick(item, e.target.checked) }}
                        />}
                      label={item.name}
                    />
                  </FormControl>
                
              case 'DROP_DOWN':
                return <FormControl key={index} size='small' sx={{ borderColor: 'red' }}>
                    <FormControlLabel
                      control={<Checkbox
                          sx={{
                            [`&, &.${checkboxClasses.colorPrimary}`]: {
                              color: '#C1C4CD',
                            },
                            [`&, &.${checkboxClasses.checked}`]: {
                              color: '#253378',
                            },
                          }}
                          name="subscribe"
                          checked={item.isChecked}
                          onChange={(e) => { onFilterItemClick(item, e.target.checked) }}
                        />}
                      label={item.name}
                    />
                    <Select
                      sx={{
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: "#C1C4CD",
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: "#253378",
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: "#C1C4CD",
                        },
                      }}
                      value={item.selectedValue}
                      onChange={(e) => filterDropDownItemSelect(item, e.target.value)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      disabled={!item.isChecked}

                    >
                      {
                        renderDropDownContent(item.value)
                      }
                    </Select>
                  </FormControl>
                
            }
          
            })
          }

        </FormGroup>
      </>
    )
  }



  return (
    <>
      <Grid container spacing={1} sx={{ padding: "10px" }}>
        <Grid item xs={8} >
          <Typography variant="h6" id="tableTitle"
            sx={{
              color: '#666C7F',
              fontSize: 20,
              fontWeight: 600,
              fontFamily: "Inter"
            }}>
            {tableTitle}
          </Typography>
        </Grid>
        <Grid sx={{ display: 'flex' }} item xs={4}>
          { typeof searchOnButtonClick !== "undefined" && searchOnButtonClick ? (
            <TextField
            onChange={(e) => {
              onSearchTermChange && onSearchTermChange(e.target.value);
            }}
            id="search"
            label="Search"
            size="small"
            variant="outlined"
            value={searchQueryValue}
            sx={{ ...inputStyles }}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => onSearchButtonClick && onSearchButtonClick()}
                >
                  <SearchOutlinedIcon
                    sx={{ color: "#9E9E9E", fontSize: "18px" }}
                  />
                </IconButton>
              ),
            }}
            InputLabelProps={{ sx: { color: '#9E9E9E', fontSize: '14px', fontFamily: "Inter" } }}
          />
          ) : (
          <TextField
          onChange={(e) => { onSearchTermChange && onSearchTermChange(e.target.value) }}
          id="search"
          label="Search"
          size="small"
          variant="outlined"
          sx={{ ...inputStyles }}
          fullWidth
          InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlinedIcon
                sx={{ color: "#9E9E9E", fontSize: "18px" }}
              />
            </IconButton>
          ),
          }}
          InputLabelProps={{
            sx: { color: "#9E9E9E", fontSize: "14px", fontFamily: "Inter" },
          }}
          />     
          )}
          {
            isFilterEnabled &&
            <Box sx={{ position: 'relative', width: '200px', marginLeft: '20px', display: 'flex', alignItems: 'center' }} >
              <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={onClickFilter}>
                <Typography sx={{ cursor: 'pointer', marginRight: '10px' }} fontWeight={600} fontSize={'12px'} letterSpacing={'1px'} lineHeight={'18px'} color={'#666C7F'}>
                  FILTER BY
                </Typography>
                {isFilterOpen ? <ExpandLess /> : <ExpandMore />}
              </Box>
              {
                isFilterOpen &&
                <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: '3',
                    top: '40px',
                    right: '10px',
                    width: '300px',
                    maxHeight: `${maxHeight}px`,
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    boxShadow: '0px 1px 18px 0px rgba(137, 158, 175, 0.12), 0px 6px 10px 0px rgba(137, 158, 175, 0.14), 0px 3px 5px -1px rgba(137, 158, 175, 0.20)',
                    overflow: 'auto',
                    padding: '8px',

                }}>
                  <Box sx={{}}>
                    <KpFormInput
                      hasIcon
                      helperText="Helper text"
                      label="Label"
                      maxChars={100}
                      // onChange={() => { console.log('search 1') }}
                      // onClick={() => { console.log('search 2') }}
                      placeholder="Search..."
                      size="small"
                    />
                    <Box sx={{ margin: '1rem', height: "270px", overflow: 'auto' }}>{setFilterContent()}</Box>
                  </Box>
                  <Box
                    sx={{
                      // flexGrow: '1',
                      height: '50px',
                      alignSelf: 'flex-end',
                      display: 'flex',
                      justifyContent: 'end',
                      gap: '1rem',
                      padding: '8px',

                    }}>
                    <KpButton
                      buttonColor="Primary"
                      customStyle={{}}
                      iconColor="#fff"
                      label="CLEAR"
                      leftIcon="Mode"
                      leftIconSize={0.9}
                      leftIconType="MUI"
                      onClick={() => {
                        clearFilter()
                        setIsFilterOpen(false)
                      }}
                      rightIcon="ArrowForwardIos"
                      rightIconSize={0.9}
                      rightIconType="MUI"
                      size="small"
                      variant="Tertiary"
                    />
                    <KpButton
                      buttonColor="Primary"
                      customStyle={{}}
                      iconColor="#fff"
                      label="APPLY"
                      leftIcon="Mode"
                      leftIconSize={0.9}
                      leftIconType="MUI"
                      onClick={() => {
                        onFilterApply && onFilterApply(filterData.filter(item => item.isChecked))
                        setIsFilterOpen(false)
                      }}
                      rightIcon="ArrowForwardIos"
                      rightIconSize={0.9}
                      rightIconType="MUI"
                      size="small"
                      variant="Tertiary"
                    />
                  </Box>
                </Box>
              }
            </Box>
          }
        </Grid>
        {
          filterData.find((item) => item.isChecked === true) !== undefined &&
          <Grid  ref={filterItemsWrapperRef} item sx={{ width: '100%', padding: '1rem 0.5rem !important', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            {
              filterData.map((chip) => {
              return (<>
                  {chip.isChecked &&
                  chip.selectedValue !== 'Select an option' && chip.type === 'DROP_DOWN' ?
                    <Chip
                      key={chip.id}
                      variant="outlined"
                      label={chip.name + ' - ' + chip.selectedValue}
                      onDelete={() => deleteChip(chip)}
                    />
                  : null
                  }
                  {
                    chip.isChecked && chip.type === 'CHECK_BOX' && <Chip
                      key={chip.id}
                      variant="outlined"
                      label={chip.name}
                      onDelete={() => deleteChip(chip)}
                    />
                  }

                </>)
            })

            }
            {
              filterData.find((item) => item.isChecked === true) !== undefined &&
              <Box onClick={() => { clearFilter() }} sx={{ fontFamily: 'Inter', color: '#253378', fontSiz: '14px', textDecoration: 'underline', cursor: 'pointer' }}>clear all</Box>
            
            }
          </Grid>
        }
      </Grid >
    </>
  );
};
