import React, {useCallback, useReducer} from "react";

function reducer(state, {field, value}) {
  const copy = Object.assign({}, state);
  copy[field] = value;
  return copy;
}

const Input = ({value = '', onChange = (e) => {}, type, placeholder}) => {
  const [state, dispatch] = useReducer(reducer, {inputValue: value});

  const handler = useCallback(e => dispatch({field: 'inputValue', value: e.target.value}), [dispatch]);
  return (
    <div>
      <input
        type={type}
        value={state['inputValue']}
        onChange={e => {
          handler(e);
          onChange(e.target.value);
        }}
        placeholder={placeholder}/>
    </div>
  );
};
export default Input;