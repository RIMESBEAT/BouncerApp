// import Display from "./components/Display/Display";
import Home from "./components/Home/Home";
import LatestProducts from "./components/LatestProducts/LatestProducts";
import Navbar from "./components/Navs/Navbar";
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
    </div>
  );
}

export default App;
