export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        color: "white",
        padding: "80px 0",
      }}
    >
      <div className="container">

        <h2>NexApex Consulting</h2>

        <p
          style={{
            marginTop: "20px",
            color: "#CBD5E1",
            maxWidth: "650px",
          }}
        >
          Oracle APEX consulting,
          enterprise application development,
          workflow automation and Oracle database expertise.
        </p>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          info@nexapex.com
        </div>

        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid #334155",
            paddingTop: "20px",
            color: "#94A3B8",
          }}
        >
          © 2026 NexApex Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}