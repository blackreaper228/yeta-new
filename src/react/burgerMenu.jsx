import React, { useState, useEffect } from "react";

export default function BurgerMenuModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownShown, setDropdownShown] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    const burgerOpen = document.getElementById("BurgerOpen");

    burgerOpen?.addEventListener("click", handleOpen);

    return () => {
      burgerOpen?.removeEventListener("click", handleOpen);
    };
  }, []);

  const handleClose = () => setIsVisible(false);
  const toggleDropdown = () => setDropdownShown((prev) => !prev);

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
              <div className="SelectedBtn">
                <div className="LangWrap">
                  <p className="Button">Eng</p>
                  <img
                    src="./src/images/MultiLang.svg"
                    alt="Arrow down icon"
                    className="MultiLangArrow"
                  />
                </div>
                <div className="UnderLine"></div>
              </div>
              <div className="SecondaryBtn">
                <p className="Button">Ru</p>
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
              <p className="SubtitleBold">About Us</p>
            </a>

            <div className="DropDownSolutions">
              <div className="BurgerSolutions" onClick={toggleDropdown}>
                <p className="SubtitleBold">Solutions</p>
                <img
                  src="./src/images/MultiLang.svg"
                  alt="Arrow down icon"
                  className="MultiLangArrow"
                />
              </div>

              <div
                className={`BurgerSolutionsDropdown ${
                  dropdownShown ? "ShownBtns" : ""
                }`}
              >
                <a href="./multimodal-solutions.html">
                  <p className="SubtitleBold">Multimodal Solutions</p>
                </a>
                <a href="./air-freight-and-charter-services.html">
                  <p className="SubtitleBold">
                    Air Freight and Charter Services
                  </p>
                </a>
                <a href="./international-and-domestic-trucking.html">
                  <p className="SubtitleBold">
                    International and Domestic Trucking
                  </p>
                </a>
                <a href="./dangerous-goods.html">
                  <p className="SubtitleBold">Dangerous goods</p>
                </a>
                <a href="./logistics-consulting-and-route-analysis.html">
                  <p className="SubtitleBold">
                    Logistics Consulting & Route Analysis
                  </p>
                </a>
                <a href="./warehousing-and-storage.html">
                  <p className="SubtitleBold">
                    Warehousing <br /> & Storage
                  </p>
                </a>
              </div>
            </div>

            <a href="./cases.html">
              <p className="SubtitleBold">Cases</p>
            </a>
            <a href="./sustainability.html">
              <p className="SubtitleBold">Sustainability</p>
            </a>
          </div>

          <div className="A_Button" id="ContactUsBtn" onClick={handleClose}>
            <p className="button">Contact Us</p>
            <div className="A_IconsNavigationIcon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
