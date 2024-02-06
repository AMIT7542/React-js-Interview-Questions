import React, { useCallback, useState } from "react";

const SwapListItem = () => {
  const [list1, setList1] = useState([
    { title: "item1", checked: false },
    { title: "item2", checked: false },
    { title: "item3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "itemA", checked: false },
    { title: "itemB", checked: false },
    { title: "itemC", checked: false },
  ]);
  const swapItem = (title, index) => {
    let res = [...list1];
    res[index].checked = !res[index].checked;
    setList1(res);
  };
  const handleChange = () => {
    const res1 = [...list1];
    const res2 = [...list2];
    res1.forEach((item, index) => {
      if (item.checked) {
        let temp = item;
        res1[index] = res2[index];
        res2[index] = temp;
      }
      res1[index].checked = false;
    });
    setList1(res1);
    setList2(res2);
  };
  return (
    <div>
      <div>
        <h3>List 1</h3>
        <ul>
          {list1 &&
            list1.map((item, index) => (
              <div>
                <li key={item.title} style={{ display: "inline" }}>
                  {item.title}
                </li>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onClick={(e) => swapItem(item.title, index)}
                />
              </div>
            ))}
        </ul>
      </div>
      <div>
        <h3>List 2</h3>
        <ul>
          {list2 &&
            list2.map((item) => (
              <div>
                <li key={item.title} style={{ display: "inline" }}>
                  {item.title}
                </li>
              </div>
            ))}
        </ul>
      </div>
      <div>
        <button onClick={handleChange}>Swap Items</button>
      </div>
    </div>
  );
};

export default SwapListItem;
