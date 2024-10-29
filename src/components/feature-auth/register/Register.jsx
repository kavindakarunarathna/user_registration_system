import React, { useEffect } from "react";
import ChevronIcon from "../../common/icons/ChevronIcon";
import { useFormik } from "formik";
import RegistrationValidationSchema from "./validationSchema";
import { useNavigate } from "react-router-dom";
import registrationService from "../../../lib/api/feature-auth/registrationService";

/**
 * User Registration Screen
 * @returns
 */
export default function Register() {
  const navigate = useNavigate();

  // config form with formik
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      county_code: "+94",
      local_number: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: RegistrationValidationSchema,
    onSubmit: async (values) => {
      try {
        // if successful registration
        await registrationService.register(values);
        navigate("/success");
      } catch (err) {
        // if throw error when registration
        navigate("/register");
      }
    },
  });

  // change document title
  useEffect(() => {
    document.title = "Register - MDI";
    return () => {
      document.title = "MDI";
    };
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen py-5">
      <div className="m-auto w-1/3">
        <div className="text-white flex gap-2">
          <ChevronIcon onClick={() => navigate(-1)} />
          <h1 className="text-[1.7rem] font-semibold px-2">Create Account</h1>
        </div>
        <div className="py-9 px-6 rounded-lg mt-3 bg-white shadow-lg">
          <h1 className="uppercase text-[1.7rem] font-bold text-center text-primary mb-5">
            ABC Company
          </h1>
          <form onSubmit={formik.handleSubmit} className="block">
            <div className="mb-4">
              <div className="inline-flex gap-4">
                <div>
                  <label htmlFor="username" className="block font-bold text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                    placeholder="Jone"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block font-bold text-black">
                    Second Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                    placeholder=""
                  />
                </div>
              </div>
              {formik.errors.first_name ? (
                <span className="text-red-700 text-xs block">{formik.errors.first_name}</span>
              ) : null}
              {formik.errors.last_name ? (
                <span className="text-red-700 text-xs block">{formik.errors.last_name}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.email ? (
                <span className="text-red-700 text-xs block">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Mobile Number
              </label>
              <div className="inline-flex gap-4">
                <input
                  type="text"
                  id="county_code"
                  name="county_code"
                  maxLength={4}
                  disabled
                  value={formik.values.county_code}
                  onChange={formik.handleChange}
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-1/4"
                  placeholder="+94"
                />
                <input
                  type="text"
                  id="local_number"
                  maxLength={9}
                  minLength={9}
                  name="local_number"
                  value={formik.values.local_number}
                  onChange={formik.handleChange}
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-3/4"
                  placeholder=""
                />
              </div>
              {formik.errors.county_code ? (
                <span className="text-red-700 text-xs block">{formik.errors.county_code}</span>
              ) : null}
              {formik.errors.local_number ? (
                <span className="text-red-700 text-xs block">{formik.errors.local_number}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.password ? (
                <span className="text-red-700 text-xs block">{formik.errors.password}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Password
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.confirm_password ? (
                <span className="text-red-700 text-xs block">{formik.errors.confirm_password}</span>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="text-white text-xs px-2 flex justify-between mt-2">
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
