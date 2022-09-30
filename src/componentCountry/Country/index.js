import { Component } from "react";
import { DATA_COUTRY } from "../Constant/data";
import CountryList from "../CountryList";
class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA_COUTRY,
      value: "",
    };
  }
  datas = DATA_COUTRY;
  componentDidUpdate(prevProps, prevState) {
    const {
      state: { value },
    } = this;
    if (prevState.value !== this.state.value) {
      if (value >= 2) {
        this.setState({
          data: this.state.data.filter((item) => {
            return item.name.includes(value);
          }),
        });
      } else {
        this.setState({
          data: this.datas.filter((item) => {
            return item.name.includes(value);
          }),
        });
      }
    }
  }
  handleInputValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const {
      state: { data, value },
      handleInputValue,
    } = this;
    return (
      <div className="globalContainer">
        <input onChange={handleInputValue} value={value} />
        <div>
          {data.map((data, index) => {
            return <CountryList key={index} img={data.img} name={data.name} />;
          })}
        </div>
      </div>
    );
  }
}
export default Country;
