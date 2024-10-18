import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "react-phone-input-2/lib/style.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      password: "",
      confirmPassword: "",
    };

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

  const handleLogin = () => {
    if (validate()) {
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
        Reset password
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          color: "#BFBEBD",
        }}
      >
        Create a strong password that has at least 8 characters long.
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
          New password
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
          Confirm the new password
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
        onClick={handleLogin}
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
          "&:hover": {
            borderColor: "#353535",
            backgroundColor: "rgba(53, 53, 53, 0.1)",
          },
        }}
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

export default ResetPassword;
