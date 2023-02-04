import axios from "axios";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ProductCard from "../ProductCard/ProductCard";

const ProductSlider = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    productsData();
  }, []);

  const productsData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")

      .then((response) => {
        setGetProduct(response.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(getProduct);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      freeMode={false}
      modules={[Navigation]}
      navigation={true}
      breakpoints={{
        200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      <div className="" style={{ padding: "0 4rem" }}>
        {getProduct &&
          getProduct.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="">
                  <ProductCard {...item} key={item.id} />
                </div>
              </SwiperSlide>
            );
          })}
      </div>
    </Swiper>
  );
};

export default ProductSlider;
