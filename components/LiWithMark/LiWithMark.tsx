import React from "react";
import { GrCheckmark } from "react-icons/gr";

export default function LiWithMark({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-row">
      <p className="mr-2 pt-1">
        <GrCheckmark className="w-5 h-5 " />
      </p>
      <p>
        {children}
      </p>
    </li>
  );
}
