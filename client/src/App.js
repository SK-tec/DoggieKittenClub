import "./App.css";
import headerImage from "./images/HerosectionImage.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={headerImage} alt="" className="col-12" />
      </div>
      <h1 className="heading m-4">
        <span>Welcome To Doggie-Kitten Club</span>
      </h1>
    </div>
  );
}

export default App;
