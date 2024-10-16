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
          // error={true}
          // helperText="Incorrect email address."
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
          // error={true}
          // helperText="Incorrect password."
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
          mb: 1,
          fontSize: "16px",
          textTransform: "none",
        }}
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
