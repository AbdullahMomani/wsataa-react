import { useEffect, useState } from "react";
import { Form } from "../../sharedComponents";
import { LoginContainer } from "./Theme";
import { useNavigate } from "react-router-dom";

const formData = {
  row: {
  row1: [
    {
      tag: "input",
      type: "text",
      name: "email",
      label: "E-mail",
      validation: {
      required: "Email is required",
      pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please Enter a valid E-mail",
      },
      },
      },
  ],
  row2: [
    {
      tag: "input",
      type: "password",
      name: "password",
      label: "Password",
      id: "passwordField",
      validation :{
        required: "Password is required",
      }
    },
  ],
 
  },
  };

  export const Login = () => {
   const [result, getResult] = useState<any>({});
   const navigate = useNavigate();

   useEffect(()=>{
     if(Object.values(result)?.length > 0)  navigate('/dashboard/1');
   },[result])
  return (
    <LoginContainer>
          <Form
          getResult={getResult}
          formData={formData}
          title={"login"}
        />

    </LoginContainer>
  );
};
