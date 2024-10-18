import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import dammyPartner from "../../assets/images/dammy_partner.png";
import Button from "@mui/material/Button";

const PartnersPage = () => {
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
            }}
          >
            Explore 500+ brands across 50 categories, handpicked to match your
            style and lifestyle.
          </Typography>
        </Box>
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={3}>
            {Array(12)
              .fill(true)
              .map((_, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    sx={{
                      px: 0.5,
                      py: 5,
                      mb: 1,
                      backgroundColor: "#F2F1E7",
                      borderRadius: 5,
                      textAlign: "center",
                    }}
                  >
                    <img alt="Partner" src={dammyPartner} width="90%" />
                  </Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#353535",
                    }}
                  >
                    Alt+Shift
                  </Typography>
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
            }}
          >
            Want to Partner with us?
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#143D5D",
              borderRadius: 15,
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Click here
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersPage;
