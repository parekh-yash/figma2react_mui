import {
  Box,
  InputBase,
  Paper,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import FilterCard from "./FilterCard";
import FileUploader from "./FileUploader";
import LinkLoader from "./LinkLoader";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import LinkIcon from "@mui/icons-material/Link";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

//>.........
function MainContent() {
  const [showPaper, setShowFilter] = useState(false);
  const [showCam, setshowCam] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const handleLink = () => {
    setShowLink(!showLink);
    setShowFilter(false);
    setshowCam(false);
  };
  const handleCam = () => {
    setshowCam(!showCam);
    setShowFilter(false);
    setShowLink(false);
  };
  const handleFilter = () => {
    console.log("showPaper:", showPaper);
    setShowFilter(!showPaper);
    setshowCam(false);
    setShowLink(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState("one");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ mt: "24px", mb: "38px", borderRadius: "13px" }}
      >
        <Tab
          sx={{ textTransform: "none", fontSize: "22px;", fontWeight: "600" }}
          value="one"
          label="Ouly"
        />
        <Tab
          sx={{ textTransform: "none", fontSize: "22px;", fontWeight: "600" }}
          value="two"
          label="Plagify"
        />
        <Tab
          sx={{ textTransform: "none", fontSize: "22px;", fontWeight: "600" }}
          value="three"
          label="My Product"
        />
      </Tabs>
      <Typography sx={{ mb: "16px", fontSize: "32px", fontWeight: "600" }}>
        Welcome to Ouly 👋
      </Typography>
      <Box style={{ display: "flex" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "496px",
            borderRadius: "12px",
            boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <SearchIcon sx={{ mr: "12px", ml: "12px", color: "#929EAE" }} />
          <InputBase
            className="textbox"
            sx={{
              mt: "10px",
              mb: "10px",
              flex: 1,
              borderRadius: "15px",
            }}
            placeholder="Search"
          />
          <IconButton onClick={handleLink} sx={{ color: "#929EAE" }}>
            <LinkIcon />
          </IconButton>

          <IconButton onClick={handleCam} sx={{ mr: "12px", color: "#929EAE" }}>
            <CameraAltIcon />
          </IconButton>
        </Paper>
        <IconButton
          sx={{
            backgroundColor: "white",
            height: "56px;",
            width: "56px",
            ml: "12px;",
            boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
            borderRadius: "12px",
            color: "#929EAE",
          }}
          onClick={handleFilter}
        >
          <TuneIcon />
        </IconButton>
      </Box>
      <FilterCard handleFilter={handleFilter} showPaper={showPaper} />
      <FileUploader handleCam={handleCam} showCam={showCam} />
      <LinkLoader handleLink={handleLink} showLink={showLink} />
    </Box>
  );
}

export default MainContent;
