import {useState} from 'react'
import ShowProfessionalForm from './ShowProfessionalForm';

const AreYouStudent = (props) => {

    const [profession,setProfession] = useState(false);

    const getProfession = (event) => {
        if(event.target.value === "false"){
            setProfession(false);
        }else{
            setProfession(true);
        }
        
    }

  return (
    <>
      <label>Are you Student</label>
      <br />
      <div >
        <input type="radio" value="false" name="profession" onChange={getProfession} /> Student
        <input type="radio" value="true" name="profession" onChange={getProfession} /> Professional
      </div>
      {profession? (<ShowProfessionalForm></ShowProfessionalForm>) : null}
    </>
  );
};

export default AreYouStudent;