import React from "react";

function Circles() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          left: "-268px",
          top: "-186px",
          borderRadius: "50%",
          background: "#f0eff9",
          zIndex: "0",
        }}
        className="circle-1"
      />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="circle-4" />
    </div>
  );
}

export default Circles;
