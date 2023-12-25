import React from "react";
import { hot } from "react-hot-loader/root";

import CustomInputNumber from "./CustomInputNumber";
import RoomForm, { RoomResult } from "./RoomForm";
import "../assets/scss/index.scss";

const GUEST = 10;
const ROOM = 3;
function App() {
  const onChange = (result: RoomResult[]) => {
    console.log(result);
  };
  return (
    <div className="bg-gray-200 h-screen w-screen pt-8">
      <div className="mx-auto w-1/3 rounded-md overflow-hidden" style={{ minWidth: 340 }}>
        <div className="bg-blue-500 text-white text-2xl p-4 font-bold">Rooms</div>
        <div className="mx-auto bg-white pt-4 px-2 rounded-md ">
          <RoomForm guest={GUEST} room={ROOM} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}
CustomInputNumber;
export default hot(App);
