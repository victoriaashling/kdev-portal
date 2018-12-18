import React from "react";

export const Col = ({ size, id, children, classes }) => (
  <div className={ size.split(" ").map(size => "col-" + size).join(" ").concat(" ").concat(classes) } id={id}>
    {children}
  </div>
);
