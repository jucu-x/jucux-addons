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
		// Register Category
		add_action('elementor/elements/categories_registered', [$this, 'add_custom_widget_categories']);
		// Register Widgets
		add_action('elementor/widgets/register', [$this, 'register_widgets']);
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

		// Registering Widgets
		$widgets_manager -> register(new Hi_Widget());
	}
}

// TODO: Learn about namespaces
new JucuxAddons();