import React from 'react'

const Box = ({color, text, className, onClick}:{color: string, text: string, className?: string, onClick?: () => void}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ backgroundColor: color, padding: "10rem", margin: "1rem", cursor: "pointer" }}
    >
      <h1 style={{ textAlign: "center" }}>{text}</h1>
    </div>
  );
}

export default Box