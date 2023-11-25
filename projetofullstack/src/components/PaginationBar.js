import React from "react";
import Pagination from "@mui/material/Pagination";

function PaginationBar({
  currentPage,
  handlePageChange,
  pageCount,
  backgroundColor,
  textColor,
}) {
  return (
    <Pagination
      className="pagination"
      count={pageCount}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
      sx={{
        marginTop: "20px",
        "& .MuiPaginationItem-page.Mui-selected": {
          backgroundColor: backgroundColor,
          color: textColor,
        },
      }}
    />
  );
}

export default PaginationBar;