import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tariffs from "./pages/Tariffs";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "tariffs", Component: Tariffs },
      { path: "contacts", Component: Contacts },
      { path: "about", Component: About },
    ],
  },
]);
