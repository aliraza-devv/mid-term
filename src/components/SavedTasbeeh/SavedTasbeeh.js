import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

function SavedTasbeeh() {
  const [tasbeeh, setTasbeeh] = useState([]);
  let navigate = useNavigate();

  const routeStart = () => {
    navigate("/tasbeeh");
  };


  function fetchAll(e) {
    e.preventDefault();
    db.collection("tasbeeh")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setTasbeeh((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
  }

  return (
    <div className="allTasbeeh">
        {tasbeeh.map((tasb) => {
          return (
            <div className="tasbeeh-detaila" key={tasb.tasbeeh} onClick={() => routeStart()}>
              <h4>{tasb.tasbeeh}</h4>
              <h4>{tasb.tasbeehCount}</h4>
            </div>
          );
        })}
        <button className="btnStart" onClick={fetchAll}>
          <span className="label">Show Tasbeeh</span>
        </button>
    </div>
  );
}

export default SavedTasbeeh;
