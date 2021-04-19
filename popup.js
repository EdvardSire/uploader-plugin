//document.getElementById("body").innerText += "damn";

document.querySelector("#btn").addEventListener("click", () => {
	//console.log(document.querySelector("#input").value);

	fetch("http://localhost:3000", {
		method: "POST",
		body: "dababy"
	})
	.then(res => res.text())
	.then(data => console.log(data))
});
