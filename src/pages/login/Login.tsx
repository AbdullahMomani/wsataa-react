import { useEffect, useState } from "react";
import { Form } from "../../sharedComponents";
import { LoginContainer , Center} from "./Theme";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../services/apis";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Box, CircularProgress } from "@mui/material";
import Logo from '../../sharedComponents/assets/wesataa-logo.png'

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
        validation: {
          required: "Password is required",
        },
      },
    ],
  },
};

export const Login = () => {
  const [result, getResult] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { loading, signInInfo, error } = useSelector<any>((state) => {
    return {
      loading: state?.auth.loading,
      signInInfo: state?.admin.entities,
      error: state?.auth.error,
    };
  }) as any;

  useEffect(() => {
    if (Object.values(result)?.length > 0) {
      let data = {
        email: result.email,
        password: result.password,
      };
      dispatch(authAPI.signIn()({ data }));
    }
  }, [result]);
  useEffect(() => {
    if (signInInfo) {
      navigate("/wsataa-dasboard/dashboard/1");
    }
  }, [signInInfo]);
  return (
    <LoginContainer>
      <Center><img src={Logo} alt="logo"/></Center>
      <Form getResult={getResult} formData={formData} title={"Login"} />
      {loading == "pending" ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : error ? (
         (
          <Alert variant="filled" severity="error">
            {error.message || error}
          </Alert>
        )
      ): null}
    </LoginContainer>
  );
};
