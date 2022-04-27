import React from "react";
import Bio from "./Bio";

export default function Photo() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img
          className="imgStyle"
          src="https://images.squarespace-cdn.com/content/v1/5967e379cf81e04b29821335/1500128187919-8LQ2LTQX2TZ1AIMHT2KK/1653967_2654069309630_1836943146085402573_n.jpg?format=1500w"
          alt="Alex Geis on a waterfall"
        ></img>
        <Bio />
      </div>
    </>
  );
}
