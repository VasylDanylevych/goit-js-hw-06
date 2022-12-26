const input = document.querySelector("#validation-input");
const length = document.querySelector("#validation-input");


console.log(input.data-length.value)
if (input.value.length === input.dataset.value) {
    input.style.borderColor = "green";
} else {
    input.style.borderColor = "red";

} 