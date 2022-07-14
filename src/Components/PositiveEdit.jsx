import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PositiveEdit = () => {
  const [positiveEditOne, setPositiveEditOne] = useState("");
  const [positiveEditTwo, setPositiveEditTwo] = useState("");
  const [positiveEditThree, setPositiveEditThree] = useState("");
  const { id } = useParams();

/* ----------------------------- Update Handler ----------------------------- */

  const positiveEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/positive/${id}`, {
        todayOne: positiveEditOne,
        todayTwo: positiveEditTwo,
        todayThree: positiveEditThree,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

/* ------------------------------- Use Effect ------------------------------- */
  useEffect(() => {
    // e.preventDefault();
    axios
      .get(`/api/positive/${id}`)
      .then((res) => {
        console.log(res);
        setPositiveEditOne(res.data.todayOne);
        setPositiveEditTwo(res.data.todayTwo);
        setPositiveEditThree(res.data.todayThree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
/* -------------------------------------------------------------------------- */
  return (
    <div className="positive-edit-parent">
      <div className="positive-edit-header">
        <p>Date here</p>
        <p>Don't worry, we all make mistakes sometimes</p>
      </div>

      <form
        onSubmit={positiveEditHandler}
        className="positive-input-form"
        action=""
      >
        <input
          value={positiveEditOne}
          onChange={(e) => {
            setPositiveEditOne(e.target.value);
          }}
          type="text"
        />
        <input
          value={positiveEditTwo}
          onChange={(e) => {
            setPositiveEditTwo(e.target.value);
          }}
          type="text"
          placeholder="Posiive Two"
        />
        <input
          value={positiveEditThree}
          onChange={(e) => {
            setPositiveEditThree(e.target.value);
          }}
          type="text"
          placeholder="Posiive Three"
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default PositiveEdit;
