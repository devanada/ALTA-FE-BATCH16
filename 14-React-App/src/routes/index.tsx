import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import Home from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBookPage from "@/pages/books/detail";
import ProfilePage from "@/pages/profile";
import EditProfilePage from "@/pages/profile/edit-profile";
import HistoryBorrowPage from "@/pages/profile/history-borrow";
import Cart from "@/pages/books/cart";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/books/:id_book",
          element: <DetailBookPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/edit-profile",
          element: <EditProfilePage />,
        },
        {
          path: "/history-borrow",
          element: <HistoryBorrowPage />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
