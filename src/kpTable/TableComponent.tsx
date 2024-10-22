import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {IconButton, Box, TableSortLabel, Checkbox, Tooltip} from "@mui/material";
import { DeleteOutlineOutlined, ModeOutlined, VisibilityOutlined } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import TableBody from "@mui/material/TableBody";
import { visuallyHidden } from '@mui/utils';
import { DropDownMenu } from './TableHeaderComponent';
import { Order } from './orderTypes';
import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropUpSharp';
interface TableRow {
    customButtons: JSX.Element;
    id: string,
    name: string,
    age: string
}

export interface TableHeader<T> {
    id: T;
    label: string;
}

interface TableComponentProps {
    /**
     * title Of the logo
     */
    rows?: TableRow[];
    tableHeaders?: TableHeader<string>[] | undefined,
    deleteAllowed: boolean,
    viewAllowed: boolean,
    editAllowed: boolean,
    customBtnsAllowed: boolean,
    menuAllowed?: boolean,
    editClicked: (row: any) => void;
    viewClicked: (row: any) => void;
    deleteClicked: (row: any) => void;
    onRowSelect:  (row: any) => void;
    tableSelection: boolean;
    allowMultiSelect: boolean;
    hideIdColumn: boolean;
    selectedList: any;
    menuItemClicked?: (row: any, action: string) => void,
    selectionColor: any;
    onRequestSort: (event: React.MouseEvent<unknown>, property: any, order: string) => void;
    maxTableDataWidth?: number | undefined;
    onSortData?: (value: string, isAsc: boolean) => void;
}

export const TableComponent = ({
    rows,
    tableHeaders,
    deleteAllowed,
    menuAllowed,
    viewAllowed,
    customBtnsAllowed,
    editAllowed,
    editClicked,
    viewClicked,
    deleteClicked,
    menuItemClicked,
    onRequestSort,
    onRowSelect,
    tableSelection,
    allowMultiSelect,
    hideIdColumn,
    selectedList,
    selectionColor,
    maxTableDataWidth,
    onSortData,
    ...props
}: TableComponentProps) => {

    const [orderByValue, setOrderByValue] = useState<string>();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<any>('calories');
    const [anchorElMap, setAnchorElMap] = useState<{[key: string]: HTMLElement | null }>({});
    const [selected, setSelected] = React.useState(Array.isArray(selectedList) ? allowMultiSelect ? selectedList : [selectedList[0]] : []);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, rowId: string) => {
        const newAnchorElMap = { ...anchorElMap, [rowId]: event.currentTarget };
        setAnchorElMap(newAnchorElMap);
    };

    const handleMenuClose = (rowId: string) => {
        setAnchorElMap((prevMap) => ({ ...prevMap, [rowId]: null}))
    };

    useEffect(() => {
        setOrderByValue(orderBy);
    }, [orderBy])

    useEffect(() => {
        setSelected(Array.isArray(selectedList) ? allowMultiSelect ? selectedList : [selectedList[0]] : []);
    }, [selectedList, allowMultiSelect]);

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        const isAsc = orderBy === property && order === 'asc';
        if (typeof onSortData !== 'undefined') {
            onSortData(property, isAsc);
        }
        setOrderByValue(property);
        setOrder(isAsc ? 'desc' : 'asc');
        onRequestSort(event, property, isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n);
            setSelected(newSelected);
            onRowSelect(newSelected);
            return;
        }
        setSelected([]);
        onRowSelect([]);
    };

    const handleClick = (event, row) => {
        const selectedIndex = selected.map((x) => x.id).indexOf(row.id);
        let newSelected = [...selected];

        if (selectedIndex === -1) {
            newSelected.push(row);
        } else {
            newSelected.splice(selectedIndex, 1);
        }
        onRowSelect(newSelected);
        setSelected(newSelected);
    };

    const isSelected = (id) => {
        return selected.map((row) => row.id).indexOf(id) !== -1;
    }
    console.log("order", order)
    return (
        <>
            <TableHead>
                <TableRow>
                    {tableSelection && (
                        <TableCell padding="checkbox">
                            <Checkbox
                                color={selectionColor === "info" ? 'info' : selectionColor}
                                sx={
                                    selectionColor === "info"
                                        ? {
                                            color: "#253378",
                                            "&.Mui-checked": {
                                                color: "#253378",
                                            },
                                        }
                                        : null
                                }
                                indeterminate={selected?.length > 0 && selected?.length < rows?.length}
                                checked={rows?.length > 0 && selected?.length === rows?.length}
                                onChange={handleSelectAllClick}
                                inputProps={{
                                    'aria-label': 'select all',
                                }}
                                disabled={!allowMultiSelect}
                            />
                        </TableCell>
                    )}
                    {tableHeaders?.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            sx={{
                                textAlign: 'left',
                                color: '#666C7F',
                                fontSize: '12px',
                                fontWeight: 700,
                                lineHeight: '18px',
                                fontFamily: "Inter"
                            }}
                            sortDirection={orderByValue === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderByValue === headCell.id}
                                direction={orderByValue === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                IconComponent={order === 'desc' ? ArrowDropDownIcon : ArrowDropUpIcon}
                            >
                                {headCell.label}
                                {orderByValue === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>

                    ))}
                    <TableCell sx={{
                        textAlign: 'right',
                        color: '#666C7F',
                        fontSize: '12px',
                        fontWeight: 700,
                        lineHeight: '18px',
                        fontFamily: "Inter"
                    }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows && rows.map((row, index1) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index1}`;
                    return (
                        <TableRow sx={{
                           padding: '8px !important',
                        }} key={index1} hover>
                            {tableSelection && (
                            <TableCell padding="checkbox" >
                                <Checkbox
                                    color={selectionColor === "info" ? 'info' : selectionColor}
                                    sx={
                                        selectionColor === "info"
                                            ? {
                                                color: "#253378",
                                                "&.Mui-checked": {
                                                    color: "#253378",
                                                },
                                            }
                                            : null
                                    }
                                    onClick={(event) => handleClick(event, row)}
                                    checked={isItemSelected}
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </TableCell>
                            )}

                            {Object.entries(row).map((val, index2) => {
                                if(val[0] === "customButtons") return;
                                if(hideIdColumn && val[0] === "id") return;
                                return <TableCell key={index2} align='left'
                                                               sx={{fontFamily: "Inter", padding: "8px", maxWidth: typeof maxTableDataWidth !== "undefined" ? `${maxTableDataWidth}px` : "unset", wordBreak: typeof maxTableDataWidth !== "undefined" ? "break-word" : "unset"}}>{val[1]}</TableCell>
                            })}
                            <TableCell sx={{padding: "8px"}} align='right'>
                                <>{customBtnsAllowed && (
                                    <>
                                        {row?.customButtons}
                                    </>
                                )}</>
                                <>{editAllowed && (
                                    <Tooltip title="Edit">
                                    <IconButton aria-label="edit" sx={{ cursor: 'pointer' }}
                                        onClick={(e) => editClicked(row)}>
                                        <ModeOutlined fontSize="small" />
                                    </IconButton>
                                    </Tooltip>
                                )}</>
                                <>{deleteAllowed && (
                                    <Tooltip title="Delete">
                                    <IconButton aria-label="delete" sx={{ cursor: 'pointer' }}
                                        onClick={(e) => deleteClicked(row)}>
                                        <DeleteOutlineOutlined fontSize="small" />
                                    </IconButton>
                                    </Tooltip>
                                )}</>
                                <>{viewAllowed && (
                                    <Tooltip title="View">
                                    <IconButton aria-label="view" sx={{ cursor: 'pointer' }}
                                        onClick={(e) => viewClicked(row)}>
                                        <VisibilityOutlined fontSize="small" />
                                    </IconButton>
                                    </Tooltip>
                                )}</>
                                <>{menuAllowed && (
                                    <>
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-haspopup="true"
                                            onClick={(e) => handleMenuOpen(e, row.id)}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorElMap[row.id]}
                                            open={Boolean(anchorElMap[row.id])}
                                            onClose={(e) => handleMenuClose(row.id)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                              }}
                                              transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                              }}
                                              PaperProps={{ style: { minWidth: '8rem' } }}
                                        >
                                            <MenuItem onClick={(e) => menuItemClicked && menuItemClicked(row, "VIEW")}>
                                                View
                                            </MenuItem>
                                            <MenuItem onClick={(e) => menuItemClicked && menuItemClicked(row, "EDIT")}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem onClick={(e) => menuItemClicked && menuItemClicked(row, "DELETE")}>
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )}
                                </>
                            </TableCell>
                        </TableRow>
                    );
                })}
                {!rows?.length && (
                    <TableRow>
                        <TableCell colSpan={12}>
                            <CustomNoRowsOverlay></CustomNoRowsOverlay>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody >
        </>
    );
};