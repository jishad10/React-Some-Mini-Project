import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  //text area te ja value dibo ta jate read korte pa re  
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  //rendaring korar sathe sathe jate value dekai oi jonno [] er modde seachText ta ke patacchi
  useEffect(() => {
    props.onSearch(searchText); //searchText onosoray search hobe ,,mani jey value dicchi/read kortechi oi onosary
  }, [searchText]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search Country"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
