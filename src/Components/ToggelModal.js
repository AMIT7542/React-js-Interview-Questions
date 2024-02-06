import React, { useState } from "react";

const ToggelModal = () => {
  const [toggle, setToggel] = useState(true);

  const handleToggel = () => {
    setToggel((prev) => !prev);
  };
  return (
    <div>
      <section>
        <h3>Modal</h3>
        <button onClick={handleToggel}>Show Modal</button>
        <div style={{ background: "green" }}>
          {toggle && <ModalBox setToggel={setToggel} />}
        </div>
      </section>
    </div>
  );
};

export default ToggelModal;

const ModalBox = ({ setToggel }) => {
  return (
    <div style={{ backgroundColor: "red", width: "200px", height: "200px" }}>
      <button onClick={() => setToggel((prev) => !prev)}>X</button>
    </div>
  );
};
