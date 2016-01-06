/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var msg = "logger loaded...";


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	document.write('<p>Welcome to webpack config demo</p>');

	__webpack_require__(3);





/***/ },
/* 3 */
/***/ function(module, exports) {

	var msg = "greeter loaded...";
	var Greeter = (function () {
	    function Greeter(message) {
	        this.greeting = message;
	    }
	    Greeter.prototype.greet = function () {
	        return "Hello, " + this.greeting + "!";
	    };
	    return Greeter;
	})();
	var greeter = new Greeter("world");
	var button = document.createElement('button');
	button.textContent = "Say Hello";
	button.onclick = function () {
	    var p = document.createElement('p');
	    p.textContent = greeter.greet();
	    p.style.color = "LimeGreen";
	    p.style.fontWeight = "Bold";
	    document.body.appendChild(p);
	};
	document.body.appendChild(button);


/***/ }
/******/ ]);