import React from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeSlashIcon from "../icons/EyeSlashIcon";

/**
 * Eye visibility button for password inputs.
 * @param {boolean} visibility - the visibility state. when true eye icon show, else slashed eye icon shows.
 * @param {Function} setVisibility - setter function to change visibility state
 * @param {string} className - css styled classes
 * @returns
 */
export default function VisibilityButton({ visibility, setVisibility, className }) {
  return (
    <button type="button" onClick={(e) => setVisibility((prev) => !prev)} className={[className]}>
      {visibility ? <EyeIcon /> : <EyeSlashIcon />}
    </button>
  );
}
