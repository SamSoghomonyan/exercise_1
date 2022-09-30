import { Component } from "react";

class CountryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { img, name },
    } = this;
    return (
      <>
        <div className="container">
          <img className="image" src={img} alt="flag country" />
          <span>{name}</span>
        </div>
      </>
    );
  }
}
export default CountryList;
