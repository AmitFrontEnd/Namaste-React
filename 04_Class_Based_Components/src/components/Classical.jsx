import { Component } from "react";

class Classical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("mounted");
  }
  render() {
    console.log("rendering");
    const { name } = this.props;
    const { count } = this.state;
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
      </div>
    );
  }
}

export default Classical;
