import { useEffect, useState } from "react";
import { navigation, profile } from "../data/portfolio";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", ...navigation.map((item) => item.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -64%", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="brand" onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
          <span className="brand__mark">YL</span>
          <span className="brand__name">Yevhenii Lymarenko</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={activeSection === item.id ? "page" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={profile.cv} target="_blank" rel="noreferrer" className="header-cv">
          CV
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav is-open" aria-label="Mobile navigation">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.id} style={{ "--item-index": index }}>
                  <a href={`#${item.id}`} onClick={closeMenu}>
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="mobile-nav__cv" onClick={closeMenu}>
              Download CV
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
