import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/error.jsx';
import ProductsPage from './Pages/products';
import ProfilePage from './Pages/profile';
import store from './redux/store';
import { Provider } from 'react-redux';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPriceContext.';


const router = createBrowserRouter ([
  {
  path:"/",
  element: <LoginPage />,
  errorElement: <ErrorPage />},
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <RegisterPage />
  },
  {
    path:"/product",
    element: <ProductsPage />
  },
  {
    path:"/profile",
    element: <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <Navbar /> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
