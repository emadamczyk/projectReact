import React from "react";

function SearchForm(props) {
  return (
    <form style={{marginLeft:"50px", marginTop: "50px", fontSize: "20px"}}> 
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input style={{width: "350px"}}
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Location"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-success mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
