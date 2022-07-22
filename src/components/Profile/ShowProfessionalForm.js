import { useState } from "react";
import classes from "./professional.module.css";

const ShowProfessionalForm = (props) => {
  const [experiance, setExperience] = useState();
  const [expertise, setExpertise] = useState();
  const getExpertise = (event) => {
    setExpertise(event.target.value);
  };
  const getExperience = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className={classes.card}>
      <label>How much experience do you have?</label>
      <div>
        <input type="radio" name="experiance" onChange={getExperience} /> 0-5
        <input type="radio" name="experiance" onChange={getExperience} /> 5-10
        <input type="radio" name="experiance" onChange={getExperience} /> 10+
      </div>
      <label>What is your expertise?</label>
      <div>
        <input type="radio" name="experiance" onChange={getExpertise} /> Java
        <input type="radio" name="experiance" onChange={getExpertise} /> React
        <input type="radio" name="experiance" onChange={getExpertise} /> Backend
      </div>
      <label>Mention your role?</label>
      <textarea className="textarea" rows={10} cols={50}></textarea>
    </div>
  );
};

export default ShowProfessionalForm;
