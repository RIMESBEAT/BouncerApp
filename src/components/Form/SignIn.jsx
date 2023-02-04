import {
  Box,
  Button,
  Checkbox,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BUTTON, BUTTONLG, INPUT } from "../Buttons/Buttons";

const SignIn = () => {
  const formBox = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        p: "1rem 1rem",
        maxWidth: "350px",
        width: "100%",
        margin: "5rem auto",
        boxShadow: "2px 6px 9px 1px #22262a5a",
        borderRadius: "8px",
      }}
      component="form"
      onSubmit={formBox}
    >
      <Box></Box>
      <Box>
        <Box textAlign="center" sx={{ m: "2rem 0" }}>
          <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
            Log In
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            est numquam harum eum voluptates!
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            style={{
              height: "48px",
              maxWidth: "330px",
              width: "100%",
              fontSize: "1rem",
              padding: "1rem",
              borderRadius: "2rem",
              border: "1px solid ",
              outline: "none",
            }}
            placeholder="E-mail "
          />
          <input
            style={{
              height: "48px",
              maxWidth: "330px",
              width: "100%",
              fontSize: "1rem",
              padding: "1rem",
              borderRadius: "2rem",
              border: "1px solid ",
              outline: "none",
            }}
            placeholder="Password"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputLabel>
              <Checkbox /> Keep me signed in{" "}
            </InputLabel>
            <Link to="/forgotpassword">
              <Typography variant="body2">Forgot Password?</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              style={{
                height: "48px",
                maxWidth: "315px",
                width: "100%",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "1rem",
                borderRadius: "2rem",
                border: "none",
                outline: "none",
                background: "#3B5998",
                color: "white",
              }}
              placeholder=""
            >
              Facebook
            </button>
            <button
              style={{
                height: "48px",
                maxWidth: "315px",
                width: "100%",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "1rem",
                borderRadius: "2rem",
                border: "1px solid red",
                outline: "none",
              }}
              placeholder=""
            >
              Gmail
            </button>
          </Box>
          <Button
            style={{
              height: "49px",

              width: "100%",
              cursor: "pointer",
              borderRadius: "2rem",
              border: "none",
              fontSize: "1rem",
              color: "black",
              background: "var(--yellow)",
            }}
          >
            Sign in
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography>Not a member yet?</Typography>

            <Link to="/signup">Sign up</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
