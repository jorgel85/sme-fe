import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import logo from "../assets/images/logo.svg";


function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [lang, setLang] = React.useState<string>("En");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElAuth, setAnchorElAuth] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const items: LanguageItem[] = [
    { title: "English", value: "En" },
    { title: "Turkish", value: "Tu" },
  ];

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenAuthMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAuth(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAuthMenu = () => {
    setAnchorElAuth(null);
  };

  const handleLangSelection = (langValue: string) => {
    setLang(langValue);
    setAnchorElLang(null);
  };

  const checkUserData = () => {
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  };

  React.useEffect(() => {
    checkUserData();
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#F2F1E7" }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#353535" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/how-it-works");
                  handleCloseNavMenu();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  How It Works
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/partners");
                  handleCloseNavMenu();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Partners</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/shop");
                  handleCloseNavMenu();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Shop</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                m: { md: 1, lg: 2 },
                color:
                  location.pathname === "/how-it-works" ? "#143D5D" : "#353535",
                fontWeight:
                  location.pathname === "/how-it-works" ? "bold" : "normal",
                display: "block",
                fontSize: "16px",
                textTransform: "none",
              }}
              onClick={() => navigate("/how-it-works")}
            >
              How It Works
            </Button>
            <Button
              sx={{
                m: { md: 1, lg: 2 },
                color:
                  location.pathname === "/partners" ? "#143D5D" : "#353535",
                fontWeight:
                  location.pathname === "/partners" ? "bold" : "normal",
                display: "block",
                fontSize: "16px",
                textTransform: "none",
              }}
              onClick={() => navigate("/partners")}
            >
              Partners
            </Button>
            <Button
              sx={{
                m: { md: 1, lg: 2 },
                color: location.pathname === "/shop" ? "#143D5D" : "#353535",
                fontWeight: location.pathname === "/shop" ? "bold" : "normal",
                display: "block",
                fontSize: "16px",
                textTransform: "none",
              }}
              onClick={() => navigate("/shop")}
            >
              Shop
            </Button>
          </Box>
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Button
                  sx={{
                    color: "#353535",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
                <Button
                  sx={{
                    mx: 1,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "none",
                    backgroundColor: "#143D5D",
                    borderRadius: 20,
                  }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <Button
                  sx={{ color: "#353535" }}
                  disabled
                  onClick={(e) => setAnchorElLang(e.currentTarget)}
                >
                  {lang}
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  anchorEl={anchorElLang}
                  open={Boolean(anchorElLang)}
                  onClose={() => setAnchorElLang(null)}
                >
                  {items.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleLangSelection(item.value)}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <Tooltip title="Open settings">
                  <IconButton
                    size="large"
                    onClick={handleOpenAuthMenu}
                    sx={{ color: "#353535" }}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElAuth}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElAuth)}
                  onClose={handleCloseAuthMenu}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      handleCloseAuthMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>Log In</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/register");
                      handleCloseAuthMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Register
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseAuthMenu} disabled>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    English
                  </MenuItem>
                  <MenuItem onClick={handleCloseAuthMenu} disabled>
                    <ListItemText inset>Turkish</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
