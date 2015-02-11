/**
 * @file Defines behaviours for a header module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery',
	'componentTasks',
	'html2canvas',
	'StackBlur',
	'iscroll'
], function ($, componentTasks, html2canvas, StackBlur, iscroll) {

	$("header").on("click", "a", function(e){
		e.stopPropagation();
	});

	return {};

});
