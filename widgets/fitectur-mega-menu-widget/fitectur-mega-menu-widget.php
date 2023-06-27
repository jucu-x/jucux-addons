<?php

/*
 * Generic Widget to have a starting point for new widgets
 */
class Fitectur_Mega_Menu_Widget extends \Elementor\Widget_Base
{
	public function get_name()
	{
		return 'fitectur-mega-menu-widget';
	}
	public function get_title()
	{
		return esc_html__('MegaMenu FITECTUR');
	}
	public function get_icon()
	{
		return 'eicon-menu-bar';
	}
	public function get_categories()
	{
		return ['jucux'];
	}
	public function get_script_depends()
	{
		return ['fitectur-mega-menu-widget-script'];
	}
	public function get_style_depends()
	{
		return ['fitectur-mega-menu-widget-style'];
	}
	public function render()
	{
?>

		<div id="jucux_fitectur_mmw" class="jucux-fitectur-mega-menu-widget jucux-fitectur-mmw">
			<button id="jucux_fitectur_mega_menu_widget_burger_button" class="jucux-fitectur-mega-menu-widget-burger-button">
				<!-- NOTE: SE DEBE CAMBIAR EL ÍCONO -->
				<i class="fa fa-bars"></i>m
			</button>
			<nav id="jucux_fitectur_mmw_nav_modal" class="jucux-fitectur-mmw-nav-modal">
				<button id="jucux_fitectur_mega_menu_widget_close_button" class="jucux-fitectur-mega-menu-widget-close-button">
					<!-- NOTE: SE DEBE CAMBIAR EL ÍCONO -->
					<i class="fa fa-times"></i>c
				</button>
				<div class="jucux-fitectur-mmw-activities-menu-wrapper">
					<ul>
						<li>
							<a class="jucux-fitectur-mmw-comercial-area-activity" href="#">Networking</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-comercial-area-activity" href="#">Workshop</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-comercial-area-activity" href="#">Outlet Turístico</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-academic-area-activity" href="#">Construyendo Iniciativas</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-cultural-area-activity" href="#">Movimiento Naranja</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-cultural-area-activity" href="#">Festival Gastronómico</a>
						</li>
					</ul>
				</div>
				<div class="jucux-fitectur-mmw-pages-menu-wrapper">
					<ul id="jucux_fitectur_mmw_main_menu" class="jucux-fitectur-mmw-main-menu">
						<li>
							<a class="jucux-fitectur-mmw-main-menu-link" href="#">Inicio</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-main-menu-link" href="#">Sobre FITECTUR</a>
						</li>
						<li>
							<a class="jucux-fitectur-mmw-main-menu-link" href="#">Área Comercial</a>
							<ul class="sub-menu">
								<li>
									<a href="#">Networking</a>
								</li>
								<li>
									<a href="#">Workshop</a>
								</li>
								<li>
									<a href="#">Outlet Turístico</a>
								</li>
							</ul>
						</li>
						<li>
							<p class="jucux-fitectur-mmw-main-menu-link">Área Académica</p>
							<ul class="sub-menu">
								<li>
									<a href="#">Construyendo Iniciativas</a>
								</li>
								<li>
									<a href="#">Congreso Internacional</a>
								</li>
							</ul>
						</li>
						<li>
							<p class="jucux-fitectur-mmw-main-menu-link">Área Cultural</p>
							<ul class="sub-menu">
								<li>
									<a href="#">Movimiento Naranja</a>
								</li>
								<li>
									<a href="#">Festival Gastronómico</a>
								</li>
							</ul>
						</li>

						<li>
							<a class="jucux-fitectur-mmw-main-menu-link" href="#">Preguntas Frecuentes</a>
						</li>
					</ul>
					<div class="jucux-fitectur-mmw-direct-access-links">
						<h3>Accesos directos:</h3>
						<ul>
							<li>
								<a href="#">CONGRESO INTERNACIONAL</a>
							</li>
							<li>
								<a href="#">STANDS</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

<?php
	}
}
