import React, { Fragment } from "react";
import Button from "@mui/material/Button";

import Img from "../../About/Images/sm-Kat_Yeary-6BW.png";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Link,
} from "@mui/material";
import Divider from "@mui/material/Divider";

const UserProfile = ({ colors, icons, fields, edit, setEdit }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCancel = (e) => {
    e.preventDefault();

    setEdit(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User details updated");
  };

  /*     // Example usage:
    const exampleString = "https://www.linkedin.com/in/kat-yeary";
    const result = findInAndAfter(exampleString);
    console.log(result); // Output: /in/kat-yea
    // ry */
  return (
    <>
      <List
        sx={{
          width: 600,
          maxWidth: "100%",
          bgcolor: "background.paper",
          margin: "100px auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {fields.map((item, index) => (
          <Fragment key={item}>
            <ListItem key={item} alignItems="flex-start" disablePadding>
              <ListItemButton key={item}>
                <ListItemAvatar sx={{ backgroundColor: "#FFF" }}>
                  {index === 0 ? (
                    <Avatar alt={user.name} src={Img} />
                  ) : (
                    <Avatar sx={{ bgcolor: colors[index] }}>
                      {icons[index]}
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  secondary={item.charAt(0).toUpperCase() + item.slice(1)}
                />
                {/*        {user[item] && user[item].startsWith("ht") ? (
                  <ListItemText
                    primary={
                      <Link to={user[item]} target="_blank">
                        {item === "linkedIn"
                          ? findInAndAfter(user[item])
                          : findGitHub(user[item])}
                      </Link>
                    }
                  />
                ) : (
                  <ListItemText primary={user[item]} />
                )} */}
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      {edit && (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={handleCancel} type="submit" variant="contained">
            Cancel
          </Button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
