import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnSubmit from "../Buttons/BtnSubmit";
import { db } from "../../firebase";

function CustomTasbeeh() {
  const [tasbeeh, setTasbeeh] = useState();
  const [tasbeehCount, setTasbeehCount] = useState();
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("tasbeeh")
      .add({
        tasbeeh: tasbeeh,
        tasbeehCount: tasbeehCount,
      })
      .then(() => {
        alert("tasbeeh has been added 👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setTasbeeh("");
    setTasbeehCount("");
    navigate("/");

  };

  return (
    <>
      <div className="card">
        <h1 className="heading-secondary">Add your tasbeeh</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            id=""
            value={tasbeeh}
            onChange={(e) => setTasbeeh(e.target.value)}
            name="tasbeeh"
            placeholder="Add tasbeeh"
            type="text"
            className="input"
            required
          />
          <input
            id=""
            value={tasbeehCount}
            onChange={(e) => setTasbeehCount(e.target.value)}
            name="tasbeehCount"
            placeholder="tasbeehCount"
            type="text"
            className="input"
            required
          />
          <BtnSubmit title="Submit" />
        </form>
      </div>
    </>
    )
}

export default CustomTasbeeh;
