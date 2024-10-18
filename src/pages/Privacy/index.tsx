import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const PrivacyPage = () => {
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
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#143D5D",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Typography>
          <Box sx={{ mt: 10 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#143D5D",
              }}
            >
              Privacy Policy for Synthesise.me
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Effective Date: <strong>October 17, 2024</strong>
              <br />
              This Privacy Policy describes how Synthesise.me ("we," "us," or
              "our") collects, uses, and discloses your information when you use
              our website (the "Service").
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Information We Collect
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We may collect several different types of information for various
              purposes to improve our service to you.
              <br />
              <span style={{ marginLeft: "15px", fontSize: "17px" }}>
                · Personal Information:
              </span>{" "}
              When you contact us or use certain features of the Service, you
              may provide us with certain personally identifiable information
              ("Personal Information"). This may include: Contact information
              such as your name, email address, phone number (optional)
              <br />
              <br />
              <span style={{ marginLeft: "15px", fontSize: "17px" }}>
                · Non-Personal Information:
              </span>{" "}
              We may also collect non-personally identifiable information
              ("Non-Personal Information") that does not directly identify an
              individual. This may include:
              <br />
              <span style={{ marginLeft: "30px" }}>
                · Usage data such as browsing history, search queries, and
                features used on the Service
              </span>
              <br />
              <span style={{ marginLeft: "30px" }}>
                · Device information such as IP address, browser type, and
                operating system
              </span>
              <br />
              <span style={{ marginLeft: "30px" }}>
                · Log data such as date and time of access, and pages visited
              </span>
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              How We Collect Information
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We collect information in the following ways:
              <br />
              <span style={{ marginLeft: "15px", fontSize: "17px" }}>
                · Directly from you:
              </span>{" "}
              You may provide Personal Information to us when you contact us
              through a form or email.
              <br />
              <br />
              <span style={{ marginLeft: "15px", fontSize: "17px" }}>
                · Indirectly:
              </span>{" "}
              We may collect Non-Personal Information through your use of the
              Service. We may use cookies and other tracking technologies to
              collect this information.
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Cookies
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
              <br />
              <span style={{ marginLeft: "15px" }}>
                · Cookies are files with a small amount of data which may
                include an anonymous unique identifier. Cookies are sent to your
                browser from a website and stored on your device.
              </span>
              <br />
              <br />
              <span style={{ marginLeft: "15px" }}>
                · Tracking technologies are used to track the activity on our
                Service and hold certain information. Examples of tracking
                technologies used are beacons, scripts, and tags.
              </span>
              <br />
              <br />
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Use of Information
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We use the information we collect for various purposes:
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To provide and maintain the Service
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To improve and personalize the Service
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To understand how you use the Service
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To develop new features
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To communicate with you, including for marketing purposes
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · To comply with our legal obligations
              </span>
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Sharing of Information
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We may share your information with third-party vendors and service
              providers who perform services on our behalf. We require these
              third parties to use your information only for the purpose of
              providing the services to us and to comply with applicable privacy
              laws. We may also disclose your information if we believe it is
              necessary to comply with any applicable law, regulation, legal
              process, or governmental request.
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Data Retention
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We will retain your Personal Information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy. We may
              also retain your Personal Information for compliance with
              applicable laws, regulations, and legal processes.
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Your Right
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Depending on your location, you may have certain rights regarding
              your Personal Information. These rights may include:
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to access your Personal Information
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to rectify inaccurate Personal Information
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to erase your Personal Information
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to restrict the processing of your Personal
                Information
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to object to the processing of your Personal
                Information
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                · The right to data portability
              </span>
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Children's Privacy
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect Personal Information from children under 13. If
              you are a parent or guardian and you are aware that your child has
              provided us with Personal Information, please contact us. If we
              become aware that we have collected Personal Information from a
              child under 13, we will delete such information from our servers.
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Changes to This Privacy Policy
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              If you have any questions about this Privacy Policy, please
              contact us by email: hello@synthesise.me
              <br />
            </Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#353535",
              }}
            >
              Disclaimer
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontSize: "16px",
                color: "#353535",
              }}
            >
              Please note that this is a sample Privacy Policy and may not be
              suitable for your specific needs. You should consult with an
              attorney to ensure that your Privacy Policy complies with all
              applicable laws and regulations.
              <br />
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
