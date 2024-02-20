import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ setUserList }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    const filtereduserData = data.filter(
      (user) => value && user && user.name.toLowerCase().includes(value)
    );
    setUserList(filtereduserData);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchData(value);
  };
  console.log(input);
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter text here..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
