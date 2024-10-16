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

const Register = () => {
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
          Name
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your full name."
          id="fullName"
          size="small"
          margin="dense"
          // error={true}
          // helperText="Please enter your full name."
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
          Email
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your email."
          id="email"
          size="small"
          margin="dense"
          // error={true}
          // helperText="Please enter your email address."
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
          Phone number
        </Typography>
        <RoundedTextField
          fullWidth
          placeholder="Enter your phone number."
          id="phoneNumber"
          size="small"
          margin="dense"
          // error={true}
          // helperText="Please enter your phone number."
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
          // helperText="Please enter a strong password."
        />
      </Box>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        sx={{
          borderRadius: 15,
          backgroundColor: "#011C39",
          my: 1,
          fontSize: "16px",
          textTransform: "none",
        }}
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
