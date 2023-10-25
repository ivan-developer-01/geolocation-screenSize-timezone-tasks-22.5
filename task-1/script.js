const button = document.querySelector("button"),
	output = document.querySelector(".output"),
	screenDimensionsParagraph = output.querySelector(".screen-dimensions"),
	geolocationParagraph = output.querySelector(".geolocation");

const ERR_NO_GEOLOCATION_AVAILABLE = "Информация о местоположении недоступна";

button.addEventListener("click", () => {
	const screenDimensions = {
		width: window.screen.width,
		height: window.screen.height,
	};

	screenDimensionsParagraph.innerHTML = `Ширина экрана: ${screenDimensions.width}, высота экрана: ${screenDimensions.height}`;

	geolocationParagraph.classList.remove("error");

	let coords;

	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
			coords = position.coords;
			geolocationParagraph.innerHTML = `Координаты: широта ${coords.latitude}, долгота ${coords.longitude}`;
		}, displayGeolocationNotAvailable);
	} else {
		displayGeolocationNotAvailable();
	}
});

function displayGeolocationNotAvailable() {
	geolocationParagraph.classList.add("error");
	geolocationParagraph.innerHTML = ERR_NO_GEOLOCATION_AVAILABLE;
}
