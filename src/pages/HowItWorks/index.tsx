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
              We’ve tapped into something special, the collective power of
              people.  We have created a platform where millions of people spend
              hundreds of dollars during  week long campaigns.  Millions of
              people, literally spending billions of dollars! That level of
              spending power gives us enormous negotiating power with brands
              over price!  It’s so strong that it’s enabled us to negotiate
              discounts that provide our users with $/€/£ 1 for free for every 1
              spent up to 500 per campaign. For every campaign we run, there are
              only limited spaces for users, so be alert if you want to be a
              lucky one!
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
              Simply sign up here and you’ll receive a text and email to verify
              your account.  Then, if you are one of the 2m users in New York,
              London or Istanbul accepted,  you’ll receive a unique promo code
              that will apply a 50% discount on our brands’ websites.  All
              payments, customer service and fulfilment will take place through
              the brand site as a  normal shopping experience.
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
              We have a new marketing metric -  incremental sales.  We are
              selling packages of incremental revenue measured  in hundreds of
              thousands or millions of dollars.  In addition there are short and
              long term benefits for brand equity and customer relationship
              management.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksPage;
