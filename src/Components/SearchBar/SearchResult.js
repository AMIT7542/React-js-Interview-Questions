import React from "react";
import "./SearchResult.css";
import SearchResultList from "./SearchResultList";
const SearchResult = ({ userList }) => {
  return (
    <div className="search-result">
      {userList.map((user) => (
        <SearchResultList user={user} key={user.id} />
      ))}
    </div>
  );
};

export default SearchResult;
