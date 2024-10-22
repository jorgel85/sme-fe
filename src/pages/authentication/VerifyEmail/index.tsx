import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { OtpInput } from "reactjs-otp-input";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleChange = (otp: string) => setOtp(otp);

  const handleVerify = () => {};

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
        Check email for OTP
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        To reset your password, please enter the 4 digit pin sent to your email.
      </Typography>
      <Typography
        component="span"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Didn’t receive the code?
      </Typography>
      <Button variant="text">
        <Typography
          component="span"
          sx={{
            mt: "-3px",
            fontSize: "20px",
            fontWeight: 400,
            color: "#BFBEBD",
            textAlign: "center",
            textTransform: "none",
            textDecoration: "underline",
          }}
        >
          {" "}
          Resend code
        </Typography>
      </Button>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          inputStyle={{
            padding: "15px 25px",
            margin: "5px 5px",
            borderRadius: "25px",
            border: "1px solid #BFBEBD",
            fontSize: "20px",
            textAlign: "center",
            outline: "none",
            transition: "border0.3s",
          }}
          focusStyle={{
            border: "1.5px solid #007BFF",
          }}
          separator={null}
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
        onClick={handleVerify}
      >
        Continue
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
        onClick={() => navigate("/forgot-password")}
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

export default VerifyEmail;
