import React from "react";
import "../App.scss"; // Ensure it uses your blueprint CSS

const SocialPreviewGenerator = () => {
  const containerStyle = {
    width: "1200px",
    height: "630px",
    background: "#0a192f", // Main BG
    backgroundImage: `
      linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "20px solid #112240", // Outer Frame
    boxSizing: "border-box",
    fontFamily: "'Fira Code', monospace",
  };

  const cardStyle = {
    background: "#112240",
    border: "2px solid #64ffda",
    padding: "60px",
    borderRadius: "8px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    textAlign: "center",
    position: "relative",
  };

  return (
    <div style={{ padding: "50px", background: "#000" }}>
      <div id="capture-this" style={containerStyle}>
        
        {/* Decorative Grid Lines */}
        <div style={{position: "absolute", top: "50%", left: "0", width: "100%", height: "1px", background: "#233554"}}></div>
        <div style={{position: "absolute", top: "0", left: "50%", width: "1px", height: "100%", background: "#233554"}}></div>

        <div style={cardStyle}>
          {/* Status Light */}
          <div style={{position: "absolute", top: "20px", right: "20px", display: "flex", alignItems: "center", gap: "10px"}}>
             <div style={{width: "12px", height: "12px", borderRadius: "50%", background: "#00ff00", boxShadow: "0 0 10px #00ff00"}}></div>
             <span style={{color: "#8892b0", fontSize: "14px"}}>SYS_ONLINE</span>
          </div>

          <h2 style={{ color: "#64ffda", fontSize: "24px", marginBottom: "20px", opacity: 0.8 }}>
            {'// PORTFOLIO_V2.0'}
          </h2>
          <h1 style={{ color: "#ccd6f6", fontSize: "64px", margin: "0 0 20px 0", fontWeight: "bold" }}>
            Johnpaul Okoye
          </h1>
          <p style={{ color: "#8892b0", fontSize: "28px", margin: 0 }}>
             Python | JavaScript | Rust
          </p>
          
          {/* Tech Chips */}
          <div style={{marginTop: "40px", display: "flex", gap: "15px", justifyContent: "center"}}>
             {["SOFTWARE ENGINEER", "AI ENGINEER", "BACKEND ENGINEER"].map(tag => (
                 <span key={tag} style={{
                     border: "1px solid #64ffda", 
                     color: "#64ffda", 
                     padding: "8px 16px", 
                     fontSize: "16px",
                     background: "rgba(100, 255, 218, 0.1)"
                 }}>{tag}</span>
             ))}
          </div>
        </div>
        
        <div style={{position: "absolute", bottom: "30px", fontSize: "18px", color: "#8892b0"}}>
            https://jaypee15.github.io
        </div>

      </div>
    </div>
  );
};

export default SocialPreviewGenerator;