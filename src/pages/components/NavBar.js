import React from "react";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { BiCrown } from "react-icons/bi";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function Navbar() {
  return (
    <AppBar position="static" sx={{ zIndex: "1" }}>
      <Box sx={{ m: "0", pl: "0", maxWidth: "100vw" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            ml: "0",
          }}
          disableGutters
        >
          <Typography sx={{ fontWeight: "600", fontSize: "27px", ml: "40px" }}>
            Ouly.AI
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "32px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <NotificationsIcon
              fontSize="medium"
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.32)",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF52",
                mr: "24px",
                cursor: "pointer",
              }}
            />
            <Box
              style={{
                display: "flex",
                gap: "10px",
                border: "1px solid rgba(255, 255, 255, 0.32)",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF52",
                marginRight: "24px",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <BiCrown size={"24px"} color={"gold"} />
              Premium
            </Box>
            <Box
              style={{
                display: "flex",
                border: "1px solid rgba(255, 255, 255, 0.32)",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF52",
                cursor: "pointer",
                paddingRight: "34px",
              }}
            >
              <PersonIcon fontSize="medium" sx={{ mr: "14px" }} />
              User Name
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
