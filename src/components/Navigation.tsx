"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BackgroundImage from "./BackgroundImage";
import { images } from "@/lib/assets";

/**
 * Menu content. The original Framer export only contained the closed menu
 * button, so these entries are placeholders pointing at the page's sections.
 * Edit freely.
 */
const MENU_ITEMS = [
  { label: "CANVAS", href: "/#canvas", className: "framer-vegk0y" },
  { label: "DESKTOP", href: "/#desktop", className: "framer-1ucs1mm" },
  { label: "ANYWHERE", href: "/#anywhere", className: "framer-1fpuqbj" },
] as const;

const menuTextStyle = {
  "--framer-font-size": "20px",
  "--framer-font-weight": "900",
  "--framer-letter-spacing": "-0.5px",
  "--framer-text-color": "var(--token-47c8942a-ed12-4801-b4fd-2cc156c6833e)",
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const panelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setClosing(true);
  };

  useEffect(() => {
    if (!closing) return;
    const timeout = window.setTimeout(() => setClosing(false), 220);
    return () => window.clearTimeout(timeout);
  }, [closing]);

  const toggleMenu = () => {
    if (open) {
      close();
      return;
    }
    setClosing(false);
    setOpen(true);
  };

  useLayoutEffect(() => {
    if (!open) return;
    const updatePosition = () => {
      const nav = navRef.current;
      if (!nav) return;
      const bounds = nav.getBoundingClientRect();
      setMenuPosition({
        top: bounds.bottom + 8,
        right: window.innerWidth - bounds.right,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className="framer-1lxax5"
        data-border="true"
        data-framer-name="Floating Navigation"
      >
      <Link
        className="framer-1bwkhlg framer-7hpedq"
        data-framer-name="Brand"
        href="/"
        onClick={close}
      >
        <div className="framer-4mdkp3" data-framer-name="Reform Logo">
          <BackgroundImage image={images.logo} />
        </div>
        <div className="ssr-variant hidden-1msvjmc">
          <div
            className="framer-kdt2bj"
            data-framer-name="Reform"
            data-framer-component-type="RichTextContainer"
          >
            <p
              dir="auto"
              style={{
                "--framer-font-size": "24px",
                "--framer-font-weight": "900",
                "--framer-letter-spacing": "-0.5px",
                "--framer-text-color": "var(--token-47c8942a-ed12-4801-b4fd-2cc156c6833e)",
              }}
              className="framer-text"
            >
              REFORM
            </p>
          </div>
        </div>
        <div className="ssr-variant hidden-16oo0sf hidden-16ty77c">
          <div
            className="framer-kdt2bj"
            data-framer-name="Reform"
            data-framer-component-type="RichTextContainer"
          >
            <p
              dir="auto"
              style={{
                "--framer-font-size": "20px",
                "--framer-font-weight": "900",
                "--framer-letter-spacing": "-0.5px",
                "--framer-text-color": "var(--token-47c8942a-ed12-4801-b4fd-2cc156c6833e)",
              }}
              className="framer-text"
            >
              REFORM
            </p>
          </div>
        </div>
      </Link>

      <button
        ref={buttonRef}
        type="button"
        className="framer-b7inro"
        data-reset="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggleMenu}
      >
        <svg className="framer-grV1P framer-1evu0jv" role="presentation" viewBox="0 0 24 24">
          {[5, 12, 19].map((y) => (
            <path
              key={y}
              d="M 0 0 L 16 0"
              fill="none"
              stroke="var(--1m973uw, rgb(0,0,0))"
              strokeWidth="var(--js9iwy, 2)"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(4 ${y})`}
            />
          ))}
        </svg>
      </button>

      </nav>
      {(open || closing) &&
        createPortal(
          <>
            <div
              className={`framer-6aAoN framer-1xvf41g ${open ? "is-open" : "is-closing"}`}
              aria-hidden="true"
              onClick={close}
            />
            <div
              className={`framer-6aAoN framer-1falhm9 ${open ? "is-open" : "is-closing"}`}
              id={panelId}
              style={{ top: menuPosition.top, right: menuPosition.right }}
              aria-hidden={!open}
            >
              {MENU_ITEMS.map((item) => (
                <Link key={item.href} className={item.className} href={item.href} onClick={close}>
                  <p className="framer-text" dir="auto" style={menuTextStyle}>
                    {item.label}
                  </p>
                </Link>
              ))}
              <Link className="framer-1hk7gx8" href="/get-reform" onClick={close}>
                <p
                  className="framer-text"
                  dir="auto"
                  style={{
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "900",
                    "--framer-text-color": "var(--token-47c8942a-ed12-4801-b4fd-2cc156c6833e)",
                  }}
                >
                  GET REFORM
                </p>
              </Link>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
