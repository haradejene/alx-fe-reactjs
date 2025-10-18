import React from "react";
import FormikForm from "./components/formikForm";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Registration (Formik + Yup)</h1>
      <FormikForm />
    </div>
  );
};

export default App;
