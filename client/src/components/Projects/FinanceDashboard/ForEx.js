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

  const columns = ["Country", "Currency", "Exchange Rate"];

  const moveUSDToFront = (data) => {
    const index = data.findIndex((item) => item.currencyCode === "USD");
    if (index !== -1) {
      const [usdItem] = data.splice(index, 1);
      data.unshift(usdItem);
    }
    return data;
  };

  const updatedForexData = moveUSDToFront([...forexData]);
  return (
    // Your JSX code goes here
    <div>
      <Table aria-label="simple table" size="small">
        <TableHead>
          {columns.map((c) => (
            <TableCell key={c} style={{ color: "#FFF" }}>
              {c}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {updatedForexData.map((c, index) => (
            <TableRow key={index}>
              <Tooltip title={c.countryName}>
                <TableCell style={{ color: "#FFF", cursor: "pointer" }}>
                  <img
                    style={{ marginRight: 10 }}
                    width="24"
                    height="18"
                    src={`https://flagcdn.com/24x18/${c.countryCode.toLowerCase()}.png`}
                  />
                </TableCell>
              </Tooltip>
              <TableCell style={{ color: "#FFF" }}>{c.currencyCode}</TableCell>
              <TableCell style={{ color: "#FFF" }}>{c.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ForEx;
