module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "2Suf":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "layout_container__27j35",
	"laptopSize": "layout_laptopSize__1m5aq",
	"tabSize": "layout_tabSize__2WfJ_",
	"phoneSize": "layout_phoneSize__3mZWs",
	"topLogo": "layout_topLogo__1sKWi",
	"logoDiv": "layout_logoDiv__Tgnu_",
	"introText": "layout_introText__135IV",
	"lowerContainer": "layout_lowerContainer__2RKLn",
	"box1": "layout_box1__5_xhM",
	"box2": "layout_box2__1sc9I",
	"box2C": "layout_box2C__2Eq5T",
	"link": "layout_link__3MkwO",
	"titleText": "layout_titleText__34d9G",
	"lowerText": "layout_lowerText__3Jp9Y",
	"line": "layout_line__3fHKI",
	"cR": "layout_cR__1iCpt",
	"cRContainer": "layout_cRContainer__R1kBZ"
};


/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("h0mY");


/***/ }),

/***/ "3vZL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Suf");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z6QF");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "setter", () => {
      if (window.innerWidth > 1024) {
        if (this.state.size !== 'laptopSize') this.setState({
          size: 'laptopSize'
        });
      } else if (window.innerWidth > 480) {
        if (this.state.size !== 'tabSize') this.setState({
          size: 'tabSize'
        });
      } else {
        this.setState({
          size: 'phoneSize'
        });
      }
    });

    this.state = {
      size: 'laptopSize'
    };
  }

  componentDidMount() {
    window.addEventListener('resize', event => {
      this.setter();
    }); //this.setter();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.logoDiv,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.topLogo,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__[/* Logo */ "c"], {
            color: '#4EB848'
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.laptopSize,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__[/* Footer */ "b"], {
          size: 'laptopSize'
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerContainer,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.box1,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.introText,
            children: "Perch is a new carpooling service made to provide a convenient and affordable alternative to other commuting options available, by pairing people  going in the same direction together."
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.box2C,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.box2,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.titleText,
                children: "About Us"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/how_perch_works",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "How it works"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/help_and_frequently_asked_questions",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: `Help & FAQ`
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/how_prices_are_estimated",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Pricing"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/available_locations",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Cities"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/contact_us",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Contact Us"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.box2,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.titleText,
                children: "Driver"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/why_should_you_be_a_perch_driver",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Why should you become a Perch driver"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/steps_to_becoming_a_perch_driver",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "How to become a Perch driver"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/auth/d_si_su",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Become a Perch driver"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.box2,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.titleText,
                children: "Riders"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/articles/why_should_you_join_perch",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Why ride with us ?"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
              href: "/s/auth/u_si_su",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerText,
                children: "Become a Percher"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.cRContainer,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("hr", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.line
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.cR,
          children: "Copyright \xA9 2020. All rights reserved."
        })]
      })]
    });
  }

}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9uY5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return adminSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return sendVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return changeEmailOrPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sendFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return sendPasswordResetLink; });
/* unused harmony export sendEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return validateVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return replyFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return sendUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return validateDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return driverApplicationAdvance; });
/* unused harmony export getDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dateformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return polylineLenght; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return timeAndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return distanceCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return emailFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dateOfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return storeCard; });
/* unused harmony export buyKilometers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return formatDateAllValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return millisToMinutesAndSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cancelledTripResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pendingProcessesFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return pendingProcessesFunctionDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return adminDeleteUser; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function signIn(email, password, type) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
        if (type == 'user') {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
            if (snapshot.val().summarizedHistory.phoneVerified == true) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/udash').then(() => window.scrollTo(0, 0));else this.setState({
              displayVerification: true,
              loading: false,
              userDetails: snapshot.val(),
              error: false
            }, () => {
              //send a verification phonenumber
              sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
              firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                console.log(error.message);
              });
            });
          }).catch(error => {
            this.setState({
              error: true,
              errorMessage: error.message,
              loading: false
            });
          });
        } else if (type == 'driver') {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
            if (snapshot.val().summarizedHistory.phoneVerified == true && snapshot.val().summarizedHistory.emailVerified == true) firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}/driverVerified`).once('value', snap => {
              if (snap.val() == 'VERIFIED') next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/ddash').then(() => window.scrollTo(0, 0));else next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/d_app_dash').then(() => window.scrollTo(0, 0));
            }).catch(error => {
              console.log(error.message);
            });else {
              this.setState({
                displayVerification: true,
                loading: false,
                userDetails: snapshot.val(),
                phoneVerified: snapshot.val().summarizedHistory.phoneVerified,
                emailVerified: snapshot.val().summarizedHistory.emailVerified,
                error: false
              }, () => {
                //send an email or phonenumber verification
                if (!snapshot.val().summarizedHistory.phoneVerified) sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
                if (!snapshot.val().summarizedHistory.emailVerified) sendVerification(userID, 'email', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
                firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                  console.log(error.message);
                });
              });
            }
          }).catch(error => {
            console.log(error.message);
          });
        }
      }).catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message,
          loading: false
        });
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function adminSignIn(email, password) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
        const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`adminAuthorized/${userID}`).once('value', snapshot => {
          if (snapshot.val()) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/dash').then(() => window.scrollTo(0, 0));else this.setState({
            error: true,
            errorMessage: 'You do not have access to this portion of the site. Please contact us for help. Excess unauthorized logins might result in an IP block.',
            loading: false
          }, () => {
            firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
              console.log(error.message);
            });
          });
        }).catch(error => {
          console.log(error.message);
        });
      }).catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message,
          loading: false
        });
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function signUp(firstName, lastName, email, countryCode, phoneNumber, password, isDriver, referralCode) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, {
      phoneNumber: `+${countryCode}${phoneNumber}`
    }).then(r => {
      if (r.data) {
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().createUserWithEmailAndPassword(email, password).then(() => {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('https://us-central1-perch-01.cloudfunctions.net/createUserDetails', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: `+${countryCode}${phoneNumber}`,
            userID: userID,
            isDriver: isDriver,
            referralCode: referralCode
          }).then(() => {
            firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
              firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                console.log(error.message);
              });
              this.setState({
                displayVerification: true,
                loading: false,
                error: false,
                userDetails: snapshot.val()
              });
            }).catch(error => {
              this.setState({
                error: true,
                errorMessage: error.message
              });
            });
          }).catch(error => {
            this.setState({
              errorMessage: error.message,
              loading: false
            });
          });
        }).catch(error => {
          this.setState({
            error: true,
            errorMessage: error.message,
            loading: false
          });
        });
      } else this.setState({
        error: true,
        errorMessage: 'This phone number is currently registered with another account, contact us for help',
        loading: false
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function signOut(doNotReroute) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().then(() => {
    if (!doNotReroute) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }).catch(error => {
    console.log(error.message);
  });
}
;
function sendVerification(userID, type, action, code, phoneNumber, email, name) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationCode`, {
    userID: userID,
    type: type,
    action: action,
    code: code,
    phoneNumber: phoneNumber,
    email: email,
    name: name
  }).then(r => {
    const result = r.data;

    if (action == 'check') {
      if (result) {
        if (type == 'phoneNumber') this.setState({
          phoneVerified: true,
          verificationPhoneLoader: false
        });else if (type == 'email') this.setState({
          emailVerified: true,
          verificationEmailLoader: false
        });
      } else {
        if (type == 'phoneNumber') this.setState({
          verificationPhoneLoader: false
        });else if (type == 'email') this.setState({
          verificationEmailLoader: false
        });
        this.setState({
          error: true,
          errorMessage: 'The verification code was not correct. Please check again or click resend.'
        });
      }
    }
  }); //.catch((error) => { this.setState({ error: true, errorMessage: error.message }) })
}
;
function changeEmailOrPhoneNumber(type, userID, phoneNumber, email) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/changeEmailOrPhoneNumber`, {
    userID: userID,
    email: email,
    type: type,
    phoneNumber: phoneNumber
  }).then(r => {
    this.setState({
      userDetails: r.data,
      changeEmail_PhoneNumber: false,
      error: false,
      errorMessage: '',
      changeEmailLoader: false,
      changePhoneLoader: false
    });
  }).catch(error => {
    this.setState({
      error: true,
      errorMessage: `${error.message}, this field might already be in use by another user`
    });
  });
}
;
function sendFeedback() {
  if (this.state.topic == 'unselected') this.setState({
    errorMessage: 'A topic is needed. Please pick a topic to contact us about. If you do not have one, please pick "Other"'
  });else if (this.state.message == '') this.setState({
    errorMessage: 'Please enter a message'
  });else {
    this.setState({
      loading: true
    }, () => {
      if (this.state.userDetails) {
        const ref = this.state.userDetails.driverID ? `driverFeedback/${this.state.userDetails.driverID}` : `userFeedback/${this.state.userDetails.userID}`;
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(ref).update({
          [new Date().getTime()]: {
            body: this.state.message,
            subject: this.state.topic,
            status: 'UNPROCESSED',
            date: getDate(),
            timestamp: new Date().getTime()
          }
        }).then(() => {
          this.setState({
            topic: 'unselected',
            message: '',
            loading: false
          }, () => {
            this.loadResult();
          });
        }).catch(error => {
          console.log(error.message);
        });
      } else axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
        body: this.state.message,
        subject: this.state.topic,
        status: 'UNPROCESSED',
        date: getDate(),
        email: this.state.userEmail,
        timestamp: new Date().getTime(),
        nonUser: true,
        case: 'send'
      }).then(() => {
        this.setState({
          topic: 'unselected',
          message: '',
          loading: false
        });
      }).catch(error => {
        console.log(error.message);
      });
    });
  }
}
;
function changePassword(email_, oldPassword, newPassword) {
  this.setState({
    loading: true
  }, () => {
    const email = email_;
    const password = oldPassword;
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.updatePassword(newPassword).then(() => {
        this.setState({
          loading: false,
          toShow: 'default',
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        });
      }).catch(error => this.setState({
        errorMessage: error.message,
        loading: false,
        newPassword: '',
        confirmNewPassword: ''
      }));
    }).catch(error => this.setState({
      errorMessage: error.message,
      loading: false,
      newPassword: '',
      confirmNewPassword: ''
    }));
  });
}
;
function deleteAccount(email, password) {
  this.setState({
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
      const user = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser;
      const userID = user.uid;
      user.delete().then(() => {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteUser`, {
          deleteAccountReason: this.state.deleteAccountReason,
          userDetails: this.state.userDetails
        }).catch(error => {
          alert(error.message);
        });
      }).catch(error => this.setState({
        errorMessage: error.message,
        loading: false,
        password1: ''
      }));
    }).catch(error => this.setState({
      errorMessage: error.message,
      loading: false,
      password1: ''
    }));
  });
}
;
function sendPasswordResetLink(email) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().sendPasswordResetEmail(email).then(() => {
    this.setState({
      error: false,
      errorMessage: '',
      forgotPassword: false
    });
  }).catch(error => {
    this.setState({
      error: true,
      errorMessage: error.message
    });
  });
}
;
function sendEmail(name, email, type, subject) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationEmail`, {
    name: name,
    email: email,
    type: type,
    subject: subject
  }).catch(error => {
    console.log(error.message);
  });
}
;
function resetPassword(code, newPassword, email) {
  this.setState({
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().confirmPasswordReset(code, newPassword).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, newPassword).then(() => {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}/firstName`).once('value', snap => {
            sendEmail(snap.val(), email, 'passwordHasBeenReset', 'Password has been reset');
          }).catch(error => {
            console.log(error.message);
          });
        }).catch(error => {
          console.log(error.message);
        });
      }).catch(error => {
        console.log(error.message);
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/'); //send an email that password has been set 
    }).catch(() => {
      this.setState({
        errorMessage: 'The link is no longer valid, please go to the login page and request a new password reset link',
        loading: false
      });
    });
  });
}
;
function validateVehicle(userID, timestamp, dateFormat) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/validateVehicle`, {
    userID: userID,
    timestamp: timestamp,
    dateFormat: dateFormat
  }).catch(error => {
    alert(error.message);
  });
}
;
function replyFeedback(response, riderOrDriver, senderID, timestamp) {
  const ref = riderOrDriver == 'Rider' ? `userFeedback/${senderID}/${timestamp}` : `driverFeedback/${senderID}/${timestamp}`;
  const nonUser = this.state.toShow.nonUser;
  if (nonUser) axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
    email: this.state.toShow.email,
    subject: `Re:[${this.state.toShow.subject}]`,
    response: response,
    case: 'reply'
  }).catch(error => {
    alert(error.message);
  });
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(ref).update({
    response: response,
    status: 'PROCESSED',
    responseDate: getDate()
  }).then(() => {
    this.setState({
      responseDate: new Date().getTime(),
      showResponse: true
    });
  }).catch(error => {
    alert(error.message);
  });
}
;
function sendUserEmail(email, subject, text) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendEmail`, {
    email: email,
    subject: subject,
    text: text
  }).then(() => {
    this.setState({
      email: '',
      subject: '',
      text: '',
      loading: false
    });
  }).catch(error => {
    alert(error.message);
    this.setState({
      loading: false
    });
  });
}
function validateDriver(userID, timestamp, dateFormat) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/validateDriver`, {
    userID: userID,
    timestamp: timestamp,
    dateFormat: dateFormat
  }).then(() => {
    this.loadResult();
    this.setState({
      showDocs: false,
      vehicle: {},
      verified: []
    });
  }).catch(error => {
    alert(error.message);
  });
}
; //MAKE A RANDOMID

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
;
function driverApplicationAdvance(uID, dateFormat, maxSeatNumber) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/vehicleMaxSeatNumber`, {
    userID: uID,
    dateFormat: dateFormat,
    maxSeatNumber: maxSeatNumber
  }).then(() => {
    const {
      selected
    } = this.state;

    switch (selected.stage) {
      case 'three':
        {
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`driverApplications/${selected.userID}`).update({
            progress: JSON.stringify(["done", "done", "done", "ongoing", "undone"]),
            stage: "four"
          }).then(() => {
            //MAKE ARRANGEMENTS TO SEND DRIVER AN OFFER LETTER
            this.setState({
              showDocs: false
            }, () => {
              this.loadResult();
            });
          }).catch(error => {
            alert(error.message);
          });
        }
        break;

      case 'four':
        {
          //THE INDEPENNDENT CONTRACTOR DOCUMENT HAS BEEN SIGNED AND WE ARE GOOD TO GO
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`driverApplications/${selected.userID}`).update({
            progress: JSON.stringify(["done", "done", "done", "done", "done"]),
            stage: "five"
          }).then(() => {
            this.setState({
              showDocs: false
            }, () => {
              this.loadResult();
            });
          }).catch(error => {
            alert(error.message);
          });
        }
        break;
    }

    ;
  }).catch(error => console.log(error.message));
}
function getDate() {
  const DAY = new Date().getDate();
  const MONTH = new Date().getMonth();
  const YEAR = new Date().getFullYear();
  const HOUR = new Date().getHours();
  const MIN = new Date().getMinutes();
  const SECOND = new Date().getSeconds();
  return `${YEAR}-${MONTH}-${DAY}-${HOUR}-${MIN}-${SECOND}`;
}
;
function dateformat(time) {
  let slash1 = 0,
      slash2 = 0,
      slash3 = 0;

  for (let k = 0; k < time.length; k++) {
    if (time.charAt(k) == '-') slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
    if (slash3 != 0) break;
  }

  ;
  const y = time.substring(0, slash1);
  const m = time.substring(slash1 + 1, slash2);
  const d = time.substring(slash2 + 1, slash3);
  return `${d}/${Number(m) + 1}/${y}`;
}
;
function polylineLenght(data) {
  let distance = 0;

  for (let k = 0; k < data.length - 1; k++) distance += distanceCalculator(data[k][0], data[k][1], data[k + 1][0], data[k + 1][1]);

  return distance;
}
;
function timeAndDate(time, month, year) {
  let slash1 = 0,
      slash2 = 0,
      slash3 = 0;

  for (let k = 0; k < time.length; k++) {
    if (time.charAt(k) == '-') slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
  }

  const HOUR = Number(time.substring(slash1 + 1, slash2)) == 0 ? 12 : Number(time.substring(slash1 + 1, slash2)) > 12 ? Number(time.substring(slash1 + 1, slash2)) - 12 : Number(time.substring(slash1 + 1, slash2));
  const MIN = Number(time.substring(slash2 + 1, slash3)) < 10 ? `0` + time.substring(slash2 + 1, slash3) : Number(time.substring(slash2 + 1, slash3));
  const MERIDIAN = Number(time.substring(slash1 + 1, slash2)) < 12 ? 'AM' : 'PM';
  const DAY = time.substring(0, slash1);
  const MONTH = M.indexOf(month) + 1;
  const formattedDate = `${DAY}/${MONTH}/${year}, ${HOUR}:${MIN} ${MERIDIAN}`;
  return formattedDate;
}
;
function distanceCalculator(lat1, lon1, lat2, lon2) {
  let R = 6371 * 1000; // Radius of the earth in m

  let dLat = deg2rad(lat2 - lat1); // deg2rad below

  let dLon = deg2rad(lon2 - lon1);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in m

  return d;
}
;
function emailFormat(email, type) {
  //@ is stored as -(hyphen)
  //. is stored as _(underscore)
  switch (type) {
    case 'emailToString':
      {
        return email.replace('@', '-').replace('.', '_');
      }
      break;

    case 'stringToEmail':
      {
        return email.replace('-', '@').replace('_', '.');
      }
      break;
  }
}
;

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

;

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

;
function dateOfQuery(timestamp) {
  return `${formatAMPM(new Date(timestamp)).toUpperCase()} ${('0' + new Date(timestamp).getDate()).slice(-2)}/${('0' + (new Date(timestamp).getMonth() + 1)).slice(-2)}/${new Date(timestamp).getFullYear()}`;
}
;
const M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const colors = {
  GREEN: "#4EB848",
  WHITE: "#FFFFFF",
  GREY: "#959AAC",
  BLACK: "#000000",
  RED: "#FF0000",
  BLUE_TEXT: "#284ED6",
  BLUE: "#1970A7",
  PURPLE: "#A031AF",
  YELLOW: "#F0E23D",
  GOLD: "#FFAA00"
};
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
;
function deleteCard(userID, last4, selected) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteStripeCard`, {
    userID: userID,
    last4: last4,
    selected: selected
  }).catch(error => {
    console.log(error.message);
  });
}
;
function storeCard(userID, cardObject, setLoading, setErrorMessage, cancel) {
  let c = cardObject;
  c.card.cardId = cardObject.card.id;
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/storeStripeCard`, {
    userID: userID,
    cardObject: c
  }).then(() => {
    cancel();
  }).catch(error => {
    setLoading(false);
    setErrorMessage(error.message);
  });
}
;
function buyKilometers(toSend) {
  this.setState({
    paymentLoading: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, _objectSpread(_objectSpread({}, toSend), {}, {
      status: 'initial'
    })).then(result => {
      const {
        status,
        client_secret,
        id
      } = result.data;
      toSend.paymentIntentId = id;
      toSend.status = 'confirm_payment';

      if (status == 'succeeded') {
        this.setState({
          paymentCompleted: true
        });
      } else if (status == 'requires_action') {
        stripe.authenticatePaymentIntent({
          clientSecret: client_secret
        }).then(data => {
          if (data.status == 'requires_confirmation') {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, _objectSpread(_objectSpread({}, toSend), {}, {
              paymentIntentId: id,
              status: 'confirm_payment'
            })).then(result_ => {
              const status_ = result_.data.status;

              if (status_ == 'succeeded') {
                this.setState({
                  paymentCompleted: true
                });
              }
            }).catch(error => {
              this.setState({
                paymentError: true,
                paymentErrorMessage: error.message
              });
            });
          }
        }).catch(error => {
          this.setState({
            paymentError: true,
            paymentErrorMessage: error.message
          });
        });
      }
    }).catch(error => {
      this.setState({
        paymentError: true,
        paymentErrorMessage: error.message
      });
    });
  });
}
;
function formatDateAllValues(d) {
  return d.getFullYear().toString() + "/" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "/" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " - " + formatAMPM(d).toUpperCase();
}
;
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = (millis % 60000 / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
;
function cancelledTripResolver(toSend) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/cancelledTripResolver`, toSend).then(() => {
    let newResult = this.state.result;
    delete newResult[toSend.cancelled_UNRESOLVED_KEY];
    this.setState({
      currentData: null,
      refundRiderAmount: '',
      refundRiderPerchKms: '',
      payFirstDriver: '',
      paySecondDriver: '',
      payThirdDriver: '',
      adminCut: '',
      result: newResult,
      loading: false
    });
  }).catch(error => {
    alert(error.message);
  });
}
;
function pendingProcessesFunction(toSend) {
  this.setState({
    loading: true,
    errorMessage: ''
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcesses`, toSend).then(data => {
      let newV = toSend.isNewProcess ? [] : this.state.listOfProcesses;
      const time = new Date().getTime();
      newV.push({
        title: toSend.title,
        details: toSend.details,
        timeCreated: time
      });
      this.setState({
        addProcess: false,
        isNewProcess: false,
        viewList: true,
        pushId: data.data,
        title: '',
        details: '',
        loading: false,
        listOfProcesses: newV
      }, () => {
        if (toSend.isNewProcess) this.setState({
          timeCreated: time
        });
      });
    }).catch(error => {
      alert(error.message);
    });
  });
}
;
function pendingProcessesFunctionDelete(pushId) {
  this.setState({
    loading1: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcessesDelete`, {
      pushId: pushId
    }).then(() => {
      let newV = _objectSpread({}, this.state.result);

      delete newV[pushId];
      this.setState({
        result: newV,
        loading1: false,
        addProcess: false,
        isNewProcess: false,
        viewList: false,
        pushId: '',
        userID: '',
        type: '',
        listOfProcesses: [],
        mainTopic: '',
        title: '',
        details: '',
        errorMessage: ''
      });
    }).catch(error => {
      alert(error.message);
    });
  });
}
;
function adminDeleteUser(userDetails) {
  this.setState({
    loading1: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteUser`, {
      userDetails: userDetails,
      adminDelete: true
    }).then(() => {
      this.setState({
        idSearch: '',
        result: null,
        loading: false,
        loading1: false,
        deleteUser: false,
        analytics: {}
      });
    }).catch(error => {
      console.log(error.message);
    });
  });
}

/***/ }),

/***/ "Bqc2":
/***/ (function(module, exports) {

module.exports = require("react-animated-css");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H4s3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
/* harmony import */ var _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("sfYE");
/* harmony import */ var _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




class index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
      className: _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.shareIcon_C,
      style: {
        margin: '0px'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
        href: "https://www.facebook.com/Perch-101536275225240/",
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
          src: "/facebook_share.svg",
          alt: "Perch Facebook Page",
          className: _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.shareIcon
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
        href: "https://www.instagram.com/perchrides/",
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
          src: "/instagram_share.svg",
          alt: "Perch Instagram Page",
          className: _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.shareIcon
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
        href: "https://twitter.com/perchrides",
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
          src: "/twitter_share.svg",
          alt: "Perch Twitter Page",
          className: _pages_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.shareIcon
        })
      })]
    });
  }

}

/***/ }),

/***/ "Hh55":
/***/ (function(module, exports) {

module.exports = require("react-icons/im");

/***/ }),

/***/ "M1wr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"svg": "layout_svg__1IibV"
};


/***/ }),

/***/ "N6gb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bx6R");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z6QF");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Bqc2");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Hh55");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9uY5");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













class index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();
    this.state = {
      dropDownMenu: false,
      hideMenu: false,
      firstName: null,
      isDriver: false,
      url: null,
      loggedIn: false,
      driverVerified: ''
    };
  }

  componentDidMount() {
    window.addEventListener('resize', event => {
      if (window.innerWidth > 1024 && this.state.hideMenu == false) this.setState({
        dropDownMenu: false,
        hideMenu: true
      });else if (window.innerWidth < 1024 && this.state.hideMenu == true) this.setState({
        hideMenu: false
      });
    });
    firebase__WEBPACK_IMPORTED_MODULE_8___default.a.auth().onAuthStateChanged(user => {
      if (user) {
        firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database().ref(`users/${user.uid}/firstName`).once('value', snapshot => {
          firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database().ref(`users/${user.uid}/driverVerified`).once('value', snap => {
            this.setState({
              isDriver: snap.val() ? true : false,
              firstName: snapshot.val(),
              loggedIn: true,
              driverVerified: snap.val()
            });
          }).catch(error => {
            console.log(error.message);
          });
        }).catch(error => {
          console.log(error.message);
        });
        firebase__WEBPACK_IMPORTED_MODULE_8___default.a.database().ref(`users/${user.uid}/photoRef`).once('value', snapshot => {
          firebase__WEBPACK_IMPORTED_MODULE_8___default.a.storage().ref(`${snapshot.val()}`).getDownloadURL().then(result => {
            this.setState({
              url: result
            });
          }).catch(error => {
            console.log(error.message);
          });
        }).catch(error => {
          console.log(error.message);
        });
      } else this.setState({
        loggedIn: false
      });
    });
  }

  componentWillUnmount() {// window.removeEventListener('resize');
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.container1,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.menu,
          onClick: () => {
            this.setState({
              dropDownMenu: !this.state.dropDownMenu
            });
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosMenu"], {
            color: '#4EB848',
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.menuIcon
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.logo,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__[/* Logo */ "c"], {
              color: '#4EB848'
            })
          })
        }), this.state.loggedIn ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.textRow1,
          children: [this.state.firstName ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [this.state.url ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("img", {
              src: this.state.url,
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.dp,
              style: {
                borderWidth: '0px'
              }
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.dp
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text_,
              children: `Hello, ${this.state.firstName}`
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {}), this.state.isDriver ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [this.state.driverVerified == 'VERIFIED' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
              href: "/s/db/ddash",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
                children: "Driver dashboard"
              })
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
              href: "/s/db/d_app_dash",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
                children: "Continue driver application"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
              href: "/s/db/udash",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
                children: "Rider dashboard"
              })
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
              href: "/s/db/udash",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
                children: "My dashboard"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
              href: "/s/auth/d_si_su",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
                children: "Become a driver"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link_,
            href: "/s/articles/how_perch_works",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
              children: "How it works"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.circle,
            onClick: () => {
              _functions_functions__WEBPACK_IMPORTED_MODULE_9__[/* signOut */ "C"].call(this, true);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_icons_im__WEBPACK_IMPORTED_MODULE_7__["ImExit"], {
              color: '#FFFFFF',
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.logOut
            })
          })]
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.textRow,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link1,
            href: "/s/articles/how_perch_works",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
              children: "How it works"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
            href: "/s/auth/u_si_su",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
              children: "Rider"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.link,
            href: "/s/auth/d_si_su",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.text,
              children: "Driver"
            })
          })]
        })]
      }), this.state.hideMenu ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_animated_css__WEBPACK_IMPORTED_MODULE_6__["Animated"], {
        animationInDuration: 300,
        animationOutDuration: 300,
        animationIn: 'fadeIn',
        animationOut: 'fadeOut',
        isVisible: this.state.dropDownMenu,
        animateOnMount: false,
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.animated,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowersection,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("hr", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.hr
          }), this.state.loggedIn ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText_,
              children: `Hello, ${this.state.firstName}`
            }), this.state.isDriver ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
              children: [this.state.driverVerified == 'VERIFIED' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
                href: "/s/db/ddash",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                  children: "Driver dashboard"
                })
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
                href: "/s/db/d_app_dash",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                  children: "Continue driver application"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
                href: "/s/db/udash",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                  children: "Rider dashboard"
                })
              })]
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
                href: "/s/db/udash",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                  children: "My dashboard"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
                href: "/s/auth/d_si_su",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                  children: "Become a driver"
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
              href: "/s/articles/how_perch_works",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                children: "How it works"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
              onClick: () => {
                _functions_functions__WEBPACK_IMPORTED_MODULE_9__[/* signOut */ "C"].call(this, true);
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                children: "Log out"
              })
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
              href: "/s/articles/how_perch_works",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                children: "How it works"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
              href: "/s/auth/u_si_su",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                children: "Rider"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLink,
              href: "/s/auth/d_si_su",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.lowerLinkText,
                children: "Driver"
              })
            })]
          })]
        })
      })]
    });
  }

}

/***/ }),

/***/ "Z6QF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1wr");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Logo(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.svg,
    viewBox: "0 0 215.338 338.512",
    preserveAspectRatio: 'xMinYMin meet',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
      id: "Group_2",
      "data-name": "Group 2",
      transform: "translate(-3028 -1103.285)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_7",
        "data-name": "Path 7",
        d: "M635.347,169.576a44.41,44.41,0,0,0-15.718-16.109,42.173,42.173,0,0,0-50.751,4.927c-7.038,6.49-11.026,15.014-14.154,23.851a128.759,128.759,0,0,0-6.881,34.251c-.86,14.154-1.486,28.386-1.329,42.618.157,17.125,1.095,34.329,1.721,51.455,1.095,27.448-9.228,50.673-26.118,71.552a133.646,133.646,0,0,1-28.855,26.275,23.028,23.028,0,0,1-2.737,1.642c-4.145,2.033-8.054-.156-8.445-4.77-.078-1.486-.078-2.972-.078-4.457q0-110.964.078-221.927c.078-27.526,9.7-51.455,28.308-71.708,17.751-19.393,39.725-30.967,65.843-34.016,32.922-3.91,61.933,5.318,86.487,27.839,20.957,19.237,32.374,43.322,34.329,71.63a103.783,103.783,0,0,1-19.628,69.6c-17.595,24.554-41.367,39.1-71,44.1-5.318.938-10.791.782-16.187,1.095a5.375,5.375,0,0,1-5.943-4.223c-.782-3.05.938-5.083,3.441-6.49,3.91-2.346,7.976-4.457,11.73-6.96,10.244-6.647,18.689-14.936,24.007-26.2,6.491-13.607,6.256-27.6,2.111-41.836a116.763,116.763,0,0,1-3.988-19.237c-1.095-8.993,2.737-12.668,11.808-12.746C633.783,169.732,634.252,169.654,635.347,169.576Z",
        transform: "translate(2546 1031)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_8",
        "data-name": "Path 8",
        d: "M496.972,396.9c1.408-.938,2.268-1.486,3.05-2.111,12.668-10.791,23.147-23.3,30.654-38.239a88.837,88.837,0,0,0,9.775-43.635c-.391-12.355-1.329-24.789-1.642-37.144-.313-11.339-.391-22.678-.078-34.016.313-10.713.782-21.426,2.033-32.061,1.642-14.388,5.239-28.308,11.886-41.367,15.64-30.654,49.891-35.033,72.412-23.46,15.014,7.742,24.085,20.644,30.263,35.971a5.68,5.68,0,0,1-7.507,7.272c-3.05-1.329-6.021-2.737-9.071-3.91-2.111-.86-3.441-.235-2.893,2.268.938,4.145,1.72,8.367,2.972,12.434,3.128,10.4,5.239,20.957,3.91,31.9-1.955,16.343-9.071,30.106-21.035,41.445a42.779,42.779,0,0,0-3.284,3.284,12.977,12.977,0,0,0,2.111-.235c1.877-.547,3.91-1.095,5.787-1.8q38.239-14.662,54.973-52.237a92.667,92.667,0,0,0,7.507-46.606c-2.19-24.085-12.042-44.73-29.637-61.386-20.879-19.706-45.9-28.542-74.21-26.275-27.448,2.19-50.125,14.467-67.485,35.971-12.9,16.031-20.566,34.486-20.723,55.052-.391,71.63-.156,143.259-.156,214.889,0,1.095.235,2.19.391,3.988Z",
        transform: "translate(2542.837 1027.867)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_9",
        "data-name": "Path 9",
        d: "M628.93,183.1a5.441,5.441,0,0,1,5.474,5.474,5.711,5.711,0,0,1-5.552,5.709,6.037,6.037,0,0,1-5.552-5.943A5.484,5.484,0,0,1,628.93,183.1Z",
        transform: "translate(2515.194 1006.841)",
        fill: props.color
      })]
    })
  });
}
;
function Footer(props) {
  if (props.size == 'laptopSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 1920 848.882",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M2392.783,4626.53S2029.567,4947.686,1641.1,4704.5c1.942,1.855-766.252-594.51-1168.316-154.545,3.885,0,0-603.328,0-603.328l1919.029,1.028Z",
      transform: "translate(2392.783 4795.508) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'tabSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 768 1842.856",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M1240.784,5422.645s-145.287,697.2-300.674,169.262c.777,4.028-306.5-1290.634-467.326-335.5,1.554,0,0-1309.776,0-1309.776l767.612,2.231Z",
      transform: "translate(1240.784 5789.482) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'phoneSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 375.372 1566.853",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M848.156,5201.583S777.144,5794.366,701.2,5345.495c.38,3.425-132.808-752-228.413-285.255.759,0,0-1113.613,0-1113.613H843.409Z",
      transform: "translate(848.156 5513.479) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });
}
;
function DashboardIcons(props) {
  if (props.icon == 'db') //dashboard
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      preserveAspectRatio: 'xMinYMin meet',
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3952",
        "data-name": "Path 3952",
        d: "M9.349,0H1.769A1.771,1.771,0,0,0,0,1.769V6.317A1.771,1.771,0,0,0,1.769,8.086H9.349a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,9.349,0Zm0,0",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3953",
        "data-name": "Path 3953",
        d: "M9.349,213.332H1.769A1.771,1.771,0,0,0,0,215.1v10.613a1.771,1.771,0,0,0,1.769,1.769H9.349a1.771,1.771,0,0,0,1.769-1.769V215.1A1.771,1.771,0,0,0,9.349,213.332Zm0,0",
        transform: "translate(0 -203.225)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3954",
        "data-name": "Path 3954",
        d: "M286.682,341.332H279.1a1.771,1.771,0,0,0-1.769,1.769v4.548a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V343.1A1.771,1.771,0,0,0,286.682,341.332Zm0,0",
        transform: "translate(-264.192 -325.16)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3955",
        "data-name": "Path 3955",
        d: "M286.682,0H279.1a1.771,1.771,0,0,0-1.769,1.769V12.382a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,286.682,0Zm0,0",
        transform: "translate(-264.192)",
        fill: "#fff"
      })]
    });else if (props.icon == 'th') //trip history
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.793",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
        id: "history",
        transform: "translate(0 -32)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1731",
          "data-name": "Group 1731",
          transform: "translate(0 32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
            id: "Group_1730",
            "data-name": "Group 1730",
            transform: "translate(0 0)",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3956",
              "data-name": "Path 3956",
              d: "M234.667,138.667v5.776l4.944,2.934.832-1.4-4.043-2.4v-4.909Z",
              transform: "translate(-221.96 -132.891)",
              fill: "#fff"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3957",
              "data-name": "Path 3957",
              d: "M13.856,32A10.389,10.389,0,0,0,3.465,42.4H0l4.5,4.5.081.167L9.241,42.4H5.776A8.1,8.1,0,1,1,8.15,48.108L6.515,49.743A10.394,10.394,0,1,0,13.856,32Z",
              transform: "translate(0 -32)",
              fill: "#fff"
            })]
          })
        })
      })
    });else if (props.icon == 'pw') //perch wallet
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.06",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "wallet",
        transform: "translate(0 -44.308)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1735",
          "data-name": "Group 1735",
          transform: "translate(0 44.308)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_1734",
            "data-name": "Group 1734",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3958",
              "data-name": "Path 3958",
              d: "M17.727,50.839h6.531V47.807a3.5,3.5,0,0,0-3.5-3.5H3.5a3.5,3.5,0,0,0-3.5,3.5V60.869a3.5,3.5,0,0,0,3.5,3.5H20.759a3.5,3.5,0,0,0,3.5-3.5V57.837H17.727a3.5,3.5,0,1,1,0-7Z",
              transform: "translate(0 -44.308)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1737",
          "data-name": "Group 1737",
          transform: "translate(15.628 52.238)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_1736",
            "data-name": "Group 1736",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3959",
              "data-name": "Path 3959",
              d: "M331.945,211.692a2.1,2.1,0,1,0,0,4.2h6.531v-4.2h-6.531Zm.933,2.8h-.933a.7.7,0,0,1,0-1.4h.933a.7.7,0,0,1,0,1.4Z",
              transform: "translate(-329.846 -211.692)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'cu') //contact us
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 27.6",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "headphones",
        transform: "translate(-31)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3836",
          "data-name": "Group 3836",
          transform: "translate(34.234 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3835",
            "data-name": "Group 3835",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1636",
              "data-name": "Path 1636",
              d: "M93.426,210A2.429,2.429,0,0,0,91,212.426V219a2.426,2.426,0,1,0,4.852,0v-6.577A2.429,2.429,0,0,0,93.426,210Z",
              transform: "translate(-91 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3838",
          "data-name": "Group 3838",
          transform: "translate(31 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3837",
            "data-name": "Group 3837",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1637",
              "data-name": "Path 1637",
              d: "M32.617,243.047a4.012,4.012,0,0,1,.069-.681,2.421,2.421,0,0,0-1.686,2.3v3.342a2.421,2.421,0,0,0,1.686,2.3,4.012,4.012,0,0,1-.069-.681Z",
              transform: "translate(-31 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3840",
          "data-name": "Group 3840",
          transform: "translate(40.703 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3839",
            "data-name": "Group 3839",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1638",
              "data-name": "Path 1638",
              d: "M219.895,210a2.428,2.428,0,0,0-2.426,2.426V219a2.428,2.428,0,0,0,2.426,2.426,2.393,2.393,0,0,0,.695-.114,2.421,2.421,0,0,1-2.312,1.731H215.7a2.426,2.426,0,1,0,0,1.617h2.575a4.048,4.048,0,0,0,4.043-4.043v-8.194A2.429,2.429,0,0,0,219.895,210Z",
              transform: "translate(-211 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3842",
          "data-name": "Group 3842",
          transform: "translate(53.572 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3841",
            "data-name": "Group 3841",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1639",
              "data-name": "Path 1639",
              d: "M449.722,242.366a4.015,4.015,0,0,1,.069.681v6.577a4.015,4.015,0,0,1-.069.681,2.421,2.421,0,0,0,1.686-2.3v-3.342A2.421,2.421,0,0,0,449.722,242.366Z",
              transform: "translate(-449.722 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3844",
          "data-name": "Group 3844",
          transform: "translate(31)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3843",
            "data-name": "Group 3843",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1640",
              "data-name": "Path 1640",
              d: "M43.129,0A12.142,12.142,0,0,0,31,12.129v.021a4,4,0,0,1,1.654-.751,10.5,10.5,0,0,1,20.95,0,4.005,4.005,0,0,1,1.654.751v-.021A12.142,12.142,0,0,0,43.129,0Z",
              transform: "translate(-31)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'ss') //settings
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 24.932",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
        id: "settings",
        transform: "translate(-5.768)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3848",
          "data-name": "Group 3848",
          transform: "translate(5.768)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
            id: "Path_3960",
            "data-name": "Path 3960",
            d: "M29.787,15.745l-2.63-2.063a9.79,9.79,0,0,0,.087-1.215,9.79,9.79,0,0,0-.087-1.215l2.637-2.063a.622.622,0,0,0,.15-.8L27.449,4.07a.617.617,0,0,0-.76-.268l-3.1,1.253a9.459,9.459,0,0,0-2.107-1.228L21.01.524A.641.641,0,0,0,20.387,0H15.4a.629.629,0,0,0-.617.524l-.467,3.3a9.225,9.225,0,0,0-2.107,1.228L9.105,3.8a.624.624,0,0,0-.76.268L5.852,8.39a.624.624,0,0,0,.15.8l2.63,2.063a9.79,9.79,0,0,0-.087,1.215,9.79,9.79,0,0,0,.087,1.215L6,15.745a.622.622,0,0,0-.15.8l2.493,4.32a.617.617,0,0,0,.76.268l3.1-1.253a9.459,9.459,0,0,0,2.107,1.228l.467,3.3a.629.629,0,0,0,.617.524h4.986A.629.629,0,0,0,21,24.409l.467-3.3a9.225,9.225,0,0,0,2.107-1.228l3.1,1.253a.624.624,0,0,0,.76-.268l2.493-4.32A.624.624,0,0,0,29.787,15.745ZM17.894,16.829a4.363,4.363,0,1,1,4.363-4.363A4.36,4.36,0,0,1,17.894,16.829Z",
            transform: "translate(-5.768)",
            fill: "#fff"
          })
        })
      })
    });else if (props.icon == 'tt') //tutorial
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4073",
        "data-name": "Path 4073",
        d: "M96.872,429.606H94.938a2.138,2.138,0,0,1-2.091-1.714L92.669,427H85.913l-.178.892a2.138,2.138,0,0,1-2.091,1.714H81.711a.711.711,0,1,0,0,1.421H96.872a.711.711,0,1,0,0-1.421Z",
        transform: "translate(-77.162 -406.769)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "Group_4017",
        "data-name": "Group 4017",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ellipse", {
          id: "Ellipse_193",
          "data-name": "Ellipse 193",
          cx: "1",
          cy: "1.5",
          rx: "1",
          ry: "1.5",
          transform: "translate(11 3.258)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
          id: "Path_4074",
          "data-name": "Path 4074",
          d: "M203.82,155a2.609,2.609,0,0,0-2.6,2.369h5.19A2.609,2.609,0,0,0,203.82,155Z",
          transform: "translate(-191.691 -147.656)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
          id: "Path_4075",
          "data-name": "Path 4075",
          d: "M22.126,0H2.132A2.134,2.134,0,0,0,0,2.132V16.677a2.134,2.134,0,0,0,2.132,2.132H22.126a2.134,2.134,0,0,0,2.132-2.132V2.132A2.134,2.134,0,0,0,22.126,0ZM8.1,9.949a4.029,4.029,0,0,1,2.056-3.51,2.606,2.606,0,1,1,3.942,0,4.029,4.029,0,0,1,2.056,3.51v.474a.711.711,0,0,1-.711.711H8.812a.711.711,0,0,1-.711-.711Zm12.555,5.78H7.628v.237a.711.711,0,1,1-1.421,0V15.73H3.6a.711.711,0,1,1,0-1.421H6.207v-.237a.711.711,0,0,1,1.421,0v.237H20.657a.711.711,0,1,1,0,1.421Z",
          fill: "#fff"
        })]
      })]
    });else if (props.icon == 'vh') //vehicle
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 29.042 22.546",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2405",
        "data-name": "Path 2405",
        d: "M52.215,42.418l-.134-.776H53.9a.766.766,0,0,0,.745-.94l-.722-3.057a.765.765,0,0,0-.745-.589h-1.9l-.008-.046A3.785,3.785,0,0,0,47.682,34H33.864a3.992,3.992,0,0,0-3.714,2.984l-.015.073H28.251a.765.765,0,0,0-.745.589L26.783,40.7a.766.766,0,0,0,.745.94h1.6l-.168.768A3.067,3.067,0,0,0,26,45.464v5.35a3.066,3.066,0,0,0,3.057,3.057v.546a2.16,2.16,0,0,0,2.19,2.129h1.735a2.16,2.16,0,0,0,2.19-2.129v-.546h10.7v.546a2.16,2.16,0,0,0,2.19,2.129H49.8a2.16,2.16,0,0,0,2.19-2.129v-.546a3.066,3.066,0,0,0,3.057-3.057v-5.35A3.065,3.065,0,0,0,52.215,42.418Zm.355-3.833.359,1.529H51.81l-.267-1.529ZM31.644,37.313a2.482,2.482,0,0,1,2.22-1.785H47.682a2.254,2.254,0,0,1,2.079,1.746l.9,5.132H30.528Zm-3.149,2.8.359-1.529H29.8l-.336,1.529Zm5.147,14.3a.636.636,0,0,1-.661.6H31.247a.636.636,0,0,1-.661-.6v-.546h3.057Zm16.814,0a.636.636,0,0,1-.661.6H48.061a.636.636,0,0,1-.661-.6v-.546h3.057Zm3.057-3.6a1.528,1.528,0,0,1-1.529,1.529H29.057a1.528,1.528,0,0,1-1.529-1.529v-5.35a1.528,1.528,0,0,1,1.529-1.529H51.985a1.528,1.528,0,0,1,1.529,1.529Z",
        transform: "translate(-26 -34)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2406",
        "data-name": "Path 2406",
        d: "M40.878,68.057H50.05a.764.764,0,0,0,0-1.529H40.878a.764.764,0,0,0,0,1.529ZM36.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,36.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,36.293,68.057Z",
        transform: "translate(-30.943 -53.154)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2407",
        "data-name": "Path 2407",
        d: "M84.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,84.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,84.293,68.057Z",
        transform: "translate(-60.6 -53.154)",
        fill: "#fff"
      })]
    });else if (props.icon == 'tx') //tax
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.593 24.593",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4078",
        "data-name": "Path 4078",
        d: "M20.388,10.488V.723A.723.723,0,0,0,19.665,0H.723A.723.723,0,0,0,0,.723v19.4a1.176,1.176,0,0,0,1.156,1.175A1.179,1.179,0,0,0,2.307,20.12V12.976c0-.01,0-.02,0-.03a2.56,2.56,0,0,1,2.564-2.458ZM13.406,3.647a.723.723,0,1,1,1.117-.92l1.084,1.317,1.084-1.317a.724.724,0,0,1,1.117.92L16.544,5.183,17.809,6.72a.723.723,0,0,1-1.117.919L15.607,6.322,14.523,7.639a.723.723,0,1,1-1.117-.919L14.67,5.183ZM7.276,4.83a2.366,2.366,0,1,1,4.732,0V7.18a.723.723,0,0,1-1.447,0V6.618H8.722V7.18a.723.723,0,1,1-1.447,0ZM4.147,7.9a.723.723,0,0,1-.723-.723V3.91H2.5a.723.723,0,0,1,0-1.447H5.79a.723.723,0,0,1,0,1.447H4.87V7.18A.723.723,0,0,1,4.147,7.9Z",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4079",
        "data-name": "Path 4079",
        d: "M73.424,247.5h0a1.117,1.117,0,0,0-1.118,1.058v7.127a2.6,2.6,0,0,1-.281,1.175h2.524v-8.24A1.121,1.121,0,0,0,73.424,247.5Z",
        transform: "translate(-68.547 -235.565)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4080",
        "data-name": "Path 4080",
        d: "M182.719,82.01a.919.919,0,1,0-1.839,0v.342h1.839Z",
        transform: "translate(-172.158 -77.18)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4081",
        "data-name": "Path 4081",
        d: "M165.307,247.5H149.02a2.552,2.552,0,0,1,.257,1.121v10.814a.723.723,0,0,0,.723.723h15.7a.723.723,0,0,0,.723-.723V248.621A1.121,1.121,0,0,0,165.307,247.5Zm-13.029,3.707h5.605a.723.723,0,1,1,0,1.447h-5.605a.723.723,0,0,1,0-1.447Zm5.64,5.352c-.035,0,.307,0-5.64,0a.723.723,0,1,1,0-1.447h5.605a.723.723,0,0,1,.035,1.446Zm6.059,0h-2.749a.723.723,0,1,1,0-1.447h2.749a.723.723,0,1,1,0,1.447Zm0-3.906h-2.749a.723.723,0,0,1,0-1.447h2.749a.723.723,0,0,1,0,1.447Z",
        transform: "translate(-141.834 -235.565)",
        fill: "#fff"
      })]
    });else if (props.icon == 'pi') //payout information
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.348 16.232",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "credit-card",
        transform: "translate(0 -85.333)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_4021",
          "data-name": "Group 4021",
          transform: "translate(0 91.42)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_4020",
            "data-name": "Group 4020",
            transform: "translate(0 0)",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_4076",
              "data-name": "Path 4076",
              d: "M23.84,213.333H.507A.479.479,0,0,0,0,213.84v7.1a2.512,2.512,0,0,0,2.536,2.536H21.811a2.512,2.512,0,0,0,2.536-2.536v-7.1A.479.479,0,0,0,23.84,213.333Zm-20.29,4.058H7.609a.507.507,0,1,1,0,1.015H3.551a.507.507,0,1,1,0-1.015Zm7.1,3.043h-7.1a.507.507,0,1,1,0-1.015h7.1a.507.507,0,1,1,0,1.015Zm8.623,0a1.714,1.714,0,0,1-1.014-.3,1.714,1.714,0,0,1-1.014.3,2.029,2.029,0,0,1,0-4.058,1.714,1.714,0,0,1,1.014.3,1.714,1.714,0,0,1,1.014-.3,2.029,2.029,0,1,1,0,4.058Z",
              transform: "translate(0 -213.333)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_4023",
          "data-name": "Group 4023",
          transform: "translate(0 85.333)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_4022",
            "data-name": "Group 4022",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_4077",
              "data-name": "Path 4077",
              d: "M21.811,85.333H2.536A2.512,2.512,0,0,0,0,87.869v1.014a.479.479,0,0,0,.507.507H23.84a.479.479,0,0,0,.507-.507V87.869A2.512,2.512,0,0,0,21.811,85.333Z",
              transform: "translate(0 -85.333)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'md') {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 56.009 64.01",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Icon_open-document",
        "data-name": "Icon open-document",
        d: "M0,0V64.01H56.009V32.005H24V0ZM32.005,0V24h24ZM8,16h8v8H8Zm0,16h8v8H8Zm0,16H40.006v8H8Z",
        fill: "#fff"
      })
    });
  } else if (props.icon == 'one') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 13 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_1",
      "data-name": "1",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "1"
      })
    })
  });else if (props.icon == 'two') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 17 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_2",
      "data-name": "2",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "2"
      })
    })
  });else if (props.icon == 'three') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 18 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_3",
      "data-name": "3",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "3"
      })
    })
  });
}
;

/***/ }),

/***/ "bx6R":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container1": "layout_container1__XlOt5",
	"container": "layout_container__2VLYn",
	"logo": "layout_logo__3xveP",
	"circle": "layout_circle__3ZcBj",
	"logOut": "layout_logOut__3i7EJ",
	"link": "layout_link__2TLyL",
	"link1": "layout_link1__3ChfI",
	"link_": "layout_link___2c5rf",
	"text": "layout_text__12r-X",
	"text_": "layout_text___2bxmS",
	"textRow": "layout_textRow__-7tZt",
	"textRow1": "layout_textRow1__3abz6",
	"dp": "layout_dp__1dDn9",
	"menu": "layout_menu__3fvj0",
	"menuIcon": "layout_menuIcon__1j-qR",
	"lowersection": "layout_lowersection__3D2lA",
	"lowerLink": "layout_lowerLink__1r2wu",
	"lowerLinkText_": "layout_lowerLinkText___1IoHJ",
	"lowerLinkText": "layout_lowerLinkText__1Tlo9",
	"animated": "layout_animated__kOoPJ",
	"hr": "layout_hr__193F8"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h0mY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sfYE");
/* harmony import */ var _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N6gb");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3vZL");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9uY5");
/* harmony import */ var _functions_shareIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("H4s3");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














class index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  static async getInitialProps({
    query
  }) {
    const {
      mode,
      oobCode,
      email
    } = query;
    return {
      mode: mode,
      oobCode: oobCode,
      email: email
    };
  }

  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
      loading: false,
      errorMessage: '',
      validationFailed: false,
      validationCompleted: false
    };
  }

  componentDidMount() {
    if (this.props.mode == 'verifyEmail' && this.props.email) {
      const email = this.props.email;
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/findUidByEmail`, {
        formattedEmail: Object(_functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* emailFormat */ "n"])(email, 'emailToString')
      }).then(r => {
        if (r.data == 'DOESNOTEXIST') this.setState({
          errorMessage: 'This user does not exist',
          validationFailed: true
        });else if (r.data) axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/verifyEmailAndPhoneNumber`, {
          type: 'email',
          userID: r.data
        }).then(() => {
          this.setState({
            validationCompleted: true
          });
        }).catch(error => {
          this.setState({
            errorMessage: error.message,
            validationFailed: true
          });
        });else this.setState({
          errorMessage: 'Network error, please try again',
          validationFailed: true
        });
      }).catch(error => {
        this.setState({
          errorMessage: error.message,
          validationFailed: true
        });
      });
    }

    ;
  }

  render() {
    const {
      mode,
      oobCode,
      email
    } = this.props;

    let title = '',
        subtitle = '',
        pageTitle = '',
        content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {});

    switch (mode) {
      case 'resetPassword':
        {
          pageTitle = 'Reset Password';
          title = 'Reset your password form';
          subtitle = 'Enter your new password and confirm it below.';
          content = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("input", {
              type: "password",
              placeholder: "Enter new password",
              className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactUsEmail,
              value: this.state.password,
              onChange: event => {
                this.setState({
                  password: event.target.value
                });
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("input", {
              type: "password",
              placeholder: "Re-enter your new password",
              className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactUsEmail,
              value: this.state.confirmPassword,
              onChange: event => {
                this.setState({
                  confirmPassword: event.target.value
                });
              }
            })]
          });
        }
        break;

      case 'recoverEmail':
        {
          pageTitle = 'Recover Email';
        }
        break;

      case 'verifyEmail':
        {
          pageTitle = 'Verify Email';
          title = 'Verify your email';
          if (this.state.validationCompleted) subtitle = `Your email, ${email} has been verified`;else if (this.state.validationFailed) subtitle = 'Email verification failed. Please contact us for further assistance';else subtitle = 'Verifying...';
        }
        break;
    }

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
      className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("title", {
          children: `${pageTitle} | Perch`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("link", {
          rel: "manifest",
          href: "/site.webmanifest"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("link", {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("html", {
          lang: "en"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("img", {
        src: "/articlesPageBack1.svg",
        alt: "Perch Carpool",
        className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainPageBack1
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
        className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
          className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.c_,
          style: {
            marginTop: '15px',
            marginBottom: '20px',
            justifyContent: 'space-between',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
            className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.t1,
            style: {
              margin: '0px'
            },
            children: title
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_functions_shareIcons__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])("div", {
          className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactUsCont,
          style: {
            paddingBottom: '20px'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
            className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactUsTitle,
            style: {
              marginTop: '20px',
              marginBottom: '0px'
            },
            children: subtitle
          }), content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
            className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
            style: {
              marginTop: '20px',
              marginBottom: '0px'
            },
            children: this.state.errorMessage
          })]
        }), mode == 'resetPassword' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
          className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactUsLC,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("a", {
            className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button2,
            onClick: () => {
              switch (mode) {
                case 'resetPassword':
                  {
                    if (this.state.password == '') this.setState({
                      errorMessage: 'Please enter a new password'
                    });else if (this.state.confirmPassword != this.state.password) this.setState({
                      errorMessage: 'Passwords do not match'
                    });else _functions_functions__WEBPACK_IMPORTED_MODULE_7__[/* resetPassword */ "w"].call(this, oobCode, this.state.password, email);
                  }
                  break;

                case 'recoverEmail':
                  {}
                  break;

                case 'verifyEmail':
                  {}
                  break;
              }
            },
            children: this.state.loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
              type: "TailSpin",
              color: '#ffffff',
              height: '20px',
              width: '20px'
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("p", {
              className: _s_articles_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText2,
              children: "Reset password"
            })
          })
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {})]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    });
  }

}

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "sfYE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "layout_container__3r4x1",
	"body": "layout_body__YXr0i",
	"mainPageBack1": "layout_mainPageBack1__3k9VM",
	"subTitle": "layout_subTitle__2tnm3",
	"contactUsLasttext": "layout_contactUsLasttext__mhBvw",
	"mainPageBack2": "layout_mainPageBack2__1q4Wc",
	"c": "layout_c__pyiM0",
	"c_": "layout_c___102Y1",
	"sep": "layout_sep__3bf_s",
	"ratesCont": "layout_ratesCont__5Rqry",
	"rateText1": "layout_rateText1__L2ByD",
	"rateText2": "layout_rateText2__3TY9Q",
	"rateText3": "layout_rateText3__3lFNJ",
	"map1Trip": "layout_map1Trip__3Wo1l",
	"noCommitmentNoSchedule": "layout_noCommitmentNoSchedule__U4SY6",
	"girlsJumpingGivingGifts": "layout_girlsJumpingGivingGifts__2PWSA",
	"exchangeMoney": "layout_exchangeMoney__3rb2C",
	"screenshot": "layout_screenshot__1SwTO",
	"_2screenshot": "layout__2screenshot__2zUH1",
	"glassSavings": "layout_glassSavings__zkxKY",
	"manOnBlueCar": "layout_manOnBlueCar__3i-XX",
	"downloadContainer": "layout_downloadContainer__2h458",
	"shareIcon_C": "layout_shareIcon_C__2D2Hv",
	"shareIcon": "layout_shareIcon__2qxi-",
	"appIcon": "layout_appIcon__2rEll",
	"app2": "layout_app2__1k5S3",
	"boxBlueLogo": "layout_boxBlueLogo__1wEqR",
	"t1": "layout_t1__3fAex",
	"t": "layout_t__mKlAz",
	"text": "layout_text__3t7x_",
	"textBox": "layout_textBox__R_No_",
	"carPicture": "layout_carPicture__3wBoM",
	"profilePicture": "layout_profilePicture__3afHW",
	"globe": "layout_globe__18VZo",
	"helpDesk": "layout_helpDesk__22r57",
	"buttonC": "layout_buttonC__1X8Sr",
	"button1": "layout_button1__Vq_nf",
	"button2": "layout_button2__3HL-B",
	"buttonText1": "layout_buttonText1__3Dpjp",
	"buttonText2": "layout_buttonText2__2Lvr3",
	"contactUsCont": "layout_contactUsCont__3HE_m",
	"contactUsLC": "layout_contactUsLC__co2fL",
	"selectTopic": "layout_selectTopic__24hPT",
	"contactUsEmail": "layout_contactUsEmail__1H64U",
	"contactUsContent": "layout_contactUsContent__2e-eT",
	"contactUsTitle": "layout_contactUsTitle__2M4wM",
	"lowerFAQImageCont": "layout_lowerFAQImageCont__2oXLE",
	"faqChoice": "layout_faqChoice__R0AYv",
	"faqChoice_": "layout_faqChoice___4r31p",
	"manChecklist": "layout_manChecklist__GDkp-",
	"referralCodeImage": "layout_referralCodeImage__XW2U_",
	"handShakeGreen": "layout_handShakeGreen__2uI1u",
	"perchWalletPanel": "layout_perchWalletPanel__1wltu",
	"sharingGiftReferral": "layout_sharingGiftReferral__1OLUx",
	"em": "layout_em__3oEC7",
	"p_": "layout_p___3UElu",
	"inv": "layout_inv__1JjJO",
	"dash": "layout_dash__X1Z5m",
	"c_dash": "layout_c_dash__jNwM5",
	"hpwImage": "layout_hpwImage__3eg7e",
	"tripDetailsPanel": "layout_tripDetailsPanel__2EnZm",
	"sFill": "layout_sFill__1IQJ2",
	"sFill_": "layout_sFill___3vqva",
	"panel": "layout_panel__12T6V",
	"panelTitle": "layout_panelTitle__30FtC",
	"panelText": "layout_panelText__3_9hh",
	"leftPanel": "layout_leftPanel__gJMI8",
	"app1": "layout_app1__1o94b",
	"p__": "layout_p____22xCa",
	"panelBottom": "layout_panelBottom__2JH5P",
	"c_dash2nd": "layout_c_dash2nd__1_eh1",
	"ratesCont_": "layout_ratesCont___229Rf",
	"sdt5": "layout_sdt5__2zccP"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });