import React, { useState } from "react";

const list = [
  {
    id: 1,
    name: "apple",
    checked: true,
  },
  {
    id: 2,
    name: "mosambi",
    checked: false,
  },
  {
    id: 3,
    name: "bananas",
    checked: false,
  },
];
const Checkbox = () => {
  const [fruitList, setFruitList] = useState(list);
  const handleChange = (e, id) => {
    const value = e.target.checked;
    setFruitList(
      fruitList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleCheckBoxs = () => {
    setFruitList(
      fruitList.map((item) => ({ ...item, checked: !item.checked }))
    );
  };
  return (
    <>
      {fruitList &&
        fruitList.map((item) => (
          <div key={item.id}>
            {item.name}
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleChange(e, item.id)}
            />
            {item.checked && <button>Delete</button>}
          </div>
        ))}
      <button onClick={handleCheckBoxs}>Select All</button>
    </>
  );
};

export default Checkbox;
