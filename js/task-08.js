const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email: { value: email },
        password: { value: password }, }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }

console.log({ email, password });
  event.currentTarget.reset();
});
