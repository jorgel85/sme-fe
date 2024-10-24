import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import brandAirbnb from "../../assets/images/brand_airbnb.png";
import brandAdidas from "../../assets/images/brand_adidas.png";
import brandLenovo from "../../assets/images/brand_lenovo.png";
import brandNike from "../../assets/images/brand_nike.png";
import brandSamsung from "../../assets/images/brand_samsung.png";
import brandSony from "../../assets/images/brand_sony.png";
import brandWilson from "../../assets/images/brand_wilson.png";
import Button from "@mui/material/Button";

const PartnersPage = () => {
  const brandLogos = [
    brandAirbnb,
    brandAdidas,
    brandLenovo,
    brandNike,
    brandSamsung,
    brandSony,
    brandNike,
    brandWilson,
    brandAdidas,
    brandLenovo,
    brandSamsung,
    brandSony,
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
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={3}>
            {brandLogos.map((_, index) => (
              <Grid
                key={index}
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                display="flex"
                justifyContent="center"
                sx={{ my: 5 }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    height: { xs: "15px", md: "25px" },
                  }}
                >
                  <img
                    alt="Partner"
                    src={brandLogos[index]}
                    style={{ height: "100%", color: "black" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
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
              onClick={() => {}}
            >
              Join Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersPage;
