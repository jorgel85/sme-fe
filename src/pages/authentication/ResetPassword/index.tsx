import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

import { resetPassword } from "../../../store/actions";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [attemptResetPassword, setAttemptResetPassword] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const { loading, error } = useSelector((state: any) => state.Login);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [location.search]);

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

  const handleResetPassword = () => {
    if (validate()) {
      dispatch(
        resetPassword({
          email,
          newPassword: password,
          resetPasswordToken: token,
        })
      );
      setAttemptResetPassword(true);
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
      {attemptResetPassword && !error.resetPassword ? (
        <>
          <Alert severity="success" sx={{ my: 3, py: 3 }}>
            Your password has been successfully reset.
          </Alert>
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
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </>
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
          {error.resetPassword && (
            <Typography color="error" sx={{ fontSize: "16px" }}>
              {error.resetPassword}
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
            onClick={handleResetPassword}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={28} color="inherit" />
            ) : (
              "Reset your password"
            )}
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

export default ResetPassword;
