import React from "react";
import NavBar from "../pages/components/NavBar";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <>
      <NavBar />
      <Box style={{ display: "flex" }}>
        <SideBar />
        <MainContent />
      </Box>
    </>
  );
}

export default Dashboard;
