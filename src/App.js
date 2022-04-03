import "./App.css";
import React from "react";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isEditorMaximized: false,
      isPreviewMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleEditorMaximize() {
    alert(
      this.state.isEditorMaximized
        ? "MINIMALIZUJE EDITOR"
        : "MAXIMALIZUJE EDITOR"
    );
    this.setState({
      isEditorMaximized: !this.state.isEditorMaximized,
    });
  }

  handlePreviewMaximize() {
    alert(
      this.state.isPreviewMaximized
        ? "MINIMALIZUJE PREVIEW"
        : "MAXIMALIZUJE PREVIEW"
    );
    this.setState({
      isPreviewMaximized: !this.state.isPreviewMaximized,
    });
  }

  //když se stránka poprvé načte, markdown z #editoru se vyrenderuje jako HTML v #preview
  componentDidMount() {
    this.setState({
      input: document.getElementById("editor").value,
    });
  }

  render() {
    return (
      <>
        <Editor
          onChange={this.handleChange}
          onClick={this.handleEditorMaximize}
          max={this.state.isEditorMaximized}
          previewIsMax={this.state.isPreviewMaximized}
        />
        <Previewer
          input={this.state.input}
          onClick={this.handlePreviewMaximize}
          max={this.state.isPreviewMaximized}
          editorIsMax={this.state.isEditorMaximized}
        />
      </>
    );
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div id="editor-wrap" className={this.props.previewIsMax ? "hide" : ""}>
        <header id="editor-header">
          <h1>
            Editor
            <span className={"maximize-window"} onClick={this.props.onClick}>
              {this.props.max ? (
                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
              ) : (
                <FontAwesomeIcon icon={faMaximize} />
              )}
            </span>
          </h1>
        </header>
        <textarea
          id="editor"
          className={this.props.max ? "maximize" : ""}
          onChange={this.props.onChange}
          rows="15"
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
            "There's also [links](https://www.freecodecamp.org), and\n > Block Quotes!\n\n" +
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
      </div>
    );
  }
}

class Previewer extends React.Component {
  render() {
    return (
      <div id="preview-wrap" className={this.props.editorIsMax ? "hide" : ""}>
        <header id="preview-header">
          <h1>
            Previewer
            <span className="maximize-window" onClick={this.props.onClick}>
              {this.props.max ? (
                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
              ) : (
                <FontAwesomeIcon icon={faMaximize} />
              )}
            </span>
          </h1>
        </header>
        <div
          id="preview"
          className={this.props.max ? "maximize" : ""}
          dangerouslySetInnerHTML={{
            __html: marked(this.props.input),
          }}
        ></div>
      </div>
    );
  }
}

export default App;
