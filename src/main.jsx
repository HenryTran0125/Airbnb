/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Location from "./pages/Location/Location";
import RoomDetail from "./pages/RoomDetail/RoomDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "location/:city",
        element: <Location />,
      },
      {
        path: "room-detail/:room",
        element: <RoomDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
