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
    { title: "Multimodal Services", url: "./multimodal-solutions.html" },
    {
      title: "Air Freight and Charter Services",
      url: "./air-freight-and-charter-services.html",
    },
    {
      title: "International and Domestic Trucking",
      url: "./international-and-domestic-trucking.html",
    },
    { title: "Dangerous goods", url: "./dangerous-goods.html" },
    {
      title: "Logistics Consulting & Route Analysis",
      url: "./logistics-consulting-and-route-analysis.html",
    },
    {
      title: "Warehousing & Storage",
      url: "./warehousing-and-storage.html",
    },
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
                  src={`./navbarDropdown/A_NavbarServicesIcon0${i + 1}.svg`}
                  className="A_NavbarServicesIcon"
                  alt="Service icon"
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
      <div className="BurgerMenu" id="BurgerOpen"></div>
    </div>
  );
}
