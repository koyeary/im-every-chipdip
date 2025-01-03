import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableContainer } from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses[""].head}`]: {
    backgroundColor: "#21387a",
    color: "#FFF",
  },
  /*   [`&.${tableCellClasseitem[""].body}`]: {
    fontSize: 14,
  }, */
}));

/* const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
})); */

const Portfolio = ({ performance }) => {
  const columns = [
    "change",
    "% Change",
    "open",
    "high",
    "low",
    "close",
    "volume",
  ];

  const round = (num) => {
    return Math.round(num * 100) / 100;
  };

  return (
    <TableContainer
      /* className="portfolio-table" */ sx={{
        borderRadius: 2,
        backgroundColor: "#1d1240",
        color: "#FFF",
        height: 250,
        maxWidth: "100%",
      }}
    >
      <Table stickyHeader aria-label="simple table" size="small">
        <TableHead>
          <TableCell
            key={-1}
            sx={{ color: "#FFF", backgroundColor: "#1d1240" }}
          >
            Stock
          </TableCell>
          {columns.map((c, index) => (
            <TableCell
              key={index}
              sx={{
                color: "#FFF",
                backgroundColor: "#1d1240",
                textWrap: "nowrap",
              }}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {performance.map((p, index) => (
            <TableRow key={index}>
              <TableCell key="symbol" style={{ color: "#FFF" }}>
                {p.symbol}
              </TableCell>
              <TableCell
                key="change"
                style={{
                  color: "#FFF",
                  color: p.change > 0 ? "#0bc13f" : "red",
                  fontWeight: "500",
                }}
              >
                {p.change[0] !== "-" && "+ "}
                {round(p.change)}
              </TableCell>
              <TableCell
                key="percent_change"
                style={{
                  color: "#FFF",
                  color: p.percent_change > 0 ? "#0bc13f" : "red",
                  fontWeight: "500",
                }}
              >
                {}
                {round(p.percent_change)}
              </TableCell>
              <TableCell key="open" style={{ color: "#FFF" }}>
                {round(p.open)}
              </TableCell>
              <TableCell key="high" style={{ color: "#FFF" }}>
                {round(p.high)}
              </TableCell>
              <TableCell key="low" style={{ color: "#FFF" }}>
                {round(p.low)}
              </TableCell>
              <TableCell key="close" style={{ color: "#FFF" }}>
                {round(p.close)}
              </TableCell>
              <TableCell key="volume" style={{ color: "#FFF" }}>
                {round(p.volume)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Portfolio;
