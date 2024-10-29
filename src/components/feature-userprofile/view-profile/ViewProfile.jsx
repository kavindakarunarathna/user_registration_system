import React, { useEffect, useState } from "react";
import TopNavigation from "../../common/top-navigation/TopNavigation";
import Footer from "../../common/footer/Footer";
import ProfileButton from "../../common/profile-button/ProfileButton";
import ProfileImageUpload from "./ProfileImageUpload";
import userService from "../../../lib/api/feature-profile/userService";
import { useSelector } from "react-redux";

/**
 * View profile details screen
 * @returns
 */
export default function ViewProfile() {
  // access token from global state - redux
  const token = useSelector((state) => state.auth.auth.token);

  const [user, setUser] = useState();

  // get user from api when mounting the comp.
  useEffect(() => {
    (async () => {
      const details = await userService.getUser(token);
      setUser(details.result);
    })();
  }, []);

  // change document title
  useEffect(() => {
    document.title = "My Profile - MDI";
    return () => {
      document.title = "MDI";
    };
  }, []);

  return (
    <div className="bg-white w-full min-h-screen pb-5">
      <TopNavigation
        username={`${user?.full_name}`}
        profileButton={<ProfileButton image={user?.profile_image?.thumb} />}
      />
      <div className="m-auto w-1/3">
        <div className="mt-10 w-full">
          <div className="w-full inline-flex gap-5 mb-10">
            <div className="w-1/3">
              <ProfileImageUpload image={user?.profile_image?.thumb} />
            </div>
            <div className="w-2/3 pl-4 self-end">
              <h1 className="text-2xl leading-1 font-bold text-left text-black">Welcome</h1>
              <h1 className="text-3xl leading-1 font-bold text-left text-grayaccent">
                {user?.name}
              </h1>
            </div>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">E Mail Address</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">{user?.email}</p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Name</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">
              {user?.full_name}
            </p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Gender</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right capitalize">
              {user?.gender}
            </p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Date of Birth</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">{user?.dob}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
