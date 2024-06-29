import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { login, authError } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Enter a valid email"),
    password: yup.string().required("Please enter your password"),
  });

  const handleSubmit = (values) => {
    // Simulate an API call
    setTimeout(() => {
      // Mock user data for successful login
      const mockUserData = {
        username: values.email,
        token: "mockToken",
      };
      login(mockUserData);
    }, 500);
  };

  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold">Login Form</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex w-full flex-col items-center gap-5">
              <Field
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded border border-black px-3 py-2"
              />
              <p className="text-red-600">
                <ErrorMessage name="email" />
              </p>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full rounded border border-black px-3 py-2"
              />
              <p className="text-red-600">
                <ErrorMessage name="password" />
              </p>
              {authError && <p className="text-red-600">{authError}</p>}
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                type="submit"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
