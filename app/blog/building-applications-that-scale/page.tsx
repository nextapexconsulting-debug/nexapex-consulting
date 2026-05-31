export default function ArticlePage() {
  const pillars = [
    {
      title: "Strong Data Model",
      text: "A scalable Oracle APEX application starts with a well-designed Oracle Database schema."
    },
    {
      title: "Performance First",
      text: "Optimize SQL, indexes and page rendering before performance becomes a problem."
    },
    {
      title: "Security By Design",
      text: "Protect enterprise data through authentication, authorization and secure architecture."
    }
  ];

  const checklist = [
    "SQL Optimization",
    "Proper Indexing",
    "Pagination",
    "REST API Monitoring",
    "Caching Strategy",
    "Security Reviews"
  ];

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#FFF4EC 0%, #FFFFFF 100%)",
          padding: "120px 0"
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            maxWidth: "1000px"
          }}
        >
          <div
            style={{
              color: "#FF6A00",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "20px"
            }}
          >
            ORACLE APEX INSIGHTS
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              fontWeight: 800,
              marginBottom: "30px"
            }}
          >
            Building Oracle APEX
            <br />
            Applications That Scale
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "20px",
              lineHeight: "1.9",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            From 10 users to 10,000 users without rewriting your
            application. Learn the principles behind scalable,
            maintainable and enterprise-ready Oracle APEX solutions.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="container">
          <div className="services-grid">
            <div className="card" style={{ padding: 40 }}>
              <h2>20x</h2>
              <p style={{ color: "#666", marginTop: 10 }}>
                Faster application delivery
              </p>
            </div>

            <div className="card" style={{ padding: 40 }}>
              <h2>10,000+</h2>
              <p style={{ color: "#666", marginTop: 10 }}>
                Users supported through scalable architecture
              </p>
            </div>

            <div className="card" style={{ padding: 40 }}>
              <h2>24/7</h2>
              <p style={{ color: "#666", marginTop: 10 }}>
                Business-critical availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section style={{ background: "#FAFAFA" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px"
            }}
          >
            Growth Journey
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            {[
              "Startup",
              "Department App",
              "Business Platform",
              "Enterprise System"
            ].map((item) => (
              <div
                key={item}
                className="card"
                style={{
                  flex: 1,
                  minWidth: "180px",
                  padding: "30px",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#FF6A00",
                    margin: "0 auto 20px"
                  }}
                />

                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px"
            }}
          >
            Enterprise Architecture
          </h2>

          <div
            className="card"
            style={{
              padding: "60px",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "22px" }}>Users</div>

            <div
              style={{
                margin: "15px 0",
                color: "#FF6A00"
              }}
            >
              ↓
            </div>

            <div style={{ fontSize: "22px" }}>
              Oracle APEX
            </div>

            <div
              style={{
                margin: "15px 0",
                color: "#FF6A00"
              }}
            >
              ↓
            </div>

            <div style={{ fontSize: "22px" }}>
              Oracle Database
            </div>

            <div
              style={{
                margin: "15px 0",
                color: "#FF6A00"
              }}
            >
              ↓
            </div>

            <div style={{ fontSize: "22px" }}>
              REST APIs
            </div>

            <div
              style={{
                margin: "15px 0",
                color: "#FF6A00"
              }}
            >
              ↓
            </div>

            <div style={{ fontSize: "22px" }}>
              Enterprise Systems
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "#FAFAFA" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px"
            }}
          >
            The Three Scaling Pillars
          </h2>

          <div className="services-grid">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card"
                style={{ padding: 35 }}
              >
                <h3>{pillar.title}</h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.8,
                    marginTop: 15
                  }}
                >
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section>
        <div className="container">
          <div
            className="card"
            style={{
              padding: "50px"
            }}
          >
            <h2
              style={{
                marginBottom: "30px"
              }}
            >
              Performance Checklist
            </h2>

            <div className="services-grid">
              {checklist.map((item) => (
                <div key={item}>
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section>
        <div
          className="container"
          style={{
            maxWidth: "900px",
            textAlign: "center"
          }}
        >
          <blockquote
            style={{
              fontSize: "36px",
              lineHeight: "1.5",
              fontWeight: 600
            }}
          >
            “Scalability isn't about handling more users tomorrow.
            It's about making the right architectural decisions
            today.”
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div
            className="card"
            style={{
              padding: "60px",
              textAlign: "center",
              background: "#FFF4EC"
            }}
          >
            <h2>
              Need Help Scaling Your Oracle APEX Platform?
            </h2>

            <p
              style={{
                color: "#666",
                marginTop: "20px",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginInline: "auto"
              }}
            >
              NexApex Consulting helps organizations build,
              modernize and scale enterprise applications using
              Oracle technologies and modern development practices.
            </p>

            <button
              className="btn btn-primary"
              style={{ marginTop: "30px" }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}