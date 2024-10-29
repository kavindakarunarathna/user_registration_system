import React, { useEffect } from "react";
import CheckIcon from "../../common/icons/CheckIcon";
import { useNavigate } from "react-router-dom";

/**
 * Sccess screen for successfull registration
 * @returns
 */
export default function Success() {
  const navigate = useNavigate();

  // change document title
  useEffect(() => {
    document.title = "Successfull - MDI";
    return () => {
      document.title = "MDI";
    };
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="m-auto w-1/3 pt-24">
        <div className="py-9 px-6 rounded-2xl mt-3 bg-white shadow-lg">
          <div className="text-green-500 flex justify-center">
            <CheckIcon />
          </div>
          <h1 className="text-xl font-extrabold text-center text-black mb-2">Congratulations</h1>
          <p className="text-center text-black font-semibold mb-4">
            Your Account has been created Successfully
          </p>
          <button
            type="submit"
            onClick={() => navigate("/auth")}
            className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
          >
            Go to Login
          </button>
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
