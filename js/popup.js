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

	//TABS
	(function($) {
	$(function() {
  
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
  
});
})(jQuery);

