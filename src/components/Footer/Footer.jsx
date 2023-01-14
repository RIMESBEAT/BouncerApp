import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/logoblack.png";
import Facebook from "../../assets/002-facebook-logo.png";
import Instagram from "../../assets/instagram (1).png";
import Twitter from "../../assets/001-twitter-logo-silhouette.png";
import Linkin from "../../assets/004-linkedin-logo.png";
import Youtube from "../../assets/005-youtube.png";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "grid",
          alignItems: "",
          justifyContent: "space-between",
          gap: "1rem",
          p: {
            xs: "4rem 1rem",
            sm: "4rem 2rem",
            md: "4rem 3rem",
          },
          gridTemplateColumns: {
            lg: "2fr 1fr 1fr 1fr",
            md: "2fr 1fr 1fr",
            sm: " 2fr 1fr   ",
            xs: "1fr",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "",
            justifyContent: "",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <Box variant="span">
            <img src={Logo} alt="" />
            <span style={{ color: "var(--yellow)" }}>E-</span>Shop
          </Box>
          <Typography variant="body1">
            House My Brand designs clothing for the young, the old & everyone in
            between but most importantly, for the fashionable
          </Typography>
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "none",
              },

              gap: "1rem",
            }}
          >
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Linkin} alt="linkin" />
            <img src={Instagram} alt="instagram" />
            <img src={Youtube} alt="youtube" />
          </Box>
        </Box>
        <Divider
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: {
              sm: "normal",
              xs: "center",
            },
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Shopping Online
          </Typography>
          <Link to="/">Order Status</Link>
          <Link to="/">Shipping and Delivery</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Payment Options</Link>
          <Link to="/">Contact Us</Link>
        </Box>
        <Divider
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "",
            justifyContent: "",
            flexDirection: "column",
            gap: ".5rem",
            alignItems: {
              sm: "normal",
              xs: "center",
            },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Information
          </Typography>
          <Link to="/">Gift Cards</Link>
          <Link to="/">Find a Store</Link>
          <Link to="/">Newsletter</Link>
          <Link to="/">Become a Member</Link>
          <Link to="/">Site Feedback</Link>
        </Box>
        <Divider
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "",
            justifyContent: "",
            flexDirection: "column",
            alignItems: {
              sm: "normal",
              xs: "center",
            },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Contact
          </Typography>
          <Link to="/">store@uikit</Link>
          <Link to="/">Hotline: +1 131138 138</Link>
        </Box>
        <Divider
          sx={{
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        />
        <Box
          sx={{
            display: {
              sm: "none",
              xs: "flex",
            },
            alignItems: "center",
            justifyContent: "center",

            gap: "1rem",
          }}
        >
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Linkin} alt="linkin" />
          <img src={Instagram} alt="instagram" />
          <img src={Youtube} alt="youtube" />
        </Box>
      </Box>
      <Divider />
      <Typography
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
                  borderBottom: "6px solid var(--green)",
          pt: "1rem"
        }}
      >
        Designed by iceo.co &copy; 2019. all rights reserved
      </Typography>
    </>
  );
};

export default Footer;
