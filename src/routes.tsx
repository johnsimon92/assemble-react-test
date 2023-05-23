import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, LoaderFunction, Outlet } from "react-router-dom";

import { movieDetailLoader, nowPlayingLoader } from "@/api";
import { Header } from "@/components/Header";
import Homepage from "@/pages/home";
import MovieDetail from "@/pages/movie_detail";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const getRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
          loader: nowPlayingLoader(queryClient),
        },
        {
          path: "movie/:id",
          element: <MovieDetail />,
          loader: movieDetailLoader(queryClient) as unknown as LoaderFunction,
        },
      ],
    },
  ]);
