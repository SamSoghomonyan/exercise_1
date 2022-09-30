import { Component } from "react";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  handleTogle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  componentDidUpdate(prevState, prevProps) {
    if (prevState.isVisible !== prevProps.isVisible) {
      console.log(prevState.count + 1, prevState);
      this.props.handelCount(prevState.name);
    }
  }
  render() {
    const { count, name } = this.props;
    const { isVisible } = this.state;
    return (
      <>
        {isVisible ? (
          <div className="containerCount">
            <span>{name}</span>
            <button onClick={this.handleTogle}>close</button>
          </div>
        ) : (
          <button className="button" onClick={this.handleTogle}>
            show
          </button>
        )}
        <span>{count}</span>
      </>
    );
  }
}

export default CardList;
