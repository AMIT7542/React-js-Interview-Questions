import React, { useState } from "react";
const countryList = [
  {
    country: "India",
    value: "IN",
    cities: ["pune", "mumbai"],
  },
  {
    country: "USA",
    value: "USA",
    cities: ["new York", "los angeles"],
  },
  {
    country: "Pakistan",
    value: "PAK",
    cities: ["lahor", "gaziyabad"],
  },
];
const Dropdown = () => {
  const [countries, setCounties] = useState(countryList);
  const [cities, setCities] = useState("");

  const handleChange = (e) => {
    const country = e.target.value;

    const { cities } = countryList.find((item) => item.value === country);
    setCities(cities);
  };
  return (
    <div>
      <select onChange={handleChange} defaultValue={"standard"}>
        <option disabled>Select Country</option>
        {countries.map((item) => (
          <option key={item.value} value={item.value}>
            {item.country}
          </option>
        ))}
      </select>
      {cities && (
        <div>
          <select>
            {cities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
