import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
const ScrollLink = ({className, href, onClick, children  }: {className?:string, href:string, onClick?:()=>void, children: React.ReactNode}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
              behavior: "smooth",
            });
            if (onClick) {
              onClick()
            }
    
  };
  // className={`${activeLink} ${styleLinkMobile}`}
  //                     key={link.label}
  //                     href={link.href}

  return (
    <Link className={className} href={href} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;