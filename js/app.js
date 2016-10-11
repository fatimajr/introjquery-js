var cargarPagina = function(){
	var links = document.querySelectorAll("a");

	for(var i = 0 ; i < links.length; i++){
		var href = links[i].getAttribute("href");
		var thumb = youtube.generateThumbnailUrl(href);
		var img = document.createElement("img");
		img.setAttribute("src", thumb);
		links[i].appendChild(img);
	}
};

window.addEventListener("load", cargarPagina);
