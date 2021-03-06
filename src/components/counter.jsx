import React, { Component } from "react"; //imrc

// cc :: create compoment shortcut
// CMD + D -> finds instances of selected text, and enables multi line editing
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="bt btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  // getBadgeClasses :: () -> String
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
