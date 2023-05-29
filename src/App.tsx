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
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
