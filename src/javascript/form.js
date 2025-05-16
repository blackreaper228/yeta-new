document.querySelector("#sendForm").addEventListener("click", () => {
  const formFields = document.querySelectorAll(".A_FormInputField");
  const data = {};

  const lang = localStorage.getItem("lang") || "Eng";
  const alertMessages = {
    Eng: "Your message has been sent!",
    Ru: "Форма отправлена!",
  };
  const errorMessages = {
    Eng: "Please fill in all fields.",
    Ru: "Пожалуйста, заполните все поля.",
  };

  let hasEmpty = false;

  formFields.forEach((field) => {
    const value = field.value.trim();
    const name = field.name;

    if (!value) hasEmpty = true;
    if (name) data[name] = value;
  });

  if (hasEmpty) {
    alert(errorMessages[lang] || errorMessages.Eng);
    return;
  }

  const loader = document.getElementById("Loader");
  if (loader) loader.style.display = "flex";

  fetch(
    "https://script.google.com/macros/s/AKfycbzQYoYu6ssuuW4E0-Pg1unD2RMLbKFl45OawBBJSO1OfO7lHAiLaum99ZAG0mbYwqAO/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then(() => {
    if (loader) loader.style.display = "none";
    setTimeout(() => {
      alert(alertMessages[lang] || alertMessages.Eng);
    }, 50);
  });
});
