import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import Tasbeeh from "../Tasbeeh/Tasbeeh";
import Loader from "../Loader/Loader";

function SavedTasbeeh() {
  const [tasbeeh, setTasbeeh] = useState([]);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);
  // let navigate = useNavigate();

  // const routeStart = () => {
  //   navigate("/");
  // };

  function fetchAll(e) {
    e.preventDefault();
    setLoader(true);

    db.collection("tasbeeh")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setTasbeeh((prev) => {
              return [...prev, doc.data()];
            });
            setLoader(false);
          });
        }
      });
  }

  return (
    <div className="allTasbeeh">
      {loader ? (
        <Loader />
      ) : (
        tasbeeh.map((tasb) => {
          return (
            <>
              <div
                className="tasbeeh-details"
                key={tasb.tasbeeh}
                onClick={() => setShow(true)}
              >
                <h4>{tasb.tasbeeh}</h4>
                <h4>{tasb.tasbeehCount}</h4>
              </div>
            </>
          );
        })
        )}
        {show ? <Tasbeeh /> : null}
      <button className={loader ? "btnDisable" : "btnStart"} onClick={fetchAll}>
        <span className="label">Show Tasbeeh</span>
      </button>
    </div>
  );
}

export default SavedTasbeeh;
