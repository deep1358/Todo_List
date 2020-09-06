import React from "react";

export default function Todo(p) {
  return (
    <div
      onClick={() => {
        p.onChecked(p.id);
      }}
    >
      <li>{p.text}</li>
    </div>
  );
}
