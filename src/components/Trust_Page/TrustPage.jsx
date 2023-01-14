import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FreeShipping from "../../assets/Free Shipping.png";
import PaymentsImg from "../../assets/Payments.png";
import Moneyback from "../../assets/moneyback.png";
import Quality from "../../assets/quality.png";

const TrustPage = () => {
  return (
    <Box p="4rem">
      <Typography variant="h5" fontWeight="bold" textAlign="center" m="2rem 0">
        Why Should You Choose Us?
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          justifyContent: {
            sm: "center",
          },
          gap: "2rem",
        }}
      >
        <Card sx={{ cursor: "pointer" }}>
          <CardContent>
            <img src={FreeShipping} alt="" />
            <Typography variant="h6">Free Shipping</Typography>
            <Typography variant="body1">
              All purchases over $199 are eligible for free shipping via USPS
              First Class Mail.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ cursor: "pointer" }}>
          <CardContent>
            <img src={PaymentsImg} alt="" />
            <Typography variant="h6">Easy Payment</Typography>
            <Typography variant="body1">
              All payments are processed instantly over a secure payment
              protocol.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ cursor: "pointer" }}>
          <CardContent>
            <img src={Moneyback} alt="" />
            <Typography variant="h6">Money Back Warranty</Typography>
            <Typography variant="body1">
              If an item arrived damaged or you've changed your mind, you can
              send it back for a full refund.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ cursor: "pointer" }}>
          <CardContent>
            <img src={Quality} alt="" />
            <Typography variant="h6">Money-Back Guarantee</Typography>
            <Typography variant="body1">
              Designed to last, each of our products has been crafted with the
              finest materials.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default TrustPage;
