<?php

/*
 * Basic Menu to understand how wordpress menus work
 */
class Basic_Menu_Widget extends \Elementor\Widget_Base {
	public function get_name()
	{
		return 'basic-menu';
	}
	public function get_title()
	{
		return esc_html__('Basic Menu');
	}
	public function get_icon()
	{
		return 'eicon-nav-menu';
	}
	public function get_categories()
	{
		return ['jucux'];
	}
	public function render(){
		echo wp_nav_menu();
	}
}