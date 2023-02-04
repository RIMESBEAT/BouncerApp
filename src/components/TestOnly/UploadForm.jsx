import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Compressor from "compressorjs";
import { Stack } from "@mui/system";
import UploadBg from "../../assets/uploadbg.jpg";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState({});
  const [count, setCount] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [hot, setHot] = useState("");
  const [colors, setColors] = useState([]);
  const [priceSlash, setPriceSlash] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [size, setSize] = useState([]);

  const categories = [
    { name: "Select Category " },
    { name: "Shoes", subcategories: ["Lifestyle", "Running", "Soccer"] },
    {
      name: "clothing",
      subcategories: ["Pants", "Hoodies & Sweatshirts", "Gowns", "Vests"],
    },
    {
      name: "accessories",
      subcategories: ["Glasses", "Caps & Hats", "Watches"],
    },
    { name: "bags", subcategories: ["Backpacks", "Messenger Bags", "Luggage"] },
    { name: "outerwear", subcategories: ["Parkas", "Jackets", "Coats"] },
    {
      name: "collections",
      subcategories: ["Originals", "New Casual", "Reviving Retro"],
    },
  ];

  const filteredCategories =
    categories.filter((items) => items.name === category)[0]?.subcategories ||
    [];

  const handleImageChange = (event) => {
    setImages(event.target.files);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const typesOfColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "gold",
    "black",
    "white",
    "grey",
    "orange",
  ];
  const sizesBox = ["S", "M", "L", "XL", "XLL"];

  const handleChangeColors = (event) => {
    const {
      target: { value },
    } = event;
    setColors(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeSize = (event) => {
    const {
      target: { value },
    } = event;
    setSize(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (var f = 0; f < images.length; f++) {
      formData.append("file", images[f]);
    }
    for (var c = 0; c < colors.length; c++) {
      formData.append("colors", colors[c]);
    }
    for (var s = 0; s < size.length; s++) {
      formData.append("size", size[s]);
    }
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("hot", hot);
    formData.append("priceSlash", priceSlash);
    formData.append("count", count);
    formData.append("ageGroup", ageGroup);

    axios
      .post("http://localhost:4000/api/addProducts", formData)
      .then((response) => {
        console.log(response);
        alert("Images uploaded and title saved successfully");
        setCategory("");
        setColors([]);
        setCount("");
        setDescription("");
        setHot("");
        setImages([]);
        setPrice("");
        setPriceSlash("");
        setSubcategory("");
        setTitle("");
        setAgeGroup("");
        setSize([]);
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while uploading the images");
      });
  };

  return (
    <Box className="uploadBg">
      <Box
        component="form"
        sx={{
          display: "block",
          maxWidth: "350px",
          width: "100%",
          padding: "1rem",
          margin: "2rem auto",
          boxShadow: "2px 6px 9px 1px #22262a5a",
          borderRadius: "8px",
        }}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Stack spacing={2}>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title*"
          />
          <Input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Price*"
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              AgeGroup*
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              label="AgeGroup*"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>
            </Select>
          </FormControl>

          <Box component="div" sx={{ width: "100%" }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "45%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Category
              </InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Heading*"
                required
              >
                {categories &&
                  categories.map((items) => (
                    <MenuItem value={items.name} key={items.name}>
                      {items.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: "45%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Sub Category
              </InputLabel>
              <Select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Heading*"
                required
              >
                {filteredCategories &&
                  filteredCategories.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <Input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="description"
          />

          <input onChange={handleImageChange} type="file" multiple />
          {/* 
          <Input
            onChange={(e) => setColors(e.target.value)}
            value={colors}
            type="text"
            placeholder=" colors"
            multiple
            renderValue={(selected) => selected.join(", ")}
          /> */}
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select Colors*
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={colors}
              onChange={handleChangeColors}
              input={<OutlinedInput label="Select Colors*" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {typesOfColors.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={colors.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            onChange={(e) => setCount(e.target.value)}
            value={count}
            type="text"
            placeholder=" count"
          />
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select Size*
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={size}
              onChange={handleChangeSize}
              input={<OutlinedInput label="Select Size*" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {/* <MenuItem value='l'>L</MenuItem> */}
              {sizesBox.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={size.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            onChange={(e) => setPriceSlash(e.target.value)}
            value={priceSlash}
            type="text"
            placeholder=" discount"
          />
          <Input
            onChange={(e) => setHot(e.target.value)}
            value={hot}
            type="text"
            placeholder=" hot"
          />
          <Button type="submit">SAVE</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UploadForm;
