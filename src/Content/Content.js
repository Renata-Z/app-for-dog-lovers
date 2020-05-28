import React from "react";
import { getFacts } from "../service/getRequest";
import { Button } from "./Button";
import { replaceArr } from "../service/transformCatsToDogs";
import "./Content.css";

export const RenderFact = (props) => {
  const data = props.facts;
  return data.map((fact) => {
    return (
      <p className="box_text" key={fact._id}>
        {fact.modifiedFact}
      </p>
    );
  });
};

export class Content extends React.Component {
  state = {
    facts: [],
    errMessage: null,
  }

  async componentDidMount() {
    try {
      const data = await getFacts(3);
      let modifiedData = replaceArr(data);
      this.setState({
        facts: modifiedData,
      });
    } catch (error) {
      this.setState({
        errMessage: error.message,
      });
    }
  }

  saveNewFact = (data) => {
    this.setState((prevState) => ({
      facts: [data, ...prevState.facts],
    }));
  }

  saveError = (error) => {
    this.setState({
      errMessage: error,
    });
  }

  render() {
    return (
      <main className="content_container">
        <Button
          facts={this.state.facts}
          onNewFact={this.saveNewFact}
          onError={this.saveError}
        />
        {!this.state.facts.length && <div className="box_text">Loading...</div>}
        {this.state.errMessage && <div className="box_text">{this.state.errMessage}</div>}
        {this.state.facts.length > 0 && <RenderFact facts={this.state.facts} />}
      </main>
    );
  }
};
