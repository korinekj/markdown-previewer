import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return <Editor />;
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <textarea
          id="editor"
          onChange={this.handleChange}
          value={
            "#NADPIS\r\n##PODNADPIS" +
            "sdsfsdfsd\nqwerwrwerw\nqwerqwerwq\nsdsdsdsdsd\n" +
            "safdsfsdf"
          }
        ></textarea>
        <Previewer input={this.state.input} />
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    let h1 = "";

    if (this.props.input[0] === "#" && this.props.input[1] === " ") {
      h1 = <h1>{this.props.input}</h1>;
    }

    return (
      <div id="preview">
        {this.props.input}
        {h1}
      </div>
    );
  }
}

export default App;
