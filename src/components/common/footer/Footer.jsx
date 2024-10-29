import React from "react";

/**
 * Footer component.
 * @returns
 */
export default function Footer() {
  return (
    <div data-testid="footer" className="text-grayaccent text-xs px-52 w-full absolute bottom-0 py-5 flex justify-between mt-2">
      <span>
        <p>Version 1.0</p>
      </span>
      <span className="font-bold gap-5 flex">
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </span>
    </div>
  );
}
