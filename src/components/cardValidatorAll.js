import React from "react";
import "../App.js";
import InputCard from "../components/cardValidatorComponents/input";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.fromParent) {
      this.setState({
        current: Number(nextProps.value)
      });
    }
  }

  render() {
    return (
      <div>
        <InputCard />
      </div>
    );
  }
}
export default Child;
