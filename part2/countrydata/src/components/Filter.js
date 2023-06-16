

function Filter({onChange}) {
    return (
      <div>
          <label>Find countries</label>
          <input type="text" onChange={onChange}/>
      </div>
    );
  }
  
  export default Filter;
  