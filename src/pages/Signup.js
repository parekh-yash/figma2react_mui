import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import * as Yup from "yup";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "../css/signup.css";
import Circles from "./components/Circles";

function Signup() {
  const onSubmit = (values) => {
    console.log("====================================");
    console.log(values);
    console.log("====================================");
  };

  const validationschema = Yup.object({
    firstName: Yup.string()
      .min(2, "Invalid firstName")
      .required("First Name is Required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password Must be at least 8 characters")
      .required("Password is required"),
    mobile: Yup.string()
      .matches(/^(\+91|0)?[6-9]\d{9}$/, "Invalid mobile number")
      .required("Mobile number is required"),
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
        overflow="hidden"
        backgroundColor="whitesmoke"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
          margin="42px"
          width="584px"
          height="auto"
          boxShadow=" 0px 0px 24px 0px rgba(0, 0, 0, 0.07);"
          borderRadius="12px"
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
                  margin: "42px",
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
                    marginBottom: "12px;",
                    marginTop: "0px",
                  }}
                >
                  Welcome Back, <b>Ouly.AI</b>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: "32px",
                    marginTop: "0px",
                    color: "#929EAE",
                  }}
                >
                  Welcome back please enter your details.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    justifyContent: "space-between",
                  }}
                >
                  {/* ----FIRSTNAME---- */}
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    First Name
                    <Field
                      name="FirstName"
                      as={TextField}
                      className="textbox"
                      label="Enter First Name"
                      fullWidth
                      error={errors.firstName && touched.firstName}
                      helperText={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      style={{
                        marginBottom: "24px",
                        borderRadius: "8px",
                        backgroundColor: "#635BFF1F",
                        marginTop: "12px",
                      }}
                    />
                  </label>
                  {/* ----LASTNAME---- */}
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    Last Name
                    <Field
                      name="LastName"
                      className="textbox"
                      as={TextField}
                      label="Enter Last Name"
                      variant="outlined"
                      fullWidth
                      error={errors.lastName && touched.lastName}
                      helperText={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      style={{
                        marginBottom: "24px",
                        marginTop: "12px",
                        backgroundColor: "#635BFF1F",
                        borderRadius: "8px",
                      }}
                    />
                  </label>
                </div>
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
                  className="textbox"
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                  style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    backgroundColor: "#635BFF1F",
                    // eslint-disable-next-line no-dupe-keys
                    borderRadius: "8px",
                  }}
                />
                {/* ----MOBILE---- */}

                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Mobile
                </label>
                <Field
                  name="mobile"
                  as={TextField}
                  className="textbox"
                  label="Enter Mobile Number"
                  variant="outlined"
                  fullWidth
                  type="tel"
                  helperText={errors.mobile && touched.mobile && errors.mobile}
                  style={{
                    color: "green",
                    marginBottom: "20px",
                    backgroundColor: "#635BFF1F",
                    borderRadius: "8px",
                    width: "100%",
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
                  className="textbox"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  style={{
                    color: "green",
                    marginBottom: "20px",
                    width: "100%",
                    backgroundColor: "#635BFF1F",
                    borderRadius: "8px",
                  }}
                />

                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                  />
                  <label style={{ color: "blue", cursor: "pointer" }}>
                    ForgotPassword ?
                  </label>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "15px",
                    height: "48px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            textDecoration: "none",
          }}
        >
          Don't have an Account?{" "}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#2563EB",
              fontWeight: "600",
            }}
          >
            sign in
          </Link>
        </p>
      </Box>
    </>
  );
}

export default Signup;
