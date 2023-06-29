<?php

// TODO: Necesito poder darle clases distintas a los items del menú de actividades
// Una opción es usar un menu walker
// Otra opción es usar javascript para inyectar las clases correspondientes de acuerdo
// al nombre de la actividad
// TODO: Necesito que los menús con submenús sean clickables si llevan a otra página
// O podría hacer que se repita dentro del submenú

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
	protected function get_available_menus()
	{
		$menus = wp_get_nav_menus();
		$menu_options = [];

		foreach ($menus as $menu) {
			$menu_options[$menu->slug] = $menu->name;
		}

		return $menu_options;
	}
	protected function register_controls()
	{

		$this->start_controls_section(
			'fitectur_mmw',
			[
				'label' => esc_html__('Mega Menú FITECTUR', 'textdomain'),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'main_menu',
			[
				'label' => 'Seleccione Menú Principal',
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $this->get_available_menus(),
			]
		);
		$this->add_control(
			'activities_menu',
			[
				'label' => 'Seleccione Menú de Actividades',
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $this->get_available_menus(),
			]
		);
		$this->add_control(
			'direct_access_links_menu',
			[
				'label' => 'Seleccione Menú de Accesos Directos',
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => $this->get_available_menus(),
			]
		);

		$this->add_control(
			'open_icon',
			[
				'label' => esc_html__('Ícono de Apertura de Menú', 'textdomain'),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-bars',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'bars',
						'align-right',
						'align-center',
						'align-justify',
						'align-left',
						'stream',
						'dot-circle',
						'elipsis-v',
						'elipsis-h',
						'equals',
						'grip-vertical',
						'cog',

					],
					'fa-regular' => [

						'play-circle',

					],
				],
			]
		);
		$this->add_control(
			'close_icon',
			[
				'label' => esc_html__('Ícono para cerrar Menú', 'textdomain'),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-times',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'times',
						'angle-down',
						'caret-down',
						'caret-square-down',
						'eject',
						'minus',
						'minus-circle',
						'minus-square',
						'power-off',
						'asterisk',
						'window-close',
						'window-minimize',
					],
					'fa-regular' => [
						'times',
						'minus-square',
						'window-close',
						'window-minimize',
					],
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__('Style', 'textdomain'),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'open_icon_color',
			[
				'label' => esc_html__('Color del Ícono de Apertura', 'textdomain'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'#jucux_fitectur_mmw .jucux-fitectur-mega-menu-widget-burger-button' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'close_icon_color',
			[
				'label' => esc_html__('Color del Ícono de Cierre', 'textdomain'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'#jucux_fitectur_mmw .jucux-fitectur-mega-menu-widget-close-button' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();
	}
	public function render()
	{
		$settings = $this->get_settings_for_display();
?>

		<div id="jucux_fitectur_mmw" class="jucux-fitectur-mega-menu-widget jucux-fitectur-mmw">
			<button id="jucux_fitectur_mega_menu_widget_burger_button" class="jucux-fitectur-mega-menu-widget-burger-button">
				<!-- NOTE: SE DEBE CAMBIAR EL ÍCONO -->
				<!-- <i class="fa fa-bars"></i>m -->
				<?php \Elementor\Icons_Manager::render_icon($settings['open_icon'], ['aria-hidden' => 'true']); ?>
			</button>
			<nav id="jucux_fitectur_mmw_nav_modal" class="jucux-fitectur-mmw-nav-modal">
				<button id="jucux_fitectur_mega_menu_widget_close_button" class="jucux-fitectur-mega-menu-widget-close-button">
					<!-- NOTE: SE DEBE CAMBIAR EL ÍCONO -->
					<!-- <i class="fa fa-times"></i>c -->
					<?php \Elementor\Icons_Manager::render_icon($settings['close_icon'], ['aria-hidden' => 'true']); ?>
				</button>
				<div class="jucux-fitectur-mmw-activities-menu-wrapper">
					<?php
					wp_nav_menu(array(
						'menu' => $settings['activities_menu'],
						'depth' => 1,
						'container' => '',
					)) ?>
				</div>
				<div class="jucux-fitectur-mmw-pages-menu-wrapper">

					<?php
					wp_nav_menu(array(
						'menu' => $settings['main_menu'],
						'depth' => 2,
						'container' => '',
						'menu_id' => 'jucux_fitectur_mmw_main_menu',
						'menu_class' => 'jucux-fitectur-mmw-main-menu'
					)) ?>

					<div class="jucux-fitectur-mmw-direct-access-links">
						<h3>Accesos directos:</h3>
						<?php
						wp_nav_menu(array('menu' => $settings['direct_access_links_menu'], 'depth' => 1, 'container' => '')) ?>
					</div>
				</div>
			</nav>
		</div>

<?php


	}
}
