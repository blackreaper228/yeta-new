import React, { useState, useEffect } from "react";
import "../style.css";

export default function ContactModal() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest(
        "#ContactUsBtn, #inTouch, #ContactDiscuss"
      );
      if (target) {
        setIsActive(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
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
    console.log("Form data:", formData);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`ContactModal ${isActive ? "is-active" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("ContactModal")) {
          handleClose();
        }
      }}
    >
      <div className="O_Form">
        <div className="A_ModalCloseIcon" onClick={handleClose}></div>
        <h2 className="Footer">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="W_FormContent">
            <div className="W_FormContentRow">
              <div className="M_FormInput">
                <div className="A_FormInputLabel">Full Name</div>
                <input
                  type="text"
                  name="fullName"
                  className="A_FormInputField"
                  placeholder="Your name is here"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="M_FormInput">
                <div className="A_FormInputLabel">Location</div>
                <input
                  type="text"
                  name="location"
                  className="A_FormInputField"
                  placeholder="Country is here"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="W_FormContentRow">
              <div className="M_FormInput">
                <div className="A_FormInputLabel">Phone number</div>
                <input
                  type="tel"
                  name="phone"
                  className="A_FormInputField"
                  placeholder="+1 111 111 11 11"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="M_FormInput">
                <div className="A_FormInputLabel">Email</div>
                <input
                  type="email"
                  name="email"
                  className="A_FormInputField"
                  placeholder="Email is here"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="M_FormInput">
              <div className="A_FormInputLabel">Message</div>
              <input
                type="text"
                name="message"
                className="A_FormInputField"
                placeholder="We'd like to order ..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="W_FormDownside">
            <button type="submit" className="A_Button">
              <p className="button">Contact Us</p>
              <div className="A_IconsNavigationIcon Grey"></div>
            </button>
            <div className="A_OutButton">
              <p className="button">Visit Our LinkedIn</p>
              <div className="A_IconsNavigationIcon"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
