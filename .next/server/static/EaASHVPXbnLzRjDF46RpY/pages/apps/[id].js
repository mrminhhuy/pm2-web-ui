module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3xcS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  let {
    title,
    text,
    color = 'is-danger',
    onRemove = null
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "text", "color", "onRemove"]);

  return __jsx("article", _extends({
    className: `message ${color}`
  }, props), __jsx("div", {
    className: "message-header"
  }, __jsx("p", null, title), onRemove && __jsx("button", {
    className: "delete",
    "aria-label": "delete",
    onClick: () => onRemove()
  })), __jsx("div", {
    className: "message-body"
  }, text));
});
;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hPbj");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AD/7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y02/");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const withAuth = Component => {
  function login(props) {
    const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    const {
      0: error,
      1: setError
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    const {
      authSynced,
      client
    } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => ({
      authSynced: state.authSynced,
      client: state.client
    }), react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!authSynced) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/me').then(({
          data: {
            user
          }
        }) => isMounted && dispatch({
          type: 'auth',
          client: user
        })).catch(err => {
          var _err$response, _err$response$data, _err$response$statusT;

          if (!isMounted) {
            return;
          }

          const msg = (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message;
          setError(msg ? [(_err$response$statusT = err.response.statusText) !== null && _err$response$statusT !== void 0 ? _err$response$statusT : 'Error', msg] : ['Error', err.toString()]);
        });
      }
    }, [authSynced]);
    return client ? __jsx(Component, props) : __jsx(_components_LoginPage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({}, props, {
      isLoading: !authSynced && !error,
      error: error
    }));
  }

  ;
  return login;
};

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "DBJP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  let {
    className = '',
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "icon"]);

  return __jsx("span", _extends({
    key: icon,
    className: `icon ${className}`
  }, props), __jsx("i", {
    className: `fas ${icon}`
  }));
});

/***/ }),

/***/ "H7Se":
/***/ (function(module, exports) {

module.exports = require("v8n");

/***/ }),

/***/ "Ozl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DBJP");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  let {
    pull = 'right'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["pull"]);

  return __jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({
    className: pull ? `is-pulled-${pull}` : '',
    icon: "fa-layer-group",
    style: {
      marginLeft: '10px',
      display: 'inline'
    }
  }, props));
});

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UJ/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetcher; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const onInput = fn => e => fn(e.target.value);
const fetcher = async path => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path);
  return data;
};

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZQtW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./client/components/LoginButton.tsx

var __jsx = external_react_default.a.createElement;

function LoginButton(props) {
  const {
    logout,
    isLoading
  } = props;
  return __jsx(link_default.a, {
    href: logout ? '/logout' : '/login'
  }, __jsx("a", {
    className: `button is-link ${isLoading ? 'is-loading is-disabled' : ''}`
  }, __jsx("strong", null, logout ? 'Log out' : 'Log in')));
}
;
// CONCATENATED MODULE: ./client/components/Navbar.tsx

var Navbar_jsx = external_react_default.a.createElement;




/* harmony default export */ var Navbar = __webpack_exports__["a"] = (function () {
  const client = Object(external_react_redux_["useSelector"])(state => state.client);
  const {
    0: burgerActive,
    1: setBurgerActive
  } = Object(external_react_["useState"])(false);
  return Navbar_jsx("nav", {
    className: "navbar has-shadow is-spaced",
    role: "navigation",
    "aria-label": "main navigation"
  }, Navbar_jsx("div", {
    className: "navbar-brand"
  }, Navbar_jsx(link_default.a, {
    href: "/"
  }, Navbar_jsx("a", {
    className: "navbar-item"
  }, Navbar_jsx("img", {
    src: "/img/logo.png",
    width: "66",
    height: "28"
  }))), Navbar_jsx("a", {
    role: "button",
    className: `navbar-burger burger ${burgerActive ? 'is-active' : ''}`,
    onClick: () => setBurgerActive(!burgerActive),
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample"
  }, Navbar_jsx("span", {
    "aria-hidden": "true"
  }), Navbar_jsx("span", {
    "aria-hidden": "true"
  }), Navbar_jsx("span", {
    "aria-hidden": "true"
  }))), Navbar_jsx("div", {
    id: "navbar",
    className: `navbar-menu ${burgerActive ? 'is-active' : ''}`
  }, client && Navbar_jsx("div", {
    className: "navbar-start"
  }, Navbar_jsx(link_default.a, {
    href: "/"
  }, Navbar_jsx("a", {
    className: "navbar-item"
  }, "Dashboard")), client.isAdmin && Navbar_jsx("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, Navbar_jsx("a", {
    className: "navbar-link"
  }, "Administration"), Navbar_jsx("div", {
    className: "navbar-dropdown"
  }, Navbar_jsx(link_default.a, {
    href: "/users"
  }, Navbar_jsx("a", {
    className: "navbar-item"
  }, "Users")), Navbar_jsx(link_default.a, {
    href: "/deployment"
  }, Navbar_jsx("a", {
    className: "navbar-item"
  }, "Deploy an application"))))), Navbar_jsx("div", {
    className: "navbar-end"
  }, client && Navbar_jsx(link_default.a, {
    href: "/profile"
  }, Navbar_jsx("a", {
    className: "navbar-item"
  }, client.username)), Navbar_jsx("div", {
    className: "navbar-item"
  }, Navbar_jsx(LoginButton, {
    isLoading: false,
    logout: !!client
  })))));
});
;

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hPbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: ./client/util.ts
var util = __webpack_require__("UJ/n");

// EXTERNAL MODULE: ./client/middlewares/redux.tsx + 1 modules
var redux = __webpack_require__("muLP");

// EXTERNAL MODULE: ./client/middlewares/auth.tsx
var auth = __webpack_require__("AD/7");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./client/components/Layout.tsx
var Layout = __webpack_require__("jcc4");

// EXTERNAL MODULE: ./client/components/Icon.tsx
var Icon = __webpack_require__("DBJP");

// CONCATENATED MODULE: ./client/components/apps/BaseButton.tsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const unknownState = {
  disabled: true,
  text: '...',
  icon: 'fa-bug',
  color: 'is-danger'
};
/* harmony default export */ var BaseButton = (function (_ref) {
  let {
    traits,
    status,
    disabled: shouldBeDisabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["traits", "status", "disabled", "loading"]);

  const {
    disabled,
    text,
    icon,
    color
  } = traits[status] || unknownState;
  return __jsx("button", _extends({
    className: `button ${color} ${loading ? 'is-loading' : ''}`,
    disabled: disabled || loading || shouldBeDisabled
  }, props), __jsx(Icon["a" /* default */], {
    className: "is-small",
    icon: icon
  }), __jsx("span", null, text));
});
;
// CONCATENATED MODULE: ./client/components/apps/StartButton.tsx

var StartButton_jsx = external_react_default.a.createElement;

function StartButton_extends() { StartButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StartButton_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StartButton_traits = {
  stopped: {
    disabled: false,
    text: 'Start',
    icon: 'fa-play',
    color: 'is-success'
  },
  online: {
    disabled: false,
    text: 'Stop',
    icon: 'fa-stop',
    color: 'is-danger'
  },
  stopping: null,
  launching: null,
  errored: null,
  ['one-launch-status']: null
};
StartButton_traits.errored = StartButton_traits.stopped;
StartButton_traits['one-launch-status'] = StartButton_traits.online;
StartButton_traits.stopping = _objectSpread({}, StartButton_traits.stopped, {
  disabled: true
});
StartButton_traits.launching = _objectSpread({}, StartButton_traits.online, {
  disabled: true
});
/* harmony default export */ var StartButton = (function (props) {
  return StartButton_jsx(BaseButton, StartButton_extends({}, props, {
    traits: StartButton_traits
  }));
});
;
// CONCATENATED MODULE: ./client/components/apps/RestartButton.tsx

var RestartButton_jsx = external_react_default.a.createElement;

function RestartButton_extends() { RestartButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RestartButton_extends.apply(this, arguments); }

function RestartButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RestartButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RestartButton_ownKeys(Object(source), true).forEach(function (key) { RestartButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RestartButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RestartButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const RestartButton_traits = {
  online: {
    disabled: false,
    text: 'Restart',
    icon: 'fa-redo-alt',
    color: 'is-link'
  },
  stopping: null,
  launching: null,
  errored: null,
  stopped: null,
  ['one-launch-status']: null
};
RestartButton_traits.stopped = RestartButton_objectSpread({}, RestartButton_traits.online, {
  disabled: true
});
RestartButton_traits.errored = RestartButton_traits.stopped;
RestartButton_traits['one-launch-status'] = RestartButton_traits.stopped;
RestartButton_traits.stopping = RestartButton_traits.stopped;
RestartButton_traits.launching = RestartButton_traits.stopped;
/* harmony default export */ var RestartButton = (function (props) {
  return RestartButton_jsx(BaseButton, RestartButton_extends({}, props, {
    traits: RestartButton_traits
  }));
});
;
// CONCATENATED MODULE: ./client/components/apps/DeleteButton.tsx

var DeleteButton_jsx = external_react_default.a.createElement;

function DeleteButton_extends() { DeleteButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DeleteButton_extends.apply(this, arguments); }

function DeleteButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DeleteButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DeleteButton_ownKeys(Object(source), true).forEach(function (key) { DeleteButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DeleteButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DeleteButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DeleteButton_traits = {
  stopped: {
    disabled: false,
    text: 'Delete',
    icon: 'fa-trash-alt',
    color: 'is-dark'
  },
  stopping: null,
  launching: null,
  errored: null,
  online: null,
  ['one-launch-status']: null
};
DeleteButton_traits.errored = DeleteButton_traits.stopped;
DeleteButton_traits.online = DeleteButton_objectSpread({}, DeleteButton_traits.stopped, {
  disabled: true
});
DeleteButton_traits['one-launch-status'] = DeleteButton_traits.online;
DeleteButton_traits.stopping = DeleteButton_traits.online;
DeleteButton_traits.launching = DeleteButton_traits.online;
/* harmony default export */ var DeleteButton = (function (props) {
  return DeleteButton_jsx(BaseButton, DeleteButton_extends({}, props, {
    traits: DeleteButton_traits
  }));
});
;
// CONCATENATED MODULE: ./client/components/Panel.tsx

var Panel_jsx = external_react_default.a.createElement;
/* harmony default export */ var Panel = (function ({
  title,
  children = null,
  onUpdate = null,
  canUpdate = false
}) {
  return Panel_jsx("div", {
    className: "container panel is-info"
  }, Panel_jsx("div", {
    className: "panel-heading"
  }, title, Panel_jsx("a", {
    className: `button button-primary is-pulled-right is-light is-outlined ${canUpdate ? '' : 'is-loading'}`,
    style: {
      marginTop: '-6px'
    },
    onClick: () => canUpdate && onUpdate()
  }, "Update")), Panel_jsx("div", {
    className: "panel-block",
    style: {
      width: '100%'
    }
  }, children));
});
// EXTERNAL MODULE: ./client/components/ErrorDisplay.tsx
var ErrorDisplay = __webpack_require__("3xcS");

// EXTERNAL MODULE: ./shared/pm2.ts
var pm2 = __webpack_require__("mBNB");

// EXTERNAL MODULE: ./shared/actions.ts
var actions = __webpack_require__("nLWT");

// CONCATENATED MODULE: ./client/components/apps/ReloadButton.tsx

var ReloadButton_jsx = external_react_default.a.createElement;

function ReloadButton_extends() { ReloadButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ReloadButton_extends.apply(this, arguments); }

function ReloadButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ReloadButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ReloadButton_ownKeys(Object(source), true).forEach(function (key) { ReloadButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ReloadButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ReloadButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ReloadButton_traits = {
  online: {
    disabled: false,
    text: 'Reload',
    icon: 'fa-sync-alt',
    color: 'is-primary'
  },
  stopping: null,
  launching: null,
  errored: null,
  stopped: null,
  ['one-launch-status']: null
};
ReloadButton_traits.stopped = ReloadButton_objectSpread({}, ReloadButton_traits.online, {
  disabled: true
});
ReloadButton_traits.errored = ReloadButton_traits.stopped;
ReloadButton_traits['one-launch-status'] = ReloadButton_traits.stopped;
ReloadButton_traits.stopping = ReloadButton_traits.stopped;
ReloadButton_traits.launching = ReloadButton_traits.stopped;
/* harmony default export */ var ReloadButton = (function (props) {
  return ReloadButton_jsx(BaseButton, ReloadButton_extends({}, props, {
    traits: ReloadButton_traits
  }));
});
;
// EXTERNAL MODULE: ./client/components/ClusterIcon.tsx
var ClusterIcon = __webpack_require__("Ozl8");

// CONCATENATED MODULE: ./client/components/apps/InstancePanel.tsx

var InstancePanel_jsx = external_react_default.a.createElement;





const tabs = [{
  title: 'Monitoring',
  element: MonitoringTab
}, {
  title: 'Details',
  element: DetailsTab
}, {
  title: 'Environment',
  element: EnvironmentTab
}, {
  title: 'Logs',
  element: LogsPanel
}];

function LogsPanel(props) {
  const {
    name,
    pm_id
  } = props.app;
  const {
    data,
    error,
    isValidating
  } = external_swr_default()(`/api/apps/${name}/${pm_id}/logs`, util["a" /* fetcher */], {
    refreshInterval: 3000
  });

  if (error) {
    var _ref, _error$response, _ref2, _error$response2, _error$response2$data;

    return InstancePanel_jsx(ErrorDisplay["a" /* default */], {
      title: (_ref = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.statusText) !== null && _ref !== void 0 ? _ref : 'Error',
      text: (_ref2 = (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) !== null && _ref2 !== void 0 ? _ref2 : error.toString()
    });
  }

  return InstancePanel_jsx("div", null, InstancePanel_jsx("div", {
    className: "field"
  }, InstancePanel_jsx("label", {
    className: "label"
  }, "Output Logs"), InstancePanel_jsx("div", {
    className: `control ${!data || isValidating ? 'is-loading' : ''}`
  }, InstancePanel_jsx("textarea", {
    className: "textarea",
    readOnly: true,
    rows: 15,
    value: data === null || data === void 0 ? void 0 : data.output.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
  }))), InstancePanel_jsx("div", {
    className: "field"
  }, InstancePanel_jsx("label", {
    className: "label"
  }, "Error Logs"), InstancePanel_jsx("div", {
    className: `control ${!data || isValidating ? 'is-loading' : ''}`
  }, InstancePanel_jsx("textarea", {
    className: "textarea",
    readOnly: true,
    rows: 15,
    value: data === null || data === void 0 ? void 0 : data.error.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
  }))));
}

function EnvironmentTab(props) {
  const {
    name,
    pm2_env
  } = props.app;
  const {
    env
  } = pm2_env;
  const keys = Object.keys(env).filter(k => k != name);
  return InstancePanel_jsx("div", {
    className: "table-container",
    style: {
      width: '100%'
    }
  }, InstancePanel_jsx("table", {
    className: "table is-narrow is-fullwidth is-bordered auto-overflow",
    style: {
      tableLayout: 'fixed'
    }
  }, InstancePanel_jsx("thead", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("th", null, "env_variable"), InstancePanel_jsx("th", null, "value"))), InstancePanel_jsx("tbody", null, keys.length === 0 ? InstancePanel_jsx("tr", null, InstancePanel_jsx("td", {
    colSpan: 2
  }, "There are no environment variables.")) : keys.map(k => InstancePanel_jsx("tr", {
    key: k
  }, InstancePanel_jsx("td", null, k), InstancePanel_jsx("td", null, env[k].toString()))))));
}

function DetailsTab(props) {
  const {
    pid,
    pm_id,
    name,
    pm2_env
  } = props.app;
  const {
    pm_exec_path,
    exec_mode,
    exec_interpreter,
    restart_time,
    unstable_restarts,
    pm_out_log_path,
    pm_err_log_path
  } = pm2_env;
  return InstancePanel_jsx("div", null, InstancePanel_jsx("div", {
    className: "field"
  }, InstancePanel_jsx("label", {
    className: "label"
  }, "Script Path"), InstancePanel_jsx("div", {
    className: "control"
  }, InstancePanel_jsx("input", {
    className: "input",
    type: "text",
    value: pm_exec_path,
    readOnly: true
  }))), InstancePanel_jsx("label", {
    className: "label"
  }, "Output Path"), InstancePanel_jsx("div", {
    className: "field is-grouped"
  }, InstancePanel_jsx("div", {
    className: "control is-expanded"
  }, InstancePanel_jsx("input", {
    className: "input",
    type: "text",
    value: pm_out_log_path,
    readOnly: true
  })), InstancePanel_jsx("div", {
    className: "control is-expanded"
  }, InstancePanel_jsx("input", {
    className: "input",
    type: "text",
    value: pm_err_log_path,
    readOnly: true
  }))), InstancePanel_jsx("table", {
    className: "table is-fullwidth is-bordered"
  }, InstancePanel_jsx("thead", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("th", null, "pm_id"), InstancePanel_jsx("th", null, "pid"), InstancePanel_jsx("th", null, "exec_mode"), InstancePanel_jsx("th", null, "exec_interpreter"))), InstancePanel_jsx("tbody", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("td", null, pm_id), InstancePanel_jsx("td", null, pid), InstancePanel_jsx("td", null, exec_mode), InstancePanel_jsx("td", null, exec_interpreter))), InstancePanel_jsx("thead", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("th", {
    colSpan: 2
  }, "restarts"), InstancePanel_jsx("th", {
    colSpan: 2
  }, "unstable_restarts"))), InstancePanel_jsx("tbody", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("td", {
    colSpan: 2
  }, restart_time), InstancePanel_jsx("td", {
    colSpan: 2
  }, unstable_restarts)))));
}

const bytesInMb = 1024 ** 2;

function MonitoringTab(props) {
  const {
    monit,
    pm2_env
  } = props.app;
  const {
    cpu,
    memory
  } = monit;
  const {
    status
  } = pm2_env;
  return InstancePanel_jsx("table", {
    className: "table status-table is-fullwidth is-centered"
  }, InstancePanel_jsx("thead", null, InstancePanel_jsx("tr", {
    className: `is-size-5 ${status === pm2["a" /* AppStatus */].ONLINE || status === pm2["a" /* AppStatus */].ONE_LAUNCH ? 'is-online' : 'is-offline'}`
  }, InstancePanel_jsx("th", null, "status"), InstancePanel_jsx("th", null, "memory"), InstancePanel_jsx("th", null, "cpu"))), InstancePanel_jsx("tbody", null, InstancePanel_jsx("tr", null, InstancePanel_jsx("td", null, status), InstancePanel_jsx("td", null, (memory / bytesInMb).toFixed(2), "mb"), InstancePanel_jsx("td", null, cpu, "%"))));
}

;
/* harmony default export */ var InstancePanel = (function (_ref3) {
  let props = Object.assign({}, _ref3);
  const {
    0: tabIndex,
    1: setTab
  } = Object(external_react_["useState"])(0);
  const app = props.app;
  const {
    pid
  } = app;
  const Element = tabs[tabIndex].element;
  return InstancePanel_jsx("div", {
    className: "box"
  }, InstancePanel_jsx("div", null, InstancePanel_jsx("p", {
    style: {
      marginBottom: '-2rem'
    }
  }, "pid: ", pid)), InstancePanel_jsx("div", {
    className: "tabs is-centered"
  }, InstancePanel_jsx("ul", null, tabs.map((t, index) => InstancePanel_jsx("li", {
    key: t.title,
    className: index == tabIndex ? 'is-active' : '',
    onClick: () => setTab(index)
  }, InstancePanel_jsx("a", null, t.title))))), InstancePanel_jsx(Element, {
    app: app
  }));
});
// CONCATENATED MODULE: ./client/components/apps/InstancesList.tsx

var InstancesList_jsx = external_react_default.a.createElement;

const InstancesList_bytesInMb = 1024 ** 2;
/* harmony default export */ var InstancesList = (function (props) {
  const apps = props.apps;
  return InstancesList_jsx("div", {
    className: "container"
  }, InstancesList_jsx("style", null, `
        tr { display: flex; }
        tr > th, td { flex: 1; text-align: center!important; }
        .is-online > th { border-color: #48c774!important; }
        .is-offline > th { border-color: #f14668!important; }
        .auto-overflow > th, td { overflow: auto;  }
      `), apps.map((app, index) => InstancesList_jsx(InstancePanel, {
    key: `${app.pid}_${index}`,
    app: app
  })));
});
;
// EXTERNAL MODULE: ./shared/user.ts
var user = __webpack_require__("v9gO");

// CONCATENATED MODULE: ./pages/apps/[id].tsx

var _id_jsx = external_react_default.a.createElement;

function _id_extends() { _id_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _id_extends.apply(this, arguments); }





















/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(redux["a" /* withRedux */])(Object(auth["a" /* withAuth */])(function () {
  var _ref3, _client$apps$find, _instances$;

  const isMounted = Object(external_react_["useRef"])(true);
  const client = Object(external_react_redux_["useSelector"])(state => state.client);
  const {
    0: isWaiting,
    1: setWaiting
  } = Object(external_react_["useState"])(false);
  const {
    0: warning,
    1: setWarning
  } = Object(external_react_["useState"])(null);
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  const {
    data,
    error,
    isValidating,
    revalidate
  } = external_swr_default()(`/api/apps/${id}`, util["a" /* fetcher */], {
    refreshInterval: 3000
  });
  const canUpdate = !isValidating && (data || error);

  if (!data || error) {
    var _ref, _error$response, _ref2, _error$response2, _error$response2$data;

    return _id_jsx(Layout["a" /* default */], null, _id_jsx(Panel, {
      title: id,
      canUpdate: canUpdate,
      onUpdate: () => revalidate()
    }, error ? _id_jsx(ErrorDisplay["a" /* default */], {
      style: {
        width: '100%'
      },
      title: (_ref = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.statusText) !== null && _ref !== void 0 ? _ref : 'Error',
      text: (_ref2 = (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) !== null && _ref2 !== void 0 ? _ref2 : error.toString()
    }) : _id_jsx("progress", {
      className: "progress is-small is-info",
      max: "100"
    }, "Loading...")));
  }

  const appRights = (_ref3 = (_client$apps$find = client.apps.find(a => a.id === id)) === null || _client$apps$find === void 0 ? void 0 : _client$apps$find.right) !== null && _ref3 !== void 0 ? _ref3 : 0;
  const canManage = client.isAdmin || (appRights & user["a" /* UserAppRight */].MANAGE) === user["a" /* UserAppRight */].MANAGE;
  const canDelete = client.isAdmin || (appRights & user["a" /* UserAppRight */].DELETE) === user["a" /* UserAppRight */].DELETE;
  const {
    app
  } = data;
  const {
    pm_id: pmId,
    name,
    exec_mode: execMode,
    instances
  } = app;
  const status = (_instances$ = instances[0]) === null || _instances$ === void 0 ? void 0 : _instances$.pm2_env.status;
  const isOnline = status === pm2["a" /* AppStatus */].ONLINE || status === pm2["a" /* AppStatus */].LAUNCHING || status === pm2["a" /* AppStatus */].ONE_LAUNCH;
  const isCluster = execMode === pm2["b" /* ExecMode */].CLUSTER;
  const buttonProps = {
    status
  };

  if (isWaiting) {
    buttonProps.loading = true;
  }

  const sendAction = async action => {
    setWaiting(true);
    setWarning(null);

    try {
      await external_axios_default.a.post(`/api/apps/${name}`, {
        action
      });
    } catch (err) {
      if (isMounted) {
        var _ref4, _err$response, _ref5, _err$response2, _err$response2$data;

        setWarning([(_ref4 = (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.statusText) !== null && _ref4 !== void 0 ? _ref4 : 'Error', (_ref5 = (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : (_err$response2$data = _err$response2.data) === null || _err$response2$data === void 0 ? void 0 : _err$response2$data.message) !== null && _ref5 !== void 0 ? _ref5 : err.toString()]);
      }
    }

    if (isMounted) {
      await revalidate();
      setWaiting(false);
    }
  };

  return _id_jsx(Layout["a" /* default */], null, _id_jsx("div", {
    className: "container panel is-info"
  }, _id_jsx("div", {
    className: "panel-heading"
  }, id, isCluster && _id_jsx(ClusterIcon["a" /* default */], {
    pull: null
  }), _id_jsx("a", {
    className: `button button-primary is-pulled-right is-light is-outlined ${canUpdate ? '' : 'is-loading'}`,
    style: {
      marginTop: '-6px'
    },
    onClick: () => revalidate()
  }, "Update")), _id_jsx("div", {
    className: "panel-block is-block"
  }, _id_jsx("style", null, '.is-inline-flex > button { flex: 1; }'), _id_jsx("div", {
    className: "buttons is-inline-flex",
    style: {
      width: '100%'
    }
  }, _id_jsx(StartButton, _id_extends({}, buttonProps, {
    disabled: !canManage,
    onClick: () => sendAction(isOnline ? actions["a" /* AppAction */].STOP : actions["a" /* AppAction */].START)
  })), isCluster && _id_jsx(ReloadButton, _id_extends({}, buttonProps, {
    disabled: !canManage,
    onClick: () => sendAction(actions["a" /* AppAction */].RELOAD)
  })), _id_jsx(RestartButton, _id_extends({}, buttonProps, {
    disabled: !canManage,
    onClick: () => sendAction(actions["a" /* AppAction */].RESTART)
  })), _id_jsx(DeleteButton, _id_extends({}, buttonProps, {
    disabled: !canDelete,
    onClick: () => sendAction(actions["a" /* AppAction */].DELETE)
  })), warning && _id_jsx(ErrorDisplay["a" /* default */], {
    color: "is-warning",
    style: {
      width: '100%',
      marginBottom: '10px'
    },
    title: warning[0],
    text: warning[1]
  })))), _id_jsx(InstancesList, {
    apps: instances
  }));
})));

/***/ }),

/***/ "jcc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZQtW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (function ({
  children
}) {
  return __jsx("div", null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("section", {
    className: "section"
  }, children));
});
;

/***/ }),

/***/ "kI0p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return all; });
/* harmony import */ var v8n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("H7Se");
/* harmony import */ var v8n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v8n__WEBPACK_IMPORTED_MODULE_0__);

const username = name => v8n__WEBPACK_IMPORTED_MODULE_0___default()().string().minLength(1).test(name);
const password = password => v8n__WEBPACK_IMPORTED_MODULE_0___default()().string().minLength(1).test(password);
const all = (...args) => args.find(b => b === false) !== false;

/***/ }),

/***/ "mBNB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExecMode; });
let AppStatus;

(function (AppStatus) {
  AppStatus["ONLINE"] = "online";
  AppStatus["STOPPING"] = "stopping";
  AppStatus["STOPPED"] = "stopped";
  AppStatus["LAUNCHING"] = "launching";
  AppStatus["ERRORED"] = "errored";
  AppStatus["ONE_LAUNCH"] = "one-launch-status";
})(AppStatus || (AppStatus = {}));

;
let ExecMode;

(function (ExecMode) {
  ExecMode["CLUSTER"] = "cluster_mode";
  ExecMode["FORK"] = "fork_mode";
})(ExecMode || (ExecMode = {}));

;
;
;

/***/ }),

/***/ "muLP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withRedux; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// CONCATENATED MODULE: ./client/store.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



;
;
const store_initialState = {
  authSynced: false,
  client: null
};
const reducers = {
  auth: (state, action) => _objectSpread({}, state, {
    client: action.client,
    authSynced: true
  })
};

const reducer = (state = store_initialState, action) => {
  const rd = reducers[action.type];
  return rd ? rd(state, action) : state;
};

const initializeStore = (state = store_initialState) => Object(external_redux_["createStore"])(reducer, state, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// CONCATENATED MODULE: ./client/middlewares/redux.tsx
var __jsx = external_react_default.a.createElement;

function redux_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function redux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { redux_ownKeys(Object(source), true).forEach(function (key) { redux_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { redux_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function redux_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(PageComponent, props));
  }; // Make sure people don't use this HOC on _app.js level


  if (false) {} // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return redux_objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "nLWT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAction; });
let AppAction;

(function (AppAction) {
  AppAction["START"] = "start";
  AppAction["STOP"] = "stop";
  AppAction["RESTART"] = "restart";
  AppAction["RELOAD"] = "reload";
  AppAction["DELETE"] = "delete";
})(AppAction || (AppAction = {}));

;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "v9gO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAppRight; });
let UserAppRight;

(function (UserAppRight) {
  UserAppRight[UserAppRight["NONE"] = 0] = "NONE";
  UserAppRight[UserAppRight["VIEW"] = 1] = "VIEW";
  UserAppRight[UserAppRight["MANAGE"] = 2] = "MANAGE";
  UserAppRight[UserAppRight["DELETE"] = 4] = "DELETE";
  UserAppRight[UserAppRight["INTERACT"] = 8] = "INTERACT";
})(UserAppRight || (UserAppRight = {}));

;
;
;

/***/ }),

/***/ "y02/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./client/util.ts
var util = __webpack_require__("UJ/n");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./client/components/Input.tsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ var Input = (function (props) {
  const {
    name,
    icon,
    invalid,
    invalidMessage
  } = props,
        rest = _objectWithoutProperties(props, ["name", "icon", "invalid", "invalidMessage"]);

  return __jsx("div", {
    className: "field"
  }, __jsx("label", {
    className: "label"
  }, name), __jsx("div", {
    className: "control has-icons-left has-icons-right"
  }, __jsx("input", _extends({
    className: `input ${invalid ? 'is-danger' : ''}`
  }, rest)), icon && __jsx("span", {
    className: "icon is-small is-left"
  }, __jsx("i", {
    className: `fas ${icon}`
  })), invalid && __jsx("span", {
    className: "icon is-small is-right"
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle"
  }))), invalid && invalidMessage && __jsx("p", {
    className: "help is-danger"
  }, invalidMessage));
});
;
// EXTERNAL MODULE: ./client/components/Navbar.tsx + 1 modules
var Navbar = __webpack_require__("ZQtW");

// EXTERNAL MODULE: ./shared/validation.ts
var validation = __webpack_require__("kI0p");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./client/components/LoginPage.tsx

var LoginPage_jsx = external_react_default.a.createElement;









const onLogin = async (username, password) => {
  const {
    data
  } = await external_axios_default.a.post('/api/login', {
    username,
    password
  });
  return data;
};

function LoadingPanel() {
  return LoginPage_jsx("div", null, LoginPage_jsx(Navbar["a" /* default */], null), LoginPage_jsx("div", {
    className: "columns is-centered"
  }, LoginPage_jsx("div", {
    className: "column is-6-tablet is-5-fullhd",
    style: {
      margin: '40px 25px 20px 25px',
      textAlign: 'center'
    }
  }, LoginPage_jsx("p", {
    className: "subtitle"
  }, "Loading..."), LoginPage_jsx("progress", {
    className: "progress is-small is-info is-medium",
    max: "100"
  }))));
}

/* harmony default export */ var LoginPage = __webpack_exports__["a"] = (function ({
  isLoading = false,
  error = null
}) {
  if (isLoading) {
    return LoginPage_jsx(LoadingPanel, null);
  }

  const isMounted = Object(external_react_["useRef"])(true);
  const {
    0: username,
    1: setUsername
  } = Object(external_react_["useState"])(null);
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: reqError,
    1: setError
  } = Object(external_react_["useState"])(null);
  const {
    0: validUsername,
    1: setValidUsername
  } = Object(external_react_["useState"])(true);
  const {
    0: validPassword,
    1: setValidPassword
  } = Object(external_react_["useState"])(true);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  if (username != null) {
    const isValid = validation["c" /* username */](username);

    if (isValid != validUsername) {
      setValidUsername(isValid);
    }
  }

  if (password != null) {
    const isValid = validation["b" /* password */](password);

    if (isValid != validPassword) {
      setValidPassword(isValid);
    }
  }

  if (error && !reqError) {
    setError(error);
  }

  return LoginPage_jsx("div", null, LoginPage_jsx(Navbar["a" /* default */], null), LoginPage_jsx("div", {
    className: "columns is-centered"
  }, LoginPage_jsx("div", {
    className: "column is-4-tablet is-3-fullhd",
    style: {
      margin: '40px 25px 20px 25px',
      textAlign: 'center'
    }
  }, LoginPage_jsx("h1", {
    className: "subtitle"
  }, "Login to continue"))), LoginPage_jsx("div", {
    className: "columns is-centered"
  }, LoginPage_jsx("div", {
    className: "column is-4-tablet is-3-fullhd box",
    style: {
      margin: '10px 25px 25px 25px'
    }
  }, LoginPage_jsx(Input, {
    id: "pm2-ui-username",
    name: "Username",
    type: "text",
    placeholder: "Username",
    value: username || '',
    onChange: Object(util["b" /* onInput */])(setUsername),
    invalidMessage: "This username is invalid",
    invalid: !validUsername,
    icon: "fa-user"
  }), LoginPage_jsx(Input, {
    id: "pm2-ui-password",
    name: "Password",
    type: "password",
    placeholder: "Password",
    value: password || '',
    onChange: Object(util["b" /* onInput */])(setPassword),
    invalidMessage: "This password is invalid",
    invalid: !validPassword,
    icon: "fa-lock"
  }), LoginPage_jsx("div", {
    className: "field"
  }, LoginPage_jsx("div", {
    className: "control"
  }, LoginPage_jsx("button", {
    className: `button is-link is-fullwidth ${loading ? 'is-loading' : ''}`,
    onClick: async () => {
      if (!validUsername || !validPassword) {
        return;
      }

      setLoading(true);

      try {
        const data = await onLogin(username, password);

        if (isMounted) {
          dispatch({
            type: 'auth',
            client: data
          });
          setLoading(false);
          router_default.a.push('/');
        }
      } catch (err) {
        if (isMounted) {
          var _err$response, _err$response$data, _err$response$statusT;

          const msg = (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message;
          setLoading(false);
          setError(msg ? [(_err$response$statusT = err.response.statusText) !== null && _err$response$statusT !== void 0 ? _err$response$statusT : 'Error', msg] : ['Error', err.toString()]);
        }
      }
    }
  }, "Login"))), reqError && LoginPage_jsx("article", {
    className: "message is-danger"
  }, LoginPage_jsx("div", {
    className: "message-header"
  }, LoginPage_jsx("p", null, reqError[0]), LoginPage_jsx("button", {
    className: "delete",
    "aria-label": "delete",
    onClick: () => setError(null)
  })), LoginPage_jsx("div", {
    className: "message-body"
  }, reqError[1])))));
});
;

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });