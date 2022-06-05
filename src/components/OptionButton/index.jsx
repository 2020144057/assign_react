import React from "react";
import "./style.css";

export function OptionButton({ color, message, onClick, isSale = false }) {
  return (
    <button
      className="option-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <p className="message">{message}</p>
    </button>
  );
}