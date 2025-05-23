import { getRedirectPath } from "../javascript/langRouter.js";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const menuRef = useRef(null);
  const dropRef = useRef(null);
  const [showSecondary, setShowSecondary] = useState(false);
  const [language, setLanguage] = useState("Eng");

  const translations = {
    Eng: {
      about: "About",
      services: "Services",
      cases: "Cases",
      sustainability: "Sustainability",
      contact: "Contact Us",
      serviceItems: [
        "Multimodal Solutions",
        "Air Freight and Charter Services",
        "International and Domestic Trucking",
        "Dangerous goods",
        "Logistics Consulting & Route Analysis",
        "Warehousing & Storage",
      ],
    },
    Ru: {
      about: "О компании",
      services: "Услуги",
      cases: "Проекты",
      sustainability: "Устойчивое развитие",
      contact: "Связаться с нами",
      serviceItems: [
        "Мультимодальная логистика",
        "Авиаперевозки и чартерные услуги",
        "Международные и внутренние автоперевозки",
        "Перевозка опасных грузов",
        "Логистический консалтинг",
        "Складские решения",
      ],
    },
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    const redirect = getRedirectPath(lang, window.location.pathname);
    if (redirect) {
      window.location.pathname = redirect;
      return;
    }

    if (lang === "Ru" || lang === "Eng") {
      setLanguage(lang);
    }

    const drop = dropRef.current;
    const menu = menuRef.current;
    let hideTimeout;

    const handleEnter = () => {
      clearTimeout(hideTimeout);
      menu.classList.add("show");
    };

    const handleLeave = (e) => {
      if (!drop.contains(e.relatedTarget)) {
        hideTimeout = setTimeout(() => {
          menu.classList.remove("show");
        }, 100);
      }
    };

    drop?.addEventListener("pointerenter", handleEnter);
    drop?.addEventListener("pointerleave", handleLeave);

    return () => {
      drop?.removeEventListener("pointerenter", handleEnter);
      drop?.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "Eng" ? "Ru" : "Eng";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setShowSecondary(false);

    const redirect = getRedirectPath(newLang, window.location.pathname);
    if (redirect) {
      window.location.pathname = redirect;
    }
  };

  const servicesUrls = [
    "./multimodal-solutions.html",
    "./air-freight-and-charter-services.html",
    "./international-and-domestic-trucking.html",
    "./dangerous-goods.html",
    "./logistics-consulting-and-route-analysis.html",
    "./warehousing-and-storage.html",
  ];

  return (
    <div className="O_Header">
      <div className="M_Box">
        <a href="./about.html">
          <p className="button">{translations[language].about}</p>
        </a>
        <div className="A_BoxDrop" ref={dropRef}>
          <div className="Wrap">
            <a href="./services.html">
              <p className="button">{translations[language].services}</p>
            </a>
            <div className="A_BoxIcon"></div>
          </div>
          <div className="A_Menu" ref={menuRef}>
            {translations[language].serviceItems.map((title, i) => (
              <div className="WrapDrop" key={i}>
                <img
                  src={`/navbarDropdown/A_NavbarServicesIcon0${i + 1}.svg`}
                  className="A_NavbarServicesIcon"
                  alt="Service icon"
                />
                <a href={servicesUrls[i]}>
                  <p className="button">{title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <a href="./cases.html">
          <p className="button">{translations[language].cases}</p>
        </a>
        <a href="./sustainability.html">
          <p className="button">{translations[language].sustainability}</p>
        </a>
      </div>

      <a href="./index.html">
        <div className="A_Logo"></div>
      </a>

      <div className="RightSide">
        <div className="MultiLangBtn BlueLang">
          <div
            className="SelectedBtn"
            onClick={() => setShowSecondary((prev) => !prev)}
          >
            <div className="LangWrap">
              <p className="Button">{language}</p>
              <img
                src="/MultiLangBlue.svg"
                alt="Arrow down icon"
                className="MultiLangArrow"
              />
            </div>
            <div className="UnderLine"></div>
          </div>

          <div
            className="SecondaryBtn"
            style={{ display: showSecondary ? "flex" : "none" }}
            onClick={toggleLanguage}
          >
            <p className="Button">{language === "Eng" ? "Ru" : "Eng"}</p>
          </div>
        </div>

        <div className="A_BoxRight" id="ContactUsBtn">
          <div className="A_Link">
            <p className="button">{translations[language].contact}</p>
          </div>
        </div>

        <div className="BurgerMenu" id="BurgerOpen"></div>
      </div>
    </div>
  );
}
