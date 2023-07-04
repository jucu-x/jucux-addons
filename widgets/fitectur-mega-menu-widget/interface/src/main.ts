(() => {
    // ABRIR/CERRAR MEGA MENÚ-----------------------------------------

	const burger_buttons = document.querySelectorAll(".jucux-fitectur-mega-menu-widget-burger-button");
	const close_buttons = document.querySelectorAll(".jucux-fitectur-mega-menu-widget-close-button");

	burger_buttons.forEach(burger_button => {
		burger_button.addEventListener("click", openNav);
	});
	close_buttons.forEach(close_button => {
		close_button.addEventListener("click", closeNav);
	});
    

    function openNav(this:HTMLButtonElement) {
		
		let nav_modal = this.parentElement?.querySelector(".jucux-fitectur-mmw-nav-modal") as HTMLElement;
		if (nav_modal) {
			nav_modal.style.display = "flex";
			setTimeout(() => {
                nav_modal.style.opacity = "100%";
            }, 1);
		}
        document.body.style.overflow = "hidden";
    }

    function closeNav(this: HTMLButtonElement) {
		let nav_modal = this.parentElement as HTMLElement;
		if (nav_modal) {
			nav_modal.style.opacity = "0";
			setTimeout(() => {
				nav_modal.style.display = "none";
			}, 500);
		}
        document.body.style.overflow = "auto";
    }

    // MOSTRAR SUBMENUS AL HACER HOVER-----------------------------------------

    
	const main_menus = document.querySelectorAll(".jucux-fitectur-mmw-main-menu");
	main_menus.forEach(main_menu => {
		(main_menu as HTMLElement).addEventListener("mouseover", showSubMenu);
	});
    

    function showSubMenu(e: MouseEvent) {
        if (e.target) {
            let element = e.target as HTMLElement;
            if (element.tagName == "A" || element.tagName == "P") {
                let submenu = element.parentElement?.querySelector(".sub-menu") as HTMLElement;

                if (!element.parentElement?.parentElement?.classList.contains("sub-menu")) {
                    hideSubMenus(submenu);
                }
                if (submenu) {
                    submenu.style.display = "flex";
                    setTimeout(() => {
                        submenu.style.left = "50%";
                        submenu.style.opacity = "100%";
                    }, 50);
                }
            }
        }
    }

    function hideSubMenus(exceptElement: HTMLElement) {
        let submenus = document.querySelectorAll(".jucux-fitectur-mmw-main-menu .sub-menu");

        for (let index = 0; index < submenus.length; index++) {
            const submenu = submenus[index] as HTMLElement;
            if (exceptElement != submenu) {
                submenu.style.left = "0%";
                submenu.style.opacity = "0%";
                submenu.style.display = "none";
            }
        }
    }

    // PONER COLOR AL MENÚ DE ACTIVIDADES

    const activities_wrappers = document.querySelectorAll(".jucux-fitectur-mmw-activities-menu-wrapper");

    for (let i = 0; i < activities_wrappers.length; i++) {
        const activities_wrapper = activities_wrappers[i] as HTMLElement;
        const activities_list = activities_wrapper.children[0] as HTMLUListElement;
        const activities_items = activities_list.children;

        for (let j = 0; j < activities_items.length; j++) {
            const activity = activities_items[j].children[0] as HTMLAnchorElement;
            switch (activity.textContent?.toLowerCase()) {
                case "networking":
                    activity.classList.add("jucux-fitectur-mmw-comercial-area-activity");
                    break;
                case "workshop":
                    activity.classList.add("jucux-fitectur-mmw-comercial-area-activity");
                    break;
                case "outlet turístico":
                    activity.classList.add("jucux-fitectur-mmw-comercial-area-activity");
                    break;
                case "construyendo iniciativas":
                    activity.classList.add("jucux-fitectur-mmw-academic-area-activity");
                    break;
                case "movimiento naranja":
                    activity.classList.add("jucux-fitectur-mmw-cultural-area-activity");
                    break;
                case "festival gastronómico":
                    activity.classList.add("jucux-fitectur-mmw-cultural-area-activity");
                    break;

                default:
                    activity.classList.add("jucux-fitectur-mmw-cultural-area-activity");
                    break;
            }
            
        }
    }
})();
