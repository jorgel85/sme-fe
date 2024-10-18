import { useState } from "react";
import { Link } from "react-router-dom";
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

const Login = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [errors, setErrors] = useState({  
    email: "",  
    password: "",  
  });

  const validate = () => {  
    let valid = true;  
    const newErrors = {  
      email: "",  
      password: "",  
    };  

    if (!email) {  
      newErrors.email = "Email is required.";  
      valid = false;  
    } else if (!/\S+@\S+\.\S+/.test(email)) {  
      newErrors.email = "Email address is invalid.";  
      valid = false;  
    }  
    
    if (!password) {  
      newErrors.password = "Password is required.";  
      valid = false;  
    }  

    setErrors(newErrors);  
    return valid;  
  };  

  const handleLogin = () => {  
    if (validate()) {  
      console.log("Email:", email);  
      console.log("Password:", password);
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
        Welcome Back!
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Welcome back! Please enter your details.
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
          Password
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your password."
          type="password"
          id="password"
          size="small"
          margin="dense"
          autoComplete="current-password"
          value={password}  
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}  
          helperText={errors.password}
        />
      </Box>
      <Link to="/forgot-password" style={{ textDecoration: "none" }}>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#BFBEBD",
            textAlign: "end",
            mb: 2,
          }}
        >
          Forgot password
        </Typography>
      </Link>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        sx={{
          borderRadius: 15,
          backgroundColor: "#011C39",
          mb: 2,
          fontSize: "16px",
          textTransform: "none",
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography
        component="span"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#BFBEBD",
        }}
      >
        Don’t have an account?
      </Typography>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Typography
          component="span"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#BFBEBD",
          }}
        >
          {" "}
          Register
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

export default Login;
