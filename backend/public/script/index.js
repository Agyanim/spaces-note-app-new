const tryBtnElement = document.querySelector("#try-btn");
const tryContentElement = document.querySelector("#try-content");


tryBtnElement.addEventListener("click", () => {
	tryContentElement.classList.toggle("show-try");
});

