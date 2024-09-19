import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";

const ForEx = ({ forexData, currencies }) => {
  // Your component logic goes here
  console.log(forexData);

  const columns = ["Currency", "Exchange Rate"];

  return (
    // Your JSX code goes here
    <div>
      <Table className="portfolio-table" aria-label="simple table" size="small">
        <TableHead>
          {columns.map((c) => (
            <TableCell key={c} style={{ color: "#FFF" }}>
              {c}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {forexData.map((c, index) => (
            <TableRow key={index}>
              <TableCell style={{ color: "#FFF" }}>
                {" "}
                <img
                  style={{ marginRight: 10 }}
                  src={`https://flagsapi.com/${c.countryCode}/flat/24.png`}
                />
              </TableCell>
              <TableCell
                style={{ color: "#FFF" }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                {c.currency}
              </TableCell>
              <TableCell
                style={{ color: "#FFF" }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                {c.rate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ForEx;
