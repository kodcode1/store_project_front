import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Button, Badge } from "@mui/material";
import AccountCircleonect from "./AccountCircleIUserConect";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyMap from "./mapStors";

export default function Navbar() {
  const navigate = useNavigate();

  // interface CartItem {
  //   id: string;
  // }
  // const [cartItems, setCartItems] = useState<number>(0);

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem('cart') || '[]') ;
  //   setCartItems(cart.length);
  //   console.log(cart.length);

  // }, []);
  return (
    <Box sx={{ flexGrow: 1, minHeight: "0px" }}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar sx={{ background: "" }}>
          <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Store
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="primary" onClick={() => navigate("/map")}>
              <Badge badgeContent={1} color="error">
                <LocationOnIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/cart")}>
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
            <AccountCircleonect />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
