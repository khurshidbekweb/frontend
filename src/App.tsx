import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Auth from "./pages/login";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Home from "./pages/home";



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
        path: 'dashboard',
        element: <Home />
      },
      {
        path: 'register',
        element: <Auth />
      }
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