import React from "react";
import { Routes, Route } from "react-router-dom";
import { userRoutes, authRoutes } from "./routes/";
import DefaultLayout from "./layouts/default";
import AuthenticationLayout from "./layouts/authentication";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {authRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <AuthenticationLayout>{route.component}</AuthenticationLayout>
            }
            key={idx}
          />
        ))}

        {userRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<DefaultLayout>{route.component}</DefaultLayout>}
            key={idx}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
