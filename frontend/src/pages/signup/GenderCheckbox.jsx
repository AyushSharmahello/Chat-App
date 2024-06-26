import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control mt-3">
        <label className={`label  cursor-pointer ${selectedGender==="male" ? "selected" :""} text-dark`}>
          <span className="label-text text-dark">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control mt-3">
        <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" :""} text-white`}>
          <span className="label-text text-female">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox