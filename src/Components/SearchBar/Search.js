import React, { useState } from "react";
import "./Search.css";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
const Search = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div className="search-bar-container">
      <SearchInput setUserList={setUserList} />
      <SearchResult userList={userList} />
    </div>
  );
};

export default Search;
