import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";

function Input() {
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addMovie(text));
  };
  return (
    <div className="flex ">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-l-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 capitalize"
        placeholder="Enter your text here"
        onChange={(e) => settext(e.target.value)}
      />

      <button
        className="bg-green-600 rounded-r-xl p-4 capitalize"
        onClick={handleSubmit}
      >
        search
      </button>
    </div>
  );
}

export default Input;
