import React from "react";

import Input from "./features/movies/Input";
import useApi from "./features/movies/Api";
import MoviesUi from "./MoviesUi";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-900 ">
      <div className="">
        <Input />
        <MoviesUi />
      </div>
    </div>
  );
}

export default App;
