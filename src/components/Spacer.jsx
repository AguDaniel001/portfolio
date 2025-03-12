import React from "react";

export default function Spacer({ height = 16, width = "100%", display = "block" }) {
  return <div style={{ display, height, width }} />;
}