import { useNavigate } from "react-router-dom";

const BtnSecondary = ({title}) => {
  let navigate = useNavigate();
  
  const customRoute = () => {
    let path = "/customtasbeeh";
    navigate(path);
  };

  return (
    <button onClick={() => customRoute()} className='btnSecondary'>
      {title}
    </button>
  );
};

export default BtnSecondary;
