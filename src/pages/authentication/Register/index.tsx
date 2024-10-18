import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };

    if (!fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
      valid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    }
    if (password && password.length < 8) {
      newErrors.password = "Password must be more than 8 letters.";
      valid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = () => {
    if (validate()) {
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  return (
    <Box>
      <Typography
        component="p"
        sx={{
          fontSize: "40px",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#011C39",
        }}
      >
        Welcome to Synthesise.Me
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Register to create your first account.
      </Typography>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
            mb: 1
          }}
        >
          Name
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your full name."
          id="fullName"
          size="small"
          margin="none"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
      </Box>
      <Box sx={{ my: 1.5 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
            mb: 1
          }}
        >
          Email
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your email."
          id="email"
          size="small"
          margin="none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box sx={{ my: 1.5 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
            mb: 1,
          }}
        >
          Phone number
        </Typography>
        <PhoneInput
          value={phoneNumber}
          placeholder="Enter your phone number."
          enableSearch
          onChange={(phone) => setPhoneNumber(phone)}
          inputStyle={{
            width: "100%",
            borderRadius: "20px",
            borderColor: errors.phoneNumber ? "red" : "#BFBEBD",
            padding: "20px",
            paddingLeft: "50px",
            backgroundColor: "#F9F8EF",
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
          }}
          buttonStyle={{
            borderRadius: "20px",
          }}
        />
        {errors.phoneNumber && (
          <Typography color="error" sx={{ fontSize: "12px", px: 2, mt: "5px" }}>
            {errors.phoneNumber}
          </Typography>
        )}
      </Box>
      <Box sx={{ my: 1.5 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
          }}
        >
          Password
        </Typography>
        <FormControl sx={{ width: "100%", mt: 1 }} variant="outlined">
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            size="small"
            placeholder="Enter your password."
            sx={{ borderRadius: "20px" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
          />
          {errors.password && (
            <Typography
              color="error"
              sx={{ fontSize: "12px", px: 2, mt: "5px" }}
            >
              {errors.password}
            </Typography>
          )}
        </FormControl>
      </Box>
      <Box sx={{ my: 1.5 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
          }}
        >
          Confirm Password
        </Typography>
        <FormControl sx={{ width: "100%", mt: 1 }} variant="outlined">
          <OutlinedInput
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            size="small"
            sx={{ borderRadius: "20px" }}
            placeholder="Confirm your password."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <Typography
              color="error"
              sx={{ fontSize: "12px", px: 2, mt: "5px" }}
            >
              {errors.confirmPassword}
            </Typography>
          )}
        </FormControl>
      </Box>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        sx={{
          borderRadius: 15,
          backgroundColor: "#011C39",
          my: 2,
          fontSize: "16px",
          textTransform: "none",
        }}
        onClick={handleRegister}
      >
        Register
      </Button>
      <Typography
        component="span"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#BFBEBD",
        }}
      >
        Already have an account?
      </Typography>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Typography
          component="span"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#BFBEBD",
          }}
        >
          {" "}
          Login
        </Typography>
      </Link>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Link to="/">
          <Typography
            component="p"
            sx={{
              mt: 5,
              fontSize: "14px",
              fontWeight: 700,
              color: "#BFBEBD",
              textAlign: "center",
            }}
          >
            Go Home
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
