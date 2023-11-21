import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userName/" element={<User />}>
          <Route path=":userId" element={<User />} />
        </Route>
      </Route>
      <Route path="*" element={<div className="page">Page Not Found</div>} />
    </Route>
  )
);

export default router;
