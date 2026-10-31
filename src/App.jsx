import { ROUTES, DEFAULT_LANGUAGE } from "./constants/routes";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./components/pages/HomePage/HomePage";
import GalleryPage from "./components/pages/GalleryPage/GalleryPage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import LanguageValidator from "./components/LanguageValidator/LanguageValidator";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />,
  },
  {
    path: "/:lang",
    element: <LanguageValidator />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: ROUTES.GALLERY, element: <GalleryPage /> },
        ],
      },
    ],
  },
  { path: ROUTES.ERROR_GLOBAL, element: <ErrorPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
