import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, buttonClicks, onAddNumbers, onChangeValue }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span> {count} </span>
        <button onClick={onIncrement}>+</button>
        <br />
        <h4>Times the increment/decrement buttons have been clicked: {buttonClicks}</h4>
        <input
          type='number'
          onChange={event => onChangeValue(event.target.value)}
        />  
        <button onClick={onAddNumbers}>Change Count Number</button>
      </div>
    </div>
  );
}


export default Counter;