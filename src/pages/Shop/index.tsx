import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import HistoryIcon from "@mui/icons-material/History";

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
        <Grid container>
          <Grid
            size={{ xs: 12, md: 3, lg: 2 }}
            sx={{ borderRight: "1px solid #e1e1e1", px: 1 }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#143D5D",
                my: 3,
              }}
            >
              Recents
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <HistoryIcon />
              <Typography
                component="p"
                sx={{
                  pl: 1,
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#143D5D",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                I want to buy a beginner tenis
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 9, lg: 10 }} sx={{ px: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#143D5D",
                textAlign: "center",
                mt: 3,
              }}
            >
              A New Era of Innovation: Human and Machine Collaboration
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#353535",
                textAlign: "center",
                mb: 5,
              }}
            >
              Innovative AI solutions powered by human expertise to match your
              specific needs
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#353535",
                textAlign: "center",
                mb: 8,
              }}
            >
              To get the most accurate results when searching for a product,
              it's important to provide as much detail as possible. Here are
              some key elements to consider:
              <br />
              <strong>
                Product Name, Brand, Features, Price Range, Purpose, Color, Size
                and Material.
              </strong>
              <br />
              By providing as much information as possible, you'll increase your
              chances of finding the perfect product.
              <br />
              <strong>
                NOTE: You can add additional information to these products to
                increase the chances of the finding the perfect product
              </strong>
            </Typography>
            <Paper
              component="form"
              sx={{
                paddingLeft: 1,
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#F2F1E7",
                borderRadius: 5,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Describe the product you want here..."
                inputProps={{
                  "aria-label": "Describe the product you want here...",
                }}
              />
              <Button
                variant="contained"
                aria-label="search"
                disableElevation
                endIcon={<SendIcon />}
                sx={{
                  borderRadius: 5,
                  padding: "10px 20px",
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
                Generate
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopPage;
