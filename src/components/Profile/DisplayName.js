import "./DisplayName.css";

const DisplayName = (props) => {
  return (
    <>
      <div className="name__container">
        <label className="label__one">DisplayName</label>
        <input
          className="textbox__one"
          type="text"
          values="placeholder text"
        ></input>
        <br />
        <label className="label__two">FirstName</label>
        <input
          className="textbox__two"
          type="text"
          values="placeholder text"
        ></input>
        <br />
        <label className="label__three">LastName</label>
        <input
          className="textbox__three"
          type="text"
          values="placeholder text"
        ></input>
        <br />
      </div>
    </>
  );
};

export default DisplayName;
