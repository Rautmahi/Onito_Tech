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
import React, { useReducer } from "react";
import axios from "axios"


const initialState = {
    name: "",
    dob: "",
    sex: "",
    mobile: "",
    address: "",
    adharcard: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    marital: "",
    nationality: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return {
          ...state,
          company: action.payload,
        };

      case "dob":
        return {
          ...state,
          city: action.payload,
        };

      case "sex":
        return {
          ...state,
          location: action.payload,
        };

      case "mobile":
        return {
          ...state,
          role: action.payload,
        };

      case "address":
        return {
          ...state,
          level: action.payload,
        };

      case "adharcard":
        return {
          ...state,
          contract: action.payload,
        };

      case "state":
        return {
          ...state,
          country: action.payload,
        };

      case "city":
        return {
          ...state,
          position: action.payload,
        };

      case "country":
        return {
          ...state,
          language: action.payload,
        };

      case "pincode":
        return {
          ...state,
          language: action.payload,
        };
      case "occupation":
        return {
          ...state,
          language: action.payload,
        };
      case "religion":
        return {
          ...state,
          language: action.payload,
        };
      case "marital":
        return {
          ...state,
          language: action.payload,
        };
        case "nationality":
            return {
              ...state,
              language: action.payload,
            };
      case "reset":
        return initialState;

      default:
        return state;
    }
  };
const Form = () => {
 
  const initialRef = React.useRef(null)

  
  const [formData, dispatch] = useReducer(reducer, initialState)
 
//    const [submitedData, setSubmitedData] = useState(formData);
 

 
  const submitHandler=(e)=>{
     e.preventDefault()
   //   console.log(formData)
     axios.post("https://jobapp-67qg.onrender.com/users",formData)
     dispatch(initialState)
 
     alert("successfully registered")
     // setSubmitedData({...formData})
     dispatch({type:"reset"})
 
  }
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
            <Input ref={initialRef} 
             value={formData.name} onChange={(e)=>dispatch({type:"name",payload:e.target.value})}
            type="text" placeholder="Enter Name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date of Birth</FormLabel>
            <Input  value={formData.dob }onChange={(e)=>dispatch({type:"dob",payload:e.target.value})} 
            type="date" placeholder="Enter DOB" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Sex</FormLabel>
            <Select placeholder="Select sex">
              <option  value="Male" onChange={(e)=>dispatch({type:"sex",payload:e.target.value})} >Male</option>
              <option value="Female" onChange={(e)=>dispatch({type:"sex",payload:e.target.value})} >Female</option>
            </Select>
          </FormControl>
        </HStack>
        <br />
        <HStack>
          <FormControl>
            <FormLabel>Mobile No</FormLabel>
            <Input type="Number" placeholder="Enter Mobile Number" />
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
          <Button colorScheme="green" onClick={submitHandler}> Submit</Button>
        </HStack>
        <br />
        <br />
      </Box>
    </>
  );
};

export default Form;
