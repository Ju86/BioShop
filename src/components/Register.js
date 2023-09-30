import React, {useState}from "react";
// import { formik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

export default function Register() {
  // const formik = useFormik({
  //   initialValues: {
  //     firstname: "",
  //     lastname: "",
  //     username: "",
  //     password: "",
  //     address: "",
  //     postcode: "",
  //     city: "",
  //     telephone: "",
  //   },    onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // });

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    address: "",
    postcode: "",
    city: "",
    telephone: "",
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password,
        address: data.address,
        postcode: data.postcode,
        city: data.city,
        telephone: data.telephone,
        email: data.email,
        password: data.password
      };
      axios.post("https://127.0.0.1:8000/api/users", userData).then((response) => {
        console.log(response.status, response.data.token);
        JSON.stringify(userData);
      });
    };



  return (
    <Flex align="flex-start" justify="center">
      <Box bg={"white"} p={6} rounded="md" boxShadow="md" margin={"2%"}>
        <form onSubmit={handleSubmit}>
          <Box display={"flex"} >
            <FormControl >
              <FormLabel htmlFor="firstname">Nom</FormLabel>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                variant="filled"
                onChange={handleChange}
                value={data.firstname}
              />
            </FormControl>
            <FormControl >
              <FormLabel htmlFor="lastname">Prénom</FormLabel>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                variant="filled"
                onChange={handleChange}
                value={data.lastname}
              />
            </FormControl>
          </Box>

          <FormControl >
            <FormLabel htmlFor="email">Adresse</FormLabel>
            <Input
              id="address"
              name="address"
              type="text"
              variant="filled"
              onChange={handleChange}
              value={data.address}
            />
          </FormControl>
          <Box display={"flex"}>
            <FormControl >
              <FormLabel htmlFor="email">Code Postal</FormLabel>
              <Input
                id="postcode"
                name="postcode"
                type="text"
                variant="filled"
                w={"50%"}
                onChange={handleChange}
                value={data.postcode}
              />
            </FormControl>

            <FormControl >
              <FormLabel htmlFor="email">Ville</FormLabel>
              <Input
                id="city"
                name="city"
                type="text"
                variant="filled"
                onChange={handleChange}
                value={data.city}
              />
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel htmlFor="email">Téléphone</FormLabel>
            <Input
              id="telephone"
              name="telephone"
              type="text"
              variant="filled"
              w={"50%"}
              onChange={handleChange}
              value={data.telephone}
            />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              onChange={handleChange}
              value={data.email}
            />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              variant="filled"
              onChange={handleChange}
              value={data.password}
            />
          </FormControl>

          <Button type="submit" colorScheme="green" marginLeft={"40%"} >
            S'inscrire
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
