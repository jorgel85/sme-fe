import React from "react";
import { Routes, Route } from "react-router-dom";
import { userRoutes } from "./routes/";


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {userRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={route.component}
            key={idx}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;
