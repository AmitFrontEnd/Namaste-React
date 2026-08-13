import { Component } from "react";

class Classical extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          This is classical component <span>({name})</span>
        </h1>
      </div>
    );
  }
}

export default Classical;