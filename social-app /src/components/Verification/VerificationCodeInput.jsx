import React, { useState, useRef } from "react";

const VerificationCodeInput = ({
  length,
  label,
  loading,
  onComplete,
  labelClassName,
}) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);

  const processInput = (e, slot) => {
    if (e.target.value.length >= length) {
      const num = e.target.value;
      const myArr = num.split("");
      const newCode = [];
      myArr.map((value, index) => {
        if (index < length) {
          newCode[index] = value;
        }
      });
      setCode(newCode);

      inputs.current[length - 1].focus();

      if (newCode.every((num) => num !== "")) {
        onComplete(newCode.join(""));
      }
    } else {
      const num = e.target.value;
      if (/[^0-9]/.test(num)) return;
      const newCode = [...code];
      newCode[slot] = num;
      setCode(newCode);
      if (slot !== length - 1) {
        inputs.current[slot + 1].focus();
      }
      if (newCode.every((num) => num !== "")) {
        onComplete(newCode.join(""));
      }
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <>
      <div className="code-input">
        <lable className={labelClassName}>{label}</lable>
        <div className="code-inputs">
          {code.map((num, idx) => {
            return (
              <input
                key={idx}
                maxlength={1}
                type="text"
                inputMode="numeric"
                // maxLength={1}
                value={num}
                autoFocus={!code[0].length && idx === 0}
                // readOnly={loading}
                onChange={(e) => processInput(e, idx)}
                onKeyUp={e => onKeyUp(e, idx)}
                ref={(ref) => inputs.current.push(ref)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VerificationCodeInput;
