
import EnterpriseShowcase from "../components/EnterpriseShowcase";
import EnterpriseMockup from "../components/EnterpriseMockup";

import PremiumCTA from "../components/PremiumCTA";

export default function HomePage() {
  return (
    <>
       

      {/* HERO */}
      <section>
        <div
          className="container hero-grid"
          
        >
          <div>

  <div
    style={{
      color: "#FF6A00",
      fontWeight: "700",
      marginBottom: "20px",
      letterSpacing: "1px"
    }}
  >
    ENTERPRISE APPLICATION CONSULTING
  </div>

  <h1
  className="hero-title"
  style={{
    fontSize: "64px",
    lineHeight: "1.05",
    fontWeight: "800",
    maxWidth: "800px"
  }}
>
  Enterprise Applications.
  <br />
  Designed for Growth.
  <br />
  Built to Last.
</h1>

  <p
  style={{
    marginTop: "28px",
    color: "#666",
    fontSize: "20px",
    lineHeight: "1.9",
    maxWidth: "680px"
  }}
>
  NexApex Consulting delivers modern business
  applications, workflow automation and enterprise
  solutions that help organizations streamline
  operations, improve visibility and accelerate
  digital transformation.
</p>

   

</div>

          <EnterpriseMockup />
        </div>
      </section>
 
 
       

     <EnterpriseShowcase />
	   
		<PremiumCTA />
      
    </>
  );
}