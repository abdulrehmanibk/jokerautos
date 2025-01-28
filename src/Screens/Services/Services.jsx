import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Consultation from "../../Components/Consultation/Consultation";
import Error from "../../Components/Error/Error";
import ServicesPage from "./ServicesPage";
import { ServiceData } from "./ServicesData";

const Services = () => {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState({} || null);

  useEffect(() => {
    const product = ServiceData.find((item) => item.id == params.id) || null;

    setSelectedProduct(product);
  }, [params.id]);

  return (
    <>
      {!selectedProduct ? (
        <Error />
      ) : (
        <>
          <ServicesPage selectedProduct={selectedProduct}/>
          <Consultation />
        </>
      )}
    </>
  );
};

export default Services;
