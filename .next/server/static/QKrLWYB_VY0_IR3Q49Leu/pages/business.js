module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import Dependencies
 //
// Define SearchForm Class
//

var SearchForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchForm, _Component);

  // constructor accepts props and initialises state
  function SearchForm(props) {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formSubmitted", function (event) {
      // Validate input value
      if (event.target.newsSource.value != "") {
        // setNewsSource is a function passed from parent (news page) via props
        // It is used as a way to pass the input value back up to the parent
        // This is called state lifting
        // see: https://reactjs.org/docs/lifting-state-up.html
        _this.props.setNewsSource(event.target.newsSource.value);
      } // prevent page reload (prevent submit)


      event.preventDefault();
    });

    _this.state = {};
    return _this;
  } //
  // an event handler for form submit
  //


  _createClass(SearchForm, [{
    key: "render",
    // Render the form
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "search"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Enter newsapi.org source"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.formSubmitted
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "newsSource",
        placeholder: "News Source name",
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Update News"))));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Passing from child to parent
// https://www.robinwieruch.de/react-pass-props-to-component/#react-props
//
// Imports
//
// This is the Link API
 // Import fetch library

 // mport SearchForm Component

 //(free version) API key from  https://newsapi.org/
// Get your own key!

var apiKey = '1ca5555189744b988820ce51c9b5f181'; // Initial News source

var defaultNewsSource = 'the-irish-times'; //
// async method fetches and returns data from a url
//

function getNews(_x) {
  return _getNews.apply(this, arguments);
} //
//  The News page defined as an ES6 Class
//


function _getNews() {
  _getNews = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url);

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));
  return _getNews.apply(this, arguments);
}

var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  // Constructor
  // Recieve props and initialise state properties
  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewsSource", function (input) {
      _this.setState({
        newsSource: input,
        url: "https://newsapi.org/v2/top-headlines?sources=".concat(input, "&apiKey=").concat(apiKey)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchNewsAPI", function (event) {
      // set state values - this will trigger an update and componentDidUpdate
      _this.setState({
        // Get the link text
        newsSource: "".concat(event.target.innerText),
        // Build the search URL using the link name
        url: "https://newsapi.org/v2/".concat(event.target.name, "&apiKey=").concat(apiKey)
      });

      console.log(_this.state.url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatDate", function (input) {
      var date = new Date(input);
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var day = week[date.getDay()];
      var month = months[date.getMonth()];
      var year = date.getFullYear();
      var hours = date.getHours();
      var mins = date.getMinutes().toString().padStart(2, '0');
      var secs = date.getSeconds();
      var output = "".concat(day, " ").concat(month, " ").concat(year, " ").concat(hours, ":").concat(mins, " ").concat(secs, "s");
      return output.toString();
    });

    _this.state = {
      newsSource: "",
      url: "",
      articles: []
    };
    return _this;
  } // This function is passed to the SearchForm and used the get the value entered
  // This value will be used to generate the api url


  _createClass(News, [{
    key: "render",
    //
    // render() method generates the page
    //
    value: function render() {
      var _this2 = this;

      // if state.articles is empty copy props to it
      if (this.state.articles.length == 0) {
        this.state.articles = this.props.articles;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-148142509"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        setNewsSource: this.setNewsSource
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-148142509" + " " + "newsMenu"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-148142509"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie",
        className: "jsx-148142509"
      }, "Top Headlines Ireland")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-148142509"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie&category=business",
        className: "jsx-148142509"
      }, "Business News Ireland")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-148142509"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "everything?q=technology",
        className: "jsx-148142509"
      }, "Technology News")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        className: "jsx-148142509"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie&category=weather",
        className: "jsx-148142509"
      }, "Weather in Ireland"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-148142509"
      }, this.state.newsSource.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-148142509"
      }, this.state.articles.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
          key: index,
          className: "jsx-148142509"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
          className: "jsx-148142509"
        }, article.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-148142509" + " " + "author"
        }, article.author, _this2.formatDate(article.publishedAt)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          src: article.urlToImage,
          alt: "article image",
          className: "jsx-148142509" + " " + "img-article"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-148142509"
        }, article.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-148142509"
        }, article.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-148142509"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          as: "/article/".concat(index),
          href: "/article?id=".concat(index)
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "jsx-148142509"
        }, "Read More"))));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "148142509",
        css: ["section.jsx-148142509{width:50%;border:1px solid gray;background-color:rgb(240,248,255);padding:1em;margin:1em;}", ".author.jsx-148142509{font-style:italic;font-size:0.8em;}", ".img-article.jsx-148142509{max-width:50%;}", ".newsMenu.jsx-148142509{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;margin-top:20px;}", ".newsMenu.jsx-148142509 li.jsx-148142509{display:inline-table;padding-left:20px;}", ".newsMenu.jsx-148142509 li.jsx-148142509 a.jsx-148142509{font-size:1em;color:blue;display:block;-webkit-text-decoration:none;text-decoration:none;}", ".newsMenu.jsx-148142509 li.jsx-148142509 a.jsx-148142509:hover{color:rgb(255,187,0);-webkit-text-decoration:underline;text-decoration:underline;}"]
      }));
    } //
    // Get initial data on server side using an AJAX call
    // This will initialise the 'props' for the News page
    //    

  }, {
    key: "componentDidUpdate",
    // componentDidUpdate is called when the page state or props re updated
    // It can be over-ridden to perform other functions when an update occurs
    // Here it fetches new data using this.state.newsSource as the source
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(prevProps, prevState) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.url !== prevState.url)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return getNews(this.state.url);

              case 3:
                data = _context.sent;

                // If the result contains and articles array then it is good so update articles
                if (Array.isArray(data.articles)) {
                  // Store articles in state
                  this.state.articles = data.articles; // Force page update by changing state (make sure it happens!)

                  this.setState(this.state);
                } // Otherwise it contains an error, log and redirect to error page (status code 400)
                else {
                    console.error(data);

                    if (response) {
                      response.statusCode = 400;
                      response.end(data.message);
                    }
                  }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidUpdate(_x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      };
    }() // End componentDidUpdate

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var defaultUrl, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Build the url which will be used to get the data
                // See https://newsapi.org/s/the-irish-times-api
                defaultUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=".concat(apiKey); // Get news data from the api url

                _context2.next = 3;
                return getNews(defaultUrl);

              case 3:
                data = _context2.sent;

                if (!Array.isArray(data.articles)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", {
                  articles: data.articles
                });

              case 8:
                console.error(data);

                if (response) {
                  response.statusCode = 400;
                  response.end(data.message);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ })
/******/ ]);