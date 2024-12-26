import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Home,
  About,
  Contact,
  Users,
  Github,
  GithubInfoLoader,
  Sajad
} from "../src/components/index.js";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="sajad" element={<Sajad />} />
      <Route path="contact" element={<Contact />} />
      <Route path="users/:userId" element={<Users />} />
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
); /// Another way of  Creating a BrowserRouter instance

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
