import React from "react";
import { useNavigate } from "react-router-dom";

const BtnPrimary = ({title}) => {
  let navigate = useNavigate();
  
  const savedRoute = () => {
    let path = "/savedtasbeeh";
    navigate(path);
  };
  return (
    <button onClick={() => savedRoute()} className='BtnPrimary'>{title}</button>
  )
}

export default BtnPrimary