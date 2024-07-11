"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import NewsPagionation from "@/components/NewsPage/NewsPagionation/NewsPagionation";
import SearchBar from "@/components/NewsPage/SearchBar/SearchBar";
import NewsCell from "@/components/NewsPage/NewsCell/NewsCell";
import styles from "./page.module.css";
import NewsLoading from "@/components/NewsPage/NewsLoading/NewsLoading";

interface IOneNews {
  id: string;
  src: string;
  title: string;
  width: number;
  height: number;
}

export default function NewsPage() {
  const [dataNews, setDataNews] = useState<IOneNews[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState<
    "loading" | "first" | "notFound" | "idle"
  >("first");
  const [countPages, setCountPages] = useState(0);
  const [page, setPage] = useState(1);

  const onSearch = useCallback(async () => {
    let url = `/api/news?page=${page}`;

    if (searchQuery !== "") {
      url += `&q=${searchQuery}`;
    }

    setStatus("loading");
    const response = await fetch(url, {
      cache: "no-store",
    });
    const data: IOneNews[] = await response.json();

    if (!data.length) {
      setStatus("notFound");
    } else {
      setStatus("idle");
    }

    setDataNews(data);
  }, [page, searchQuery]);

  const getCountPages = useCallback(async () => {
    let url = `/api/news/countPages`;

    if (searchQuery !== "") {
      url += `?q=${searchQuery}`;
    }

    await fetch(url, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => {
        setCountPages(Math.ceil(data / 24));
      });
  }, [searchQuery]);

  useLayoutEffect(() => {
    if (status === "first") {
      onSearch();
      getCountPages();
    }
  }, [onSearch, status, getCountPages]);

  useEffect(() => {
    onSearch();
    getCountPages();
    document.querySelector("main")?.scrollIntoView();
  }, [page, searchQuery, onSearch, getCountPages]);

  return (
    <main className="pt-28 pb-24 flex flex-col items-center">
      <h1 className="heading">Новости</h1>
      <div className="max-w-7xl flex flex-col items-center justify-between min-h-[50vh]">
        <SearchBar setSearchQuery={setSearchQuery} />
        {Boolean(status === "idle") && (
          <div
            className={`${styles.gridBlock} gap-y-4 mb-12 grid-cols-1 items-start px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-full sm:px-20`}
          >
            {Boolean(dataNews) &&
              dataNews!.map((item) => <NewsCell key={item.id} {...item} />)}
          </div>
        )}
        {Boolean(status === "loading") && (
          <div className="h-auto w-screen flex items-center justify-center">
            <NewsLoading />
          </div>
        )}
        {Boolean(status === "notFound") && (
          <div className="h-auto w-screen flex items-center justify-center">
            <p className="text-2xl">Ничего не найдено</p>
          </div>
        )}
        {Boolean(status === "idle") ? (
          <NewsPagionation
            setPage={setPage}
            currentPage={page}
            countPages={countPages}
          />
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
