import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

import { ReactComponent as Logo } from "../assets/images/logo.svg";
import login_right_bg from "../assets/images/login_right_bg.png";
import register_right_bg from "../assets/images/register_right_bg.png";
import forgot_right_bg from "../assets/images/forgot_right_bg.png";
import reset_right_bg from "../assets/images/reset_right_bg.png";
import verify_right_bg from "../assets/images/verify_right_bg.png";

const AuthenticationLayout = (props: any) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        height: { xs: "100vh" },
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Container
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              pt: 10,
              pb: 3
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                left: 0,
                px: 3,
                py: 2.5,
              }}
            >
              <Link to="/">
                <Logo style={{ color: "#143D5D" }} />
              </Link>
            </Box>
            <Box sx={{ px: { lg: 7, xl: 15} }}>
              {props.children}
            </Box>
          </Container>
        </Grid>
        <Grid size={{ xs: 0, md: 6 }}>
          <Box
            sx={{
              height: "100%",
              backgroundImage:
                location.pathname === "/login"
                  ? `url(${login_right_bg})`
                  : location.pathname === "/register" 
                  ? `url(${register_right_bg})`
                  : location.pathname === "/forgot-password"
                  ? `url(${forgot_right_bg})`
                  : location.pathname === "/reset-password"
                  ? `url(${reset_right_bg})`
                  : location.pathname === "/verify-email"
                  ? `url(${verify_right_bg})`
                  : `url(${login_right_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

AuthenticationLayout.propTypes = {
  children: PropTypes.object,
};

export default AuthenticationLayout;
