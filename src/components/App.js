import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, changeValue, addNumbers } from '../actions/index';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
        count={this.props.count}
        buttonClicks={this.props.buttonClicks}
        onAddNumbers = {this.props.onAddNumbers}
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement}
        onChangeValue={this.props.onChangeValue}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onChangeValue: (count) => dispatch(changeValue(count)),
    onAddNumbers: () => dispatch(addNumbers())
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    buttonClicks: state.buttonClicks,
    change: state.change
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);