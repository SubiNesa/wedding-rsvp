import angular from 'angular';

global.$ = global.jQuery = require('jquery');
global.moment = require('moment');

// CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import "bootstrap-material-design/dist/css/ripples.css";
import "bootstrap-material-design/dist/js/material.js";
import 'bootstrap-material-design/dist/js/ripples.js';

// Application modules
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './features/home';

angular.module('app', [uirouter, home])
    .config(routing);

$(function() {
    $.material.init();
    $.material.ripples();
});
