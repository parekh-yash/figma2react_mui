import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import * as Yup from "yup";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Circles from "./components/Circles";
function Login() {
  const onSubmit = (values) => {
    console.log("====================================");
    console.log(values);
    console.log("====================================");
    navigate("/Dashboard");
  };
  const navigate = useNavigate();

  const validationschema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password Must be at least 8 characters")
      .required("Password is required"),
  });
  const initialValues = { email: "", password: "" };
  return (
    <>
      <Circles />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="whitesmoke"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="16px"
          backgroundColor="white"
          width="584px"
          height="auto"
          box-shadow="0px 0px 24px rgba(0, 0, 0, 0.07)"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "62px",
                  marginBottom: "42px",
                  marginTop: "42px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    alignSelf: "center",
                  }}
                >
                  Welcome Back, <b>Ouly.AI</b>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: "32px",
                    color: "#929EAE",
                    marginTop: "0",
                  }}
                >
                  Welcome back please enter your details.
                </p>
                {/* ----EMAIL---- */}
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Email
                </label>
                <Field
                  name="email"
                  as={TextField}
                  className="textbox"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                  style={{
                    marginBottom: "24px",
                    backgroundColor: "#635BFF1F",
                    borderRadius: "8px",
                  }}
                />
                {/* ----PASSWORD---- */}
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Password
                </label>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  className="textbox"
                  variant="outlined"
                  fullWidth
                  type="password"
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  style={{
                    color: "green",
                    marginBottom: "20px",
                    width: "496px",
                    backgroundColor: "#635BFF1F",
                    borderRadius: "8px",
                  }}
                />
                {/* ----OPTIONS---- */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                  />
                  <label
                    style={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    ForgotPassword ?
                  </label>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onSubmit={onSubmit}
                  style={{
                    marginTop: "15px",
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Don't have an Account?{" "}
          <Link
            to="/Signup"
            style={{
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              color: "#2563EB",
            }}
          >
            sign up
          </Link>
        </p>
      </Box>
    </>
  );
}

export default Login;
