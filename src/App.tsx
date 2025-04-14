import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDarkMode]);

  return (
    <div className="neo-container">
      <div
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <header className="neo-header">
        <div className="logo-container">
          <div className="pixel-border">N</div>
        </div>
        <button
          className="mode-switch"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <main className="neo-main">
        <section className="hero-split">
          <div className="left-column">
            <h1 className="cyber-text">NICOLAS</h1>
            <div className="skill-tags">
              <span className="tag">#GameDev</span>
              <span className="tag">#SwordFighting</span>
              <span className="tag">#Mixology</span>
            </div>
          </div>
          <div className="right-column">
            <div className="floating-elements">
              <div className="pixel-element">⚔️</div>
              <div className="pixel-element">🎮</div>
              <div className="pixel-element">🍸</div>
            </div>
          </div>
        </section>

        <section className="skill-modules">
          <div className="module game-dev">
            <div className="module-header">
              <h2>Game Development</h2>
              <div className="module-icon">{"</"}</div>
            </div>
            <div className="module-content">
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          <div className="module sword-fighting">
            <div className="module-header">
              <h2>Sword Fighting</h2>
              <div className="module-icon">⚔️</div>
            </div>
            <div className="module-content">
              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          <div className="module mixology">
            <div className="module-header">
              <h2>Mixology</h2>
              <div className="module-icon">🍸</div>
            </div>
            <div className="module-content">
              <div className="progress-bar">
                <div className="progress" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="neo-footer">
        <div className="footer-grid">
          <div className="grid-item">CONNECT</div>
          <div className="grid-item">CREATE</div>
          <div className="grid-item">EXPLORE</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
