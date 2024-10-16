import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HowItWorksPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        py: { xs: 12, xl: 16 },
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
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            How It Works
          </Typography>
          <Box sx={{ my: 5 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "34px",
                fontWeight: 600,
                color: "#143D5D",
                textAlign: "center",
              }}
            >
              Shop, Earn, Enjoy
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Get accepted once your account is verified, you’ll be in the
              running to join one of our exclusive campaigns. If you’re one of
              the lucky 2 million users in New York, London, or Istanbul, you’ll
              receive a unique promo code.
            </Typography>
          </Box>
          <Box sx={{ my: 5 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "34px",
                fontWeight: 600,
                color: "#143D5D",
                textAlign: "center",
              }}
            >
              I am a Consumer. What do I do next?
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Get accepted once your account is verified, you’ll be in the
              running to join one of our exclusive campaigns. If you’re one of
              the lucky 2 million users in New York, London, or Istanbul, you’ll
              receive a unique promo code.
            </Typography>
          </Box>
          <Box sx={{ my: 5 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "34px",
                fontWeight: 600,
                color: "#143D5D",
                textAlign: "center",
              }}
            >
              I am a Brand. What do I do next?
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Get accepted once your account is verified, you’ll be in the
              running to join one of our exclusive campaigns. If you’re one of
              the lucky 2 million users in New York, London, or Istanbul, you’ll
              receive a unique promo code.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksPage;
