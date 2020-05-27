import React from "react";
import { getFacts } from "../service/getRequest";
import { Button } from "./Button";
import "./Content.css";

export const RenderFact = (props) => {
  const data = props.facts;
  return data.map((fact) => {
    return (
      <p className="fact-text" key={fact._id}>
        {fact.text}
      </p>
    );
  });
};

export class Content extends React.Component {
  state = {
    facts: [],
    errMessage: null,
  };

  async componentDidMount() {
    try {
      const data = await getFacts(3);
      this.setState({
        facts: data,
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
  };

  saveError = (error) => {
    this.setState({
      errMessage: error,
    });
  };

  render() {
    return (
      <main className="content-container">
        <Button
          facts={this.state.facts}
          onNewFact={this.saveNewFact}
          onError={this.saveError}
        />
        {!this.state.facts.length && (
          <div className="loading-message">Loading...</div>
        )}
        {this.state.errMessage && (
          <div className="error-message">{this.state.errMessage}</div>
        )}
        {this.state.facts.length && <RenderFact facts={this.state.facts} />}
      </main>
    );
  }
}