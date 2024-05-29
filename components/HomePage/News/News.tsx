"use client";

import React, { useEffect, useState } from "react";
import ANewsItem from "./ANewItem/ANewsItem";
import Link from "next/link";
import AnimationOpacity from "@/components/Animation/AnimationOpacity/AnimationOpacity";

export default function News() {
  const [news, setNews] = useState<IOneNews[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("/api/top", { cache: "no-store" });
      const newsData: IOneNews[] = await response.json();
      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <section id="News" className="separator">
      <AnimationOpacity
        id="newsOpacity"
        transition={{ delay: 0, duration: 450 }}
        className="w-full h-full flex flex-col items-center"
      >
        <h2 className="heading">Новости</h2>
        <div className="flex justify-center mt-10 w-full">
          <div className="flex w-full px-2 h-fit md:h-auto md:max-h-96 flex-col sm:px-10 md:px-0 md:flex-row lg:w-5/6 md:justify-center">
            {news!.map((oneNews) => (
              <ANewsItem key={oneNews.id} {...oneNews} />
            ))}
          </div>
        </div>
        <Link
          href="/news"
          className="mt-10 text-white bg-sub-color outline-none font-bold uppercase tracking-wider rounded-sm px-8 py-2 hover:bg-accent-color duration-300 active:scale-95"
        >
          больше новостей
        </Link>
      </AnimationOpacity>
    </section>
  );
}
