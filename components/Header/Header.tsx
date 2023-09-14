"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import throttle from "@/service/throttle";
import ScrollLink from "./ScrollLink/ScrollLink";
import Messengers from "../Messengers/Messengers";
import styles from "./Header.module.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const refCollapsed = useRef<HTMLDivElement>(null);
  const scrollingNavItems = [
    { href: "#AboutUs", label: "О нас" },
    { href: "#Services", label: "Услуги" },
    { href: "#News", label: "Новости" },
    { href: "#Feedback", label: "Отзывы" },
    { href: "#ContactFormBlock", label: "Контакты" },
  ];
  const notScrollingNavItems = [
    { href: "/team", label: "Команда" },
    { href: "/info", label: "Раскрытие информации" },
  ];
  const allLinks = [
    { href: "/#AboutUs", label: "О нас" },
    { href: "/#Services", label: "Услуги" },
    { href: "/#News", label: "Новости" },
    { href: "/#Feedback", label: "Отзывы" },
    { href: "/#ContactFormBlock", label: "Контакты" },
    { href: "/team", label: "Команда" },
    { href: "/info", label: "Раскрытие информации" },
  ];

  const path = usePathname();
  useEffect(() => {
    const linksOnMainPage = [
      "#AboutUs",
      "#Services",
      "#News",
      "#Feedback",
      "#ContactFormBlock",
    ];
    const stylizeActiveAnchorLink = () => {
      let activeLink: string = "";
      for (const link of linksOnMainPage) {
        if (
          document.querySelector(link)!.getBoundingClientRect().top -
            document.documentElement.clientHeight / 4 <=
          0
        ) {
          activeLink = link;
        } else {
          break;
        }
      }
      setActiveLink(activeLink);
    };
    const throtlingStylizeActiveAnchorLink = throttle(
      stylizeActiveAnchorLink,
      500
    );
    if (path === "/") {
      document.addEventListener("scroll", throtlingStylizeActiveAnchorLink);
    } else {
      setActiveLink(path);
    }
    
    return () => {
      if (path === "/") {
        document.removeEventListener(
          "scroll",
          throtlingStylizeActiveAnchorLink
        );
      }
    };
  }, [path, ]);

  const clickOnBurgerHandler = useCallback(() => {
    setBurgerIsActive(!burgerIsActive);
    if (
      refCollapsed.current!.style.maxHeight !== "0px" &&
      !!refCollapsed.current!.style.maxHeight
    ) {
      refCollapsed.current!.style.maxHeight = "0";
      refCollapsed.current!.style.marginBottom = "0";
    } else {
      refCollapsed.current!.style.maxHeight = 
        refCollapsed.current!.scrollHeight + 12 + "px";
      refCollapsed.current!.style.marginBottom = "2.5rem";

    }
  }, [burgerIsActive])

  useEffect(() => {
    const onClick = (e:any) => {
      e.stopPropagation()
      const header = document.querySelector('header')
      if (!header?.contains(e.target as Node)) {
        if (burgerIsActive) {
        clickOnBurgerHandler()
        }
      }
    }
      document.addEventListener('click', onClick)
      return () => document.removeEventListener('click', onClick);
  }, [burgerIsActive, clickOnBurgerHandler])
  
  const styleLinkDesktop =
    "block py-6 h-[72px] whitespace-nowrap px-2 duration-300 hover:shadow-2xl hover:shadow-black active:text-sub-accent-color";
  const styleLinkMobile = "duration-300 pt-3 pb-2 active:text-sub-accent-color border-b-2 border-sub-color border-opacity-0 hover:border-opacity-100 hover:border-white hover:duration-300";

  return (
    <header className="fixed z-20 bg-sub-color bg-opacity-95 w-screen flex items-center">
      <div className="hidden lg:block w-full">
        <nav className="max-w-7xl duration-150 font-medium mx-auto flex justify-around items-center">
          <Link
            className="p-3 duration-300 hover:shadow-2xl hover:shadow-black"
            href="/"
          >
            <Image
              className={`w-16`}
              src={"/logo.png"}
              width={1000}
              height={1000}
              alt="Логотип компании - Больлие буквы АП"
            />
          </Link>
          <div className="text-white flex">
            {Boolean(path === "/") &&
              scrollingNavItems.map((link) => {
                if (link.href === activeLink) {
                  return (
                    <ScrollLink
                      className={`text-sub-accent-color ${styleLinkDesktop}`}
                      key={link.label}
                      href={link.href}
                    >
                      {link.label}
                    </ScrollLink>
                  );
                } else {
                  return (
                    <ScrollLink
                      className={styleLinkDesktop}
                      key={link.label}
                      href={link.href}
                    >
                      {link.label}
                    </ScrollLink>
                  );
                }
              })}
            {Boolean(path === "/")
              ? notScrollingNavItems.map((link) => {
                  if (link.href === activeLink) {
                    return (
                      <Link
                        className={`text-sub-accent-color ${styleLinkDesktop}`}
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        className={styleLinkDesktop}
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                })
              : allLinks.map((link) => {
                  if (link.href === activeLink) {
                    return (
                      <Link
                        className={`text-sub-accent-color ${styleLinkDesktop}`}
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        className={styleLinkDesktop}
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                })}
          </div>
          <address className="flex items-center mr-8 not-italic">
            <a
              className={`${styleLinkDesktop} text-white`}
              href="tel:+7 (391) 214-93-60"
            >
              +7 (391) 214-93-60
            </a>
            <Messengers className="ml-1"/>
          </address>
        </nav>
      </div>
      <div className="z-30  w-5/6 mx-auto md:w-1/2 lg:hidden">
        <div className="flex justify-between items-center">
          <Link
            className="py-3 block duration-300 hover:shadow-2xl hover:shadow-black"
            href="/"
          >
            <Image
              className={`w-16`}
              src={"/logo.png"}
              width={1000}
              height={1000}
              alt="Логотип компании - Больлие буквы АП"
            />
          </Link>
          <div className="rounded-full duration-300 hover:bg-slate-500 mr-[22px] hover:bg-opacity-40">
            <button
              onClick={clickOnBurgerHandler}
              className={`${styles.menu__btn} m-2 ${
                burgerIsActive && styles["menu__btn-active"]
              }`}
            >
              <span></span>
            </button>
          </div>
        </div>
        <div
          ref={refCollapsed}
          className={`${styles.content} flex z-30 justify-between`}
        >
          <nav className="text-white w-[120%] flex flex-col">
            {Boolean(path === "/") &&
              scrollingNavItems.map((link) => {
                if (link.href === activeLink) {
                  return (
                    <ScrollLink
                      className={`text-sub-accent-color ${styleLinkMobile}`}
                      key={link.label}
                      href={link.href}
                      onClick={clickOnBurgerHandler}
                    >
                      {link.label}
                    </ScrollLink>
                  );
                } else {
                  return (
                    <ScrollLink
                      className={styleLinkMobile}
                      key={link.label}
                      href={link.href}
                      onClick={clickOnBurgerHandler}
                    >
                      {link.label}
                    </ScrollLink>
                  );
                }
              })}
            {Boolean(path === "/")
              ? notScrollingNavItems.map((link) => {
                  if (link.href === activeLink) {
                    return (
                      <Link
                        className={`text-sub-accent-color ${styleLinkMobile}`}
                        key={link.label}
                        href={link.href}
                      onClick={clickOnBurgerHandler}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        className={styleLinkMobile}
                        key={link.label}
                        href={link.href}
                      onClick={clickOnBurgerHandler}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                })
              : allLinks.map((link) => {
                  if (link.href === activeLink) {
                    return (
                      <Link
                        className={`text-sub-accent-color ${styleLinkMobile}`}
                        key={link.label}
                        href={link.href}
                      onClick={clickOnBurgerHandler}

                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        className={styleLinkMobile}
                        key={link.label}
                        href={link.href}
                      onClick={clickOnBurgerHandler}

                      >
                        {link.label}
                      </Link>
                    );
                  }
                })}
          </nav>
          <address className="flex flex-col items-end">
            <a
              className={`${styleLinkMobile} sm:whitespace-nowrap mb-5 text-white`}
              href="tel:+7 (391) 214-93-60"
            >
              +7 (391) 214-93-60
            </a>
            <Messengers className="flex-col items-end space-y-3"/>
          </address>
        </div>
      </div>
    </header>
  );
}
