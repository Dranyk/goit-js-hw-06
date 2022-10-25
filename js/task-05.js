const inputName = document.querySelector('input#name-input');
let spanName = document.querySelector('span#name-output');

inputName.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() !== '') {
    spanName.textContent = event.currentTarget.value;
    }
    else {
        spanName.textContent = "Anonymous";
    }
})

