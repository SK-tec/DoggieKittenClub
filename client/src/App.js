import "./App.css";
import headerImage from "./images/HerosectionImage.jpg";
import CatBreed from "./components/CatBreed";

function App() {
  return (
    <div className="App">
      <div>
        <img src={headerImage} alt="herosection" className="col-12" />
      </div>
      <h1 className="heading m-4">
        <span>Welcome To Doggie-Kitten Club</span>
      </h1>

      <CatBreed></CatBreed>
    </div>
  );
}

export default App;
