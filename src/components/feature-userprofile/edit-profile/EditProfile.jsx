import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import EditProfileValidationSchema from "./validationSchema";
import GenderSelector from "../../common/gender-selector/GenderSelector";
import TopNavigation from "../../common/top-navigation/TopNavigation";
import Footer from "../../common/footer/Footer";
import ProfileButton from "../../common/profile-button/ProfileButton";
import { useSelector } from "react-redux";
import userService from "../../../lib/api/feature-profile/userService";
import { useNavigate } from "react-router-dom";

/**
 * Edit user profile screen
 * @returns
 */
export default function EditProfile() {
  // access token from a global state - redux
  const token = useSelector((state) => state.auth.auth.token);

  const [user, setUser] = useState({});
  const [gender, setGender] = useState({});

  const navigate = useNavigate();

  // handle gender state changes
  const genderChangeHander = (e) => {
    setGender(e.value);
  };

  // set user calling api endpoint
  useEffect(() => {
    (async () => {
      const details = await userService.getUser(token);
      setUser(details.result);
    })();
  }, []);

  // set dependent gender state from user state
  useEffect(() => {
    setGender(user.gender);
  }, [user]);

  // config form with formik
  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      dob: user?.dob,
      gender: user?.gender,
    },
    validationSchema: EditProfileValidationSchema,
    onSubmit: async (values) => {
      values.gender = gender;

      // submit changes and navigate to profile view
      await userService.update(values, token);
      navigate("/");
    },
    enableReinitialize: true,
  });



  // change document title
  useEffect(() => {
    document.title = "Edit Profile - MDI";
    return () => {
      document.title = "MDI";
    };
  }, []);

  return (
    <div className="bg-white w-full min-h-screen pb-5">
      <TopNavigation
        username={`${user?.full_name}`}
        profileButton={<ProfileButton edit={true} image={user?.profile_image?.thumb} />}
      />
      <div className="m-auto w-1/3">
        <div className="py-9 px-6 rounded-lg mt-3">
          <h1 className="text-2xl font-bold text-center text-black mb-5">Edit Profile</h1>
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
                disabled
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
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.email ? (
                <span className="text-red-700 text-xs block">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Gender
              </label>
              <GenderSelector onChange={genderChangeHander} selected={user.gender} />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
            >
              Update Profile Details
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
