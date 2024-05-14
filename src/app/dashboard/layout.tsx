import React from "react";
import Aside from "./shared/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-container md:gap-2 grid md:grid-cols-4 grid-cols-1 justify-between md:p-0 p-2">
      <div className="mb-2">
        <Aside />
      </div>
      <div className="col-span-3 border">{children}</div>
    </div>
  );
}
