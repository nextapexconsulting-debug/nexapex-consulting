const solutions = [
  {
    title: "HRMS Portal",
    features: [
      "Employee Management",
      "Leave Requests",
      "Attendance Tracking",
    ],
  },
  {
    title: "Procurement Workflow",
    features: [
      "Purchase Requests",
      "Approval Chains",
      "Vendor Management",
    ],
  },
  {
    title: "Executive Dashboard",
    features: [
      "KPI Monitoring",
      "Analytics",
      "Real-Time Reports",
    ],
  },
];

export default function FeaturedSolutions() {
  return (
    <section
      style={{
        background: "#fafafa",
      }}
    >
      <div className="container">

        <h2 className="section-title">
          Solutions We Build
        </h2>

        <p className="section-subtitle">
          Enterprise applications tailored to your business.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(340px,1fr))",
            gap: "24px",
          }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="card"
              style={{
                padding: "30px",
              }}
            >
              <div
                style={{
                  height: "180px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#FFF4EC,#fff)",
                  marginBottom: "20px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    marginBottom: "15px",
                  }}
                >
                  {solution.title}
                </div>

                {solution.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>

              <div
                style={{
                  color: "#FF6A00",
                  fontWeight: 700,
                }}
              >
                View Details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}