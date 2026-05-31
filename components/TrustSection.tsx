export default function TrustSection() {
  return (
    <section
      style={{
        background: "#fafafa"
      }}
    >
      <div className="container">

        <h2 className="section-title">
          Why Organizations Choose NexApex
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
            marginTop: "50px"
          }}
        >
          <div className="card" style={{ padding: "30px" }}>
            <h3>Oracle Focused</h3>
            <p style={{ marginTop: "15px" }}>
              Specialized Oracle expertise.
            </p>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h3>Enterprise Architecture</h3>
            <p style={{ marginTop: "15px" }}>
              Scalable application design.
            </p>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h3>Integration Expertise</h3>
            <p style={{ marginTop: "15px" }}>
              REST APIs and external systems.
            </p>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h3>Long-Term Support</h3>
            <p style={{ marginTop: "15px" }}>
              Reliable consulting partnership.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}