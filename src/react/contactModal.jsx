import React, { useState, useEffect } from "react";
import "../style.css";

export default function ContactModal() {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("Eng");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: "",
  });

  const translations = {
    Eng: {
      heading: "Contact Us",
      fullName: "Full Name",
      namePlaceholder: "Your name",
      location: "Location",
      locationPlaceholder: "Location",
      phone: "Phone number",
      phonePlaceholder: "Phone number",
      email: "Email",
      emailPlaceholder: "Email",
      message: "Message",
      messagePlaceholder: "I need to deliver...",
      submit: "Contact Us",
      linkedin: "Visit Our LinkedIn",
      alert: "Your message has been sent!",
      error: "Please fill in all fields.",
      privacy: "By submitting this form you agree to the privacy policy",
    },
    Ru: {
      heading: "Связаться с нами",
      fullName: "Полное имя",
      namePlaceholder: "Имя и Фамилия",
      location: "Локация",
      locationPlaceholder: "Локация",
      phone: "Телефон",
      phonePlaceholder: "Номер телефона",
      email: "Эл. почта",
      emailPlaceholder: "Электронная почта",
      message: "Сообщение",
      messagePlaceholder: "Мне нужно доставить...",
      submit: "Отправить",
      linkedin: "Мы в LinkedIn",
      alert: "Форма отправлена!",
      error: "Пожалуйста, заполните все поля.",
      privacy:
        "Отправляя данную форму вы соглашаетесь с политикой конфиденциальности",
    },
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "Ru" || savedLang === "Eng") {
      setLanguage(savedLang);
    }

    const handleClick = (e) => {
      const target = e.target.closest(
        "#ContactUsBtn, #inTouch, #ContactDiscuss"
      );
      if (target) {
        setIsActive(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (hasEmptyFields) {
      alert(translations[language].error);
      return;
    }

    setIsLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbzQYoYu6ssuuW4E0-Pg1unD2RMLbKFl45OawBBJSO1OfO7lHAiLaum99ZAG0mbYwqAO/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    ).then(() => {
      setIsLoading(false);
      setTimeout(() => {
        alert(translations[language].alert);
      }, 50);
      setFormData({
        name: "",
        location: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsActive(false);
    });
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const t = translations[language];

  return (
    <>
      <div
        className={`ContactModal ${isActive ? "is-active" : ""}`}
        onClick={(e) => {
          if (e.target.classList.contains("ContactModal")) handleClose();
        }}
      >
        <div className="O_Form">
          <div className="A_ModalCloseIcon" onClick={handleClose}></div>
          <h2 className="Footer">{t.heading}</h2>
          <form onSubmit={handleSubmit}>
            <div className="W_FormContent">
              <div className="W_FormContentRow">
                <div className="M_FormInput">
                  <div className="A_FormInputLabel">{t.fullName}</div>
                  <input
                    type="text"
                    name="name"
                    className="A_FormInputFieldReact"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="M_FormInput">
                  <div className="A_FormInputLabel">{t.location}</div>
                  <input
                    type="text"
                    name="location"
                    className="A_FormInputFieldReact"
                    placeholder={t.locationPlaceholder}
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="W_FormContentRow">
                <div className="M_FormInput">
                  <div className="A_FormInputLabel">{t.phone}</div>
                  <input
                    type="tel"
                    name="phone"
                    className="A_FormInputFieldReact"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="M_FormInput">
                  <div className="A_FormInputLabel">{t.email}</div>
                  <input
                    type="email"
                    name="email"
                    className="A_FormInputFieldReact"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="M_FormInput">
                <div className="A_FormInputLabel">{t.message}</div>
                <input
                  type="text"
                  name="message"
                  className="A_FormInputFieldReact"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="GigaFlex">
              <div className="W_FormDownside">
                <button type="submit" className="A_Button" id="sendForm">
                  <p className="button">{t.submit}</p>
                  <div className="A_IconsNavigationIcon Grey"></div>
                </button>
                <div className="A_OutButton">
                  <a
                    href="https://www.linkedin.com/company/yeta-llp/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="button">{t.linkedin}</p>
                  </a>
                  <div className="A_IconsNavigationIcon"></div>
                </div>
              </div>
              <p className="footerPar">{t.privacy}</p>
            </div>
          </form>
        </div>
      </div>

      {isLoading && (
        <div className="LoaderOverlay">
          <div className="LoaderSpinner"></div>
        </div>
      )}
    </>
  );
}
