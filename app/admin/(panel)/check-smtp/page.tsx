"use client";

import React, { useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(undefined);

  const fetchData = () => {
    fetch("/api/check-smtp/").then(JSON.stringify).then(setData).catch(setData);
  };

  return (
    <div className="bg-accent-color flex flex-col py-10 px-1 sm:p-16 space-y-6 rounded-lg">
      <button onClick={fetchData}>SEND</button>
      <code>{data}</code>
    </div>
  );
}
