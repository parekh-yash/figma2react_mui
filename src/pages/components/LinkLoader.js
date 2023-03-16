import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import img from "./assets/img.png";
import smallimg from "./assets/smallimg.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Close } from "@mui/icons-material";

function LinkLoader(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {props.showLink && (
        <Card
          sx={{
            pt: "52px",
            mt: "16px",
            height: "465px",
            borderRadius: "12px",
            position: "relative",
            p: "24px",
          }}
        >
          <IconButton
            color="inherit"
            onClick={props.handleLink}
            aria-label="close"
            sx={{ ml: "755px" }}
          >
            <Close />
          </IconButton>
          <CardMedia component="img" image={img} alt="My Image" />
          <CardContent sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                width: "100%",
                bottom: 0,
                left: 0,
                right: 0,
                height: "154px",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box sx={{ p: "46px", display: "flex", alignItems: "center" }}>
                <CardMedia
                  sx={{ height: "106px", width: "130px", mr: "24px" }}
                  component="img"
                  image={smallimg}
                  alt="My Image"
                />
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontWeight: "600",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "700" }}
                    color="text.primary"
                  >
                    CURLISTA Pro 5 IN 1
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography color="text.secondary">Last Edit:</Typography>
                    <Typography color="text.primary">Yesterday</Typography>
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ p: "46px" }}>
                <IconButton
                  variant="outlined"
                  onClick={handleMenuClick}
                  sx={{
                    height: "36px",
                    width: "36px",
                    borderRadius: "8px",
                    border: "0.725415px solid #6B7280",
                  }}
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => console.log("Custom clicked")}>
                    Custom
                  </MenuItem>
                  <MenuItem onClick={() => console.log("View clicked")}>
                    View
                  </MenuItem>
                </Menu>
                <Button variant="contained" sx={{ ml: "18px" }}>
                  Download
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default LinkLoader;
