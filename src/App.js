import CardList from "./comonentUnmounting/CardList";
import Country from "./componentCountry/Country";
import Count from "./componentCount/Count";
import { Component } from "react";
// 2
// let list = [
//   {
//     name: "number 1",
//     count: 0,
//     isVisible: true,
//   },
//   {
//     name: "number 2",
//     count: 0,
//     isVisible: true,
//   },
//   {
//     name: "number 3",
//     count: 0,
//     isVisible: true,
//   },
//   {
//     name: "number 4",
//     count: 0,
//     isVisible: true,
//   },
// ];

class App extends Component {
  constructor(props) {
    super(props);
    // 2
    //   this.state = {
    // cardList: list,
    // isVisible: true,
    // };
  }
  // 2
  // handelCount = (name) => {
  //   this.setState({
  //     cardList: this.state.cardList.map((item) => {
  //       if (item.name === name) {
  //         item.count++;
  //       }
  //       return item;
  //     }),
  //   });
  // };
  render() {
    // 2
    // console.log(this.state.cardList);
    // const {
    //   state: { cardList },
    // } = this;
    return (
      <>
        {/* 1 */}
        <Count />
        {/* 2 */}
        {/* <div className="card">
          {cardList.map((card, index) => {
            return (
              <>
                <CardList
                  key={card.name}
                  name={card.name}
                  count={card.count}
                  handelCount={this.handelCount}
                  isVisible={card.isVisible}
                />
              </>
            );
          })}
        </div> */}
        {/* 3 */}
        {/* <Country /> */}
      </>
    );
  }
}

export default App;
