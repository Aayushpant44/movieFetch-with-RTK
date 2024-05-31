import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import useApi from "./features/movies/Api";

function MoviesUi() {
  const [data, setdata] = useState({});
  const Title = useSelector((state) => state.movies);

  const api = useApi(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  );

  useEffect(() => {
    if (api) {
      api.map((oneMovie) => {
        if (oneMovie.Title === Title.Title) {
          setdata(oneMovie);
        }
      });
    }
  }, [Title]);

  if (data.Title === Title.Title) {
    return (
      <div className="my-4 flex flex-wrap justify-center bg-slate-800 text-gray-300 rounded-xl ">
        <div className=" p-4 text-xl">
          <div className="gap-y-1 flex flex-col items-center">
            <div className="">
              <p>Title:{data.Title}</p>
              <p>Year:{data.Year}</p>
              <p>Runtime:{data.Runtime}</p>
            </div>
          </div>

          <div className="mt-3">
            <img src={data.Poster} className="h-96 w-72 rounded-xl" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesUi;
