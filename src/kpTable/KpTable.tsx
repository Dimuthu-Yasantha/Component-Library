import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { IFilterData, TableHeaderComponent } from "./TableHeaderComponent";
import { TableComponent } from "./TableComponent";
import { TableContainer, TableFooter } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TablePaginationActions } from "./TablePaginationActions";
import { Order } from "./orderTypes";
import { KpButton } from "../kpButton/KpButton";

export const customBtn = () => {
  return (
    <KpButton
      buttonColor="Primary"
      customStyle={{}}
      iconColor="#fff"
      label="PAUSE"
      leftIcon="Mode"
      leftIconSize={0.9}
      leftIconType="MUI"
      onClick={function noRefCheck() {}}
      rightIcon="ArrowForwardIos"
      rightIconSize={0.9}
      rightIconType="MUI"
      size="default"
      variant="Tertiary"
    />
  );
};
export enum COLOR {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}
interface TableProps {
  /**
   * title Of the table
   */
  tableTitle?: string;
  /**
   * on change search value return function
   */
  onChangeSearchValue?: (value: string) => void;
  /**
   * on change search value return function
   */
  rows?: any;
  /**
   * total Number Of data
   */
  totalNumberOfData?: number;
  /**
   * on change search value return function
   */
  tableHeaders?: any;
  /**
   * Allow Delete icon
   */
  isDeleteAllow: boolean;
  /**
   * Allow view icon
   */
  isViewAllow: boolean;
  /**
   * Allow edit icon
   */
  isEditAllow: boolean;
  /**
   * Allow custom action icons
   */
  isCustomIconsAllowed: boolean;
  /**
   * Allow menu icon
   */
  isMenuAllow?: boolean | undefined;
  /**
   * go first page  functionality
   */
  onFirstPageClick?: Function;
  /**
   * go next page  functionality
   */
  onNextButtonClick?: Function;
  /**
   * go back page  functionality
   */
  onBackButtonClick?: Function;
  /**
   * go last page  functionality
   */
  onLastPageButtonClick?: Function;
  /**
   * change page number functionality
   */
  onPageNumberChange: Function;
  /**
   * Change rows per page function
   */
  onRowsPerPageChange: (rowsPerPage: number) => void;
  /**
   * number of rows per page
   */
  rowsPerPage: number;
  /* current page */
  currentPage: number;
  /**
   * Number of page option
   */
  rowsPerPageOptions: any;
  /**
   * clicked for edit
   */
  onEditClicked: () => void;
  /**
   * clicked for view
   */
  onViewClicked: () => void;
  /**
   * clicked for delete
   */
  onDeleteClicked: () => void;
  /**
   * clicked for menu item
   */
  onMenuItemClicked?: () => void;
  /**
   * Sorting callback function
   */
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: any,
    order: string
  ) => void;
  /**
   * Item selection callback function
   */
  onRowSelect?: () => void;
  /**
   * which order
   */
  order: Order;
  /**
   * which colomn order by
   */
  orderBy: string;
  /**
   * max height of table
   *   */
  maxHeight: number;
  /**
   * Allow selection checkbox
   *   */
  tableSelection?: boolean;
  /**
   * Allow multi selection
   *   */
  allowMultiSelect?: boolean;
  /**
   * Hide ID column
   *   */
  hideIdColumn?: boolean;
  /**
   * Initially selected rows
   *   */
  selectedList?: any;
  /**
   * Selection checkbox color
   *   */
  selectionColor?: any;
  /**
   * Search field where it searches for data after button click
   */
  searchOnButtonClick?: boolean;
  /**
   * Capture the click event of the search button
   */
  onSearchButtonClick?: Function;
  /**
   * Default value for the search text field
   */
  searchQueryValue?: string | undefined;
  /**
   * Maximum table data cell width - this should be used when expected data have string values such as paragraphs.
   */
  maxTableDataWidth?: number;
  isFilterEnabled?: boolean;
  filterValues?: IFilterData[];
  onFilterApply?: (x: IFilterData[]) => IFilterData[];
  /**
   * sort data callback function
   */
  onSortData?: (value: string, isAsc: boolean) => void;
}

export const KpTable = ({
  tableTitle,
  rows,
  totalNumberOfData,
  tableHeaders,
  isDeleteAllow,
  isViewAllow,
  isEditAllow,
  isCustomIconsAllowed,
  isMenuAllow,
  onChangeSearchValue,
  rowsPerPage,
  currentPage,
  rowsPerPageOptions,
  onRowsPerPageChange,
  onEditClicked,
  onViewClicked,
  onDeleteClicked,
  onMenuItemClicked,
  onFirstPageClick,
  onBackButtonClick,
  onNextButtonClick,
  onLastPageButtonClick,
  onPageNumberChange,
  onRequestSort,
  onRowSelect,
  maxHeight,
  tableSelection,
  allowMultiSelect,
  selectedList,
  hideIdColumn,
  selectionColor,
  isFilterEnabled,
  filterValues,
  onFilterApply,
  searchOnButtonClick,
  onSearchButtonClick,
  searchQueryValue,
  maxTableDataWidth,
  onSortData,
  ...props
}: TableProps) => {
  const [page, setPage] = useState(currentPage);
  const [pageSize, setPageSize] = useState(rowsPerPage);
  const [filterItemsHeight, setFilterItemsHeight] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onPageNumberChangeAction = (event: unknown, pageIndex: number) => {
    onPageNumberChange(event, pageIndex + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowsPerPage: number
  ) => {
    setPageSize(rowsPerPage);
    onRowsPerPageChange(rowsPerPage);
    //setPageSize(parseInt(event.target.value, 10));
    //setPage(0);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        sx={{ width: "100%", borderRadius: "6px", border: "1px solid #E0E1E6" }}
      >
        <TableHeaderComponent
          tableTitle={tableTitle}
          onSearchTermChange={onChangeSearchValue}
          isFilterEnabled={isFilterEnabled || false}
          filterValues={filterValues || []}
          maxHeight={maxHeight}
          onFilterApply={onFilterApply}
          onFilterItemsHeightChange={setFilterItemsHeight}
          searchOnButtonClick={searchOnButtonClick}
          onSearchButtonClick={onSearchButtonClick}
          searchQueryValue={searchQueryValue}
        />
        <TableContainer sx={{ maxHeight: maxHeight - filterItemsHeight }}>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableComponent
              tableHeaders={tableHeaders}
              rows={rows}
              viewAllowed={isViewAllow}
              editAllowed={isEditAllow}
              deleteAllowed={isDeleteAllow}
              menuAllowed={isMenuAllow}
              editClicked={onEditClicked}
              customBtnsAllowed={isCustomIconsAllowed}
              viewClicked={onViewClicked}
              deleteClicked={onDeleteClicked}
              onRequestSort={onRequestSort}
              menuItemClicked={onMenuItemClicked}
              onRowSelect={onRowSelect}
              tableSelection={tableSelection}
              allowMultiSelect={allowMultiSelect}
              hideIdColumn={hideIdColumn}
              selectedList={selectedList}
              selectionColor={selectionColor}
              maxTableDataWidth={maxTableDataWidth}
              onSortData={onSortData}
            />
          </Table>
        </TableContainer>
        <TableFooter
          sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <TablePaginationActions
            component="div"
            showFirstButton
            showLastButton
            totalNumberOfData={totalNumberOfData}
            rowsPerPage={pageSize}
            page={page}
            rowsPerPageOptions={rowsPerPageOptions}
            onPageChange={handleChangePage}
            onPageNumberChange={onPageNumberChangeAction}
            onLastPageButtonClick={onLastPageButtonClick}
            onNextButtonClick={onNextButtonClick}
            onFirstPageClick={onFirstPageClick}
            onBackButtonClick={onBackButtonClick}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Paper>
    </Box>
  );
};
