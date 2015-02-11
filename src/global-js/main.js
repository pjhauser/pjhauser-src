/**
 * @file Sets up RequireJS config and bootstraps the website
 */

if (typeof requirejs == 'undefined'){
	var commonJS = module;
}

var config = {
	
	'paths': {
		'base':				'vendor/Base',
		'jquery':			'vendor/jquery',
		'text':				'vendor/require-text',
		'elementquery':		'vendor/elementQuery',
		'html5shiv':		'ie/html5shiv',
		'html2canvas':		'vendor/html2canvas',
		'StackBlur':		'vendor/StackBlur',
		'iscroll':			'vendor/iscroll',
		'hammer':			'vendor/hammer',
		'jquery-hammer':	'vendor/jquery.hammer-full',
		'work':				'vendor/grid',
		'Modernizr':		'vendor/modernizr.custom'
	},
	
	'shim': {
		'jquery': {
			'exports': '$'
		},
		'elementquery': {
			'deps': ['jquery'],
			'exports': 'elementQuery'
		},
		'html5shiv':{
			'exports' : 'h5s'
		},
		'html2canvas':{
			'exports' : 'html2canvas'
		},
		'StackBlur': {
			'exports' : 'StackBlur'
		},
		'iscroll': {
			'exports' : 'iscroll'
		},
		'work': {
			'exports' : 'work'
		},
		'Modernizr': {
			'exports' : 'Modernizr'
		}
	},
	
	'name': 'main',
	'wrap': true
	
};



// Loading via require or node?
if (!commonJS) {
	// Require, set up
	requirejs.config(config);

	requirejs([
		'vendor/console',
		'vendor/domReady',
		'jquery',
		'elementquery',
		'html5shiv',
		'componentList'
	],
		
	function (consolePolyfill, domReady, $, eq, h5s, componentList) {
		consolePolyfill.run();
		console.log('[main.js] Website init');

		// init element query
		window.elementQuery.init();

		// refresh element query on window resize
		// NOTE: we use a jQuery plugin for the resize event
		// because it it far less resource intensive.
		$.windowResize(window.elementQuery.refresh);

		domReady(function () {
			// Get the list of components and 
			// run their tasks
			componentList.runComponentTasks();

			if(window.location.pathname == "/fsl.html"){
				if(!localStorage.getItem("fslPermission")){
					localStorage.setItem("requestedFsl", true);
					window.location.href = "/";
				}else{
					$("article").removeClass("fsl");
				}
			}


			if(window.location.pathname == "/"){
				if(localStorage.getItem("requestedFsl") && !localStorage.getItem("fslPermission")){
					var fsl = prompt("Oooo, to see this project please enter the password", "Password");
					if (fsl == "letmein") {
						localStorage.setItem("fslPermission", true);
						window.location.href = "/fsl.html";
					}
				}
			}




			$(window).on("aceComplete", function(){
				console.log("[ACE COMPLETE TRIGGERED]");
				$("body").addClass("ace-complete");
			});
		});

	});
} else {
	// Node, export config
	console.log("Node export config");
	module.exports = config;
}

