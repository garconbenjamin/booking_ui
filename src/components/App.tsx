import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "../assets/scss/tailwind.scss";
import "../assets/scss/app.scss";
import CustomInputNumber from "./CustomInputNumber";

function App() {
  const [value, setValue] = useState(0);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <div>
      <div>
        <CustomInputNumber value={value} onChange={onChange} />
      </div>
    </div>
  );
}
CustomInputNumber;
export default hot(App);
