import React, { useEffect, useState } from "react";
import { Api } from "../../api/api";

const Get = () => {
  const [state, setstate] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    Api.getPagination(page)
      .then((res) => res.json())
      .then((res) => setstate(res));
  }, [page]);
  return (
    <div className="container">
      <button className="btn btn-success" onClick={() => setpage(1)}>
        1
      </button>
      <button className="btn btn-success" onClick={() => setpage(2)}>
        2
      </button>
      {state?.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
    </div>
  );
};

export default Get;
