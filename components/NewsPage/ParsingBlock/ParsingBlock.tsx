'use client'

import React, { useEffect } from "react";

export default function ParsingBlock({ text }: { text: string }) {
  // useEffect(() => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(text, "text/html");
  //   const elements = doc.querySelectorAll("img");}

  return (
    <div className="flex justify-center">
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="newsBlock w-max-[600px]"
      ></div>
    </div>
  );
}
