/*global angular */

/**
 * The main DarkSide app module
 *
 * @type {angular.Module}
 */

angular = require('angular');
require('angular-route');
require('../dist/templateCachePartials');

angular.module('darksideapp', ['ngRoute','todoPartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: '/partials/darksideapp-index.html',
			resolve: {
				store: ['todoStorage', function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage;
				}]
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});

require('todoCtrl');
require('todoStorage');
require('todoFocus');
require('todoEscape');
require('footer');
