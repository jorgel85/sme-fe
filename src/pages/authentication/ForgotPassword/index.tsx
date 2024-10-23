import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { forgotPassword } from "../../../store/actions";
import CircularProgress from "@mui/material/CircularProgress";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    email: "",
  });

  const { loading, error } = useSelector((state: any) => state.Login);

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

    setValidationErrors(newErrors);
    return valid;
  };

  const handleForgotPassword = () => {
    if (validate()) {
      dispatch(forgotPassword(email));
      setSentEmail(true);
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
      {!error.forgotPassword && sentEmail ? (
        <Alert severity="success" sx={{ my: 3, py: 3 }}>
          Please check your email inbox for a link to complete the reset.
        </Alert>
      ) : (
        <>
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
              error={!!validationErrors.email}
              helperText={validationErrors.email}
            />
          </Box>
          {error.forgotPassword && (
            <Typography color="error" sx={{ fontSize: "16px" }}>
              We were unable to send an email to the provided address. Please
              check the email for accuracy.
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
            onClick={handleForgotPassword}
            disabled={loading}
          >
            {loading ? <CircularProgress size={28} color="inherit" /> : "Reset your password"}
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
              "&:hover": {
                borderColor: "#353535",
                backgroundColor: "rgba(53, 53, 53, 0.1)",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Back
          </Button>
        </>
      )}
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
