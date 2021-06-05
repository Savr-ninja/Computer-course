document.getElementById("trigger").onclick = function() {
  open()
};
function open() {
	document.getElementById("menu-body").classList.toggle("show");
	document.getElementById("burger").classList.toggle("invisible");
  };

  document.getElementById("click").onclick = function() {
	close()
  };
  
  function close() {
	document.getElementById("menu-body").classList.remove("show");
	document.getElementById("burger").classList.remove("invisible");
	document.getElementByCLass("menu__close").classList.toggle("invisible");
  }
