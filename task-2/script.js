const button = document.querySelector("button"),
	output = document.querySelector(".output"),
	timezoneParagraph = output.querySelector(".timezone"),
	datetimeParagraph = output.querySelector(".datetime");

const apiKey = "32bcd4a6e4b548968e7afcdb682ac679";

button.addEventListener("click", () => {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
			const { coords } = position;
			displayData(coords);
		});
	}
});

function displayData(coords) {
	const url = formatApiURL(apiKey, coords.latitude, coords.longitude);

	fetch(url)
		.then((response) => response.json())
		.then(writeData);
}

function writeData(timezoneData) {
	timezoneParagraph.innerHTML = `Временная зона: ${timezoneData.timezone}`;
	datetimeParagraph.innerHTML = `Местные дата и время: ${timezoneData.date_time_txt}`;
}

function formatApiURL(apiKey, latitude, longitude) {
	return `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${latitude}&long=${longitude}`;
}
