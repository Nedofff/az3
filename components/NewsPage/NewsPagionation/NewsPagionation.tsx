"use client";

import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from "./NewsPagination.module.css";

export default function NewsPagionation({
  countPages,
  currentPage,
  setPage,
}: {
  countPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}) {
  const backHandler = () => {
    setPage(currentPage - 1);
  };
  const nextHandler = () => {
    setPage(currentPage + 1)
  };
  if (countPages < 2) return <div></div>;

  return (
    <div className="w-full px-8 sm:px-28">
      <div className="w-full flex justify-between  p-3 shadow-black bg-white shadow-lg rounded-lg">
        <button
          onClick={backHandler}
          className="text-2xl disabled:opacity-40"
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <div className={` ${styles.pagination}`}>
          <button
            className={`${currentPage === 1 ? styles.active : ""}`}
            onClick={() => setPage(1)}
          >
            1
          </button>
          {currentPage > 1 + 2 && (
            <button onClick={() => setPage(2)}>{2}</button>
          )}

          {currentPage > 1 + 2 && (
            <p className="inline-block font-thin text-sm">...</p>
          )}

          {currentPage > 1 + 1 && (
            <button onClick={backHandler}>
              {currentPage - 1}
            </button>
          )}

          {currentPage !== 1 && currentPage !== countPages && (
            <button className={`${styles.active}`}>{currentPage}</button>
          )}

          {currentPage < countPages - 1 && (
            <button onClick={nextHandler}>
              {currentPage + 1}
            </button>
          )}

          {currentPage < countPages - 2 && (
            <p className="inline-block font-thin text-sm">...</p>
          )}
          {currentPage < countPages - 2 && (
            <button onClick={() => setPage(countPages - 1)}>
              {countPages - 1}
            </button>
          )}
          <button
            className={`${currentPage === countPages ? styles.active : ""}`}
            onClick={() => setPage(countPages)}
          >
            {countPages}
          </button>
        </div>
        <button
          onClick={nextHandler}
          className="text-2xl disabled:opacity-40"
          disabled={currentPage === countPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
