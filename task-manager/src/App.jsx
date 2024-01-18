import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./BreadCrumb/Home";
import ProductsListings from "./BreadCrumb/ProductsListings";
import PostDetails from "./BreadCrumb/PostDetails";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </nav>

      <div>
        <BreadCrumb />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ProductsListings />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
