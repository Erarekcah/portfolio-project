import React from "react";
import { logo } from "../utils/constants";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="rwo"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#1c1c1c",
      top: 0,
      justifyContent: "space-between",
      zIndex: "200",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
