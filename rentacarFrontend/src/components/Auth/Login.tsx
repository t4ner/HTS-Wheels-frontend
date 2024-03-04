import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [loggedInUsername, setLoggedInUsername] = useState("");

  interface FormValues {
    username: string;
    password: string;
  }

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("A username is required.")
      .min(3, "Username must be at least 3 characters long.")
      .max(50, "Username must be at most 50 characters long."),
    password: Yup.string()
      .required("A password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });

  const onSubmit = (values: FormValues) => {
    const { username, password } = values;

    axios
      .post("http://localhost:8080/api/v1/auths/login", {
        username,
        password,
      })
      .then(
        (response) => {
          authContext.setIsAuthenticated(true);
          console.log(response.data.data);
          const token = response.data;
          localStorage.setItem("token", token);
          setLoggedInUsername(username);
          navigate("/");
        },
        (error) => {
          console.log(error.response.data);
        }
      );
  };

  const handleLogout = () => {
    authContext.setIsAuthenticated(false);
    localStorage.removeItem("token");
    setLoggedInUsername("");
    navigate("/login");
  };
  return (
    <div className="login-container ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="username" className="label-text">
              Your username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Write your username here "
              className="input-field"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="label-text">
              Your password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="******** "
              className="input-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <div className="flex items-start mb-5">
            <Field
              type="checkbox"
              id="remember"
              name="remember"
              className="checkbox-field"
            />
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium tracking-wider text-white uppercase bg-gray-500 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
