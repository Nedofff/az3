import React from "react";

export default function WrapperForText({
    className,
  children,
}: {
    className?:string
  children: React.ReactNode;
}) {
  return (
    <div className={`px-5 sm:px-0 sm:flex sm:flex-col sm:items-center`}>
      <div className={`sm:w-2/3 max-w-[650px] ${className}`}>{children}</div>
    </div>
  );
}
