import {
  AppBar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Cart from "../../assets/cart.png";
import UserIcon from "../../assets/user.png";
import { useEffect } from "react";
import { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const drawerWidth = 240;
const navItems = ["Men", "Women", "Kids"];
const Navbar = (props) => {

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [navbarBackground, setNavbarBackground] = useState("transparent");

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setScrollPosition(entry.boundingClientRect.y);
  //       if (entry.boundingClientRect.y < 0) {
  //         setNavbarBackground("#000");
  //       } else {
  //         setNavbarBackground("transparent");
  //       }
  //     },
  //     { threshold: [0] }
  //   );
  //   const target = document.querySelector("#scroll-target");
  //   observer.observe(target);

  //   return () => {
  //     observer.unobserve(target);
  //   };
  // }, []);


  
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };

  const handleClick = (index) => {
    let name = navItems[index];
    console.log(name);
    navigate(`shop/${name}`);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    
    <Box
    
      onClick={handleDrawerToggle}
      component="div"
      sx={{
        textAlign: "center",
        background: "var(--black)",
        height: "100vh",
        pt: "1rem ",
        color: "white",
      }}
    >
     
      <Typography
        variant="span"
        sx={{
          p: "1rem 0",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={gotoHome}
      >
        <img src={Logo} alt="Logo" style={{ marginRight: "1rem" }} />
        E-Shop
      </Typography>
      <Divider sx={{ p: "1rem 0" }} />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleClick(index)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: { xs: "flex" },
          p: "2rem 0",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <img src={Search} alt="" />
        </Link>
        <Link to="/cart">
          <img src={Cart} alt="" />
        </Link>
        <Link to="/signin">
          <img src={UserIcon} alt="" />
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", color: "white", paddingBottom: "2rem" }}>
      <div id="scroll-target" style={{ height: "18px" }} />
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "var(--black)"}} padding="0 4rem" className="navbar">
        <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, display: { xs: "block" }, cursor: "pointer" }}
            onClick={gotoHome}
          >
            <img src={Logo} alt="logo" style={{ marginRight: "1rem" }} />
            E-Shop
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                onClick={() => handleClick(index)}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },

              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <img src={Search} alt="" />
            </Link>
            <Link to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
              </Badge>
            </Link>
            <Link to="/signin">
              <img src={UserIcon} alt="" />
            </Link>
          </Box>
          <Box sx={{display: {
            xs: "flex", 
            sm: "none"
          }, gap: "1rem"}}>
            <Link to="/cart">
              <img src={Cart} alt="" />
            </Link>
            <Link to="/signin">
              <img src={UserIcon} alt="" />
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
