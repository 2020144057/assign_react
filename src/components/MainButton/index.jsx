import React from "react";
import "./style.css";
export function MainButton({ color, message, onClick, isSale = false }) {
  return (
    <button
      className="main-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <p className="message">{message}</p>
    </button>
  );
}