import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050010",
    color: "#b8fff0",
  },
  banner: {
    padding: "1rem 1.5rem",
    borderBottom: "2px solid #ff00aa",
    background: "linear-gradient(95deg, #6a00ff 0%, #ff006e 45%, #00d4ff 100%)",
    color: "#f0fff0",
  },
  bannerTitle: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#ffff00",
    textShadow: "0 0 12px #ff00ff, 2px 2px 0 #00ffff",
  },
  bannerSub: {
    margin: "0.4rem 0 0",
    fontSize: "0.88rem",
    lineHeight: 1.45,
    color: "#e8ffe8",
    fontWeight: 600,
  },
  menuRow: {
    display: "flex",
    gap: "1rem",
    padding: "0.75rem 1.5rem",
    background: "#001a33",
    borderBottom: "2px solid #00ff88",
  },
  fakeLink: {
    color: "#00f5ff",
    textDecoration: "underline",
    textDecorationColor: "#ff3366",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 700,
    textShadow: "0 0 8px #00ffff",
  },
  content: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "1.5rem",
    background: "#0a0a24",
    borderLeft: "3px solid #ff0099",
    borderRight: "3px solid #39ff14",
  },
  welcomeTitle: {
    margin: 0,
    fontSize: "1.45rem",
    fontWeight: 800,
    color: "#ff44ff",
    textShadow: "0 0 10px #ff00ff",
  },
  welcomeBody: {
    marginTop: "0.55rem",
    lineHeight: 1.65,
    color: "#7dffb3",
    fontSize: "1rem",
    fontWeight: 500,
  },
  highlightSection: {
    marginTop: "1.5rem",
    padding: "1.25rem",
    background: "linear-gradient(160deg, #0033ff 0%, #001878 100%)",
    borderRadius: "8px",
    color: "#ff3333",
    border: "2px solid #ff0000",
    boxShadow: "0 0 20px rgba(255,0,100,0.45)",
  },
  highlightHeading: {
    margin: "0 0 0.5rem",
    fontSize: "1.15rem",
    color: "#ff6600",
    fontWeight: 800,
    textShadow: "0 0 6px #ffff00",
  },
  highlightBody: {
    lineHeight: 1.55,
    color: "#ff4444",
    fontWeight: 600,
  },
  row: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "0.75rem",
  },
  fakeButton: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    background: "#39ff14",
    color: "#0000ff",
    borderRadius: "4px",
    cursor: "pointer",
    userSelect: "none",
    border: "2px solid #ffff00",
    fontWeight: 800,
    boxShadow: "0 0 14px #39ff14",
  },
  formSection: {
    marginTop: "2rem",
    padding: "1.25rem",
    background: "#1a0033",
    border: "2px solid #00ffff",
    borderRadius: "8px",
    color: "#ff99ff",
    boxShadow: "inset 0 0 30px rgba(255,0,255,0.15)",
  },
  formTitle: {
    margin: "0 0 1rem",
    fontSize: "1.2rem",
    color: "#00ffcc",
    fontWeight: 800,
    textShadow: "0 0 8px #00ffcc",
  },
  field: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.65rem",
    fontSize: "1rem",
    border: "2px solid #ff00aa",
    borderRadius: "4px",
    background: "#12001f",
    color: "#66ffff",
    outline: "none",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "0.6rem 0.65rem",
    fontSize: "1rem",
    border: "2px solid #ffcc00",
    borderRadius: "4px",
    resize: "vertical",
    background: "#001a12",
    color: "#aaff66",
    outline: "none",
  },
  submitFake: {
    marginTop: "0.5rem",
    display: "inline-block",
    padding: "0.55rem 1.25rem",
    background: "#ff00ff",
    color: "#ffff00",
    borderRadius: "4px",
    cursor: "pointer",
    userSelect: "none",
    fontWeight: 800,
    border: "2px solid #00ff00",
  },
  statusLine: {
    marginTop: "1rem",
    fontSize: "0.92rem",
    color: "#ffccff",
    fontWeight: 600,
  },
  thumb: {
    width: "120px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "2px solid #00ff88",
    boxShadow: "0 0 12px #00ffff",
  },
  iconRow: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  tiny: {
    fontSize: "0.78rem",
    color: "#ffee00",
    fontWeight: 600,
  },
  clickNote: {
    marginLeft: "0.75rem",
    color: "#00ff99",
    fontWeight: 700,
    textShadow: "0 0 6px #ff00ff",
  },
};

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [formEcho, setFormEcho] = useState("");

  const handleFakeNav = () => {
    setClickCount((c) => c + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const msg = fd.get("message") || "";
    setFormEcho(`Got: ${name} / ${email} / ${msg}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        <div style={styles.bannerTitle}>A11y demo</div>
        <div style={styles.bannerSub}>
          Intentionally broken patterns for accessibility training and automated
          testing (axe, Cypress, etc.). Do not ship to production.
        </div>
      </div>

      <div style={styles.menuRow}>
        <div
          style={styles.fakeLink}
          tabIndex={-1}
          onClick={handleFakeNav}
        >
          Home
        </div>
        <div
          style={styles.fakeLink}
          tabIndex={-1}
          onClick={handleFakeNav}
        >
          Services
        </div>
        <div
          style={styles.fakeLink}
          tabIndex={-1}
          onClick={handleFakeNav}
        >
          Contact
        </div>
      </div>

      <div style={styles.content}>
        <div>
          <div style={styles.welcomeTitle}>Welcome</div>
          <div style={styles.welcomeBody}>
            Copy sits on deep navy—not white—with neon mint and magenta accents.
            Contrast is a bit stronger than invisible gray on white, but saturated
            reds, blues, and greens still fight each other and tire the eyes.
            Decorative and informative visuals below omit meaningful alternative
            text on purpose.
          </div>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <div style={styles.row}>
            <img
              style={styles.thumb}
              src="https://picsum.photos/seed/badux1/240/160"
            />
            <img
              style={styles.thumb}
              src="https://picsum.photos/seed/badux2/240/160"
              alt=""
            />
          </div>
          <div style={styles.iconRow}>
            <img src="https://picsum.photos/seed/icon1/32/32" width={32} height={32} />
            <span style={styles.tiny}>Status indicators with no text alternative.</span>
          </div>
        </div>

        <div style={styles.highlightSection}>
          <div style={styles.highlightHeading}>Featured offer</div>
          <div style={styles.highlightBody}>
            Neon red and orange on saturated electric blue: loud, vibrating
            complements that often fail WCAG for long reading even when the
            headline pops.
          </div>
          <div style={{ marginTop: "0.75rem" }}>
            <div
              style={styles.fakeButton}
              tabIndex={-1}
              onClick={() => setClickCount((c) => c + 1)}
            >
              Learn more (not a real button)
            </div>
            <span style={styles.clickNote}>
              Clicks recorded: {clickCount}
            </span>
          </div>
        </div>

        <div style={styles.formSection}>
          <div style={styles.formTitle}>Contact Us</div>
          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div style={styles.field}>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div style={styles.field}>
              <textarea
                style={styles.textarea}
                name="message"
                placeholder="How can we help?"
              />
            </div>
            <div
              style={styles.submitFake}
              tabIndex={-1}
              onClick={(e) => {
                e.preventDefault();
                const form = e.target.closest("form");
                if (form) form.requestSubmit();
              }}
            >
              Send message
            </div>
          </form>
          <div style={styles.statusLine}>{formEcho}</div>
        </div>
      </div>
    </div>
  );
}
