import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-body">
          <header className="App-header">
            <h1>Dictionary</h1>
            <video loop autoPlay muted className="App-logo">
              <source src="/Videos/logo2.mp4" type="video/mp4" />
            </video>
          </header>
          <main>
            <h2>What word do you want to look up?</h2>
            <Dictionary />
          </main>
          <footer className="app-footer">
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
