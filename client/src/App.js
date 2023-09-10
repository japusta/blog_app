import {Outlet, BrowserRouter,createBrowserRouter, RouterProvider, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import "./pages/login/login.scss"
import "./pages/register/register.scss"
import "./pages/home/home.scss"
import "./pages/single/single.scss"
import "./pages/write/write.scss"
import "./app_style.scss"
import "./components/footer/footer.scss"
import "./components/navbar/navbar.scss"
import "./components/menu/menu.scss"
import { Children } from "react"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
