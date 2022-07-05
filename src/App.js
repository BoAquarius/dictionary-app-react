import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer p-3">
          <small>
            Designed and coded by{" "}
            <a
              className="social-link"
              href="https://github.com/BoAquarius"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bo Aquarius
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
