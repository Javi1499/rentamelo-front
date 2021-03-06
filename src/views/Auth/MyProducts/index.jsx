import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "components/Layout";
import { ProductList, NavbarBase } from "components";
import { arrayFilter } from "utils";

const url = process.env.REACT_APP_URL_BACK;
const MyProducts = () => {
  //  const { condicion } = useParams();
  // console.log(condicion);
  const [change, setChange] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [filterValue, setFilterValue] = useState(0);
  const obtenerInfo = async () => {
    if (filterValue !== 0) {
      const productos = await axios.post(
        `${url}/productos/filtro/${filterValue}`
      );
      setProductsData(productos.data.data);
      return;
    }
    const productos = await axios.post(`${url}/productos/tus-productos`);
    setProductsData(productos.data.data);
    return;
  };

  useEffect(() => {
    obtenerInfo();
  }, [change, filterValue]);

  return (
    <Container>
      <NavbarBase
        items={arrayFilter}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <ProductList
        productsData={productsData}
        change={change}
        setChange={setChange}
        isMyProduct={true}
      />
    </Container>
  );
};

export default MyProducts;
