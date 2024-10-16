import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import HowItWorksPage from "../pages/HowItWorks";
import LandingPage from "../pages/Landing";
import PartnersPage from "../pages/Partners";
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
];

const authRoutes: Array<RouteProps> = [
  { path: "/login", component: <Login/> },
  { path: "/register", component: <Register/> },
];

export { userRoutes, authRoutes };
