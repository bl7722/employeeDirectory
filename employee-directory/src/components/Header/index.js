import React from "react";

function Header(props) {
  return (
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Employee Directory</a>
    <form className="form-inline">
      <input 
        className="form-control mr-sm-4" 
        type="search" 
        placeholder="Search by Name" 
        onChange={props.handleInputChange} 
        value={props.search}
        name="search"
      />
  
      <button 
        className="btn btn-light my-2 my-sm-0" 
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
      
      <button 
        className="btn btn-light  ml-sm-4 my-2 my-sm-0" 
        onClick={props.emps}
      >
        Reset
      </button>
    
    </form>
  </nav>
</div>
  );
}

export default Header;