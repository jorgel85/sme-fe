import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import heroImage from "../assets/images/hero.png";
import dammyPartner from "../assets/images/dammy_partner.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const LandingContent = () => {
  const faqData = [
    {
      question: "How does Synthesise.Me works?",
      answer:
        "Synthesise.Me is a is a program that rewards you $1 in credit for every $1 you spent, up to a value of $500. When you shop through our website simply click on the link to your favorite product from our website, make your purchase as you normally would and then use the promo code associated with your account to enjoy your discount.",
    },
    {
      question: "Is there a minimum purchase amount to earn with Synthesise.Me?",
      answer:
        "No, there is no minimum purchase amount required to earn with Synthesise.Me. For every $1 spent, you earn $1 in credit, up to a value of $500.",
    },
    {
      question: "How can I track my earnings?",
      answer: "You can track your earnings by logging into your account on our website. Your account will show a detailed breakdown of your purchase history, including the amount earned, the retailer, and the status of each transaction.",
    },
    {
      question: "Is my personal information safe on your website?",
      answer:
        "We take the security of your personal information very seriously. We use industry-standard security measures to protect your data. Please refer to our privacy policy for more details.",
    },
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
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Grid container height="100%">
            <Grid
              size={{ sm: 7, md: 6 }}
              sx={{ display: "flex", alignItems: { xs: "center" } }}
            >
              <Box sx={{ pt: { xl: 10 } }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: {
                      xs: "39px",
                      sm: "32px",
                      md: "50px",
                      lg: "68px",
                      xl: "78px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#143D5D",
                  }}
                >
                  ENHANCE
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "39px",
                        sm: "32px",
                        md: "50px",
                        lg: "68px",
                        xl: "78px",
                      },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#353535",
                    }}
                  >
                    {" "}
                    YOUR
                  </Typography>
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      xs: "39px",
                      sm: "32px",
                      md: "50px",
                      lg: "68px",
                      xl: "78px",
                    },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  POSSIBILITIES.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    fontWeight: 400,
                    color: "#BFBEBD",
                    mt: { xs: 3, sm: 1, md: 3 },
                  }}
                >
                  For every $1 spent, you earn $1 in credit.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    fontWeight: 400,
                    color: "#BFBEBD",
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
                    borderRadius: 10,
                    padding: "6px 20px",
                    background:
                      "linear-gradient(90deg, #FFB74D 30%, #C44D4F 90%)",
                    color: "white",
                  }}
                >
                  Register
                </Button>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#BFBEBD",
                    mt: { lg: 4, xl: 8 },
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  Trusted partners:
                </Typography>
                <Grid
                  container
                  spacing={3}
                  sx={{ mt: 1, display: { xs: "none", lg: "flex" } }}
                >
                  <Grid>
                    <img alt="Partner" src={dammyPartner} />
                  </Grid>
                  <Grid>
                    <img alt="Partner" src={dammyPartner} />
                  </Grid>
                  <Grid>
                    <img alt="Partner" src={dammyPartner} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              size={{ sm: 5, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                alignItems: { xs: "center" },
              }}
            >
              <Box sx={{ width: { lg: "90%" }, pt: { xl: 7 } }}>
                <img alt="Hero" src={heroImage} width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography
            component="p"
            sx={{
              fontSize: "40px",
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
                    fontSize: "65px",
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
                    fontSize: "65px",
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
                    fontSize: "65px",
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
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
              mb: 5,
            }}
          >
            Benefits
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  1. Easy to use
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
            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  2. Personalized Recommendations:
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
            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  3. Potential for significant savings:
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
            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#353535",
                  }}
                >
                  4. Wide range of retailers:
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
      <Container maxWidth="sm">
        <Box sx={{ mb: 5 }}>
          <Typography
            component="p"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
              mb: 5,
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqData.map((item, index) => (
            <Accordion key={index} sx={{ backgroundColor: "#F2F1E7" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default LandingContent;
