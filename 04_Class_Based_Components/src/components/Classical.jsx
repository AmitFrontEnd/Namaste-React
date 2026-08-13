import { Component } from "react";

class Classical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>
          This is classical component <span>({name})</span>
        </h1>
        <h1>Count is: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Counter 1 Update button
        </button>
        <h1>Count2 is: {count2}</h1>
        <button
          onClick={() => {
            this.setState({ count2: count2 + 1 });
          }}
        >
          Counter 2 Update button
        </button>
      </div>
    );
  }
}

export default Classical;
