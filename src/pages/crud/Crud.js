import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";

const Crud = () => {
  const [state, setstate] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    Api.getCrud()
      .then((res) => res.json())
      .then((data) => {
        setstate(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="form-control my-4"
            type="text"
            name="name"
            placeholder="email"
          />
          <button className="btn btn-success w-100">send</button>
        </div>
      </div>
      <div className="row mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">edit delete</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((v) => (
              <tr>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/edit/" + v.id)}
                  >
                    edit
                  </button>
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
