import React, { useEffect, useState } from "react";

const genders = ["male", "female", "other"]; // The options for gender selection

/**
 * Represents a Gender Selector component.
 * Allows the user to choose their gender from a list of options.
 * @param {Function} onChange - Callback function triggered when the selected gender changes.
 * @param {string} selected - The initially selected gender.
 */
const GenderSelector = ({ onChange = (e) => {}, selected = "" }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [loop, setLoop] = useState(true)

  // handle gender changes
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  // set initial gender
  useEffect(() => {
    setSelectedGender(selected);
  }, [selected]);

  // handle callback when changing gender
  useEffect(() => {
    onChange({ value: selectedGender }); 
  }, [selectedGender]);

  return (
    <div className="inline-flex relative w-full gap-4">
      {genders.map((gender) => (
        <label
          key={gender}
          className={`px-4 py-2 text-center w-full rounded-md cursor-pointer font-semibold capitalize border-2 ${
            selectedGender === gender
              ? "border-primary text-primary"
              : "border-grayaccent text-grayaccent"
          }`}
          onClick={() => handleGenderChange(gender)}
        >
          {gender}
        </label>
      ))}
    </div>
  );
};

export default GenderSelector;
