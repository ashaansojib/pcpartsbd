import React from "react";
import Aside from "./shared/Aside";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:p-0 p-2 flex justify-between gap-2 relative">
      <div className="bg-slate-700 text-white w-[350px] h-screen sticky top-0 left-0">
        <Aside />
      </div>
      <div className="border w-full overflow-y-auto">{children}</div>
    </div>
  );
}
