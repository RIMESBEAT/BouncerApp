import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Buffer } from "buffer";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate,  } from "react-router-dom";

const ProductCard = ({ id, title, image, price }) => {
  // const { id } = useParams()
  const navigate = useNavigate()
  const topRef = useRef(null);

  const onClickHandler = () => {
    navigate(`/details/${id}`)
  }
 
  return (
    <Box>
      {
        <Box className="" key={id} onClick={onClickHandler}>
          {/* <img
                src={`data:${item.image.contentType};base64,${Buffer.from(
                  item.image.data.data
                ).toString("base64")}`}
                alt={item.title}
                width="200px"
              /> */}
          <Card
            sx={{
              maxWidth: {
                sm: 345,
              },
              cursor: "pointer",
            }}
          >
            {/* <CardMedia
                  sx={{height: 196, objectFit: "cover" }}
                  
                  image={image}
                  title={title}
                /> */}
            <Box
              className=""
              sx={{
                height: {
                  sm: 385,
                  xs: 248,
                },
                padding: "",
              }}
            >
              <img
                src={image}
                alt={title}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <CardContent>
              <Divider />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $ {price}
              </Typography>
            </CardContent>
            <Divider />
          </Card>
        </Box>
      }
    </Box>
  );
};

export default ProductCard;
