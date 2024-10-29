import React, { useState } from "react";
import DefaultImage from "../../../assets/default_profile_icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../ducks/feature-auth/actions";

/**
 * Represent profile button and dropdown options
 * @param {Object} image - Image object for avatar thumb.
 * @param {boolean} edit - Highlight edit profile option when true.
 * @returns
 */
const ProfileButton = ({ image = DefaultImage, edit }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // handle the dopdown toggling on/off
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button className="flex items-center focus:outline-none" onClick={handleDropdownToggle}>
        <img src={image} alt="Profile Icon" className="w-8 h-8 rounded-full" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-5 p-2 w-48 bg-lightgray border rounded-xl shadow-lg">
          <button
            onClick={() => navigate("/profile-edit")}
            className={`block w-full px-4 mb-1 py-2 text-left rounded-lg font-semibold ${
              edit ? "text-primary" : "text-gray-800"
            } hover:bg-gray-100 border-grayaccent`}
          >
            Edit Profile
          </button>
          <hr className="border-[.1rem] border-grayaccent mb-1" />
          <button
            onClick={() => dispatch(logout())}
            className="block w-full px-4 py-2 text-left text-gray-800 rounded-lg font-semibold hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
