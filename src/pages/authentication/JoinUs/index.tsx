import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },
});

const JoinUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error } = useSelector((state: any) => state.Register);

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

    setValidationErrors(newErrors);
    return valid;
  };

  const handleJoinUs = () => {
    if (validate()) {
    }
  };

  return (
    <Box>
      <Typography
        component="p"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#011C39",
        }}
      >
        Let's Work together!
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Let us help become even greater at what you do
      </Typography>
      <Box sx={{ mt: 2, mb: 1 }}>
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
          error={!!validationErrors.fullName}
          helperText={validationErrors.fullName}
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
          error={!!validationErrors.email}
          helperText={validationErrors.email}
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
            borderColor: validationErrors.phoneNumber ? "red" : "#BFBEBD",
            padding: "20px",
            paddingLeft: "50px",
            backgroundColor: "#F9F8EF",
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
          }}
          buttonStyle={{
            borderRadius: "20px",
          }}
        />
        {validationErrors.phoneNumber && (
          <Typography color="error" sx={{ fontSize: "12px", px: 2, mt: "5px" }}>
            {validationErrors.phoneNumber}
          </Typography>
        )}
      </Box>
      {error && (
        <Typography color="error" sx={{ fontSize: "16px", mt: "5px" }}>
          This email address / phone number you entered is already registered.
          Please use a different email address or log in to your existing
          account.
        </Typography>
      )}
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
        disabled={loading}
        onClick={handleJoinUs}
      >
        {loading ? (
          <CircularProgress size={28} color="inherit" />
        ) : (
          "Send a message"
        )}
      </Button>
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

export default JoinUs;
