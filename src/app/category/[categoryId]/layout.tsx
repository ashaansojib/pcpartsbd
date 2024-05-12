import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-container">{children}</div>;
};

export default layout;
