"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugInOut = debugInOut;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function debugInOut(target, name, descriptor) {
  var original = descriptor.value;

  descriptor.value = function () {
    var debug = this.debug || name === "init" && arguments[0];
    var objName = this.name;
    var argsArr = Array.prototype.slice.call(arguments);

    if (debug) {
      var _console;

      (_console = console).log.apply(_console, ["[trezor-link] Calling ".concat(objName, ".").concat(name, "(")].concat(_toConsumableArray(argsArr.map(function (f) {
        if (typeof f === "string") {
          if (f.length > 1000) {
            return "".concat(f.substring(0, 1000), "...");
          }
        }

        return f;
      })), [")"]));
    } // assuming that the function is a promise


    var resP = original.apply(this, arguments);
    return resP.then(function (res) {
      if (debug) {
        if (res == null) {
          console.log("[trezor-link] Done ".concat(objName, ".").concat(name));
        } else {
          console.log("[trezor-link] Done ".concat(objName, ".").concat(name, ", result "), res);
        }
      }

      return res;
    }, function (err) {
      if (debug) {
        console.error("[trezor-link] Error in ".concat(objName, ".").concat(name), err);
      }

      throw err;
    });
  };

  return descriptor;
}