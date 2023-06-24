const jucux_close_nav_button = document.getElementById("jucux_close_nav_button");
const jucux_open_nav_button = document.getElementById("jucux_open_nav_button");
const jucux_nav_modal = document.getElementById("jucux_nav_modal");

jucux_open_nav_button?.addEventListener("click", openNav);
jucux_close_nav_button?.addEventListener("click", closeNav);

function openNav() {
	if (jucux_nav_modal) {
		jucux_nav_modal.style.display = "flex";
		setTimeout(()=>{
			jucux_nav_modal.style.opacity = "100%";
			
		}, 1)
	}
}

function closeNav() {
	if (jucux_nav_modal) {
		jucux_nav_modal.style.opacity = "0";
		setTimeout(()=>{
			jucux_nav_modal.style.display = "none";
		}, 500)
	}
}

// -----------------------------------------
const jucux_main_menu = document.getElementById("jucux_main_menu");

jucux_main_menu?.addEventListener("mouseover", (e)=>{
	if (e.target) {
		// if (e.target.tagName == "a") {
			
		// }
		let element = e.target as HTMLElement;
		if (element.tagName == "A" || element.tagName == "P") {
			console.log(element.id);
			let submenu = element.parentElement?.querySelector(".sub-menu") as HTMLElement;
			console.log(submenu);
			if (element.id) {
				hideSubMenus()
			}
			if (submenu) {
				submenu.style.display = "flex";
			}
		}
	}
})

function hideSubMenus() {
	let submenus = document.querySelectorAll(".jucux-main-menu .sub-menu");
	
	for (let index = 0; index < submenus.length; index++) {
		const submenu = submenus[index] as HTMLElement;
		submenu.style.display = "none"
	}
}

