import React, { useEffect, useState } from "react";

const Get = () => {
  const [state, setstate] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8888/employees?_limit=2&_page=${page}`)
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
