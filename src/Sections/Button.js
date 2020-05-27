import React from "react";
import { getFacts } from "../service/getRequest";
import "./Button.css";

export class Button extends React.Component {
  isSame = (arr, newFact) => arr.some((el) => el.text === newFact)

  getFactApi = async () => {
    try {
      let data = await getFacts(1);
      if (this.isSame(this.props.facts, data.text)) {
        data = await getFacts(1);
      } else {
        this.props.onNewFact(data);
      }
    } catch (error) {
      this.props.onError(error.message);
    }
  }

  render() {
    return (
      <button className="button-get-fact" onClick={this.getFactApi}>
        Click the button to get a new fact!
      </button>
    );
  }
};
