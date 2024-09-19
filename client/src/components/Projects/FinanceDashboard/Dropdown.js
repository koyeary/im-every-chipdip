import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";

const DenseMenu = ({ stocks }) => {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        {stocks.map((stock) => (
          <>
            <MenuItem>
              <ListItemText>
                <div>{stock.symbol}</div>
                <div>{stock.name}</div>
              </ListItemText>
            </MenuItem>
            <Divider />
          </>
        ))}
      </MenuList>
    </Paper>
  );
};

export default DenseMenu;
