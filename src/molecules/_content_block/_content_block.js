/**
 * @file Defines behaviours for a content_block module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery'
], function ($) {

	var contentBlock = function (contentBlock) {
		var self = this;
		self.$clickSelector = $(contentBlock);
	};

	contentBlock.prototype = {

		expand: function(componentTask){
			self.$contentBlock.addClass("expand");
		},

		close: function(selector){
			self.$contentBlock.removeClass("expand");
		}

	};

	return contentBlock;
});

