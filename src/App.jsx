import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#57534e",
  },
  banner: {
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #f0f0f0",
    color: "#57534e",
    background: "#fafafa",
  },
  bannerTitle: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#1c1917",
  },
  bannerSub: {
    margin: "0.35rem 0 0",
    fontSize: "0.85rem",
    color: "#78716c",
  },
  menuRow: {
    display: "flex",
    gap: "0.75rem",
    padding: "0.75rem 1.5rem",
    background: "#fbfbfb",
    borderBottom: "1px solid #f2f2f2",
  },
  fakeLink: {
    color: "#44403c",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
  },
  content: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "1.5rem",
  },
  welcomeTitle: {
    margin: 0,
    fontSize: "1.45rem",
    fontWeight: 700,
    color: "#292524",
  },
  welcomeBody: {
    marginTop: "0.5rem",
    lineHeight: 1.6,
    color: "#57534e",
  },
  highlightSection: {
    marginTop: "1.5rem",
    padding: "1.25rem",
    background: "#d4f5d4",
    borderRadius: "8px",
    color: "#a16207",
  },
  highlightHeading: {
    margin: "0 0 0.5rem",
    fontSize: "1.1rem",
    color: "#92400e",
    fontWeight: 700,
  },
  highlightBody: {
    lineHeight: 1.55,
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
    background: "#e0e0e0",
    color: "#292524",
    borderRadius: "4px",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid #eaeaea",
    fontWeight: 600,
  },
  formSection: {
    marginTop: "2rem",
    padding: "1.25rem",
    background: "#fcfcfc",
    border: "1px solid #f4f4f4",
    borderRadius: "8px",
    color: "#57534e",
  },
  formTitle: {
    margin: "0 0 1rem",
    fontSize: "1.15rem",
    color: "#1c1917",
    fontWeight: 700,
  },
  field: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.65rem",
    fontSize: "1rem",
    border: "1px solid #ececec",
    borderRadius: "4px",
    background: "#fefefe",
    color: "#292524",
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "0.6rem 0.65rem",
    fontSize: "1rem",
    border: "1px solid #ececec",
    borderRadius: "4px",
    resize: "vertical",
    background: "#fefefe",
    color: "#292524",
  },
  submitFake: {
    marginTop: "0.5rem",
    display: "inline-block",
    padding: "0.55rem 1.25rem",
    background: "#dedede",
    color: "#1c1917",
    fontWeight: 600,
    borderRadius: "4px",
    cursor: "pointer",
    userSelect: "none",
  },
  statusLine: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#78716c",
  },
  thumb: {
    width: "120px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    border: "1px solid #eee",
  },
  iconRow: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    marginTop: "0.5rem",
    flexWrap: "wrap",
  },
  tiny: {
    fontSize: "0.75rem",
    color: "#78716c",
  },
  clickNote: {
    marginLeft: "0.75rem",
    color: "#b45309",
    fontWeight: 600,
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
          Bad UX training build: intentionally breaks WCAG 2.1 for automated and
          manual testing (axe, Cypress, etc.). Not for production.
        </div>
      </div>

      <div style={styles.menuRow}>
        <div style={styles.fakeLink} tabIndex={-1} onClick={handleFakeNav}>
          Home
        </div>
        <div style={styles.fakeLink} tabIndex={-1} onClick={handleFakeNav}>
          Services
        </div>
        <div style={styles.fakeLink} tabIndex={-1} onClick={handleFakeNav}>
          Contact
        </div>
      </div>

      <div style={styles.content}>
        <div>
          <div style={styles.welcomeTitle}>Welcome</div>
          <div style={styles.welcomeBody}>
            Headings and paragraphs use stronger gray-on-white contrast than the
            original barely-visible ice tones. Decorative and informative photos
            below still omit useful alternative text on purpose.
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
            <img
              style={styles.thumb}
              src="https://picsum.photos/seed/badux3/240/160"
              alt=""
            />
          </div>
          <div style={styles.iconRow}>
            <img src="https://picsum.photos/seed/icon1/32/32" width={32} height={32} />
            <img src="https://picsum.photos/seed/icon2/32/32" width={32} height={32} alt="" />
            <span style={styles.tiny}>
              Icon row: no text alternative for decorative or status marks.
            </span>
          </div>
        </div>

        <div style={styles.highlightSection}>
          <div style={styles.highlightHeading}>Featured offer</div>
          <div style={styles.highlightBody}>
            Amber/brown on pale green reads a bit clearer than neon yellow did,
            but this strip can still flag contrast warnings compared to the rest
            of the page.
          </div>
          <div style={{ marginTop: "0.75rem" }}>
            <div
              style={styles.fakeButton}
              tabIndex={-1}
              onClick={() => setClickCount((c) => c + 1)}
            >
              Learn more (not a real button)
            </div>
            <span style={styles.clickNote}>Clicks recorded: {clickCount}</span>
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
