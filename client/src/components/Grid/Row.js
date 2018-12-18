import React from "react";


export const Row = ({ fluid, id, children, classes }) => (
  <div className={`row${fluid ? "-fluid" : ""}`.concat(" ").concat(classes) } id={id}>
    {children}
  </div>
);
