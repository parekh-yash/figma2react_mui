import React from "react";
import { Paper, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
function FileUploader(props) {
  const [image, setImage] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "506px",
          pl: "0px",
          mr: "66.5px",
        }}
      >
        {props.showCam && (
          <Paper
            sx={{
              height: "auto",
              p: "20px",
              mt: "32px",
              width: "100%",
              borderRadius: "12px",
              boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ fontWeight: "600", fontSize: "20px" }}>
                Upload Image
              </label>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props.handleCam}
                aria-label="close"
              >
                <Close />
              </IconButton>
            </Box>
            <Box
              className="image-uploader"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "50px",
                backgroundColor: "#F3F2FF80",
                border: "1px dashed rgba(99, 91, 255, 0.2)",
                borderRadius: "12px",
                mt: "24px",
                fontSize: "16px",
              }}
            >
              {image ? (
                <img className="image-preview" src={image} alt="Preview" />
              ) : (
                <h3>Drag and drop an image here or </h3>
              )}
              <input
                type="file"
                name="upload a file"
                accept="image/*"
                className="input-file"
                onChange={handleFileInputChange}
              />
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
}

export default FileUploader;
