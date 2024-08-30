import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";

const ForEx = ({ forexData }) => {
  // Your component logic goes here

  const columns = [
    "Currency",
    "Exchange Rate",
    "Bid Price",
    "Ask Price",
    "Last Refreshed",
    "Time Zone",
  ];

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
              <Tooltip title={c.currencyName}>
                <TableCell
                  style={{ color: "#FFF" }}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ marginRight: 10 }}
                    src={`https://flagsapi.com/${c.countryCode}/flat/24.png`}
                  />
                  {c.currencyCode}
                </TableCell>
              </Tooltip>
              {/*               <TableCell>{c.change}</TableCell>
              <TableCell>{c.percent_change}</TableCell>
              <TableCell>{c.open}</TableCell>
              <TableCell>{c.high}</TableCell>
              <TableCell>{c.close}</TableCell>
              <TableCell>{c.low}</TableCell>
              <TableCell>{c.volume}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ForEx;
