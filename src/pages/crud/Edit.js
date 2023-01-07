import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api, url } from "../../api/api";

const Edit = () => {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    Api.getCrudId(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setname(data.name);
        setemail(data.email);
      });
  }, []);
  const editData = () => {
    const data = { id: id, name: name, email: email };
    axios
      .put(`${url}employees/${id}`, data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="form-control my-4"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button onClick={editData} className="btn btn-success w-100">
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
