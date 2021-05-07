"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200HydraSearchHydraMapping model module.
 * @module MieuxVoter/model/InlineResponse200HydraSearchHydraMapping
 * @version 0.0.0-dev
 */
var InlineResponse200HydraSearchHydraMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200HydraSearchHydraMapping</code>.
   * @alias module:MieuxVoter/model/InlineResponse200HydraSearchHydraMapping
   */
  function InlineResponse200HydraSearchHydraMapping() {
    _classCallCheck(this, InlineResponse200HydraSearchHydraMapping);

    InlineResponse200HydraSearchHydraMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200HydraSearchHydraMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200HydraSearchHydraMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse200HydraSearchHydraMapping} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse200HydraSearchHydraMapping} The populated <code>InlineResponse200HydraSearchHydraMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200HydraSearchHydraMapping();

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('variable')) {
          obj['variable'] = _ApiClient["default"].convertToType(data['variable'], 'String');
        }

        if (data.hasOwnProperty('property')) {
          obj['property'] = _ApiClient["default"].convertToType(data['property'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200HydraSearchHydraMapping;
}();
/**
 * @member {String} @type
 */


InlineResponse200HydraSearchHydraMapping.prototype['@type'] = undefined;
/**
 * @member {String} variable
 */

InlineResponse200HydraSearchHydraMapping.prototype['variable'] = undefined;
/**
 * @member {String} property
 */

InlineResponse200HydraSearchHydraMapping.prototype['property'] = undefined;
/**
 * @member {Boolean} required
 */

InlineResponse200HydraSearchHydraMapping.prototype['required'] = undefined;
var _default = InlineResponse200HydraSearchHydraMapping;
exports["default"] = _default;