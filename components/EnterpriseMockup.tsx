export default function EnterpriseMockup() {
  const apps = [
    {
      title: "HRMS Portal",
      subtitle: "Employees • Leave • Attendance",
      icon: "👥",
    },
    {
      title: "Procurement",
      subtitle: "Approvals • Vendors • PO",
      icon: "🛒",
    },
    {
      title: "Executive Dashboard",
      subtitle: "KPIs • Reports • Analytics",
      icon: "📊",
    },
    {
      title: "Vendor Portal",
      subtitle: "Suppliers • Contracts",
      icon: "🏢",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "620px",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 80,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#FFB066 0%,transparent 70%)",
          opacity: 0.4,
          filter: "blur(50px)",
        }}
      />

      {/* Laptop */}
      <div
        style={{
          position: "relative",
          background: "#111827",
          borderRadius: "28px",
          padding: "16px",
          boxShadow: "0 40px 100px rgba(0,0,0,.15)",
        }}
      >
        {/* Browser */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Browser Top */}
          <div
            style={{
              height: "56px",
              background: "#f8fafc",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#FF6A00",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#FFB066",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#FFE5CF",
              }}
            />
          </div>

          {/* Content */}
          <div
            style={{
              padding: "28px",
            }}
          >
            <div
              style={{
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#FF6A00",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                NEXAPEX CONSULTING
              </div>

              <h3
                style={{
                  marginTop: "8px",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                Enterprise Application Suite
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {apps.map((app) => (
                <div
                  key={app.title}
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "20px",
                    padding: "22px",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,.05)",
                    transition: ".3s",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "#FFF4EC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      marginBottom: "14px",
                    }}
                  >
                    {app.icon}
                  </div>

                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {app.title}
                  </div>

                  <div
                    style={{
                      color: "#6B7280",
                      fontSize: "14px",
                    }}
                  >
                    {app.subtitle}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Banner */}
            <div
              style={{
                marginTop: "24px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg,#FF6A00,#FFB066)",
                padding: "24px",
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  opacity: 0.9,
                }}
              >
                Specialized Services
              </div>

              <div
                style={{
                  marginTop: "6px",
                  fontSize: "24px",
                  fontWeight: 800,
                }}
              >
                Oracle APEX • PL/SQL • OCI • REST APIs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div
        style={{
          width: "85%",
          height: "18px",
          margin: "0 auto",
          background:
            "linear-gradient(to bottom,#cbd5e1,#94a3b8)",
          borderRadius: "0 0 20px 20px",
        }}
      />
    </div>
  );
}