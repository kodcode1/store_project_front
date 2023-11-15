import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Layout from "./pages/Layout";
import { CssBaseline } from "@mui/material";
import Cart from "./pages/Cart";



function App() {


  return (
    <>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
