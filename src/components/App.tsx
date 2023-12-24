import React from "react";
import { hot } from "react-hot-loader/root";
import "../assets/scss/tailwind.scss";
import "../assets/scss/app.scss";
import CustomInputNumber from "./CustomInputNumber";

function App() {
  return (
    <div>
      <div>
        <CustomInputNumber />
      </div>
    </div>
  );
}
CustomInputNumber;
export default hot(App);
