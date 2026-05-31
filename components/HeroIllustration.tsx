export default function HeroIllustration() {
  return (
    <div
      style={{
        height:"560px",
        borderRadius:"32px",
        background:
        "linear-gradient(135deg,#FFF4EC,#ffffff)",
        border:"1px solid #eee",
        position:"relative",
        overflow:"hidden"
      }}
    >

      <div
        style={{
          position:"absolute",
          top:"40px",
          left:"40px",
          right:"40px",
          height:"120px",
          background:"white",
          borderRadius:"24px",
          boxShadow:
          "0 20px 50px rgba(0,0,0,.08)"
        }}
      />

      <div
        style={{
          position:"absolute",
          left:"60px",
          bottom:"50px",
          width:"240px",
          height:"220px",
          background:"#FF6A00",
          borderRadius:"24px"
        }}
      />

      <div
        style={{
          position:"absolute",
          right:"60px",
          bottom:"70px",
          width:"280px",
          height:"260px",
          background:"white",
          borderRadius:"24px",
          boxShadow:
          "0 20px 60px rgba(0,0,0,.08)"
        }}
      />

    </div>
  );
}