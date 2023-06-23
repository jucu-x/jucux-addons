<?php


class Hi_Widget extends \Elementor\Widget_Base {
	public function get_name()
	{
		return 'hi-widget';
	}
	public function get_title()
	{
		return esc_html__('Hi');
	}
	public function get_icon()
	{
		return 'eicon-person';
	}
	public function get_categories()
	{
		return ['jucux'];
	}
	public function render(){
		?>
		
		<h1>HI! I'm Carlos</h1>
		
		<?php
	}
}