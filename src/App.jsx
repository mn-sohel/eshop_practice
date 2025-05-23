import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductListPage";
import ProductDetails from "./pages/ProductDetailsPage";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactPage";
import Checkout from "./pages/CheckoutPage";
import CommonLayouts from "./components/commonLayouts/CommonLayouts";
function App() {

  return (
    <Routes>
      <Route path="/" element={<CommonLayouts />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
