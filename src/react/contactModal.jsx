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
      namePlaceholder: "Your name is here",
      location: "Location",
      locationPlaceholder: "Country is here",
      phone: "Phone number",
      phonePlaceholder: "+1 111 111 11 11",
      email: "Email",
      emailPlaceholder: "Email is here",
      message: "Message",
      messagePlaceholder: "We'd like to order ...",
      submit: "Contact Us",
      linkedin: "Visit Our LinkedIn",
      alert: "Your message has been sent!",
      error: "Please fill in all fields.",
    },
    Ru: {
      heading: "Связаться с нами",
      fullName: "Полное имя",
      namePlaceholder: "Ваше имя",
      location: "Локация",
      locationPlaceholder: "Страна",
      phone: "Телефон",
      phonePlaceholder: "+7 999 999 99 99",
      email: "Эл. почта",
      emailPlaceholder: "Введите email",
      message: "Сообщение",
      messagePlaceholder: "Мы хотели бы заказать ...",
      submit: "Отправить",
      linkedin: "Мы в LinkedIn",
      alert: "Форма отправлена!",
      error: "Пожалуйста, заполните все поля.",
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
      "https://script.google.com/macros/s/AKfycbzLWm8kZwPHMkNg4PaA3_pD9ogJc1lZaenThqh6rUdrb5OCmwCzaFFE2M68snvCMUNVxw/exec",
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
            <div className="W_FormDownside">
              <button type="submit" className="A_Button">
                <p className="button">{t.submit}</p>
                <div className="A_IconsNavigationIcon Grey"></div>
              </button>
              <div className="A_OutButton">
                <p className="button">{t.linkedin}</p>
                <div className="A_IconsNavigationIcon"></div>
              </div>
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
