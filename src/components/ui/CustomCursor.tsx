import React from "react";
import TargetCursor from "../TargetCursor";

export default function CustomCursor() {
  return (
    <TargetCursor
      spinDuration={2}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
    />
  );
}
