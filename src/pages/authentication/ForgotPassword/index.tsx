import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      email: "",
    };

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSendEmail = () => {
    if (validate()) {
      console.log("Email:", email);
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
        Forgot your password?
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Enter your email address below to reset your password.
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "black",
          }}
        >
          Email
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your email."
          id="email"
          size="small"
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
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
        onClick={handleSendEmail}
      >
        Reset your password
      </Button>
      <Button
        variant="outlined"
        disableElevation
        fullWidth
        sx={{
          borderRadius: 15,
          backgroundColor: "transparent",
          borderColor: "#353535",
          color: "#353535",
          mb: 2,
          fontSize: "16px",
          textTransform: "none",
          '&:hover': {  
            borderColor: "#353535",
            backgroundColor: "rgba(53, 53, 53, 0.1)",
        },
        }}
        onClick={() => navigate("/login")}
      >
        Back
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

export default ForgotPassword;
