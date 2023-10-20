import classes from "./Select.module.scss"
import React from 'react';

const Select = (props) => {

  return (
    <div className={classes.Select}>
      <label htmlFor={props.label}>{props.label}</label>
      <select
        name={props.label}
        onChange={props.selectChangeHandler}
        id={props.label}
      >
        {props.options.map((option, index) => {
          return (
            <option
              key={option.value + index}
              value={option.value}
            >{option.text}
            </option>)
          })
        }
      </select>
    </div>
  );
}

export default Select;