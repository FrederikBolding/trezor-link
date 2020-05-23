"use strict"; // This is a simple class that represents information about messages,
// as they are loaded from the protobuf definition,
// so they are understood by both sending and recieving code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var ProtoBuf = _interopRequireWildcard(require("protobufjs-old-fixed-webpack"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Messages = function Messages(messages) {
  _classCallCheck(this, Messages);

  this.messagesByName = messages;
  var messagesByType = {};
  Object.keys(messages.MessageType).forEach(function (longName) {
    var typeId = messages.MessageType[longName];
    var shortName = longName.split("_")[1]; // hack hack hack. total lib refactor needed.

    var indexOfDeprecated = longName.indexOf("Deprecated");

    if (indexOfDeprecated >= 0) {
      shortName = longName.substr(indexOfDeprecated);
    }

    messagesByType[typeId] = {
      name: shortName,
      constructor: messages[shortName]
    };
  });
  this.messagesByType = messagesByType;
  this.messageTypes = messages.MessageType;
};

exports.Messages = Messages;