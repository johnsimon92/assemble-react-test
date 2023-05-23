import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { getRouter } from "@/routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={getRouter(queryClient)} />
      </QueryClientProvider>
    </main>
  );
}
