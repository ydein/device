	var productLink = document.querySelector(".catalog-item-show");
	var productPopup = document.querySelector(".catalog-item-hover-modal");
	var productClose = productPopup.querySelector(".modal-close");	

	productLink.addEventListener("mouseover", function(evt) {
		evt.preventDefault();
		productPopup.classList.add("modal-flex");
	});

	productLink.addEventListener("mouseout", function(evt) {
		evt.preventDefault();
		productPopup.classList.remove("modal-flex");
	});

