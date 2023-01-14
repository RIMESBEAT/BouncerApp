import {
  AppBar,
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
import React from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Cart from "../../assets/cart.png";
import UserIcon from "../../assets/user.png";

const drawerWidth = 240;
const navItems = ["Men", "Women", "Kids"];
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "var(--grey100)",
        height: "100vh",
        pt: "1rem ",
        color: "white"
      }}
    >
      <Typography
        variant="span"
        sx={{ p: "1rem 0", color: "white", fontWeight: "bold" }}
      >
        <img src={Logo} alt="Logo" style={{ marginRight: "1rem" }} />
        E-Shop
      </Typography>
      <Divider sx={{ p: "1rem 0" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
        <Link to="/">
          <img src={Cart} alt="" />
        </Link>
        <Link to="/">
          <img src={UserIcon} alt="" />
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", color: "white",  }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent" padding="0 4rem">
        <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, display: { xs: "block" } }}
          >
            <img src={Logo} alt="logo" style={{ marginRight: "1rem" }} />
            E-Shop
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", sm: "flex" },
         
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center", }}>
            <Link to="/">
              <img src={Search} alt="" />
            </Link>
            <Link to="/">
              <img src={Cart} alt="" />
            </Link>
            <Link to="/">
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
