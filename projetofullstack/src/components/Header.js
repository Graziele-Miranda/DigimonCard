import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";

function Header() {
  return (
    <AppBar position="fixed" sx={{ background: "#0000CD", height: "100px" }}>
      <Toolbar>
        <img
          src={logo}
          alt="HeaderImage"
          style={{ marginRight: "20px", height: "150px", marginTop: "2%" }}
        />
        <Typography
          className="header"
          variant="h5"
          sx={{
            color: "#ffa500",
            fontWeight: "bold",
            fontFamily: "Pixelify Sans",
            fontSize: "45px",
          }}
        >
          DIGIMON.DB
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
