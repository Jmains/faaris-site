import { useEffect, useRef, useState } from "react";
// import cn from "classnames";
import throttle from "lodash.throttle";
import s from "./Navbar.module.css";
import Link from "next/link";
import { scrollToElement } from "../../../utils/scrollToElement";

export default function Navbar() {
  const [navIsToggled, setNavIsToggled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [sectionIsVisibleName, setSectionIsVisibleName] = useState("");

  const navRef = useRef();

  const handleNavToggle = () => {
    setNavIsToggled((toggled) => !toggled);
  };

  const handleEscape = (ev) => {
    if (ev.key === "Esc" || ev.key === "Escape") setNavIsToggled(false);
  };

  const getSectionDimension = (element) => {
    const { height, top } = element.getBoundingClientRect();
    const offsetTop = window.pageYOffset + top;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 8;
      const { scrollTop } = document.documentElement;

      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 300);

    handleScroll();
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Highlight navbar items when in relative section
  useEffect(() => {
    const discoSection = document.getElementById("discoSection");
    const aboutSection = document.getElementById("aboutSection");
    const homeSection = document.getElementById("homeSection");

    const sections = [
      { section: discoSection, name: "discoSection" },
      { section: aboutSection, name: "aboutSection" },
      { section: homeSection, name: "homeSection" },
    ];

    const handleSectionScroll = throttle(() => {
      if (navRef.current) {
        const { height: navbarHeight } = getSectionDimension(navRef.current);
        const scrollPosition = window.scrollY + navbarHeight;
        // const scrollPosition = window.scrollY;

        const selected = sections.find(({ section }) => {
          if (section) {
            const { offsetTop, offsetBottom } = getSectionDimension(section);
            return scrollPosition > offsetTop && scrollPosition < offsetBottom;
          }
        });

        selected && selected.name !== sectionIsVisibleName
          ? setSectionIsVisibleName(selected?.name)
          : setSectionIsVisibleName("");
      }
    }, 200);

    handleSectionScroll();
    document.addEventListener("scroll", handleSectionScroll);

    return () => {
      document.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);

  return (
    <header ref={navRef} className={`${s.stickyTop} ${hasScrolled ? s.scrolled : ""}`}>
      <nav role="navigation" className={`container ${s.nav}`}>
        <a className={s.nav__logo} href="/">
          Faaris
        </a>
        <button
          type="button"
          onClick={handleNavToggle}
          className={s.navToggle}
          aria-expanded={navIsToggled}
          aria-label="open navigation"
        >
          <span className={`${s.hamburger} ${navIsToggled ? s.hamburgerToggled : ""}`} />
        </button>

        <div className={`${s.nav__listContainer} ${navIsToggled ? s.navVisible : ""}`}>
          <button tabIndex="-1" onClick={handleNavToggle} className={s.nav__dropdownExit} />
          <ul aria-orientation="vertical" role="menu" className={s.nav__listPri}>
            {/* <li className={s.nav__item}>
              <a role="menuitem" className={s.nav__link} href="/" tabIndex="0">
                Home
              </a>
            </li> */}
            <li className={s.nav__item}>
              <span
                onClick={() => {
                  scrollToElement("discoSection");
                  handleNavToggle();
                }}
                role="menuitem"
                id="pricing"
                tabIndex="0"
                className={`${s.nav__link} ${
                  sectionIsVisibleName === "discoSection" ? s.activeLink : ""
                }`}
              >
                Discography
              </span>
            </li>
            <li className={s.nav__item}>
              <span
                onClick={() => {
                  scrollToElement("aboutSection");
                  handleNavToggle();
                }}
                role="menuitem"
                className={`${s.nav__link} ${
                  sectionIsVisibleName === "aboutSection" ? s.activeLink : ""
                }`}
                href="/"
                tabIndex="0"
              >
                About
              </span>
            </li>
            <li className={s.nav__item}>
              <span role="menuitem" className={s.nav__link} href="/" tabIndex="0">
                Tour
              </span>
            </li>
            <li className={s.nav__item}>
              <span role="menuitem" className={s.nav__link} href="/" tabIndex="0">
                Videos
              </span>
            </li>
            <li className={s.nav__item}>
              <span role="menuitem" className={s.nav__link} href="/" tabIndex="0">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
