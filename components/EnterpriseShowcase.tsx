export default function EnterpriseShowcase() {
  const solutions = [
    {
      title: "HRMS Portal",
      description:
        "Modern workforce management platform for employee operations.",
      features: [
        "Employee Management",
        "Leave Workflow",
        "Attendance Tracking",
      ],
      emoji: "👥",
    },
    {
      title: "Procurement Suite",
      description:
        "Streamline purchasing and approvals across departments.",
      features: [
        "Purchase Requests",
        "Approval Chains",
        "Vendor Management",
      ],
      emoji: "🛒",
    },
    {
      title: "Executive Dashboard",
      description:
        "Real-time business intelligence and operational visibility.",
      features: [
        "KPI Monitoring",
        "Analytics",
        "Management Reports",
      ],
      emoji: "📊",
    },
  ];

  return (
    <section
      style={{
        background: "white",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
		marginTop: "70px",
            marginBottom: "70px",
          }}
        >
           

          <h2
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            Solutions We Deliver
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Enterprise applications designed to simplify operations,
            automate workflows and improve decision making.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {solutions.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "35px",
                border: "1px solid #eee",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top Illustration Area */}
              <div
                style={{
                  height: "180px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#FFF4EC,#FFFFFF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "64px",
                  marginBottom: "30px",
                }}
              >
                {item.emoji}
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                  marginBottom: "25px",
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      color: "#111827",
                    }}
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>

               
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}