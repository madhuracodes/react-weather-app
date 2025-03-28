import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Madhura, open-sourced on
          <a
            href="https://github.com/madhuracodes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://maddy-reacts.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
