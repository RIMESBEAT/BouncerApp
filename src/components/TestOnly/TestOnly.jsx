import axios from "axios";
import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";


const TestOnly = () => {
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    productsData();
  }, []);

  const productsData = async () => {
    await axios
      .get("http://localhost:4000/api/getProducts")

      .then((response) => {
        setGetProduct(response.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(getProduct);
  return (
    <div>
          {getProduct && getProduct.map((items) => {
          
              return <TestCard {...items} key={items._id} />;
      })}
    </div>
  );
};

export default TestOnly;
