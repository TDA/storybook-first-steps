import React, {useState} from "react";

const Input = ({value = '', onChange = (e) => {}, type, placeholder}) => {
  const [inputValue, setInputValue] = useState(value);
  return (
    <div>
      <input
        type={type}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}/>
    </div>
  );
};
export default Input;