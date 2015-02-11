/**
 * @file Defines behaviours for a nav_items module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery',
	'offcanvasMenu',
	'componentTasks',
	'jquery-hammer'
], function ($, offcanvasMenu, componentTasks, jQHammer) {

	navTask = function(){
		var ocM = new offcanvasMenu('header nav .menu');
		$('header nav a').hammer().on('tap', function(event){
			event.preventDefault();
			event.stopPropagation();
			if($(event.target).text() == 'menu'){
				ocM.toggle();
			}else{
				if(event.target.getAttribute('href') == '#'){
					window.location.href = 'index.html';
				}else{
					window.location.href = event.target.getAttribute('href');
				}
			}
		});
	};

	componentTasks.registerTask({
		selector: '.menu',
		task: navTask
	});

	return {}; // Replace this return value with whatever class/function definition you wish this module to make available

});
