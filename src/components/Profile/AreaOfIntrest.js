const AreaOfInterest = (props) => {
    return (
      <>
      <br/>
        <label className="label">Area Of Interest</label>
        <br/>
        <input type="checkbox" id="Designer" value="Designer"></input>
        <label for="Designer">Designer</label>
        <br />
  
        <input type="checkbox" id="Developer" value="Developer"></input>
        <label className="label"for="Developer">Developer</label>
        <br />
  
        <input type="checkbox" id="Project Manager" value="Project Manager"></input>
        <label for="Project Manager">Manager</label>
        <br />
  
        <input type="checkbox" id="Sales" value="Sales"></input>
        <label for="Sales">Sales</label>
        <br />
      </>
    );
  };
  
  export default AreaOfInterest;