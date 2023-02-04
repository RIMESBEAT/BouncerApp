import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  InputLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import convertToBase64 from "./Convert";

import Avatar from "../../assets/avatar.png";

const ForgotPassword = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const formBox = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        p: "4rem 1rem",
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
          <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
            Forgot Your Password?
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
          {/* <label htmlFor="profile">
            <img
              src={file || Avatar}
              style={{ width: 150, height: 150, borderRadius: "50%", objectFit: "cover",  }}
            
              alt="lfkff"
            />

          </label>

          <input onChange={onUpload} type="file" id="profile" name="profile" style={{display: "none"}} /> */}

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
          <Divider>
            <Typography padding="0 2rem">OR</Typography>
          </Divider>
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
            placeholder="Mobile Number"
          />
          <Button
            style={{
              height: "49px",

              width: "100%",
              cursor: "pointer",
              borderRadius: "2rem",
              border: "none",
              textTransform: "capitalize",
              color: "black",
              background: "var(--yellow)",
            }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
