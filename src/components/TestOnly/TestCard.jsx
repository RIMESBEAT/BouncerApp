import React from 'react'
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
import { useNavigate } from 'react-router-dom';

const TestCard = ({ title, price, color, imageUrl, category, description, _id }) => {
    const navigate = useNavigate()
    
      const onClickHandler = () => {
        navigate(`/details/${_id}`);
      };
  return (
    <Box>
      {
        <Box className="" key={_id}>
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
            onClick={onClickHandler}
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
                padding: "1rem",
              }}
            >
              <img
                src={imageUrl}
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
              <Typography variant="body2" color="text.secondary">
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

export default TestCard