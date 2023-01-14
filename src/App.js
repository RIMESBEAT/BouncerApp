// import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/Navs/Navbar";
import Newsletter from "./components/NewsLetter/Newsletter";
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
      <Footer/>
    </div>
  );
}

export default App;
