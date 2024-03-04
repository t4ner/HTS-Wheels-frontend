import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./CorporateCustomerSignup.css";

type Props = {};

interface SignupFormValues {
  companyName: string;
  taxNumber: string;
  email: string;
  gsm: string;
  username: string;
  password: string;
  confirmPassword: string;
  // authorities: string[];
  // customerType: string;
}

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (values: SignupFormValues) => {
    try {
      console.log("Form Values:", values);
      const response = await axios.post(
        "http://localhost:8080/api/v1/corporateCustomers/add",
        values
      );
      navigate("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company name is required"),
    taxNumber: Yup.string().required("Tax number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    gsm: Yup.string()
      .matches(/^\d{11}$/, "Invalid GSM number")
      .required("GSM is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Password confirmation is required"),
    // authorities: Yup.array()
    //   .of(Yup.string())
    //   .required("Authorities are required"),
  });

  const initialValues: SignupFormValues = {
    companyName: "",
    taxNumber: "",
    email: "",
    gsm: "",
    username: "",
    password: "",
    confirmPassword: "",
    // authorities: ["ROLE_CUSTOMER"],
    // customerType: "INDIVIDUAL_CUSTOMER"
  };

  return (
    <div className="signup-container mt-28 mb-24">
      <div>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create account 
                </h1>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => {
                    console.log("Submitting form", values);
                    handleSignup(values);
                  }}
                  validationSchema={validationSchema}
                >
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Company name
                      </label>
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        className="input-field"
                        placeholder="Your company name"
                      />
                      <ErrorMessage name="companyName">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="taxNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tax number
                      </label>
                      <Field
                        type="text"
                        name="taxNumber"
                        id="taxNumber"
                        className="input-field"
                        placeholder="1234567890"
                      />
                      <ErrorMessage name="taxNumber">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@mail.com"
                        className="input-field"
                      />
                      <ErrorMessage name="email">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="gsm"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        GSM
                      </label>
                      <Field
                        type="tel"
                        name="gsm"
                        id="gsm"
                        placeholder="05XXXXXXXXX"
                        className="input-field"
                      />
                      <ErrorMessage name="gsm">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Your username"
                        className="input-field"
                      />
                      <ErrorMessage name="username">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="input-field"
                      />
                      <ErrorMessage name="password">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage name="confirmPassword">
                        {(message) => (
                          <span className="text-danger">{message}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    {/* <div>
                      <label
                        htmlFor="authorities"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Authorities
                      </label>
                      <Field
                        type="text"
                        name="authorities"
                        id="authorities"
                        placeholder="ROLE_ADMIN"
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div> */}

                    {/* <div className="flex items-start"> */}
                    {/* <div className="flex items-center h-5">
                        <Field
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div> */}
                    {/* <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light text-gray-500 dark:text-gray-300"
                        >
                          I accept the{" "}
                          <a
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div> */}
                    {/* </div> */}
                    <button
                      type="submit"
                      className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Create account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
