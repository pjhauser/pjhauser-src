/**
 * @file Defines behaviours for a content_block module
 * @author Phil Hauser phil.hsr@gmail.com
 */

define([
	'jquery'
], function ($) {

	var ContentBlockHelper = function (contentBlock) {
		var self = this;
		self.$clickSelector = $(contentBlock);
	};

	ContentBlockHelper.prototype = {

		expand: function(componentTask){
			self.$contentBlock.addClass("expand");
		},

		close: function(selector){
			self.$contentBlock.removeClass("expand");
		}

	};

	return ContentBlockHelper;
});

