import React from "react";

type MoreButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function MoreButton({ onClick, className }: MoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label="Toggle menu"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "3px",
        width: "20px",
        height: "30px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <span style={lineStyle} />
      <span style={lineStyle} />
      <span style={lineStyle} />
    </button>
  );
}

const lineStyle: React.CSSProperties = {
  width: "100%",
  height: "3px",
  backgroundColor: "#a5abb0",
  borderRadius: "2px",
};
