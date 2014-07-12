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

	var headerTask = function(){
		$(".content-wrapper").css("overflow", "visible");

		if(!$("html").hasClass("lt-ie9")){

			html2canvas($("body"), { 
				onrendered: function(canvas) {
					$(".blurheader").append(canvas);
					$("canvas").attr("id","canvas");
					stackBlurCanvasRGB('canvas', 0, 0, $("canvas").width(), $("canvas").height(), 50);
					$(".content-wrapper").css("overflow", "scroll");
					window.elementQuery.refresh();
				}
			});

			var myScroll = new IScroll('.content-wrapper',  { probeType: 3, mouseWheel: true, click: true });
			myScroll.on('scroll', function(){
				$("canvas").css("-webkit-transform", "translatey(" + this.y + "px)");
			});
			myScroll.on('scrollEnd', function(){
				$("canvas").css("-webkit-transform", "translatey(" + this.y + "px)");
			});
		}else{
			window.elementQuery.refresh();
		}

		$("header").on("click", "a", function(e){
			e.stopPropagation();
		});

	};

	componentTasks.registerTask({
		selector: 'header',
		task: headerTask
	});

	return {};

});
