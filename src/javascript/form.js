document.querySelector("#sendForm").addEventListener("click", () => {
  const formFields = document.querySelectorAll(".A_FormInputField");
  const data = {};

  formFields.forEach((field) => {
    data[field.name] = field.value;
  });

  fetch(
    "https://script.google.com/macros/s/AKfycbzLWm8kZwPHMkNg4PaA3_pD9ogJc1lZaenThqh6rUdrb5OCmwCzaFFE2M68snvCMUNVxw/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then(() => {
    alert("Данные отправлены!");
  });
});
