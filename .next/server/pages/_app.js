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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/components/loadingScreen/loadingScreen.js
var loadingScreen = __webpack_require__("l099");

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./firebase/firebase.js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAZ3CufY3xl6dyv2whIZ_-VWQLQ3_IRh0c",
  authDomain: "perch-01.firebaseapp.com",
  databaseURL: "https://perch-01.firebaseio.com",
  projectId: "perch-01",
  storageBucket: "perch-01.appspot.com",
  messagingSenderId: "89897349326",
  appId: "1:89897349326:web:fc38609d8f58e32818609f",
  measurementId: "G-RKPPQQ9LNM"
};
if (!external_firebase_default.a.apps.length) external_firebase_default.a.initializeApp(firebaseConfig);
/* harmony default export */ var firebase = (external_firebase_default.a);
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

class _app_MyApp extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "M1wr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"svg": "layout_svg__1IibV"
};


/***/ }),

/***/ "WP1d":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "layout_container__14Hgr",
	"logo": "layout_logo__21VBC"
};


/***/ }),

/***/ "Z6QF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardIcons; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M1wr");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);




function Logo(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.svg,
    viewBox: "0 0 215.338 338.512",
    preserveAspectRatio: 'xMinYMin meet',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
      id: "Group_2",
      "data-name": "Group 2",
      transform: "translate(-3028 -1103.285)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_7",
        "data-name": "Path 7",
        d: "M635.347,169.576a44.41,44.41,0,0,0-15.718-16.109,42.173,42.173,0,0,0-50.751,4.927c-7.038,6.49-11.026,15.014-14.154,23.851a128.759,128.759,0,0,0-6.881,34.251c-.86,14.154-1.486,28.386-1.329,42.618.157,17.125,1.095,34.329,1.721,51.455,1.095,27.448-9.228,50.673-26.118,71.552a133.646,133.646,0,0,1-28.855,26.275,23.028,23.028,0,0,1-2.737,1.642c-4.145,2.033-8.054-.156-8.445-4.77-.078-1.486-.078-2.972-.078-4.457q0-110.964.078-221.927c.078-27.526,9.7-51.455,28.308-71.708,17.751-19.393,39.725-30.967,65.843-34.016,32.922-3.91,61.933,5.318,86.487,27.839,20.957,19.237,32.374,43.322,34.329,71.63a103.783,103.783,0,0,1-19.628,69.6c-17.595,24.554-41.367,39.1-71,44.1-5.318.938-10.791.782-16.187,1.095a5.375,5.375,0,0,1-5.943-4.223c-.782-3.05.938-5.083,3.441-6.49,3.91-2.346,7.976-4.457,11.73-6.96,10.244-6.647,18.689-14.936,24.007-26.2,6.491-13.607,6.256-27.6,2.111-41.836a116.763,116.763,0,0,1-3.988-19.237c-1.095-8.993,2.737-12.668,11.808-12.746C633.783,169.732,634.252,169.654,635.347,169.576Z",
        transform: "translate(2546 1031)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_8",
        "data-name": "Path 8",
        d: "M496.972,396.9c1.408-.938,2.268-1.486,3.05-2.111,12.668-10.791,23.147-23.3,30.654-38.239a88.837,88.837,0,0,0,9.775-43.635c-.391-12.355-1.329-24.789-1.642-37.144-.313-11.339-.391-22.678-.078-34.016.313-10.713.782-21.426,2.033-32.061,1.642-14.388,5.239-28.308,11.886-41.367,15.64-30.654,49.891-35.033,72.412-23.46,15.014,7.742,24.085,20.644,30.263,35.971a5.68,5.68,0,0,1-7.507,7.272c-3.05-1.329-6.021-2.737-9.071-3.91-2.111-.86-3.441-.235-2.893,2.268.938,4.145,1.72,8.367,2.972,12.434,3.128,10.4,5.239,20.957,3.91,31.9-1.955,16.343-9.071,30.106-21.035,41.445a42.779,42.779,0,0,0-3.284,3.284,12.977,12.977,0,0,0,2.111-.235c1.877-.547,3.91-1.095,5.787-1.8q38.239-14.662,54.973-52.237a92.667,92.667,0,0,0,7.507-46.606c-2.19-24.085-12.042-44.73-29.637-61.386-20.879-19.706-45.9-28.542-74.21-26.275-27.448,2.19-50.125,14.467-67.485,35.971-12.9,16.031-20.566,34.486-20.723,55.052-.391,71.63-.156,143.259-.156,214.889,0,1.095.235,2.19.391,3.988Z",
        transform: "translate(2542.837 1027.867)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
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
  if (props.size == 'laptopSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    viewBox: "0 0 1920 848.882",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M2392.783,4626.53S2029.567,4947.686,1641.1,4704.5c1.942,1.855-766.252-594.51-1168.316-154.545,3.885,0,0-603.328,0-603.328l1919.029,1.028Z",
      transform: "translate(2392.783 4795.508) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'tabSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    viewBox: "0 0 768 1842.856",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M1240.784,5422.645s-145.287,697.2-300.674,169.262c.777,4.028-306.5-1290.634-467.326-335.5,1.554,0,0-1309.776,0-1309.776l767.612,2.231Z",
      transform: "translate(1240.784 5789.482) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'phoneSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
    viewBox: "0 0 375.372 1566.853",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      preserveAspectRatio: 'xMinYMin meet',
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_3952",
        "data-name": "Path 3952",
        d: "M9.349,0H1.769A1.771,1.771,0,0,0,0,1.769V6.317A1.771,1.771,0,0,0,1.769,8.086H9.349a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,9.349,0Zm0,0",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_3953",
        "data-name": "Path 3953",
        d: "M9.349,213.332H1.769A1.771,1.771,0,0,0,0,215.1v10.613a1.771,1.771,0,0,0,1.769,1.769H9.349a1.771,1.771,0,0,0,1.769-1.769V215.1A1.771,1.771,0,0,0,9.349,213.332Zm0,0",
        transform: "translate(0 -203.225)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_3954",
        "data-name": "Path 3954",
        d: "M286.682,341.332H279.1a1.771,1.771,0,0,0-1.769,1.769v4.548a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V343.1A1.771,1.771,0,0,0,286.682,341.332Zm0,0",
        transform: "translate(-264.192 -325.16)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_3955",
        "data-name": "Path 3955",
        d: "M286.682,0H279.1a1.771,1.771,0,0,0-1.769,1.769V12.382a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,286.682,0Zm0,0",
        transform: "translate(-264.192)",
        fill: "#fff"
      })]
    });else if (props.icon == 'th') //trip history
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.793",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        id: "history",
        transform: "translate(0 -32)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_1731",
          "data-name": "Group 1731",
          transform: "translate(0 32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
            id: "Group_1730",
            "data-name": "Group 1730",
            transform: "translate(0 0)",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_3956",
              "data-name": "Path 3956",
              d: "M234.667,138.667v5.776l4.944,2.934.832-1.4-4.043-2.4v-4.909Z",
              transform: "translate(-221.96 -132.891)",
              fill: "#fff"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.06",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        id: "wallet",
        transform: "translate(0 -44.308)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_1735",
          "data-name": "Group 1735",
          transform: "translate(0 44.308)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_1734",
            "data-name": "Group 1734",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_3958",
              "data-name": "Path 3958",
              d: "M17.727,50.839h6.531V47.807a3.5,3.5,0,0,0-3.5-3.5H3.5a3.5,3.5,0,0,0-3.5,3.5V60.869a3.5,3.5,0,0,0,3.5,3.5H20.759a3.5,3.5,0,0,0,3.5-3.5V57.837H17.727a3.5,3.5,0,1,1,0-7Z",
              transform: "translate(0 -44.308)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_1737",
          "data-name": "Group 1737",
          transform: "translate(15.628 52.238)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_1736",
            "data-name": "Group 1736",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      viewBox: "0 0 24.258 27.6",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        id: "headphones",
        transform: "translate(-31)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3836",
          "data-name": "Group 3836",
          transform: "translate(34.234 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_3835",
            "data-name": "Group 3835",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_1636",
              "data-name": "Path 1636",
              d: "M93.426,210A2.429,2.429,0,0,0,91,212.426V219a2.426,2.426,0,1,0,4.852,0v-6.577A2.429,2.429,0,0,0,93.426,210Z",
              transform: "translate(-91 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3838",
          "data-name": "Group 3838",
          transform: "translate(31 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_3837",
            "data-name": "Group 3837",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_1637",
              "data-name": "Path 1637",
              d: "M32.617,243.047a4.012,4.012,0,0,1,.069-.681,2.421,2.421,0,0,0-1.686,2.3v3.342a2.421,2.421,0,0,0,1.686,2.3,4.012,4.012,0,0,1-.069-.681Z",
              transform: "translate(-31 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3840",
          "data-name": "Group 3840",
          transform: "translate(40.703 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_3839",
            "data-name": "Group 3839",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_1638",
              "data-name": "Path 1638",
              d: "M219.895,210a2.428,2.428,0,0,0-2.426,2.426V219a2.428,2.428,0,0,0,2.426,2.426,2.393,2.393,0,0,0,.695-.114,2.421,2.421,0,0,1-2.312,1.731H215.7a2.426,2.426,0,1,0,0,1.617h2.575a4.048,4.048,0,0,0,4.043-4.043v-8.194A2.429,2.429,0,0,0,219.895,210Z",
              transform: "translate(-211 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3842",
          "data-name": "Group 3842",
          transform: "translate(53.572 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_3841",
            "data-name": "Group 3841",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_1639",
              "data-name": "Path 1639",
              d: "M449.722,242.366a4.015,4.015,0,0,1,.069.681v6.577a4.015,4.015,0,0,1-.069.681,2.421,2.421,0,0,0,1.686-2.3v-3.342A2.421,2.421,0,0,0,449.722,242.366Z",
              transform: "translate(-449.722 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3844",
          "data-name": "Group 3844",
          transform: "translate(31)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_3843",
            "data-name": "Group 3843",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      viewBox: "0 0 24.258 24.932",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
        id: "settings",
        transform: "translate(-5.768)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_3848",
          "data-name": "Group 3848",
          transform: "translate(5.768)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
            id: "Path_3960",
            "data-name": "Path 3960",
            d: "M29.787,15.745l-2.63-2.063a9.79,9.79,0,0,0,.087-1.215,9.79,9.79,0,0,0-.087-1.215l2.637-2.063a.622.622,0,0,0,.15-.8L27.449,4.07a.617.617,0,0,0-.76-.268l-3.1,1.253a9.459,9.459,0,0,0-2.107-1.228L21.01.524A.641.641,0,0,0,20.387,0H15.4a.629.629,0,0,0-.617.524l-.467,3.3a9.225,9.225,0,0,0-2.107,1.228L9.105,3.8a.624.624,0,0,0-.76.268L5.852,8.39a.624.624,0,0,0,.15.8l2.63,2.063a9.79,9.79,0,0,0-.087,1.215,9.79,9.79,0,0,0,.087,1.215L6,15.745a.622.622,0,0,0-.15.8l2.493,4.32a.617.617,0,0,0,.76.268l3.1-1.253a9.459,9.459,0,0,0,2.107,1.228l.467,3.3a.629.629,0,0,0,.617.524h4.986A.629.629,0,0,0,21,24.409l.467-3.3a9.225,9.225,0,0,0,2.107-1.228l3.1,1.253a.624.624,0,0,0,.76-.268l2.493-4.32A.624.624,0,0,0,29.787,15.745ZM17.894,16.829a4.363,4.363,0,1,1,4.363-4.363A4.36,4.36,0,0,1,17.894,16.829Z",
            transform: "translate(-5.768)",
            fill: "#fff"
          })
        })
      })
    });else if (props.icon == 'tt') //tutorial
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_4073",
        "data-name": "Path 4073",
        d: "M96.872,429.606H94.938a2.138,2.138,0,0,1-2.091-1.714L92.669,427H85.913l-.178.892a2.138,2.138,0,0,1-2.091,1.714H81.711a.711.711,0,1,0,0,1.421H96.872a.711.711,0,1,0,0-1.421Z",
        transform: "translate(-77.162 -406.769)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        id: "Group_4017",
        "data-name": "Group 4017",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ellipse", {
          id: "Ellipse_193",
          "data-name": "Ellipse 193",
          cx: "1",
          cy: "1.5",
          rx: "1",
          ry: "1.5",
          transform: "translate(11 3.258)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          id: "Path_4074",
          "data-name": "Path 4074",
          d: "M203.82,155a2.609,2.609,0,0,0-2.6,2.369h5.19A2.609,2.609,0,0,0,203.82,155Z",
          transform: "translate(-191.691 -147.656)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
          id: "Path_4075",
          "data-name": "Path 4075",
          d: "M22.126,0H2.132A2.134,2.134,0,0,0,0,2.132V16.677a2.134,2.134,0,0,0,2.132,2.132H22.126a2.134,2.134,0,0,0,2.132-2.132V2.132A2.134,2.134,0,0,0,22.126,0ZM8.1,9.949a4.029,4.029,0,0,1,2.056-3.51,2.606,2.606,0,1,1,3.942,0,4.029,4.029,0,0,1,2.056,3.51v.474a.711.711,0,0,1-.711.711H8.812a.711.711,0,0,1-.711-.711Zm12.555,5.78H7.628v.237a.711.711,0,1,1-1.421,0V15.73H3.6a.711.711,0,1,1,0-1.421H6.207v-.237a.711.711,0,0,1,1.421,0v.237H20.657a.711.711,0,1,1,0,1.421Z",
          fill: "#fff"
        })]
      })]
    });else if (props.icon == 'vh') //vehicle
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
      viewBox: "0 0 29.042 22.546",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_2405",
        "data-name": "Path 2405",
        d: "M52.215,42.418l-.134-.776H53.9a.766.766,0,0,0,.745-.94l-.722-3.057a.765.765,0,0,0-.745-.589h-1.9l-.008-.046A3.785,3.785,0,0,0,47.682,34H33.864a3.992,3.992,0,0,0-3.714,2.984l-.015.073H28.251a.765.765,0,0,0-.745.589L26.783,40.7a.766.766,0,0,0,.745.94h1.6l-.168.768A3.067,3.067,0,0,0,26,45.464v5.35a3.066,3.066,0,0,0,3.057,3.057v.546a2.16,2.16,0,0,0,2.19,2.129h1.735a2.16,2.16,0,0,0,2.19-2.129v-.546h10.7v.546a2.16,2.16,0,0,0,2.19,2.129H49.8a2.16,2.16,0,0,0,2.19-2.129v-.546a3.066,3.066,0,0,0,3.057-3.057v-5.35A3.065,3.065,0,0,0,52.215,42.418Zm.355-3.833.359,1.529H51.81l-.267-1.529ZM31.644,37.313a2.482,2.482,0,0,1,2.22-1.785H47.682a2.254,2.254,0,0,1,2.079,1.746l.9,5.132H30.528Zm-3.149,2.8.359-1.529H29.8l-.336,1.529Zm5.147,14.3a.636.636,0,0,1-.661.6H31.247a.636.636,0,0,1-.661-.6v-.546h3.057Zm16.814,0a.636.636,0,0,1-.661.6H48.061a.636.636,0,0,1-.661-.6v-.546h3.057Zm3.057-3.6a1.528,1.528,0,0,1-1.529,1.529H29.057a1.528,1.528,0,0,1-1.529-1.529v-5.35a1.528,1.528,0,0,1,1.529-1.529H51.985a1.528,1.528,0,0,1,1.529,1.529Z",
        transform: "translate(-26 -34)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_2406",
        "data-name": "Path 2406",
        d: "M40.878,68.057H50.05a.764.764,0,0,0,0-1.529H40.878a.764.764,0,0,0,0,1.529ZM36.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,36.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,36.293,68.057Z",
        transform: "translate(-30.943 -53.154)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_2407",
        "data-name": "Path 2407",
        d: "M84.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,84.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,84.293,68.057Z",
        transform: "translate(-60.6 -53.154)",
        fill: "#fff"
      })]
    });else if (props.icon == 'tx') //tax
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("svg", {
      viewBox: "0 0 24.593 24.593",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_4078",
        "data-name": "Path 4078",
        d: "M20.388,10.488V.723A.723.723,0,0,0,19.665,0H.723A.723.723,0,0,0,0,.723v19.4a1.176,1.176,0,0,0,1.156,1.175A1.179,1.179,0,0,0,2.307,20.12V12.976c0-.01,0-.02,0-.03a2.56,2.56,0,0,1,2.564-2.458ZM13.406,3.647a.723.723,0,1,1,1.117-.92l1.084,1.317,1.084-1.317a.724.724,0,0,1,1.117.92L16.544,5.183,17.809,6.72a.723.723,0,0,1-1.117.919L15.607,6.322,14.523,7.639a.723.723,0,1,1-1.117-.919L14.67,5.183ZM7.276,4.83a2.366,2.366,0,1,1,4.732,0V7.18a.723.723,0,0,1-1.447,0V6.618H8.722V7.18a.723.723,0,1,1-1.447,0ZM4.147,7.9a.723.723,0,0,1-.723-.723V3.91H2.5a.723.723,0,0,1,0-1.447H5.79a.723.723,0,0,1,0,1.447H4.87V7.18A.723.723,0,0,1,4.147,7.9Z",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_4079",
        "data-name": "Path 4079",
        d: "M73.424,247.5h0a1.117,1.117,0,0,0-1.118,1.058v7.127a2.6,2.6,0,0,1-.281,1.175h2.524v-8.24A1.121,1.121,0,0,0,73.424,247.5Z",
        transform: "translate(-68.547 -235.565)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_4080",
        "data-name": "Path 4080",
        d: "M182.719,82.01a.919.919,0,1,0-1.839,0v.342h1.839Z",
        transform: "translate(-172.158 -77.18)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
        id: "Path_4081",
        "data-name": "Path 4081",
        d: "M165.307,247.5H149.02a2.552,2.552,0,0,1,.257,1.121v10.814a.723.723,0,0,0,.723.723h15.7a.723.723,0,0,0,.723-.723V248.621A1.121,1.121,0,0,0,165.307,247.5Zm-13.029,3.707h5.605a.723.723,0,1,1,0,1.447h-5.605a.723.723,0,0,1,0-1.447Zm5.64,5.352c-.035,0,.307,0-5.64,0a.723.723,0,1,1,0-1.447h5.605a.723.723,0,0,1,.035,1.446Zm6.059,0h-2.749a.723.723,0,1,1,0-1.447h2.749a.723.723,0,1,1,0,1.447Zm0-3.906h-2.749a.723.723,0,0,1,0-1.447h2.749a.723.723,0,0,1,0,1.447Z",
        transform: "translate(-141.834 -235.565)",
        fill: "#fff"
      })]
    });else if (props.icon == 'pi') //payout information
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
      viewBox: "0 0 24.348 16.232",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("g", {
        id: "credit-card",
        transform: "translate(0 -85.333)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_4021",
          "data-name": "Group 4021",
          transform: "translate(0 91.42)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_4020",
            "data-name": "Group 4020",
            transform: "translate(0 0)",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_4076",
              "data-name": "Path 4076",
              d: "M23.84,213.333H.507A.479.479,0,0,0,0,213.84v7.1a2.512,2.512,0,0,0,2.536,2.536H21.811a2.512,2.512,0,0,0,2.536-2.536v-7.1A.479.479,0,0,0,23.84,213.333Zm-20.29,4.058H7.609a.507.507,0,1,1,0,1.015H3.551a.507.507,0,1,1,0-1.015Zm7.1,3.043h-7.1a.507.507,0,1,1,0-1.015h7.1a.507.507,0,1,1,0,1.015Zm8.623,0a1.714,1.714,0,0,1-1.014-.3,1.714,1.714,0,0,1-1.014.3,2.029,2.029,0,0,1,0-4.058,1.714,1.714,0,0,1,1.014.3,1.714,1.714,0,0,1,1.014-.3,2.029,2.029,0,1,1,0,4.058Z",
              transform: "translate(0 -213.333)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
          id: "Group_4023",
          "data-name": "Group 4023",
          transform: "translate(0 85.333)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("g", {
            id: "Group_4022",
            "data-name": "Group 4022",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
              id: "Path_4077",
              "data-name": "Path 4077",
              d: "M21.811,85.333H2.536A2.512,2.512,0,0,0,0,87.869v1.014a.479.479,0,0,0,.507.507H23.84a.479.479,0,0,0,.507-.507V87.869A2.512,2.512,0,0,0,21.811,85.333Z",
              transform: "translate(0 -85.333)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'one') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    viewBox: "0 0 13 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("text", {
      id: "_1",
      "data-name": "1",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "1"
      })
    })
  });else if (props.icon == 'two') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    viewBox: "0 0 17 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("text", {
      id: "_2",
      "data-name": "2",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "2"
      })
    })
  });else if (props.icon == 'three') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    viewBox: "0 0 18 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("text", {
      id: "_3",
      "data-name": "3",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "3"
      })
    })
  });
}
;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "l099":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WP1d");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Z6QF");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "updateWindowDimensions", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      style: {
        height: this.state.height != 0 ? this.state.height : '100vh'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
          children: "Perch"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "manifest",
          href: "/site.webmanifest"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
          name: "theme-color",
          content: "#ffffff"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_4__[/* Logo */ "c"], {
          color: this.props.driverLogo ? '#1970A7' : '#4EB848'
        })
      })]
    });
  }

}

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });