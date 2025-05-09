import { useEffect, useRef } from "react";

export default function Navbar() {
  const menuRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
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

  const services = [
    { title: "Multimodal Solutions", url: "./service-01.html" },
    { title: "Air Freight and Charter Services", url: "./service-02.html" },
    { title: "International and Domestic Trucking", url: "./service-03.html" },
    { title: "Dangerous goods", url: "./service-04.html" },
    {
      title: "Logistics Consulting & Route Analysis",
      url: "./service-05.html",
    },
    { title: "Warehousing & Storage", url: "./service-06.html" },
  ];

  return (
    <div className="O_Header">
      <div className="M_Box">
        <a href="./about.html">
          <p className="button">About</p>
        </a>
        <div className="A_BoxDrop" ref={dropRef}>
          <div className="Wrap">
            <a href="./services.html">
              <p className="button">Services</p>
            </a>
            <div className="A_BoxIcon"></div>
          </div>
          <div className="A_Menu" ref={menuRef}>
            {services.map((service, i) => (
              <div className="WrapDrop" key={i}>
                <img
                  src="./A_NavbarServicesIcon.svg"
                  className="A_NavbarServicesIcon"
                  alt="Globe icon"
                />
                <a href={service.url}>
                  <p className="button">{service.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <a href="./cases.html">
          <p className="button">Cases</p>
        </a>
        <a href="./sustainability.html">
          <p className="button">Sustainability</p>
        </a>
      </div>
      <a href="./index.html">
        <div className="A_Logo"></div>
      </a>
      <div className="A_BoxRight" id="ContactUsBtn">
        <div className="A_Link">
          <p className="button">Contact Us</p>
        </div>
      </div>
      <div className="BurgerMenu"></div>
    </div>
  );
}
