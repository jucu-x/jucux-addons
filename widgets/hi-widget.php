<?php

/*
 * Generic Widget to have a starting point for new widgets
 */
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
		
		<h1>HI! I'm Carlos, and I work for the Jucux company <i class="fa fa-bomb"></i></h1>
		
		<?php
	}
}