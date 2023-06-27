<?php
/*
Plugin Name: Jucux Addons
Plugin URI: https://www.jucux.com
Description: Elementor Addons mafe by the Jucux team
Version: 0.0.1
Author: Carlos Arena
Author URI: https://www.jucux.com
Text Domain: jucux-addons
*/

if (!defined('ABSPATH')) {
	exit;
}

class JucuxAddons
{
	
	
	function __construct()
	{
		error_log(__FILE__);
		error_log(plugins_url('', __FILE__));
		error_log(plugin_dir_url(__FILE__));
		// Register Category
		add_action('elementor/elements/categories_registered', [$this, 'add_custom_widget_categories']);
		// Register Widgets
		add_action('elementor/widgets/register', [$this, 'register_widgets']);
		// add styles and scripts
		add_action( 'wp_enqueue_scripts', [$this, 'widgets_dependencies'] );
	}

	public function add_custom_widget_categories($elements_manager)
	{
		$elements_manager->add_category(
			'jucux',
			[
				'title' => esc_html__('Jucux', 'jucux-addons'),
				'icon' => 'fa fa-plug',
			]
		);
	}

	public function register_widgets($widgets_manager){
		// Importing Widgets
		require_once(__DIR__ . '/widgets/hi-widget.php');
		require_once(__DIR__ . '/widgets/basic-menu-widget.php');
		require_once(__DIR__ . '/widgets/fitectur-mega-menu-widget/fitectur-mega-menu-widget.php');

		// Registering Widgets
		$widgets_manager -> register(new Hi_Widget());
		$widgets_manager -> register(new Basic_Menu_Widget());
		$widgets_manager -> register(new Fitectur_Mega_Menu_Widget());
	}

	public function widgets_dependencies() {

		/* Scripts */
		wp_register_script( 'fitectur-mega-menu-widget-script', plugins_url( 'widgets/fitectur-mega-menu-widget/dist/main.js', __FILE__ ) );
		// wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
		// wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
	
		/* Styles */
		wp_register_style( 'fitectur-mega-menu-widget-style', plugins_url( 'widgets/fitectur-mega-menu-widget/dist/style.css', __FILE__ ) );
		// wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
		// wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
	
	}
}

// TODO: Learn about namespaces
new JucuxAddons();