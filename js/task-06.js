const input = document.querySelector("#validation-input");


input.addEventListener("blur", (event) => {
    if (Number(input.dataset.length) === event.currentTarget.value.length ) {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
    }
})
