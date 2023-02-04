import { Box } from '@mui/material';
import React from 'react'
import ShopCard from '../ShopCard/ShopCard';

const Kids = ({products}) => {
  return (
    <Box>
      <Box></Box>
      <Box>
        <Box></Box>

        <Box>
          {products &&
            products.map((item) => {
              return <ShopCard {...item} key={item._id} />;
            })}
        </Box>
      </Box>
    </Box>
  );
}

export default Kids