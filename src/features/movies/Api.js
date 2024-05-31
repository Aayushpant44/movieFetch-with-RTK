import React, { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  if (data.length > 0) {
    console.log(data);
    return data;
  }
};

export default useApi;
