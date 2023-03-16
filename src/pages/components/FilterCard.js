import {
  Paper,
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/system";
import "../components/maincontent.css";

//...........
export default function FilterCard(props) {
  const styles = {
    borderRadius: 12,
  };
  return (
    <Box>
      {props.showPaper && (
        <Paper
          sx={{
            height: "auto",
            p: "20px",
            mt: "32px",
            width: "530px",
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
            <label style={{ fontWeight: "600" }}>Filter</label>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleFilter}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ mt: "24px" }} />
          <Box
            sx={{
              mt: "24.5px",
              mb: "24.5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="2D Product"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="3D Content"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="With Icon"
            />
          </Box>
          <label style={{ fontWeight: "600", marginTop: "24.5px" }}>
            Colors
          </label>
          <Box sx={{ mb: "24.5px", display: "flex", alignItems: "center" }}>
            <IconButton>
              <input
                type="color"
                id="color-picker"
                value="+"
                name="color-picker"
                style={{
                  border: "none",
                  height: "42px",
                  width: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#2DD4BF",
                  cursor: "pointer",
                  backgroundImage:
                    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                height: "42px",
                width: "42px",
                borderRadius: "12px",
                backgroundColor: "#2DD4BF",
                ml: "20px",
              }}
            />
            <IconButton
              sx={{
                height: "42px",
                width: "42px",
                borderRadius: "12px",
                backgroundColor: "#1E40AF",
                ml: "28px",
              }}
            />
            <IconButton
              sx={{
                height: "42px",
                width: "42px",
                borderRadius: "12px",
                backgroundColor: "#116DFF",
                ml: "28px",
              }}
            />
          </Box>
          <label style={{ fontWeight: "600" }}>Language</label>
          <Box>
            <FormControl
              style={styles}
              sx={{ display: "flex", mt: "16px", mb: "16px" }}
            >
              <InputLabel id="demo-multiple-name-label">
                Chose Language
              </InputLabel>

              <Select
                style={{ borderRadius: "12px", backgroundColor: "#F3F2FF80" }}
                sx={{}}
              >
                <MenuItem>Bahasa Indonesia (Indonesia)</MenuItem>
                <MenuItem>English (India)</MenuItem>
                <MenuItem>Deutsch (Deutschland)</MenuItem>
                <MenuItem>Dansk (Danmark)</MenuItem>
                <MenuItem>English (philippines)</MenuItem>
                <MenuItem>English (US)</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              mr: "20px",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <Box>
              {/* //typesof product\\ */}
              <label style={{ fontWeight: "600" }}>Types of Product</label>
              <Box>
                <FormControl
                  style={styles}
                  sx={{ display: "flex", mt: "16px" }}
                >
                  <InputLabel id="demo-multiple-name-label">
                    Physical
                  </InputLabel>
                  <Select
                    style={{
                      borderRadius: "12px",
                      width: "254px",
                      backgroundColor: "#F3F2FF80",
                    }}
                  >
                    <MenuItem>Physical</MenuItem>
                    <MenuItem>Virtual</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box>
              {/* //number of section\\ */}
              <label style={{ fontWeight: "600" }}>Number of Section</label>
              <Box>
                <FormControl
                  style={styles}
                  sx={{
                    display: "flex",
                    mt: "16px",
                    width: "252px",
                  }}
                >
                  <InputLabel id="demo-multiple-name-label">8</InputLabel>

                  <Select
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#F3F2FF80",
                    }}
                  >
                    <MenuItem>8</MenuItem>
                    <MenuItem>9</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "32px",
            }}
          >
            <Button
              variant="outlined"
              onClick={props.handleFilter}
              style={{ borderRadius: "8px", height: "48px", width: "250px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                height: "48px",
                width: "250px",
              }}
            >
              Apply Filter
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
}
