export default function OracleDashboardMockup() {
  return (
    <div
      style={{
        height: "560px",
        borderRadius: "32px",
        background: "#fff",
        border: "1px solid #eee",
        padding: "30px",
        boxShadow:
          "0 30px 80px rgba(0,0,0,.08)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px"
        }}
      >
        <div
          style={{
            background: "#FFF4EC",
            borderRadius: "20px",
            padding: "25px"
          }}
        >
          <h4>Revenue</h4>
          <h2>$2.4M</h2>
        </div>

        <div
          style={{
            background: "#fafafa",
            borderRadius: "20px",
            padding: "25px"
          }}
        >
          <h4>Approvals</h4>
          <h2>124</h2>
        </div>

        <div
          style={{
            background: "#fafafa",
            borderRadius: "20px",
            padding: "25px"
          }}
        >
          <h4>Employees</h4>
          <h2>1,240</h2>
        </div>

        <div
          style={{
            background: "#FFF4EC",
            borderRadius: "20px",
            padding: "25px"
          }}
        >
          <h4>Tasks</h4>
          <h2>82</h2>
        </div>
      </div>

      <div
        style={{
          height: "220px",
          marginTop: "25px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg,#FF6A00,#FFB066)"
        }}
      />
    </div>
  );
}