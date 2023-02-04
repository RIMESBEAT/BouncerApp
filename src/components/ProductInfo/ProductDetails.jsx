import {
  Badge,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import StandardDelivery from "../../assets/noun_delivery_2057282.png";
import ExpressDelivery from "../../assets/noun_Fast  Delivery_1212438.png";
import { BUTTON, BUTTONLG, SELECT } from "../Buttons/Buttons";
import Like from "../../assets/like.png";
import Unlike from "../../assets/unlike.png";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const ProductDetails = ({
  imageUrl,
  description,
  title,
  price,
  _id,
  rating,
  category,
  colors,
  size,
}) => {

  const [like, setLike] = useState(false);

  const [selectSize, setSelectSize] = useState(size);

  const settings = {
    customPaging: (i) => (
      <Box
        key={_id}
        component="div"
        sx={{ visibility: { sm: "none" } }}
        style={{
          width: "40px",
          height: "2px",
          background: "grey",
          margin: "0 8px",

          // position: "absolute",
          // bottom: "4rem",
        }}
      />
    ),

    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  const newImage =
    imageUrl &&
    imageUrl.find(function (element) {
      return element;
    });

  const [currentImage, setCurrentImage] = useState({ newImage });
  useEffect(() => {
    setCurrentImage(newImage);
  }, [newImage]);

  return (
    <Box
      key={_id}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        padding: "6rem 2rem",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "",
        margin: "auto",
        border: "2px solid red",
        width: "100%",
      }}
    >
      <Box>
        <Box></Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: { sm: "row", xs: "column-reverse" },
            alignContent: "start",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "column", xs: "row" },
              gap: "1rem",
            }}
          >
            {imageUrl &&
              imageUrl.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => setCurrentImage(image)}
                  style={{
                    height: 100,
                    width: 100,
                    objectFit: "contain",
                  }}
                />
              ))}
          </Box>

          {/* <Box
            sx={{
             
            }}
          >
            <Slider {...settings}>
              {imageUrl &&
                imageUrl.map((image, index) => (
                  <img
                    className="slider-image"
                    key={index}
                    src={image}
                    alt=""
                    onClick={() => setCurrentImage(image)}
                  />
                ))}
            </Slider>
          </Box> */}

          <Box
            sx={{
              display: {
                sm: "flex",
                justifyContent: "center",
                margin: "0 auto",
              },
            }}
          >
            {currentImage && (
              <img
                src={currentImage}
                alt={title}
                style={{
                  width: "260px",
                  height: 280,
                  maxWidth: 280,
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box margin="auto">
        <Box
          sx={{
            display: { sm: "flex", xs: "grid" },
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          <Box variant="span" sx={{ display: "flex" }}>
            <Box>
              <img src={StandardDelivery} alt="" width="30px" />
            </Box>
            <Box>
              <Typography>Standard Shipment</Typography>
              <Typography>Free within 3-6business days</Typography>
            </Box>
          </Box>
          <Box variant="span" sx={{ display: "flex" }}>
            <Box>
              <img src={ExpressDelivery} alt="" width="30px" />
            </Box>

            <Box>
              <Typography>Express Delivery</Typography>
              <Typography>$35, 00 available</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Badge
            sx={{
              background: "var(--red)",
              color: "white",
              p: "4px",
              borderRadius: "4px",
            }}
            badgeContent={0}
          >
            SALE
          </Badge>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">${price}</Typography>
          <Box>
            <Typography>Colors:</Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {colors &&
                colors.map((color) => (
                  <Box
                    sx={{
                      background: `${color}`,
                      height: "2rem",
                      width: "2rem",
                      border: "1px solid black",
                      cursor: "pointer",
                    }}
                  ></Box>
                ))}
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "2rem", p: "2rem 0" }}>
              <Typography>Size:</Typography>
              <Typography>See size table</Typography>
            </Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Select Size*
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                label="Select Size*"
                required
                value={selectSize}
                onChange={(e) => setSelectSize(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {size &&
                  size.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "2rem", p: "2rem 0" }}>
              <Typography>Quantity</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                // gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid black",
                  padding: "0 1rem",
                  borderRadius: "2rem",
                  gap: "1rem",
                }}
              >
                <Box fontSize="30px">-</Box>
                <Box fontSize="20px">4</Box>
                <Box fontSize="30px">+</Box>
              </Box>
              <Button>ADD TO CART</Button>
              <Box
                onClick={() => {
                  setLike(!like);
                }}
              >
                {like ? (
                  <img src={Like} width="50" alt="like" />
                ) : (
                  <img src={Unlike} width="50" alt="unlike" />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
