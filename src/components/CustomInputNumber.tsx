import React, { useState, useEffect, useRef, useCallback } from "react";

let intervalId: NodeJS.Timeout | null = null;
let timeoutId = null;

function CustomInputNumber(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { min, max, step, name, value, onChange, onBlur } = props;

  const [mouseFlag, setMouseFlag] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseDown = (flag: -1 | 1) => {
    setMouseFlag(flag);
  };
  const handleMouseUp = () => {
    setMouseFlag(0);
  };
  const stepUp = useCallback(() => {
    inputRef.current.stepUp();
    inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  }, []);
  const stepDown = useCallback(() => {
    inputRef.current.stepDown();
    inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  }, []);

  useEffect(() => {
    const resetActions = () => {
      clearInterval(intervalId);
      intervalId = null;
    };
    const updateValue = () => {
      if (mouseFlag !== 0) {
        timeoutId = setTimeout(() => {
          intervalId = setInterval(() => {
            if (mouseFlag === 1) {
              stepUp();
            } else if (mouseFlag === -1) {
              stepDown();
            }
          }, 100);
        }, 500);
      } else {
        resetActions();
      }
    };

    updateValue();
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [mouseFlag]);
  return (
    <div className="flex justify-between">
      <button
        className="box btn"
        onMouseDown={() => handleMouseDown(-1)}
        onMouseUp={handleMouseUp}
        onClick={stepDown}
        disabled={value <= min}
      >
        −
      </button>
      <input
        ref={inputRef}
        name={name}
        className="box text-center"
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={min}
        max={max}
        step={step}
      />
      <button
        className="box btn"
        onMouseDown={() => handleMouseDown(1)}
        onMouseUp={handleMouseUp}
        onClick={stepUp}
        disabled={value >= max}
      >
        ＋
      </button>
    </div>
  );
}
export default CustomInputNumber;
