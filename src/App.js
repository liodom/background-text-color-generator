import "./App.css";
import { connect } from "react-redux";
import * as colors from "./colors";
import {
  setWhite,
  setBlack,
  setBlue,
  setBrown,
  setGreen,
  setLightgreen,
  setOrange,
  setRed,
  setYellow,
} from "./store/actions";

const App = (props) => {
  console.log("props are => ", props);

  const handleColorDispatch = (event) => {
    console.log("my color is => ", event.target.value);
    switch (event.target.value) {
      case colors.WHITE:
        props.setWhite();
        break;
      case colors.BLACK:
        props.setBlack();
        break;
      case colors.BROWN:
        console.log("setBrown????");
        props.setBrown();
        break;
      case colors.BLUE:
        props.setBlue();
        break;
      case colors.GREEN:
        props.setGreen();
        break;
      case colors.LIGHTGREEN:
        props.setLightgreen();
        break;
      case colors.ORANGE:
        props.setOrange();
        break;
      case colors.RED:
        props.setRed();
        break;
      case colors.YELLOW:
        props.setYellow();
        break;
      default:
        break;
    }
  };

  // set body style using state from redux store
  document.body.style.backgroundColor = props.bgColor;
  document.body.style.color = props.textColor;

  return (
    <div className="App">
      <form>
        <br />

        <select
          id="color"
          onChange={handleColorDispatch}
          style={{
            padding: "10px",
            borderRadius: "10px",
            outline: "none",
            boxShadow:
              " 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 1px 3px 32px 15px rgba(0,0,0,0)",
          }}
        >
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="green">Green</option>
          <option value="lightgreen">lightgreen</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>IT IS THE FINAL COUNTDOWN</h1>
    </div>
  );
};
const mapStateToprops = (state) => {
  console.log("state is => ", state);
  return {
    bgColor: state.reducer.bgColor,
    textColor: state.reducer.textColor,
  };
};
const mapDispatchToProps = {
  setWhite,
  setBlack,
  setBlue,
  setBrown,
  setGreen,
  setLightgreen,
  setOrange,
  setRed,
  setYellow,
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
