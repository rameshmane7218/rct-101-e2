import React from "react";
import {
  Stack,
  Image,
  Text,
  Tag,
  TagLabel,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
const Product = ({ data }) => {
  // console.log("data", data);
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product" boxShadow="2xl" p="6" rounded="lg" textAlign='center'>
      <Image data-cy="product-image" src={data.imageSrc} rounded="lg" />
      <Flex justifyContent='space-between' textTransform="uppercase">
        <Text data-cy="product-category" color='teal.600' >{data.category}</Text>
        <Tag color='cyan.800' bg="cyan.100">
          <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
        </Tag>
      </Flex>
      <Heading data-cy="product-title" size='md' color='teal.300'>{data.title}</Heading>
      <Box data-cy="product-price">
        {"Rs."}
        {data.price}
        {"/ unit"}
      </Box>
    </Stack>
  );
};

export default Product;
