export default function PremiumCTA() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#FF6A00,#FFB066)",
        color: "white"
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "54px",
            fontWeight: "800"
          }}
        >
          Ready to Modernize
          Your Oracle Applications?
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px"
          }}
        >
          Let's discuss your next Oracle APEX initiative.
        </p>

        <a
          href="/contact"
          className="btn"
          style={{
            marginTop: "30px",
            background: "white",
            color: "#FF6A00"
          }}
        >
          Schedule Consultation
        </a>
      </div>
    </section>
  );
}