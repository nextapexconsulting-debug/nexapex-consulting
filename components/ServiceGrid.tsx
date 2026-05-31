const services = [
  {
    title: "Oracle APEX Development",
    description:
      "Custom enterprise applications, dashboards and portals built with Oracle APEX.",
    icon: "⚡",
  },
  {
    title: "PL/SQL Engineering",
    description:
      "Packages, procedures, performance tuning and database automation.",
    icon: "🗄️",
  },
  {
    title: "Oracle Database Consulting",
    description:
      "Architecture, optimization, migration and security best practices.",
    icon: "📊",
  },
  {
    title: "REST API Integration",
    description:
      "Integrate Oracle systems with ERP, CRM and external applications.",
    icon: "🔗",
  },
  {
    title: "Oracle Cloud Infrastructure",
    description:
      "OCI deployment, monitoring and cloud modernization services.",
    icon: "☁️",
  },
  {
    title: "Application Modernization",
    description:
      "Transform legacy Oracle Forms and spreadsheets into modern apps.",
    icon: "🚀",
  },
];

export default function ServiceGrid() {
  return (
    <section>
      <div className="container">

        <h2 className="section-title">
          Consulting Services
        </h2>

        <p className="section-subtitle">
          Specialized Oracle expertise for enterprise applications.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card"
              style={{
                padding: "32px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "#FFF4EC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  marginBottom: "14px",
                  fontSize: "24px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  marginTop: "20px",
                  color: "#FF6A00",
                  fontWeight: 700,
                }}
              >
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}