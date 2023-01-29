function toast(event){
	const data = new URLSearchParams();
	var xhttp = new XMLHttpRequest();
	var formData = new FormData(event.target);
	var name = formData.get('name');
	var path = "server.js";
	for (const pair of formData) {
    data.append(pair[0], pair[1]);
}
    xhttp.open("POST", "http://localhost:8000/app.js", true);
	xhttp.send(data);
	
  }