import React, { useState } from "react";
import DefaultImage from "../../../assets/default_profile_icon.png";
import PlusCircleIcon from "../../common/icons/PlusCircleIcon";
import userService from "../../../lib/api/feature-profile/userService";
import { useSelector } from "react-redux";

/**
 * Avatar change button
 * @param {string} image - image path to show thumb.
 * @returns
 */
const ProfileImageUpload = ({ image = DefaultImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // access token from global state - redux
  const token = useSelector((state) => state.auth.auth.token);

  // update via api after selecting image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      userService.changeProfilePicture(file, token);
    }
  };

  return (
    <div className="relative">
      <img
        src={selectedImage || image}
        alt="Uploaded"
        className="w-full h-full object-cover rounded-full"
      />
      <label
        htmlFor="fileInput"
        className="absolute right-0 bottom-0 bg-lightgray text-black hover:bg-primary hover:text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <input type="file" id="fileInput" className="sr-only" onChange={handleImageChange} />
        <PlusCircleIcon />
      </label>
    </div>
  );
};

export default ProfileImageUpload;
