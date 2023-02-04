import { Box, Button, Checkbox, InputLabel, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const formBox = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const backArrow = () => {
    navigate("/signin");
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
              maxWidth: "442px",
              width: "100%",
              fontSize: "1rem",

              padding: "1rem",
              borderRadius: "2rem",
              border: "1px solid ",
              outline: "none",
            }}
            placeholder="First Name "
          />
          <input
            style={{
              height: "48px",
              maxWidth: "442px",
              width: "100%",
              fontSize: "1rem",

              padding: "1rem",
              borderRadius: "2rem",
              border: "1px solid ",
              outline: "none",
            }}
            placeholder="Last Name"
          />
          <input
            style={{
              height: "48px",
              maxWidth: "442px",
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
              maxWidth: "442px",
              width: "100%",
              fontSize: "1rem",

              padding: "1rem",
              borderRadius: "2rem",
              border: "1px solid ",
              outline: "none",
            }}
            placeholder="Password"
          />

          <InputLabel sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox />
            <Typography fontSize="12px">
              I agree to the Google Terms of Service and Privacy Policy
            </Typography>
          </InputLabel>
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
            <Typography>Already a member? </Typography>

            <Link to="/signin">Sign in</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
