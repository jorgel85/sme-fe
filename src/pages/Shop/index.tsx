import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

import dammyPartner from "../../assets/images/dammy_partner.png";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

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
        <Box sx={{ mb: 10 }}>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#353535",
              mb: 3,
            }}
          >
            To get the most accurate results when searching for a product, it's
            important to provide as much detail as possible. Here are some key
            elements to consider:
            <br />
            <strong>
              Product Name, Brand, Features, Price Range, Purpose, Color, Size
              and Material.
            </strong>
            <br />
            By providing as much information as possible, you'll increase your
            chances of finding the perfect product.
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#F2F1E7",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Describe the product you want here..."
              inputProps={{
                "aria-label": "Describe the product you want here...",
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
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
