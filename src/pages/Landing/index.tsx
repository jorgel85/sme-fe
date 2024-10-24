import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import heroImage from "../../assets/images/hero.png";
import brandAirbnb from "../../assets/images/brand_airbnb.png";
import brandAdidas from "../../assets/images/brand_adidas.png";
import brandLenovo from "../../assets/images/brand_lenovo.png";
import brandNike from "../../assets/images/brand_nike.png";
import brandSamsung from "../../assets/images/brand_samsung.png";
import brandSony from "../../assets/images/brand_sony.png";
import brandWilson from "../../assets/images/brand_wilson.png";
import FaqItem from "../../components/FaqItem";

const LandingPage = () => {
  const navigate = useNavigate();

  const faqData: FaqData[] = [
    {
      question: "How does Synthesise.Me works?",
      answer:
        "Synthesise.Me is a is a program that rewards you $1 in credit for every $1 you spent, up to a value of $500. When you shop through our website simply click on the link to your favorite product from our website, make your purchase as you normally would and then use the promo code associated with your account to enjoy your discount.",
    },
    {
      question:
        "Is there a minimum purchase amount to earn with Synthesise.Me?",
      answer:
        "No, there is no minimum purchase amount required to earn with Synthesise.Me. For every $1 spent, you earn $1 in credit, up to a value of $500.",
    },
    {
      question: "How can I track my earnings?",
      answer:
        "You can track your earnings by logging into your account on our website. Your account will show a detailed breakdown of your purchase history, including the amount earned, the retailer, and the status of each transaction.",
    },
    {
      question: "Is my personal information safe on your website?",
      answer:
        "We take the security of your personal information very seriously. We use industry-standard security measures to protect your data. Please refer to our privacy policy for more details.",
    },
  ];

  const brandLogos = [
    brandAirbnb,
    brandAdidas,
    brandLenovo,
    brandNike,
    brandSamsung,
    brandSony,
    brandWilson,
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          backgroundColor: "#F2F1E7",
          pt: { xs: "70px", xl: 0 },
          height: { xl: "100vh" },
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Grid container height="100%">
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "'Druk Trial', sans-serif",
                    fontSize: {
                      xs: "85px",
                      sm: "65px",
                      md: "100px",
                      lg: "130px",
                      xl: "150px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.0,
                    background: "linear-gradient(270deg, #5d5d5d, #143D5D)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientAnimation 3s ease infinite",
                    "@keyframes gradientAnimation": {
                      "0%": {
                        backgroundPosition: "0% 50%",
                      },
                      "50%": {
                        backgroundPosition: "100% 50%",
                      },
                      "100%": {
                        backgroundPosition: "0% 50%",
                      },
                    },
                  }}
                >
                  ENHANCE
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "'Druk Trial', sans-serif",
                    fontSize: {
                      xs: "85px",
                      sm: "65px",
                      md: "100px",
                      lg: "130px",
                      xl: "150px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.0,
                    color: "#BFBEBD",
                  }}
                >
                  {" "}
                  YOUR
                  <br />
                  POSSIBILITIES.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    fontWeight: 400,
                    color: "#353535",
                    mt: { xs: 3, sm: 1, md: 3 },
                  }}
                >
                  For every $1 spent, you earn $1 in credit.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    fontWeight: 400,
                    color: "#353535",
                  }}
                >
                  Up to a value of $500 across 500+ brands, handpicked to match
                  your specific needs.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#143D5D",
                    mt: { xs: 3, sm: 1, md: 3 },
                    textTransform: "uppercase",
                  }}
                >
                  Limited-Time Offer
                </Typography>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 400, color: "#353535" }}
                >
                  Campaign is valid from xx/xx to yy/yy MMM
                </Typography>
                <Button
                  variant="contained"
                  disableElevation
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: { xs: 3, sm: 1, md: 3 },
                    mb: 3,
                    borderRadius: 10,
                    padding: "6px 20px",
                    background: `linear-gradient(90deg, #FFB74D 30%, #C44D4F 90%)`,
                    color: "white",
                    fontSize: "16px",
                    textTransform: "none",
                    transition: "background 0.9s ease",
                    "&:hover": {
                      background: `linear-gradient(-90deg, #FFB74D 30%, #C44D4F 90%)`,
                    },
                  }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                pt: { xl: "70px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: {xs: "400px", sm: "100%"},
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: {xs: "cover", sm: "contain", xl: "cover"},
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Typography
          component="p"
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#BFBEBD",
            mt: 5,
            mb: 2,
          }}
        >
          Trusted partners:
        </Typography>
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
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
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "32px", lg: "40px" },
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
              mb: 5,
            }}
          >
            Follow the steps
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                square={false}
                elevation={0}
                sx={{
                  backgroundColor: "#F2F1E7",
                  p: 3,
                  borderRadius: 3,
                  height: { md: "350px", xl: "290px" },
                }}
              >
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
                    color: "#143D5D",
                  }}
                >
                  CREATE
                  <br />
                  YOUR
                  <br />
                  ACCOUNT
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 4,
                  }}
                >
                  It’s quick and easy! Just give us your first name, last name,
                  number, and email. That’s it! We’ll send you a confirmation
                  via text and email to verify your account.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                square={false}
                elevation={0}
                sx={{
                  backgroundColor: "#F2F1E7",
                  p: 3,
                  borderRadius: 3,
                  height: { md: "350px", xl: "290px" },
                }}
              >
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
                    color: "#143D5D",
                  }}
                >
                  GET
                  <br />
                  VERIFIED
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 4,
                  }}
                >
                  Get accepted once your account is verified, you’ll be in the
                  running to join one of our exclusive campaigns. If you’re one
                  of the lucky 2 million users in New York, London, or Istanbul,
                  you’ll receive a unique promo code.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                square={false}
                elevation={0}
                sx={{
                  backgroundColor: "#F2F1E7",
                  p: 3,
                  borderRadius: 3,
                  height: { md: "350px", xl: "290px" },
                }}
              >
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
                    color: "#143D5D",
                  }}
                >
                  SHOP &
                  <br />
                  SAVE
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 4,
                  }}
                >
                  Use your promo code at our partner brands' websites during the
                  campaign. You’ll enjoy a 50% discount on purchases, with all
                  transactions processed just like your usual shopping
                  experience.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ mb: 5 }}>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "32px", lg: "40px" },
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
              mb: 5,
            }}
          >
            Benefits
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, xl: 3 }} display="flex">
              <Box sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    border: "1px solid #BFBEBD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.1,
                      color: "#353535",
                    }}
                  >
                    1
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  Easy to use
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 1,
                  }}
                >
                  We provide a user-friendly interface to simplify the process.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 3 }} display="flex">
              <Box sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    border: "1px solid #BFBEBD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.1,
                      color: "#353535",
                    }}
                  >
                    2
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  Personalized Recommendations:
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 1,
                  }}
                >
                  Use artificial intelligence and data analytics to provide
                  personalized recommendations based on your shopping
                  preferences.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 3 }} display="flex">
              <Box sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    border: "1px solid #BFBEBD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.1,
                      color: "#353535",
                    }}
                  >
                    3
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  Potential for significant savings:
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 1,
                  }}
                >
                  Over time, the cash you earn can add up to a substantial
                  amount.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl: 3 }} display="flex">
              <Box sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "100%",
                    border: "1px solid #BFBEBD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.1,
                      color: "#353535",
                    }}
                  >
                    4
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  Wide range of retailers:
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#353535",
                    mt: 1,
                  }}
                >
                  We have partner with a variety of online stores, allowing you
                  to save money on a wide range of products and services.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "32px", lg: "40px" },
            fontWeight: 700,
            color: "#143D5D",
            textAlign: "center",
            mb: 5,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Container maxWidth="sm">
          <Box sx={{ mb: 10 }}>
            {faqData.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
