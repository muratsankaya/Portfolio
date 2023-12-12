import "./App.css";
import P5Wrapper from "./P5Wrapper";
("./P5Wrapper");
import background from "../Utilities/Background";

const App = () => {
  return (
    <div className="App">
      <P5Wrapper sketch={background} />
    </div>
  );
};

export default App;
