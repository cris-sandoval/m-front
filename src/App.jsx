import NavBar from "./components/NavBar/NavBar";
import TextButton from "./components/TexButton/TextButton";

import "./App.css";
import HeroTextBar from "./components/HeroTextBar.jsx/HeroTextBar";

function App() {
  return (
    <div>
      <div className="container-main1">
        <div className="container-Nav">
          <NavBar/>
          <TextButton/>
        </div>
        <HeroTextBar/>
      </div>
      <div className="containermain2">
        <div className="main3">

        </div>
        <div className="main4">

        </div>

      </div>
    </div>
  );
}

export default App;
