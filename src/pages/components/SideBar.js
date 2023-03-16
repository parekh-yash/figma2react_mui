import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Button, Container } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EditIcon from "@mui/icons-material/Edit";
function SideBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90.7vh",
        width: "250px",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ mt: "42px", alignItems: "center" }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            p: "12px",
            width: "206px",
            justifyContent: "flex-start",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          <DashboardIcon sx={{ mr: "12.67px" }} />
          Dashboard
        </Button>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            p: "12px",
            width: "206px",
            justifyContent: "flex-start",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          <InventoryIcon sx={{ mr: "12.67px" }} />
          Products
        </Button>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            p: "12px",
            width: "206px",
            justifyContent: "flex-start",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          <SupportAgentIcon sx={{ mr: "12.67px" }} />
          Services
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            p: "12px",
            width: "206px",
            justifyContent: "flex-start",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          <EditIcon sx={{ mr: "12.67px" }} />
          Editing
        </Button>
        <Button
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textDecoration: "none",
            fontWeight: "600",
            color: "#232859",
          }}
          onClick={handleLogout}
        >
          <ExitToAppIcon
            sx={{
              mr: "8.67px",
              p: "8px",
              borderRadius: "12px",
            }}
          />
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default SideBar;
