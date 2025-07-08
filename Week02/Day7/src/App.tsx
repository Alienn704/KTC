import "./App.css";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import CustomerPage from "./Pages/CustomerPage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import ProductDetailPage from "./Pages/ProductDetailPage"

import { BrowserRouter, Routes, Route } from "react-router";
import HeaderNavigation from "./Components/HeaderNavigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNavigation></HeaderNavigation>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
