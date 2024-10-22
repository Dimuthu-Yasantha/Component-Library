import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { MenuItem, Select,Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export const TablePaginationActions = (props: any) => {
  const theme = useTheme();
  const {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onPageChange,
    onPageNumberChange,
    onFirstPageClick,
    onLastPageButtonClick,
    onBackButtonClick,
    onNextButtonClick,
    onRowsPerPageChange,
    totalNumberOfData,
  } = props;

  const noOfPages = Math.ceil(totalNumberOfData / rowsPerPage);

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 1);
    onFirstPageClick(event);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
    onBackButtonClick(event);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
    onNextButtonClick(event);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(
      event,
      Math.max(0, Math.ceil(totalNumberOfData / rowsPerPage)),
    );
    onLastPageButtonClick(event);
  };

  const handlePageNumberSelect = (event: any) => {
    onPageChange(event, event.target.value);
    onPageNumberChange(event, event.target.value);
  };

  const handleRowsPerPage = (event: any) => {
    onPageChange(event, 1);
    onRowsPerPageChange(event, event.target.value);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: "#666C7F", fontSize: "14px", fontFamily: "Inter" }}
          >
            Rows per page :
          </Typography>
          <Select
            defaultValue={rowsPerPage}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              fontFamily: "Inter",
              fontSize: "14px",
            }}
            onChange={handleRowsPerPage}
            value={rowsPerPage}
          >
            {rowsPerPageOptions.map((item: number, i: number) => {
              return (
                <MenuItem
                  key={i}
                  value={item}
                  sx={{ fontFamily: "Inter", fontSize: "14px" }}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
        <Typography
          sx={{
            paddingTop: "18px",
            color: "#666C7F",
            fontSize: "14px",
            fontFamily: "Inter",
          }}
        >
          {`${page === 1 ? 1 : (page - 1) * rowsPerPage}` +
            "-" +
            `${
              page * rowsPerPage > totalNumberOfData
                ? totalNumberOfData
                : page * rowsPerPage
            }` +
            "   of   " +
            `${totalNumberOfData}`}
        </Typography>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 1}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 1}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <Select
          defaultValue={page}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            fontFamily: "Inter",
            fontSize: "14px",
          }}
          onChange={handlePageNumberSelect}
          value={page}
        >
          {[...Array(noOfPages)].map((e, i) => {
            return (
              <MenuItem
                key={i + 1}
                value={i + 1}
                sx={{ fontFamily: "Inter", fontSize: "14px" }}
              >
                {i + 1}
              </MenuItem>
            );
          })}
        </Select>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(totalNumberOfData / rowsPerPage)}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(totalNumberOfData / rowsPerPage)}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};
