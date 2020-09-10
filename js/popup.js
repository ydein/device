	var writeLink = document.querySelector(".contacts-link");
	var writePopup = document.querySelector(".write-us");
	var writeClose = writePopup.querySelector(".modal-close");	

	writeLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.add("modal-show");
	});

	writeClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.remove("modal-show");
	});


	var mapLink = document.querySelector(".contacts-map-link");
	var mapPopup = document.querySelector(".modal-map");
	var mapClose = mapPopup.querySelector(".modal-close");	

	mapLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});

