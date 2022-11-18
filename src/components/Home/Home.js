// import React from "react";
// import { useNavigate } from "react-router-dom";
import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecondary from "../Buttons/btnSecondary";

function Home() {
  // let navigate = useNavigate();
  // let path = "/savedtasbeeh";
  // let path2 = "/customtasbeeh";
  
  // const savedRoute = () => {
  //   navigate(path);
  // };
  return (
    <>
      <h1>Count and create Tasbeeh</h1>
      <div className="home">
        <BtnPrimary title="Saved" />
        <BtnSecondary title="Custom" />
      </div>
    </>
  );
}

export default Home;