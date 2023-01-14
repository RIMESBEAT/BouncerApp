// import Display from "./components/Display/Display";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/Navs/Navbar";
import Newsletter from "./components/NewsLetter/Newsletter";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import TrustPage from "./components/Trust_Page/TrustPage";

import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Upload /> */}
      <ProductSlider />
      <TrustPage />
      <LatestProducts />
      <Newsletter />
      <Footer />
      <Routes>
        <Route path="/details/:id" element={ <ProductInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
