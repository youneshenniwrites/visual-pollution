import { testLogo } from "../src/assets/icons";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="/#" target="_blank">
          <img src={testLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
