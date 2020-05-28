import React from "react";
import { getFacts } from "../service/getRequest";
import { arrToStringandObj } from "../service/transformCatsToDogs";
import "./Button.css";

export class Button extends React.Component {
  isSame = (arr, newFact) => arr.some((el) => el.text === newFact);

  getFactApi = async () => {
    try {
      let data = await getFacts(1);
      if (this.isSame(this.props.facts, data.text)) {
        data = await getFacts(1);
      } else {
        let modifiedData = arrToStringandObj(data);
        this.props.onNewFact(modifiedData);
      }
    } catch (error) {
      this.props.onError(error.message);
    }
  }

  render() {
    return (
      <button className="button_get_fact" onClick={this.getFactApi}>
        Click on the button to get a new fact!
      </button>
    );
  }
};
