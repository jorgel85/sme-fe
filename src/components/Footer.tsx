import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo_small from "../assets/images/logo_small.svg";
import footer_bg_logo from "../assets/images/footer_bg_logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        backgroundColor: "#143D5D",
        py: { xs: 5, xl: 12 },
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              color: "white",
              textAlign: "center",
            }}
          >
            hello@synthesise.me
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C44D4F",
              my: 2,
            }}
          >
            <img src={logo_small} alt="Logo" />
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              color: "white",
              textAlign: "center",
            }}
          >
            Shop, earn, enjoy
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={4}>
              <TwitterIcon sx={{ color: "white" }} />
            </Grid>
            <Grid size={4}>
              <InstagramIcon sx={{ color: "white" }} />
            </Grid>
            <Grid size={4}>
              <LinkedInIcon sx={{ color: "white" }} />
            </Grid>
          </Grid>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              color: "white",
              textAlign: "center",
              mt: 5,
              zIndex: 100
            }}
          >
            ©2024 Synthesise.Me, All Rights Reserved.
            <Link to="/privacy-policy">
              <span
                style={{
                  color: "white",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Privacy Policy
              </span>
            </Link>
          </Typography>
        </Box>
      </Container>
      <Box sx={{ position: "absolute", bottom: 0 }}>
        <img src={footer_bg_logo} alt="Footer Logo" width="100%" />
      </Box>
    </Box>
  );
};

export default Footer;
