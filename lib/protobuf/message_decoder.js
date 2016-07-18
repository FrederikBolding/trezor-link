

"use strict";

// Helper module for converting Trezor's raw input to
// ProtoBuf's message and from there to regular JSON to trezor.js

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDecoder = undefined;

var _protobufjs = require("protobufjs");

var ProtoBuf = _interopRequireWildcard(_protobufjs);

var _messages = require("./messages.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class MessageDecoder {
  // message type number


  constructor(messages, type, data) {
    this.type = type;
    this.data = data;
    this.messages = messages;
  }

  // Returns an info about this message,
  // which includes the constructor object and a name

  // raw data to push to Trezor

  // Builders, generated by reading config
  _messageInfo() {
    const r = this.messages.messagesByType[this.type];
    if (r == null) {
      throw new Error(`Method type not found`, this.type);
    }
    return new MessageInfo(r.constructor, r.name);
  }

  // Returns the name of the message
  messageName() {
    return this._messageInfo().name;
  }

  // Returns the actual decoded message, as a ProtoBuf.js object
  _decodedMessage() {
    const constructor = this._messageInfo().messageConstructor;
    return constructor.decode(this.data);
  }

  // Returns the message decoded to JSON, that could be handed back
  // to trezor.js
  decodedJSON() {
    const decoded = this._decodedMessage();
    const converted = messageToJSON(decoded);

    return JSON.parse(JSON.stringify(converted));
  }
}

exports.MessageDecoder = MessageDecoder;
class MessageInfo {
  constructor(messageConstructor, name) {
    this.messageConstructor = messageConstructor;
    this.name = name;
  }
}

// Converts any ProtoBuf message to JSON in Trezor.js-friendly format
function messageToJSON(message) {
  const res = {};
  const meta = message.$type;

  for (const key in message) {
    const value = message[key];
    if (typeof value === `function`) {
      // ignoring
    } else if (value instanceof _protobufjs.ByteBuffer) {
      const hex = value.toHex();
      res[key] = hex;
    } else if (value instanceof _protobufjs.Long) {
      const num = value.toNumber();
      res[key] = num;
    } else if (Array.isArray(value)) {
      const decodedArr = value.map(i => {
        if (typeof i === `object`) {
          return messageToJSON(i);
        } else {
          return i;
        }
      });
      res[key] = decodedArr;
    } else if (value instanceof ProtoBuf.Builder.Message) {
      res[key] = messageToJSON(value);
    } else if (meta._fieldsByName[key].type.name === `enum`) {
      const enumValues = meta._fieldsByName[key].resolvedType.getChildren();
      res[key] = enumValues.find(e => e.id === value).name;
    } else {
      res[key] = value;
    }
  }
  return res;
}