import "./App.css";
import moon from "../src/assets/moon.svg";
import FetchPost from "./assets/Components/FetchPost";

function App() {
  return (
    <div className="body">
      <div className="navbar">
        <div className="question">
          <h1>Where in the world?</h1>
        </div>
        <div className="color-mode">
          <img src={moon} alt="" />
          <h2>DarkMode</h2>
        </div>
      </div>
      <div className="contry-container">
        <FetchPost />
      </div>
    </div>
  );
}

export default App;
