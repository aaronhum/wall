import "./App.scss";
import HeaderBar from "./components/header-bar/HeaderBar";
import { connect } from "react-redux";

const App = (props) => {
  const { theme } = props;
  return (
    <div theme={theme} className="App">
      <div className="Header">
        <HeaderBar />
      </div>
      {/* <div theme={theme}>
        <div className="ConverterContainer">
          <ConverterContainer />
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(App);
