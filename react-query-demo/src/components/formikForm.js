// formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted", values);
        alert("Registration successful!");
        resetForm();
      }}
    >
      {() => (
        <Form style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" id="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
