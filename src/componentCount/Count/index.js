import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxValue: "",
      minValue: "",
      stepValue: "",
      count: 0,
    };
  }
  handleMaxValue = (e) => {
    this.setState({
      maxValue: e.target.value,
    });
  };
  handleMinValue = (e) => {
    this.setState({
      minValue: e.target.value,
      count: e.target.value || 0,
    });
  };
  handleStepValue = (e) => {
    this.setState({
      stepValue: e.target.value,
    });
  };
  handlePlusButton = () => {
    const {
      state: { count, stepValue, maxValue },
    } = this;
    console.log(count + +stepValue);
    if (maxValue) {
      if (count < maxValue && count + +stepValue <= maxValue) {
        this.setState({
          count: +count + (+stepValue || 1),
        });
      }
    } else {
      this.setState({
        count: +count + (+stepValue || 1),
      });
    }
  };
  handlMinusButton = () => {
    const {
      state: { count, stepValue, minValue },
    } = this;
    if (minValue) {
      if (count > minValue && count - +stepValue >= minValue) {
        this.setState({
          count: +count - (+stepValue || 1),
        });
      }
    } else {
      this.setState({
        count: +count - (+stepValue || 1),
      });
    }
  };
  handleStepButton = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    const {
      state: { maxValue, minValue, stepValue, count },
      handleMaxValue,
      handleMinValue,
      handleStepValue,
      handlePlusButton,
      handleStepButton,
      handlMinusButton,
    } = this;
    return (
      <>
        <div>
          <input
            onChange={handleMaxValue}
            value={maxValue}
            placeholder="maxValue"
          />
          <input
            onChange={handleMinValue}
            value={minValue}
            placeholder="minValue"
          />
          <input
            onChange={handleStepValue}
            value={stepValue}
            placeholder="stepValu"
          />
        </div>

        <div>
          <h4>{count}</h4>
          <button onClick={handlePlusButton}>+</button>
          <button onClick={handlMinusButton}>-</button>
          <button onClick={handleStepButton}>step</button>
        </div>
      </>
    );
  }
}

export default Count;
