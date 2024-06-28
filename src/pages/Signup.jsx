import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const SignupFormValidation = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter you name"),
    email: yup
      .string()
      .required("Please enter you email")
      .email("enter a valid email"),
    password: yup.string().required("Please enter you password"),
    gender: yup.string().required("Please select you gender"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Signup Form</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex w-full flex-col items-center gap-5">
                <Field
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded border border-black px-3 py-2"
                />
                <p className="text-red-600">
                  <ErrorMessage name="name" />
                </p>

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
                <Field
                  component="select"
                  name="gender"
                  placeholder="Select you gender"
                  className="w-full rounded border border-black px-3 py-2"
                >
                  <option values="" disabled>
                    Please select
                  </option>
                  <option values="male">Male</option>
                  <option values="female">Female</option>
                </Field>
                <p className="text-red-600">
                  <ErrorMessage name="gender" />
                </p>
                <button
                  className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  type="submit"
                >
                  Signup
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignupFormValidation;
