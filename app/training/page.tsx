

export default function TrainingPage() {
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="section-title">Professional Technology Training</h1>

          <p
            className="section-subtitle"
            style={{ maxWidth: "800px" }}
          >
            Practical, hands-on training programs designed for teams,
            developers and business professionals looking to strengthen
            technical capabilities and accelerate project success.
          </p>

          <div className="services-grid">
            {[
              {
                title: "Enterprise Application Development",
                desc: "Learn modern approaches to designing and building scalable business applications."
              },
              {
                title: "SQL & Database Fundamentals",
                desc: "Master querying techniques, database design principles and performance best practices."
              },
              {
                title: "API Integration Workshops",
                desc: "Understand how modern applications communicate through APIs and connected services."
              },
              {
                title: "Reporting & Analytics",
                desc: "Build dashboards and reporting solutions that deliver meaningful business insights."
              },
              {
                title: "Workflow Automation",
                desc: "Design efficient processes that reduce manual effort and improve operational consistency."
              },
              {
                title: "Technical Mentoring",
                desc: "One-on-one guidance for developers looking to accelerate learning and project delivery."
              }
            ].map((item) => (
              <div key={item.title} className="card" style={{ padding: 30 }}>
                <h3>{item.title}</h3>
                <p
                  style={{
                    color: "#666",
                    marginTop: 12,
                    lineHeight: 1.8
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}