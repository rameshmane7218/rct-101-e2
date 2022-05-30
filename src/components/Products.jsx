import { Container, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState("3");
  const [page, setPage] = useState("1");
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    getProducts(page, limit);
  }, [page, limit]);

  const getProducts = async (page, limit) => {
    try {
      let res = await axios.get(
        `http://localhost:8080/products?_page=${page}&_limit=${limit}`
      );
      // console.log(res);
      // console.log(res.data);
      setProduct(res.data);
      setTotalCount(Number(res.headers["x-total-count"]));
      
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(totalCount);
  return (
    <Container
      borderWidth="1px"
      borderRadius="lg"
      maxW="container.xl"
      m="auto"
      padding="4"
      mt="4"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {/*  AddProduct */}
        <AddProduct getProducts={getProducts} />
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {/* List of Products */}
          {product.map((data) => (
            <Product key={data.id} data={data} />
          ))}
        </Grid>
        {/* Pagination */}
        <Pagination
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          totalCount={totalCount}
        />
      </Flex>
    </Container>
  );
};

export default Products;
