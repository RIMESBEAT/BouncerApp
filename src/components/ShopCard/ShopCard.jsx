import React from "react";
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
import { useNavigate } from "react-router-dom";
import Unlike from "../../assets/unlike.png";
import Like from "../../assets/like.png";
import { useState } from "react";

const ShopCard = ({
  title,
  price,
  color,
  imageUrl,
  category,
  description,
  _id,
}) => {
  const navigate = useNavigate();
  const [likeToggle, setLikeToggle] = useState(false);

  const toggleLikeHandler = () => {
    setLikeToggle(!likeToggle);
  };

  const onClickHandler = () => {
    navigate(`/details/${_id}`);
  };
  return (
    <Box>
      {
        <Box className="" key={_id} sx={{}}>
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
                sm: 400,
              },
              width: "100%",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* <CardMedia
                  sx={{height: 196, objectFit: "cover" }}
                  
                  image={image}
                  title={title}
                /> */}
            <Box
              onClick={toggleLikeHandler}
              sx={{ position: "absolute", top: "2rem", right: "2rem" }}
            >
              {likeToggle ? (
                <img src={Like} alt={Like} width="50" />
              ) : (
                <img src={Unlike} alt={Unlike} width="50" />
              )}
            </Box>
            <Box
              className=""
              sx={{
                maxHeight: {
                  xs: 200,
                },
                width: "100%",
                height: "200px",
              }}
              onClick={onClickHandler}
            >
              <img
                src={imageUrl[0]}
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
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Typography>
            </CardContent>
            <Divider />
          </Card>
        </Box>
      }
    </Box>
  );
};

export default ShopCard;
