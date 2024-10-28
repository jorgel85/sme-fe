import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import brandAirbnb from "../../assets/images/brand_airbnb.png";
import brandAdidas from "../../assets/images/brand_adidas.png";
import brandLenovo from "../../assets/images/brand_lenovo.png";
import brandNike from "../../assets/images/brand_nike.png";
import brandSamsung from "../../assets/images/brand_samsung.png";
import brandSony from "../../assets/images/brand_sony.png";
import brandWilson from "../../assets/images/brand_wilson.png";
import Button from "@mui/material/Button";

const PartnersPage = () => {
  const navigate = useNavigate();

  const brandLogos = [
    brandAirbnb,
    brandAdidas,
    brandLenovo,
    brandNike,
    brandSamsung,
    brandSony,
    brandWilson
  ];

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        py: { xs: 12, xl: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 6 }}>
          <Typography
            component="p"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
            }}
          >
            Partners
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#353535",
              textAlign: "center",
            }}
          >
            Explore 500+ brands across 50 categories, handpicked to match your
            style and lifestyle.
          </Typography>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            mt: 10,
            mb: 5,
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              animation: "scroll-left 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {brandLogos.map((_, index) => (
              <Box
                key={index}
                sx={{ display: "inline-block", mx: { xs: "30px", sm: "50px" } }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Partner"
                    src={brandLogos[index]}
                    style={{ height: "30px" }}
                  />
                </Box>
              </Box>
            ))}
            {brandLogos.map((_, index) => (
              <Box
                key={`duplicate-${index}`}
                sx={{ display: "inline-block", mx: { xs: "30px", sm: "50px" } }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Partner"
                    src={brandLogos[index]}
                    style={{ height: "30px" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            mb: 10,
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              animation: "scroll-left 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {brandLogos.map((_, index) => (
              <Box
                key={index}
                sx={{ display: "inline-block", mx: { xs: "30px", sm: "50px" } }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Partner"
                    src={brandLogos[index]}
                    style={{ height: "30px" }}
                  />
                </Box>
              </Box>
            ))}
            {brandLogos.map((_, index) => (
              <Box
                key={`duplicate-${index}`}
                sx={{ display: "inline-block", mx: { xs: "30px", sm: "50px" } }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Partner"
                    src={brandLogos[index]}
                    style={{ height: "30px" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <style>
          {`  
          @keyframes scroll-left {  
            0% {  
              transform: translateX(0);
            }  
            100% {  
              transform: translateX(-50%);
            }  
          }  
        `}
        </style>
        <Box sx={{ mb: 3 }}>
          <Typography
            component="p"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              lineHeight: 1.1,
              mb: 2,
              textAlign: "center",
            }}
          >
            Want to Partner with us?
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#353535",
              textAlign: "center",
            }}
          >
            Let's build something great together.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <Button
              variant="contained"
              disableElevation
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: { xs: 3, sm: 1, md: 3 },
                borderRadius: 10,
                padding: "8px 25px",
                background: `linear-gradient(90deg, #FFB74D 30%, #C44D4F 90%)`,
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                transition: "background 0.9s ease",
                "&:hover": {
                  background: `linear-gradient(-90deg, #FFB74D 30%, #C44D4F 90%)`,
                },
              }}
              onClick={() => navigate("/join-us")}
            >
              Let's work together
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersPage;
