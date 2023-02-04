// import Display from "./components/Display/Display";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/Form/ForgotPassword";
import RegisterForm from "./components/Form/SignIn";
import SignUp from "./components/Form/SignUp";
import Home from "./components/Home/Home";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/Navs/Navbar";
import Newsletter from "./components/NewsLetter/Newsletter";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import Shop from "./components/Shop/Shop";
import TrustPage from "./components/Trust_Page/TrustPage";

import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductInfo />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/signin" element={<RegisterForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
