"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _debugDecorator = require("./debug-decorator");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var FallbackTransport = (_class = (_temp =
/*#__PURE__*/
function () {
  function FallbackTransport(transports) {
    _classCallCheck(this, FallbackTransport);

    this.name = "FallbackTransport";
    this.activeName = "";
    this.debug = false;
    this.requestNeeded = false;
    this.transports = transports;
  } // first one that inits successfuly is the final one; others won't even start initing


  _createClass(FallbackTransport, [{
    key: "_tryInitTransports",
    value: function () {
      var _tryInitTransports2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res, lastError, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, transport;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = [];
                lastError = null;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = this.transports[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 21;
                  break;
                }

                transport = _step.value;
                _context.prev = 9;
                _context.next = 12;
                return transport.init(this.debug);

              case 12:
                res.push(transport);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](9);
                lastError = _context.t0;

              case 18:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 21:
                _context.next = 27;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t1;

              case 27:
                _context.prev = 27;
                _context.prev = 28;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 30:
                _context.prev = 30;

                if (!_didIteratorError) {
                  _context.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context.finish(30);

              case 34:
                return _context.finish(27);

              case 35:
                if (!(res.length === 0)) {
                  _context.next = 37;
                  break;
                }

                throw lastError || new Error("No transport could be initialized.");

              case 37:
                return _context.abrupt("return", res);

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 23, 27, 35], [9, 15], [28,, 30, 34]]);
      }));

      function _tryInitTransports() {
        return _tryInitTransports2.apply(this, arguments);
      }

      return _tryInitTransports;
    }() // first one that inits successfuly is the final one; others won't even start initing

  }, {
    key: "_tryConfigureTransports",
    value: function () {
      var _tryConfigureTransports2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(data) {
        var lastError, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, transport;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lastError = null;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 4;
                _iterator2 = this._availableTransports[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context2.next = 20;
                  break;
                }

                transport = _step2.value;
                _context2.prev = 8;
                _context2.next = 11;
                return transport.configure(data);

              case 11:
                return _context2.abrupt("return", transport);

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](8);
                lastError = _context2.t0;

              case 17:
                _iteratorNormalCompletion2 = true;
                _context2.next = 6;
                break;

              case 20:
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t1 = _context2["catch"](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t1;

              case 26:
                _context2.prev = 26;
                _context2.prev = 27;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 29:
                _context2.prev = 29;

                if (!_didIteratorError2) {
                  _context2.next = 32;
                  break;
                }

                throw _iteratorError2;

              case 32:
                return _context2.finish(29);

              case 33:
                return _context2.finish(26);

              case 34:
                throw lastError || new Error("No transport could be initialized.");

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 22, 26, 34], [8, 14], [27,, 29, 33]]);
      }));

      function _tryConfigureTransports(_x) {
        return _tryConfigureTransports2.apply(this, arguments);
      }

      return _tryConfigureTransports;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(debug) {
        var transports;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.debug = !!debug; // init ALL OF THEM

                _context3.next = 3;
                return this._tryInitTransports();

              case 3:
                transports = _context3.sent;
                this._availableTransports = transports; // a slight hack - configured is always false, so we force caller to call configure()
                // to find out the actual working transport (bridge falls on configure, not on info)

                this.version = transports[0].version;
                this.configured = false;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init(_x2) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "configure",
    value: function () {
      var _configure = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(signedData) {
        var pt;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                pt = this._tryConfigureTransports(signedData);
                _context4.next = 3;
                return pt;

              case 3:
                this.activeTransport = _context4.sent;
                this.configured = this.activeTransport.configured;
                this.version = this.activeTransport.version;
                this.activeName = this.activeTransport.name;
                this.requestNeeded = this.activeTransport.requestNeeded;
                this.isOutdated = this.activeTransport.isOutdated;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function configure(_x3) {
        return _configure.apply(this, arguments);
      }

      return configure;
    }() // using async so I get Promise.recect on this.activeTransport == null (or other error), not Error

  }, {
    key: "enumerate",
    value: function () {
      var _enumerate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.activeTransport.enumerate());

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function enumerate() {
        return _enumerate.apply(this, arguments);
      }

      return enumerate;
    }()
  }, {
    key: "listen",
    value: function () {
      var _listen = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(old) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.activeTransport.listen(old));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function listen(_x4) {
        return _listen.apply(this, arguments);
      }

      return listen;
    }()
  }, {
    key: "acquire",
    value: function () {
      var _acquire = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(input, debugLink) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.activeTransport.acquire(input, debugLink));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function acquire(_x5, _x6) {
        return _acquire.apply(this, arguments);
      }

      return acquire;
    }()
  }, {
    key: "release",
    value: function () {
      var _release = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(session, onclose, debugLink) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.activeTransport.release(session, onclose, debugLink));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function release(_x7, _x8, _x9) {
        return _release.apply(this, arguments);
      }

      return release;
    }()
  }, {
    key: "call",
    value: function () {
      var _call = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(session, name, data, debugLink) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.activeTransport.call(session, name, data, debugLink));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function call(_x10, _x11, _x12, _x13) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(session, name, data, debugLink) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.activeTransport.post(session, name, data, debugLink));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function post(_x14, _x15, _x16, _x17) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(session, debugLink) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.activeTransport.read(session, debugLink));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function read(_x18, _x19) {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "requestDevice",
    value: function () {
      var _requestDevice = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12() {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.activeTransport.requestDevice());

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function requestDevice() {
        return _requestDevice.apply(this, arguments);
      }

      return requestDevice;
    }()
  }, {
    key: "setBridgeLatestUrl",
    value: function setBridgeLatestUrl(url) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.transports[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var transport = _step3.value;
          transport.setBridgeLatestUrl(url);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "setBridgeLatestVersion",
    value: function setBridgeLatestVersion(version) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.transports[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var transport = _step4.value;
          transport.setBridgeLatestVersion(version);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.transports[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var transport = _step5.value;
          transport.stop();
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }]);

  return FallbackTransport;
}(), _temp), (_applyDecoratedDescriptor(_class.prototype, "init", [_debugDecorator.debugInOut], Object.getOwnPropertyDescriptor(_class.prototype, "init"), _class.prototype)), _class);
exports["default"] = FallbackTransport;
module.exports = exports.default;