import React, { useEffect, useState } from "react";
import VisibilityButton from "../../common/visibility-button/VisibilityButton";
import LoginValidationSchema from "./validationSchema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../../ducks/feature-auth/actions";
import { useNavigate } from "react-router-dom";

/**
 * Login screen component
 * @returns
 */
export default function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // config form with formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      // dispatch login action and after navigate to profile view
      await dispatch(login(values));
      navigate("/");
    },
  });

  // change title
  useEffect(() => {
    document.title = "Login - MDI";
    return () => {
      document.title = "MDI";
    };
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="m-auto w-1/3 pt-16">
        <h1 className="text-white text-[1.7rem] font-semibold px-2">Welcome Back</h1>
        <p className="text-white px-2">Login to your account</p>
        <div className="py-9 px-6 rounded-lg mt-3 bg-white shadow-lg">
          <h1 className="uppercase text-[1.7rem] font-bold text-center text-primary mb-5">
            ABC Company
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block font-bold text-gray-700">
                User Name
              </label>
              <input
                type="email"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                placeholder="Jone.Doe@gmail.com"
              />
              {formik.errors.username ? (
                <span className="text-red-700 text-xs block">{formik.errors.username}</span>
              ) : null}
            </div>
            <div className="mb-10">
              <label htmlFor="password" className="block font-bold text-gray-700">
                Password
              </label>
              <div>
                <input
                  type={passwordVisibility ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full pr-10"
                />
                <VisibilityButton
                  className="text-grayaccent absolute z-50 ml-[-2.2rem] pt-[0.9rem]"
                  visibility={passwordVisibility}
                  setVisibility={setPasswordVisibility}
                />
              </div>
              {formik.errors.password ? (
                <span className="text-red-700 text-xs block">{formik.errors.password}</span>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
            >
              Login
            </button>
          </form>
          <p className="font-bold mt-4">
            Still Have No account ?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-accent cursor-pointer hover:text-amber-600"
            >
              SIGNUP
            </span>{" "}
            Now
          </p>
        </div>
        <div className="text-white text-xs px-2 flex justify-between mt-2 ">
          <span>
            <p>Version 1.0</p>
          </span>
          <span className="font-bold gap-5 flex">
            <a href="#">About Us</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </div>
  );
}
