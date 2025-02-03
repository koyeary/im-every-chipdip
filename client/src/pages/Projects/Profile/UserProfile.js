import React, { Fragment } from "react";
import Box from "@mui/material/Box";

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

const UserProfile = ({ colors, icons, fields, setEdit }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const findInAndAfter = (str) => {
    const index = str.indexOf("/in/");

    if (index !== -1) {
      return str.substring(index);
    }
    return null;
  };

  const findGitHub = (str) => {
    const index = str.indexOf("github.com/");
    if (index !== -1) {
      return str.substring(index);
    }
    return null;
  };

  return (
    <Box
      sx={{
        width: "100%",

        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <List
        sx={{
          width: 600,
          maxWidth: "100%",
          bgcolor: "background.paper",
          margin: "100px auto 20px auto",
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
                {user[item] && user[item].startsWith("ht") ? (
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
                )}
              </ListItemButton>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default UserProfile;
