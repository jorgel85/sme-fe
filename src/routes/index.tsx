import LandingPage from "../pages/Landing";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  { path: "/", component: <LandingPage /> },
];

export { userRoutes };
