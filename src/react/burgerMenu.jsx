import { getRedirectPath } from "../javascript/langRouter.js";
import React, { useState, useEffect } from "react";

export default function BurgerMenuModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownShown, setDropdownShown] = useState(false);
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

    const handleOpen = () => setIsVisible(true);
    const burgerOpen = document.getElementById("BurgerOpen");

    burgerOpen?.addEventListener("click", handleOpen);

    return () => {
      burgerOpen?.removeEventListener("click", handleOpen);
    };
  }, []);

  const handleClose = () => setIsVisible(false);
  const toggleDropdown = () => setDropdownShown((prev) => !prev);

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

  return (
    <div
      className="BurgerMenuWrap"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div className="burgerMenuModal">
        <div className="O_Header">
          <a href="./index.html">
            <div className="A_Logo White"></div>
          </a>
          <div className="RightSide">
            <div className="MultiLangBtn">
              <div
                className="SelectedBtn"
                onClick={() => setShowSecondary((prev) => !prev)}
              >
                <div className="LangWrap">
                  <p className="Button">{language}</p>
                  <img
                    src="/MultiLang.svg"
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

            <div
              className="BurgerMenu White"
              id="BurgerClose"
              onClick={handleClose}
            ></div>
          </div>
        </div>

        <div className="burgerMenuModalBody">
          <div className="BurgerMenuBtns">
            <a href="./about.html">
              <p className="SubtitleBold">{translations[language].about}</p>
            </a>

            <div className="DropDownServices">
              <div className="BurgerServices" onClick={toggleDropdown}>
                <p className="SubtitleBold">
                  {translations[language].services}
                </p>
                <img
                  src="/MultiLang.svg"
                  alt="Arrow down icon"
                  className="MultiLangArrow"
                />
              </div>

              <div
                className={`BurgerServicesDropdown ${
                  dropdownShown ? "ShownBtns" : ""
                }`}
              >
                {translations[language].serviceItems.map((text, i) => (
                  <a
                    key={i}
                    href={
                      [
                        "./multimodal-solutions.html",
                        "./air-freight-and-charter-services.html",
                        "./international-and-domestic-trucking.html",
                        "./dangerous-goods.html",
                        "./logistics-consulting-and-route-analysis.html",
                        "./warehousing-and-storage.html",
                      ][i]
                    }
                  >
                    <p className="SubtitleBold">{text}</p>
                  </a>
                ))}
              </div>
            </div>

            <a href="./cases.html">
              <p className="SubtitleBold">{translations[language].cases}</p>
            </a>
            <a href="./sustainability.html">
              <p className="SubtitleBold">
                {translations[language].sustainability}
              </p>
            </a>
          </div>

          <div className="A_Button" id="ContactUsBtn" onClick={handleClose}>
            <p className="button">{translations[language].contact}</p>
            <div className="A_IconsNavigationIcon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
