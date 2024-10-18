import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import shop_hero_bg from "../../assets/images/shop_hero_bg.png";

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
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            height: "100%",
            backgroundImage: `url(${shop_hero_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mb: 10,
            py: 10,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ py: 5, px: 2, borderLeft: "1px solid white" }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "52px", lg: "65px" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: "#143D5D",
                    }}
                  >
                    1
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    CLICK ON THE PRODUCT YOU WANT TO COPY THE PROMO CODE AND TO
                    VISIT THEIR WEBSITE.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ py: 5, px: 2, borderLeft: "1px solid white" }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "52px", lg: "65px" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: "#143D5D",
                    }}
                  >
                    2
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    REMEMBER TO PASTE THE PROMOCODE AT CHECKOUT.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ py: 5, px: 2, borderLeft: "1px solid white" }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "52px", lg: "65px" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: "#143D5D",
                    }}
                  >
                    3
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    ENJOY YOUR 50% DISCOUNT.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
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
      </Container>
    </Box>
  );
};

export default ShopPage;
