import React from "react";
import Aside from "./shared/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-container md:gap-2 justify-between grid md:grid-cols-4 grid-cols-1 relative md:p-0 p-2">
      <div className="lg:h[450px] md:sticky top-0 left-0 mb-2">
        <Aside />
      </div>
      <div className="col-span-3 border">{children}</div>
    </div>
  );
}
