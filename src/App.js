import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-body">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <main>
            <Dictionary />
          </main>
          <footer className="app-footer p-3">
            <small>
              This app is designed and coded by {""}
              <a
                className="social-link"
                href="https://laughing-carson-65f2d3.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bo Aquarius.
              </a>{" "}
              It's open-sourced on{" "}
              <a
                className="social-link"
                href="https://github.com/BoAquarius"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              and hosted on{" "}
              <a
                className="social-link"
                href="https://incomparable-malasada-4bff67.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify.
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}
