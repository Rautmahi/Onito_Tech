import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";


const Form = () => {


  return (
    <>
      <Heading>Welcome to Onito Technology</Heading>
      <br />
      <br />
      <Box w="90%" m="auto" padding="20px" border="1px solid red">
        {/* personal details data */}
        <Text
          textAlign="left"
          textDecoration="underline"
          fontWeight="600"
          color="tomato"
        >
          Personal Details
        </Text>

        <HStack>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input   type="text" placeholder="Enter Name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date of Birth</FormLabel>
            <Input type="date" placeholder="Enter DOB" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Sex</FormLabel>
            <Select  onChange={(e) => setData(e.target.value)} placeholder="Select sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
        </HStack>
        <br />
        <HStack>
          <FormControl>
            <FormLabel>Mobile No</FormLabel>
            <Input  type="Number" placeholder="Enter Mobile Number" />
          </FormControl>

          <FormControl>
            <FormLabel>Govt Issued ID</FormLabel>
            <HStack>
              <Select placeholder="Select ID">
                <option>Adhar Card</option>
                <option>Pan Card</option>
              </Select>
              <Input type="text" placeholder="Enter Govt ID" />
            </HStack>
          </FormControl>
        </HStack>

        {/* contact details data */}
        <br />
        <br />
        <Text
          textAlign="left"
          textDecoration="underline"
          fontWeight="600"
          color="tomato"
        >
          Contact Details
        </Text>

        <HStack>
          <FormControl>
            <FormLabel>Guardian Details</FormLabel>
            <HStack>
              <Select w="220px" placeholder="Enter Label">
                <option>Mother</option>
                <option>Father</option>
              </Select>
              <Input type="text" placeholder="Enter Guardian Name" />
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter Email" />
          </FormControl>

          <FormControl>
            <FormLabel>Emergency Contact No</FormLabel>
            <Input type="Number" placeholder="Enter Emergency No" />
          </FormControl>
        </HStack>
        <br />
        <br />
        {/* Address Details */}
        <Text
          textAlign="left"
          textDecoration="underline"
          fontWeight="600"
          color="tomato"
        >
          Address Details
        </Text>
        <HStack>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="Enter Address" />
          </FormControl>

          <FormControl>
            <FormLabel>State</FormLabel>
            <Select placeholder="Enter State">
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Gujarat</option>
              <option>Goa</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="Enter City" />
          </FormControl>
        </HStack>
        <br />
        <HStack>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input type="text" placeholder="Enter Country" />
          </FormControl>
          <FormControl>
            <FormLabel>Pincode</FormLabel>
            <Input type="Number" placeholder="Enter Pincode" />
          </FormControl>
        </HStack>

        <br />
        <br />
        {/* other Details */}
        <Text
          textAlign="left"
          textDecoration="underline"
          fontWeight="600"
          color="tomato"
        >
          Other Details
        </Text>
        <HStack>
          <FormControl>
            <FormLabel>Occupation</FormLabel>
            <Input type="text" placeholder="Enter Occupation" />
          </FormControl>

          <FormControl>
            <FormLabel>Religion</FormLabel>
            <Select placeholder="Enter Religion">
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Sikh</option>
              <option>Christian</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Marital Status</FormLabel>
            <Select placeholder="Enter Marital Status">
              <option>Married</option>
              <option>Un-Married</option>
            </Select>
          </FormControl>
        </HStack>

        <HStack>
          <FormControl>
            <FormLabel>Blood Group</FormLabel>
            <Select placeholder="Enter Blood Group">
              <option>O+</option>
              <option>A+</option>
              <option>AB+</option>
              <option>B-</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Nationality</FormLabel>
            <Input type="text" placeholder="Enter Nationality" />
          </FormControl>
        </HStack>
        <br />
        <br />
        <HStack justifyContent="end" gap="50px">
          <Button colorScheme="red"> Cancel</Button>
          <Button   colorScheme="green"> Submit</Button>
        </HStack>
        <br />
        <br />
      </Box>
    </>
  );
};

export default Form;
