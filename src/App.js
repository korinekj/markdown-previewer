import "./App.css";
import React from "react";
import { marked } from "marked";

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
          open={this.handleChange}
        >
          {"# Welcome to my React Markdown Previewer!\n\n" +
            "## This is a sub-heading...\n\n" +
            "### And here's some other cool stuff:\n\n" +
            "Heres some code, `<div></div>`, between 2 backticks.\n\n" +
            "```\n" +
            "// this is multi-line code:\n\n" +
            "function anotherExample(firstLine, lastLine {\n" +
            "   if (firstLine == '```' && lastLine == '```') {\n" +
            "      return multiLineCode;\n" +
            "   }\n" +
            "}\n" +
            "```\n\n" +
            "You can also make text **bold**... whoa!\n" +
            "Or _italic_.\n" +
            "Or... wait for it... **_both!_**\n" +
            "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
            "There's also [links](https://www.freecodecamp.org), and > Block Quotes!\n\n" +
            "And if you want to get really crazy, even tables:\n\n" +
            "Wild Header | Crazy Header | Another Header?\n" +
            "------------ | ------------- | -------------\n" +
            "Your content can | be here, and it | can be here....\n" +
            "And here. | Okay. | I think we get it.\n\n" +
            "- And of course there are lists.\n" +
            "  - Some are bulleted.\n" +
            "    - With different indentation levels.\n" +
            "      - That look like this.\n\n" +
            "1. And there are numbered lists too.\n" +
            "1. Use just 1s if you want!\n" +
            "1. And last but not least, let's not forget embedded images:\n\n" +
            "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"}
        </textarea>
        <Previewer input={this.state.input} />
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.input),
        }}
      ></div>
    );
  }
}

export default App;
