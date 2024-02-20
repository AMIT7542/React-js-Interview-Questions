import React from "react";

const SearchResultList = ({ user }) => {
  const style = {
    padding: "10px 20px",
  };
  return <div style={style}>{user.name}</div>;
};

export default SearchResultList;
