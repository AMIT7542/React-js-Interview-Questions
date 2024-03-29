import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import TimerCounter from "./Components/TimerCounter";
import Dropdown from "./Components/Dropdown";
import Checkbox from "./Components/Checkbox";
import Carousal from "./Components/Carousal";
import SwapListItem from "./Components/SwapListItem";
import StarRating from "./Components/StarRating";
import ToggelModal from "./Components/ToggelModal";
import ProgressBar from "./Components/progressBar/ProgressBar";
import Search from "./Components/SearchBar/Search";

function App() {
  return (
    <div>
      {/* <Dropdown /> */}
      {/* <Checkbox /> */}
      {/* <Carousal /> */}
      <SwapListItem />
      {/* <StarRating /> */}
      {/* <ToggelModal /> */}
      {/* <ProgressBar /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
