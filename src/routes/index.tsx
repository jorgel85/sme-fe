import ForgotPassword from "../pages/authentication/ForgotPassword";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ResetPassword from "../pages/authentication/ResetPassword";
import HowItWorksPage from "../pages/HowItWorks";
import LandingPage from "../pages/Landing";
import PartnersPage from "../pages/Partners";
import PrivacyPage from "../pages/Privacy";
import ShopPage from "../pages/Shop";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  { path: "/", component: <LandingPage /> },
  { path: "/how-it-works", component: <HowItWorksPage /> },
  { path: "/partners", component: <PartnersPage /> },
  { path: "/shop", component: <ShopPage /> },
  { path: "/privacy-policy", component: <PrivacyPage /> },
];

const authRoutes: Array<RouteProps> = [
  { path: "/login", component: <Login/> },
  { path: "/register", component: <Register/> },
  { path: "/forgot-password", component: <ForgotPassword/> },
  { path: "/reset-password", component: <ResetPassword/> },
];

export { userRoutes, authRoutes };
