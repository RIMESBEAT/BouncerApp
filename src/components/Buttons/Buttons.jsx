import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export const BUTTON = ({ children }) => (
  <Button
    style={{
      height: "48px",
      maxWidth: "119px",
      width: "100%",
      cursor: "pointer",
      borderRadius: "2rem",
      border: "none",
      color: "black",
      background: "var(--yellow)",
    }}
  >
    {children}
  </Button>
);
export const BUTTONLG = ({ children }) => (
  <Button
    style={{
      height: "49px",
      maxWidth: "184px",
      width: "100%",
      cursor: "pointer",
      borderRadius: "2rem",
      border: "none",
      background: "var(--yellow)",
    }}
  >
    {children}
  </Button>
);

export const INPUT = ({ placeholder }) => (
  <input
    type="text"
    style={{
      height: "48px",
      maxWidth: "315px",
      width: "100%",
      padding: "1rem",
      borderRadius: "2rem",
      border: "none",
      outline: "none",
    }}
    placeholder={placeholder}
  />
);
export const SELECT = ({ handleChange, age }) => (
  <FormControl sx={{ height: "49px", maxWidth: "184px", width: "100%" }}>
    <InputLabel id="demo-simple-select-label">CHOOSE SIZE</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="CHOOSE SIZE"
      onChange={handleChange}
      sx={{
        fontSize: "1rem",
        fontWeight: "bold",

        borderRadius: "2rem",
        border: "none",
        outline: "none",
      }}
    >
      <MenuItem value="">
        <em>NONE</em>
      </MenuItem>
      <MenuItem value="">Twenty</MenuItem>
      <MenuItem value="">Thirty</MenuItem>
    </Select>
  </FormControl>
);
