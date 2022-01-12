import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { is } from "typescript-is";
import { createMock } from "ts-auto-mock";

function App() {
  useEffect(() => {
    try {
      console.log("ts-is:", is<string>("string"));
    } catch (e) {
      console.log("ts-is failed");
    }
  }, []);

  useEffect(() => {
    try {
      console.log("auto-mock", createMock<{ hello: string }>());
    } catch (e) {
      console.log("auto-mock failed");
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
