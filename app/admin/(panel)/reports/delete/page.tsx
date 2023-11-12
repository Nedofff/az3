"use client";

import OneReport from "@/components/AdminPage/OneReport/OneReport";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [reports, setReports] = useState<{ id: string; year: string }[]>();

  useEffect(() => {
    const getReports = async () => {
      const response = await fetch(`/api/admin/reports/list`);
      const reports = (await response.json()) as { id: string; year: string }[];
      setReports(reports);
    };
    getReports();
  }, []);

  return (
    <div className="bg-accent-color p-10 rounded-lg">
      <div className=" max-h-[80vh] overflow-auto px-5 space-y-3">
        <Link
          className="bg-main-color text-center px-5 py-2 text-black rounded-md hover:bg-opacity-50 duration-200 block"
          href={"/admin/reports"}
        >
          Назад
        </Link>
        {Boolean(reports) &&
          reports!.map((report) => (
            <OneReport key={report.id} id={report.id} year={report.year} />
          ))}
      </div>
    </div>
  );
}
