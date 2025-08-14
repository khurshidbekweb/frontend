import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Auth from "./pages/login";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Home from "./pages/home";
import FovaritePage from "./pages/favorites";
import Basket from "./pages/basket";
import DashHome from "./pages/dashboart/dash-home";
import DashLayout from "./layout/dash-layout";
import Products from "./pages/dashboart/product";
import UserOrder from "./pages/dashboart/user-order";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'register',
        element: <Auth />
      },
      {
        path: 'favorites',
        element: <FovaritePage />
      },
      {
        path: 'basket',
        element: <Basket />
      },
      {
        path: 'dashboard',
        element: <DashLayout />,
        children: [
          {
            index: true,
            element: <DashHome />
          },
          {
            path: 'order',
            element: <UserOrder />
          },
          {
            path: 'product',
            element: <Products />
          }
        ]
      },
    ]
  }
])


const App = () => {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
};

export default App;