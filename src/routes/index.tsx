import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainContainer from "../container/mainContainer";
import { ErrorElement, Home, Other } from "../screens";
// import { getWithExpiry } from "../utils";

const ProtectedRoutes = ({ children }: any) => {
  //   if (getWithExpiry("token")) {
  return children;
  //   } else {
  // return <Navigate to={"/"} />;
  //   }
};

const router = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/other",
        element: (
          <ProtectedRoutes>
            <Other />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
