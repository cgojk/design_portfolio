import React from "react"

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) {
  return (
    <button className={`button ${variant} ${size}`} {...props}>
      {children}
    </button>
  );
}