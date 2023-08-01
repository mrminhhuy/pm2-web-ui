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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rPcO");


/***/ }),

/***/ "6Bc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ database; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ method; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ session; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ authenticate; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ pm2; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ RequestError; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ combine; });

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__("FiKB");

// EXTERNAL MODULE: ./server/models/user.ts
var user = __webpack_require__("MJQ6");

// CONCATENATED MODULE: ./server/config/index.ts
const config = {
  mongodbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pm2-web-ui',
  salt: process.env.SALT || 'i am dumb'
};
/* harmony default export */ var server_config = (config);
// CONCATENATED MODULE: ./server/middlewares/database.ts



/* harmony default export */ var database = (fn => {
  return async (req, res) => {
    var _mongoose$connection;

    if (((_mongoose$connection = external_mongoose_["connection"]) === null || _mongoose$connection === void 0 ? void 0 : _mongoose$connection.readyState) != 1) {
      await external_mongoose_["connect"](server_config.mongodbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      user["b" /* UserModel */].updateOne({
        username: 'root'
      }, {
        $set: {
          isAdmin: true,
          hashedPassword: user["a" /* User */].hash(server_config.salt)
        }
      }, {
        upsert: true
      }).catch(err => console.error(`Failed to update the root user: ${err}`));
    }

    return await fn(req, res);
  };
});
// CONCATENATED MODULE: ./server/middlewares/method.ts
/* harmony default export */ var method = ((...allowedMethods) => fn => {
  const methods = {};
  allowedMethods.forEach(m => methods[m] = true);
  return async (req, res) => {
    if (!methods[req.method]) {
      res.status(404).send('');
      return;
    }

    return await fn(req, res);
  };
});
// EXTERNAL MODULE: external "next-session"
var external_next_session_ = __webpack_require__("Knog");
var external_next_session_default = /*#__PURE__*/__webpack_require__.n(external_next_session_);

// EXTERNAL MODULE: external "connect-mongo"
var external_connect_mongo_ = __webpack_require__("H5g9");
var external_connect_mongo_default = /*#__PURE__*/__webpack_require__.n(external_connect_mongo_);

// CONCATENATED MODULE: ./server/middlewares/session.ts



const MongoStore = external_connect_mongo_default()(external_next_session_default.a);
let store;
/* harmony default export */ var session = (fn => Object(external_next_session_["withSession"])(fn, {
  storePromisify: true,
  store: store ? store : store = new MongoStore({
    mongooseConnection: external_mongoose_["connection"]
  })
}));
// CONCATENATED MODULE: ./server/middlewares/authenticate.ts

;
/* harmony default export */ var authenticate = ((options = {}) => fn => {
  return async (req, res) => {
    if (!req.session.userId) {
      req.user = null;

      if (options.required) {
        res.status(403).send('');
        return;
      }
    }

    req.user = await user["b" /* UserModel */].findOne({
      _id: req.session.userId
    });
    return await fn(req, res);
  };
});
// EXTERNAL MODULE: external "pm2"
var external_pm2_ = __webpack_require__("pnm3");
var external_pm2_default = /*#__PURE__*/__webpack_require__.n(external_pm2_);

// CONCATENATED MODULE: ./server/middlewares/pm2.ts

const state = {
  connected: false,
  stable: true
};

const connect = (noDaemon = false) => new Promise((resolve, reject) => external_pm2_default.a.connect(noDaemon, err => err ? reject(err) : resolve()));

const disconnect = () => new Promise((resolve, reject) => external_pm2_default.a.list(err => err ? reject(err) : resolve()));

/* harmony default export */ var pm2 = (fn => {
  return async (req, res) => {
    try {
      if (!state.stable) {
        await disconnect();
        state.connected = false;
        state.stable = true;
      }

      if (!state.connected) {
        await connect();
        state.connected = true;
        state.stable = true;
      }
    } catch (err) {
      state.connected = false;
      res.status(500).json({
        message: `pm2: ${err}`
      });
      return;
    }

    await fn(req, res);
  };
});
const getState = () => state;
// CONCATENATED MODULE: ./server/middlewares/index.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const handleExceptions = fn => {
  return async (req, res) => {
    try {
      await fn(req, res);
    } catch (err) {
      var _err$status, _err$message;

      const responded = res._headerSent;
      const status = (_err$status = err.status) !== null && _err$status !== void 0 ? _err$status : 500;
      const message = (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : err.toString();

      if (!responded) {
        res.status(status).json({
          message
        });
      }

      if (!status) {
        console.error(err);
      }
    }
  };
};

class RequestError extends Error {
  constructor(message, status = 500) {
    super();

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "status", void 0);

    this.message = message;
    this.status = status;
  }

}
;
const combine = (...fns) => {
  const len = fns.length;
  let fn = fns[len - 1];

  if (len > 1) {
    for (let i = len - 2; i >= 0; i--) {
      fn = fns[i](fn);
    }
  }

  return handleExceptions(fn);
};

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "H5g9":
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "H7Se":
/***/ (function(module, exports) {

module.exports = require("v8n");

/***/ }),

/***/ "Knog":
/***/ (function(module, exports) {

module.exports = require("next-session");

/***/ }),

/***/ "MJQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppOwnership */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserModel; });
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dgyB");
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v9gO");
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class3, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let AppOwnership = (_dec = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])({
  required: true
}), _dec2 = Reflect.metadata("design:type", String), _dec3 = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])({
  required: true
}), _dec4 = Reflect.metadata("design:type", typeof _shared_user__WEBPACK_IMPORTED_MODULE_1__[/* UserAppRight */ "a"] === "undefined" ? Object : _shared_user__WEBPACK_IMPORTED_MODULE_1__[/* UserAppRight */ "a"]), (_class = (_temp = class AppOwnership {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "right", _descriptor2, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "right", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
;
let User = (_dec5 = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])({
  required: true
}), _dec6 = Reflect.metadata("design:type", String), _dec7 = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])({
  default: []
}), _dec8 = Reflect.metadata("design:type", Array), _dec9 = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])(), _dec10 = Reflect.metadata("design:type", Boolean), _dec11 = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["prop"])({
  required: true
}), _dec12 = Reflect.metadata("design:type", String), (_class3 = (_temp2 = class User {
  constructor() {
    _initializerDefineProperty(this, "username", _descriptor3, this);

    _initializerDefineProperty(this, "apps", _descriptor4, this);

    _initializerDefineProperty(this, "isAdmin", _descriptor5, this);

    _initializerDefineProperty(this, "hashedPassword", _descriptor6, this);
  }

  isValidPassword(password) {
    return User.hash(password) === password;
  }

  hasRight(app, right) {
    const own = this.apps.find(a => a.id === app);
    return own ? (own.right & right) === right : false;
  }

  getPublicData() {
    return {
      id: this._id,
      username: this.username,
      isAdmin: this.isAdmin,
      apps: this.apps
    };
  } // todo: proper hashing


  static hash(input) {
    return input;
  }

}, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "username", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "apps", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "isAdmin", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "hashedPassword", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class3));
;
const UserModel = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_0__["getModelForClass"])(User);

/***/ }),

/***/ "dgyB":
/***/ (function(module, exports) {

module.exports = require("@typegoose/typegoose");

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

/***/ "pnm3":
/***/ (function(module, exports) {

module.exports = require("pm2");

/***/ }),

/***/ "rPcO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MJQ6");
/* harmony import */ var _server_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6Bc4");
/* harmony import */ var _shared_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kI0p");




const login = async (req, res) => {
  const {
    username,
    password
  } = req.body;

  if (!_shared_validation__WEBPACK_IMPORTED_MODULE_2__[/* all */ "a"](_shared_validation__WEBPACK_IMPORTED_MODULE_2__[/* username */ "c"](username), _shared_validation__WEBPACK_IMPORTED_MODULE_2__[/* password */ "b"](password))) {
    throw new _server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* RequestError */ "a"]('Invalid username or password.', 400);
  }

  const user = await _server_models_user__WEBPACK_IMPORTED_MODULE_0__[/* UserModel */ "b"].findOne({
    username,
    hashedPassword: _server_models_user__WEBPACK_IMPORTED_MODULE_0__[/* User */ "a"].hash(password)
  });

  if (!user) {
    throw new _server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* RequestError */ "a"]('User with given username and password was not found.', 403);
  }

  req.session.userId = user._id;
  res.status(200).json(user.getPublicData());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "c"])(Object(_server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* method */ "e"])('POST'), _server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* database */ "d"], _server_middlewares__WEBPACK_IMPORTED_MODULE_1__[/* session */ "g"], login));

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

/***/ })

/******/ });