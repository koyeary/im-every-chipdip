import { useState } from "react";
import { Button, Card, Drawer } from "@mui/material";

const Status = () => {
  const [open, setOpen] = useState(false);

  // There is an explanation of the project and the sample API. Certain enpoints have been configured to break and return errors. When you click on errors, a console (drawer) opens to show you more information. The console can also be opened by clicking the button at the top of the page. If you have opened the console by clicking on a specific error, that error will appear highlighted in the console. Endpoints can be tested manually.

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const endpoints = ["/api/users", "/api/contact", "/api/auth", "/api/payment"];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        height: "90vh",
        justifyContent: "center",
        overflow: "auto",
        margin: "auto",
      }}
    >
      <h1 style={{ marginBottom: 50 }}>Status and Error Reporting</h1>
      <Button onClick={toggleDrawer(true)}>Open Console</Button>
      <Drawer
        anchor="right"
        sx={{ width: "25vw" }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        Drawers are a good way to display information.
      </Drawer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          width: 1200,
          margin: "auto",
        }}
      >
        {endpoints.map((ep) => (
          <Card
            style={{
              width: "360px",
              maxWidth: "95%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2>{ep}</h2>
            <p>GET</p>
            <p>POST</p>
            <p>PUT</p>
            <p>DELETE</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Status;
