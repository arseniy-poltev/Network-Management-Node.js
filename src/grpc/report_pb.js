/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Report', null, global);
goog.exportSymbol('proto.ReportPeriod', null, global);
goog.exportSymbol('proto.ReportSeries', null, global);
goog.exportSymbol('proto.ReportSummary', null, global);
goog.exportSymbol('proto.ReportSummaryColumn', null, global);
goog.exportSymbol('proto.ReportUnit', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReportSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReportSummary.repeatedFields_, null);
};
goog.inherits(proto.ReportSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReportSummary.displayName = 'proto.ReportSummary';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReportSummary.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReportSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.ReportSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReportSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnList: jspb.Message.toObjectList(msg.getColumnList(),
    proto.ReportSummaryColumn.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReportSummary}
 */
proto.ReportSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReportSummary;
  return proto.ReportSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReportSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReportSummary}
 */
proto.ReportSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ReportSummaryColumn;
      reader.readMessage(value,proto.ReportSummaryColumn.deserializeBinaryFromReader);
      msg.addColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReportSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReportSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReportSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ReportSummaryColumn.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReportSummaryColumn column = 1;
 * @return {!Array<!proto.ReportSummaryColumn>}
 */
proto.ReportSummary.prototype.getColumnList = function() {
  return /** @type{!Array<!proto.ReportSummaryColumn>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ReportSummaryColumn, 1));
};


/** @param {!Array<!proto.ReportSummaryColumn>} value */
proto.ReportSummary.prototype.setColumnList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ReportSummaryColumn=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ReportSummaryColumn}
 */
proto.ReportSummary.prototype.addColumn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ReportSummaryColumn, opt_index);
};


proto.ReportSummary.prototype.clearColumnList = function() {
  this.setColumnList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReportSummaryColumn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReportSummaryColumn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReportSummaryColumn.displayName = 'proto.ReportSummaryColumn';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReportSummaryColumn.prototype.toObject = function(opt_includeInstance) {
  return proto.ReportSummaryColumn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReportSummaryColumn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSummaryColumn.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unit: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReportSummaryColumn}
 */
proto.ReportSummaryColumn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReportSummaryColumn;
  return proto.ReportSummaryColumn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReportSummaryColumn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReportSummaryColumn}
 */
proto.ReportSummaryColumn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReportSummaryColumn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReportSummaryColumn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReportSummaryColumn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSummaryColumn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ReportSummaryColumn.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ReportSummaryColumn.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unit = 2;
 * @return {string}
 */
proto.ReportSummaryColumn.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ReportSummaryColumn.prototype.setUnit = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReportSeries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReportSeries.repeatedFields_, null);
};
goog.inherits(proto.ReportSeries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReportSeries.displayName = 'proto.ReportSeries';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReportSeries.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReportSeries.prototype.toObject = function(opt_includeInstance) {
  return proto.ReportSeries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReportSeries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSeries.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valueList: jspb.Message.getRepeatedField(msg, 2),
    summaryValueList: jspb.Message.getRepeatedField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReportSeries}
 */
proto.ReportSeries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReportSeries;
  return proto.ReportSeries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReportSeries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReportSeries}
 */
proto.ReportSeries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setValueList(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setSummaryValueList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReportSeries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReportSeries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReportSeries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportSeries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValueList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
  f = message.getSummaryValueList();
  if (f.length > 0) {
    writer.writePackedUint64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ReportSeries.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ReportSeries.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated uint64 value = 2;
 * @return {!Array<number>}
 */
proto.ReportSeries.prototype.getValueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.ReportSeries.prototype.setValueList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.ReportSeries.prototype.addValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.ReportSeries.prototype.clearValueList = function() {
  this.setValueList([]);
};


/**
 * repeated uint64 summary_value = 3;
 * @return {!Array<number>}
 */
proto.ReportSeries.prototype.getSummaryValueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<number>} value */
proto.ReportSeries.prototype.setSummaryValueList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 */
proto.ReportSeries.prototype.addSummaryValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.ReportSeries.prototype.clearSummaryValueList = function() {
  this.setSummaryValueList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Report = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Report.repeatedFields_, null);
};
goog.inherits(proto.Report, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Report.displayName = 'proto.Report';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Report.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Report.prototype.toObject = function(opt_includeInstance) {
  return proto.Report.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Report} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Report.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    summary: (f = msg.getSummary()) && proto.ReportSummary.toObject(includeInstance, f),
    timeList: jspb.Message.getRepeatedField(msg, 4),
    seriesList: jspb.Message.toObjectList(msg.getSeriesList(),
    proto.ReportSeries.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Report}
 */
proto.Report.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Report;
  return proto.Report.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Report} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Report}
 */
proto.Report.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 3:
      var value = new proto.ReportSummary;
      reader.readMessage(value,proto.ReportSummary.deserializeBinaryFromReader);
      msg.setSummary(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTime(value);
      break;
    case 5:
      var value = new proto.ReportSeries;
      reader.readMessage(value,proto.ReportSeries.deserializeBinaryFromReader);
      msg.addSeries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Report.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Report.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Report} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Report.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ReportSummary.serializeBinaryToWriter
    );
  }
  f = message.getTimeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getSeriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ReportSeries.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.Report.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Report.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unit = 2;
 * @return {string}
 */
proto.Report.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Report.prototype.setUnit = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ReportSummary summary = 3;
 * @return {?proto.ReportSummary}
 */
proto.Report.prototype.getSummary = function() {
  return /** @type{?proto.ReportSummary} */ (
    jspb.Message.getWrapperField(this, proto.ReportSummary, 3));
};


/** @param {?proto.ReportSummary|undefined} value */
proto.Report.prototype.setSummary = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Report.prototype.clearSummary = function() {
  this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Report.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string time = 4;
 * @return {!Array<string>}
 */
proto.Report.prototype.getTimeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.Report.prototype.setTimeList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.Report.prototype.addTime = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.Report.prototype.clearTimeList = function() {
  this.setTimeList([]);
};


/**
 * repeated ReportSeries series = 5;
 * @return {!Array<!proto.ReportSeries>}
 */
proto.Report.prototype.getSeriesList = function() {
  return /** @type{!Array<!proto.ReportSeries>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ReportSeries, 5));
};


/** @param {!Array<!proto.ReportSeries>} value */
proto.Report.prototype.setSeriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ReportSeries=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ReportSeries}
 */
proto.Report.prototype.addSeries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ReportSeries, opt_index);
};


proto.Report.prototype.clearSeriesList = function() {
  this.setSeriesList([]);
};


/**
 * @enum {number}
 */
proto.ReportPeriod = {
  PERIOD_HOUR: 0,
  PERIOD_DAY: 1,
  PERIOD_WEEK: 2,
  PERIOD_MONTH: 3,
  PERIOD_YEAR: 4
};

/**
 * @enum {number}
 */
proto.ReportUnit = {
  UNIT_RATE: 0,
  UNIT_BYTES: 1,
  UNIT_PERCENTAGE: 2
};

goog.object.extend(exports, proto);