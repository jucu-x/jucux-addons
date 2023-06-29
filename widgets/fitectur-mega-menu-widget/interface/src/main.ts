(() => {
    // ABRIR/CERRAR MEGA MENÚ-----------------------------------------

    const jucux_fitectur_mega_menu_widget_burger_button = document.getElementById(
        "jucux_fitectur_mega_menu_widget_burger_button"
    );
    const jucux_fitectur_mega_menu_widget_close_button = document.getElementById(
        "jucux_fitectur_mega_menu_widget_close_button"
    );
    const jucux_fitectur_mmw_nav_modal = document.getElementById("jucux_fitectur_mmw_nav_modal");

    jucux_fitectur_mega_menu_widget_burger_button?.addEventListener("click", openNav);
    jucux_fitectur_mega_menu_widget_close_button?.addEventListener("click", closeNav);

    function openNav() {
        if (jucux_fitectur_mmw_nav_modal) {
            jucux_fitectur_mmw_nav_modal.style.display = "flex";
            setTimeout(() => {
                jucux_fitectur_mmw_nav_modal.style.opacity = "100%";
            }, 1);
        }
    }

    function closeNav() {
        if (jucux_fitectur_mmw_nav_modal) {
            jucux_fitectur_mmw_nav_modal.style.opacity = "0";
            setTimeout(() => {
                jucux_fitectur_mmw_nav_modal.style.display = "none";
            }, 500);
        }
    }

    // MOSTRAR SUBMENUS AL HACER HOVER-----------------------------------------

    const jucux_fitectur_mmw_main_menu = document.getElementById("jucux_fitectur_mmw_main_menu");

    jucux_fitectur_mmw_main_menu?.addEventListener("mouseover", showSubMenu);

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
})();
