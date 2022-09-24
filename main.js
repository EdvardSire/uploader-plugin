document.querySelector("#btn").addEventListener("click", () => {
	fetch("http://localhost:3000", {
		method: "POST",
		body: document.getElementById("input").innerText
	})
	.then(res => res.text())
	.then(data => console.log(data))
});
