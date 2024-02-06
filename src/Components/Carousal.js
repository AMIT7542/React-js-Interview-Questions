import React, { useEffect, useState } from "react";
const data = [
  {
    id: "1",
    imageuRL:
      "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg?s=2048x2048&w=is&k=20&c=MlaHtCKbmmQAzT5d0Z-Hs8gw_yjzEar-jwMoE85Nzj8=",

    name: "mountain",
  },
  {
    id: "2",
    imageuRL:
      "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=2048x2048&w=is&k=20&c=cM_JXt2TA5RkUwemBr30OYs_v_Wz2KaQD-Lze6Koz88=",
    name: "",
  },
  {
    id: "3",
    imageuRL:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    name: "",
  },
];

const Carousal = () => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      handleNextItem();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [activeItem]);

  const handleNextItem = () => {
    if (activeItem === data.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem((prev) => prev + 1);
    }
  };
  const handlePreviousItem = () => {
    if (activeItem === 0) {
      setActiveItem(data.length - 1);
    } else {
      setActiveItem((prev) => prev - 1);
    }
  };
  return (
    <div>
      <section>
        <h1>Details</h1>
        <img
          src={data[activeItem].imageuRL}
          alt={data[activeItem].name}
          width={400}
          height={200}
          style={{ margin: "20px" }}
        />
        <p>{`Item ${activeItem}`}</p>
        <button onClick={handlePreviousItem}>Previous</button>
        <button onClick={handleNextItem}>Next</button>
      </section>
    </div>
  );
};

export default Carousal;
