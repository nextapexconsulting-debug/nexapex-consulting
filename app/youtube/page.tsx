export default function YoutubePage() {
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="section-title">YouTube Tutorials</h1>

          <p className="section-subtitle">
            Educational content covering enterprise development, databases,
            integrations, automation and modern business applications.
          </p>

          <div
            className="card"
            style={{
              padding: 60,
              textAlign: "center",
              background: "#FFF9F5"
            }}
          >
            <h2 style={{ marginBottom: 20 }}>
              Channel Launching Soon
            </h2>

            <p
              style={{
                maxWidth: 700,
                margin: "0 auto",
                color: "#666",
                lineHeight: 1.9
              }}
            >
              We are preparing a growing library of tutorials, project
              walkthroughs and technical insights to help developers and
              organizations build better software solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}