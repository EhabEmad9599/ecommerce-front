import { MainLayout } from '../components/layout/MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Categories } from '../pages/Categories';
import { AboutUs } from '../pages/AboutUs';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Error } from '../pages/Error';
import { Cart } from '../pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <Error/>,
    children: [
      {
      index: true,
      element: <Home/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: 'categories',
      element: <Categories/>
    },
    {
      path: 'categories/products/:prefix',
      element: <Products/>,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true;
      },
    },
    {
      path: 'AboutUs',
      element: <AboutUs/>
    },
    {
      path: 'Login',
      element: <Login/>
    },
    {
      path: 'Register',
      element: <Register/>
    },
  ]
  }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router}>  
  </RouterProvider>
  )
}
