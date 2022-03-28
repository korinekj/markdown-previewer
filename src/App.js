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
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <Previewer input={this.state.input} />
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <div id="preview">
        <h1>{this.props.input}</h1>
      </div>
    );
  }
}

export default App;
