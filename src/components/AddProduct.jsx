import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const AddProduct = ({getProducts}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [form, setForm] = useState({
    imageSrc: "https://picsum.photos/seed/picsum2/421/261",
  });

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // console.log(e);
  };
  const handleRadio = (value)=>{
    setForm({
      ...form,
      gender: value,
    });
  }
  // console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submitted");

    try{
      await axios.post(`http://localhost:8080/products`,form);
    }
    catch(err){
      console.log(err);
    }
    getProducts();
    onClose()
  };
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <Box>
                <Text fontWeight="600" mb="2">
                  Title
                </Text>
                <Input
                  data-cy="add-product-title"
                  placeholder="Title"
                  onChange={handleOnChange}
                  type="text"
                  name="title"
                />
              </Box>
              <Box mt={3}>
                <Text fontWeight="600" mb="2">
                  Category
                </Text>
                <Select
                  data-cy="add-product-category"
                  onChange={handleOnChange}
                  name="category"
                >
                  <option value="">Category</option>
                  <option data-cy="add-product-category-shirt" value="shirt">
                    Shirt
                  </option>
                  <option data-cy="add-product-category-pant" value="Pant">
                    Pant
                  </option>
                  <option data-cy="add-product-category-jeans" value="Jeans">
                    Jeans
                  </option>
                </Select>
              </Box>
              <Box mt={3}>
                <Text fontWeight="600" mb="2">
                  Gender
                </Text>
                <RadioGroup data-cy="add-product-gender" onChange={handleRadio}>
                  <Radio
                    data-cy="add-product-gender-male"
                    mr={2}
                    value="male"
                    name="gender"
                  >
                    Male
                  </Radio>
                  <Radio
                    data-cy="add-product-gender-female"
                    mr={2}
                    value="female"
                    name="gender"
                  >
                    Female
                  </Radio>
                  <Radio
                    data-cy="add-product-gender-unisex"
                    mr={2}
                    value="unisex"
                    name="gender"
                  >
                    Unisex
                  </Radio>
                </RadioGroup>
              </Box>
              <Box mt={3}>
                <Text fontWeight="600" mb="2">
                  Price
                </Text>
                <InputGroup>
                  <InputLeftElement children="Rs." />
                  <Input
                    data-cy="add-product-price"
                    placeholder="Price"
                    onChange={handleOnChange}
                    type="number"
                    name="price"
                  />
                </InputGroup>
              </Box>
              <Flex mt={3} justifyContent="flex-end">
                <Button
                  data-cy="add-product-submit-button"
                  colorScheme="teal"
                  type="submit"
                >
                  Create
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
