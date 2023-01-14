import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [hot, setHot] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("hot", hot);
    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
    setHot("");
    try {
      await axios.post("http://localhost:4000/api/addProducts", formData);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        size="small"
      />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          label="Category"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Hot</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hot}
          onChange={(e) => setHot(e.target.value)}
          size="small"
          label="Hot"
        >
          <MenuItem value="">No</MenuItem>
          <MenuItem value="hot">Hot</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="standard-basic"
        label="IMAGE"
        variant="standard"
        type="file"
        value=""
        onChange={(e) => setImage(e.target.files[0])}
        size="small"
      />

      <Button variant="outlined" type="submit">
        SAVE
      </Button>
    </Box>
  );
}

export default Upload;
