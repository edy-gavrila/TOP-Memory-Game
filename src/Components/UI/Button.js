import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-1 px-8 rounded bg-violet-800 text-white shadow-md shadow-indigo-700"
    >
      {children}
    </button>
  );
}

export default Button;
