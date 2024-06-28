import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginFormValidation = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter you email")
      .email("enter a valid email"),
    password: yup.string().required("Please enter you password"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <>
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
    </>
  );
};

export default LoginFormValidation;
