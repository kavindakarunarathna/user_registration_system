import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Top navigation bar
 * @param {Element} profileButton - ProfileButton component with thire params.
 * @param {string} username - shows profile name in navigation bar.
 * @returns
 */
export default function TopNavigation({ profileButton, username }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between bg-lightgray pt-4 px-6 pb-2">
      <h1
        onClick={() => navigate("/")}
        className="uppercase text-[1.7rem] font-bold text-center text-primary cursor-pointer"
      >
        ABC Company
      </h1>
      <div className="inline-flex gap-3">
        <h1 className="text-2xl font-semibold text-center text-grayaccent">
          {username ? username : null}
        </h1>
        {profileButton ? profileButton : null}
      </div>
    </div>
  );
}
