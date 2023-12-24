import React, { useState, useEffect } from "react";

function CustomInputNumber(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { min, max, step, name, value, onChange, onBlur } = props;
  const [inputValue, setInputValue] = useState(0);
  const [mouseFlag, setMouseFlag] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };
  const handleMouseDown = () => {
    setMouseFlag(true);
  };
  const handleMouseUp = () => {
    setMouseFlag(false);
  };

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    let timeout = null;
    const updateValue = async () => {
      if (mouseFlag && id === null) {
        timeout = setTimeout(() => {
          id = setInterval(() => {
            setInputValue((value) => value + 1);
          }, 100);
        }, 500);
      } else {
        clearInterval(id);
        id = null;
      }
    };
    updateValue();
    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, [mouseFlag]);
  return (
    <div className="flex justify-between">
      <button
        className="btn"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={() => setInputValue(inputValue - 1)}
        disabled={min !== undefined && inputValue <= Number(min)}
      >
        −
      </button>
      <input
        className="w-12 h-12 border rounded-sm flex justify-center items-center text-center"
        type="number"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className="btn"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={() => setInputValue(inputValue + 1)}
        disabled={max !== undefined && inputValue >= Number(max)}
      >
        ＋
      </button>
    </div>
  );
}
export default CustomInputNumber;
