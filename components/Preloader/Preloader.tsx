'use client';
import React, { useEffect } from "react";
import LogoIcon from "./LogoIcon";
import styles from './Preloader.module.css'
import { getScrollYBar, setScrollYBar } from "@/service/sessionStorageApi";

export default function Preloader() {
  useEffect(() => {
    // document.body.style.overflowY = 'hidden'
    document.body.style.position = 'fixed'
    const preloaderBody = document.querySelector<HTMLDivElement>('#preloaderBody')

    if (preloaderBody) {
    preloaderBody.querySelector('i')?.classList.add(styles.show)
    }
    const rememberPositionScrollY = () => {
      if (window.scrollY !== 0) {
        setScrollYBar(window.scrollY)
      }
    }
    window.addEventListener('scroll', rememberPositionScrollY)

    const timerToOpacity = setTimeout(() => {
      document.body.style.position = 'static'
      const currentScrollY = getScrollYBar()
      if (currentScrollY) {
        window.scrollTo(0, currentScrollY);
      }
      if (preloaderBody) {
      preloaderBody.style.opacity = '0'
      }
    }, 1501)
    const timerToRemove = setTimeout(() => {
      if (preloaderBody) {
      preloaderBody.remove()
      }
    }, 1650)

    return () => {
      clearTimeout(timerToOpacity)
      clearTimeout(timerToRemove)
      removeEventListener('scroll', rememberPositionScrollY)
    }
  })
  return (
    <div id="preloaderBody" className={styles.preloader} style={{backgroundImage: 'url("./bgForPreloader.png")'}}>
      <LogoIcon />
    </div>
  );
}
