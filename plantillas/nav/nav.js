(()=>{

	const jucux_addons_menu_main = document.getElementById("jucux_addons_menu_main");
	const jucux_addons_nav_modal = document.getElementById("jucux_addons_nav_modal");
	const jucux_addons_menu_button = document.getElementById("jucux_addons_menu_button");

	jucux_addons_menu_button.addEventListener("click", toggleNavModal)

	function toggleNavModal() {
		console.log("button was touched");
		if (jucux_addons_nav_modal.style.display == "none") {
			
			jucux_addons_nav_modal.style.display = "block";
			jucux_addons_nav_modal.style.left = "0vw";
			
			return;
		}
		
		jucux_addons_nav_modal.style.display = "none";
		jucux_addons_nav_modal.style.left = "-100vw";
		
	}

})();


