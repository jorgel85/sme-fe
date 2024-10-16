import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import dammyPartner from "../../assets/images/dammy_partner.png";
import Button from "@mui/material/Button";

const ShopPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        py: { xs: 12, xl: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ my: 10 }}>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#011C39",
              }}
            >
              Your Favorites
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#353535", fontWeight: 700, textTransform: "none" }}
            >
              See All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {Array(6)
              .fill(true)
              .map((_, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    sx={{
                      px: 0.5,
                      py: 7,
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
        <Box sx={{ my: 10 }}>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#011C39",
              }}
            >
              Best in Fashion
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#353535", fontWeight: 700, textTransform: "none" }}
            >
              See All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {Array(6)
              .fill(true)
              .map((_, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    sx={{
                      px: 0.5,
                      py: 7,
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
        <Box sx={{ my: 10 }}>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#011C39",
              }}
            >
              Best in Eletronics
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#353535", fontWeight: 700, textTransform: "none" }}
            >
              See All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {Array(6)
              .fill(true)
              .map((_, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    sx={{
                      px: 0.5,
                      py: 7,
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
        <Box sx={{ my: 10 }}>
          <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#011C39",
              }}
            >
              Best in Furniture
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#353535", fontWeight: 700, textTransform: "none" }}
            >
              See All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {Array(6)
              .fill(true)
              .map((_, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                  <Box
                    sx={{
                      px: 0.5,
                      py: 7,
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
      </Container>
    </Box>
  );
};

export default ShopPage;
