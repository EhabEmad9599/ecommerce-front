import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//layouts
import { MainLayout } from '../components/layout/MainLayout/MainLayout';
// pages
const Categories = lazy(() => import('../pages/Categories'));
const Wishlist = lazy(() => import('../pages/Wishlist'));
const Register = lazy(() => import('../pages/Register'));
const Products = lazy(() => import('../pages/Products'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Login = lazy(() => import('../pages/Login'));
const Error = lazy(() => import('../pages/Error'));
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <Error/>,
    children: [
      {
      index: true,
      element: <Suspense fallback="Loading please wait"><Home/></Suspense>
    },
    {
      path: "/cart",
      element: <Suspense fallback="Loading please wait"><Cart/></Suspense>
    },
    {
      path: "/wishlist",
      element: <Suspense fallback="Loading please wait"><Wishlist/></Suspense>
    },
    {
      path: 'categories',
      element: <Suspense fallback="Loading please wait"><Categories/></Suspense>
    },
    {
      path: 'categories/products/:prefix',
      element: <Suspense fallback="Loading please wait"><Products/></Suspense>,
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
      element: <Suspense fallback="Loading please wait"><AboutUs/></Suspense>
    },
    {
      path: 'Login',
      element: <Suspense fallback="Loading please wait"><Login/></Suspense>
    },
    {
      path: 'Register',
      element: <Suspense fallback="Loading please wait"><Register/></Suspense>
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
