"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse200HydraSearch = _interopRequireDefault(require("./InlineResponse200HydraSearch"));

var _InlineResponse200HydraView = _interopRequireDefault(require("./InlineResponse200HydraView"));

var _UserjsonldRead = _interopRequireDefault(require("./UserjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2005 model module.
 * @module MieuxVoter/model/InlineResponse2005
 * @version 0.0.0-dev
 */
var InlineResponse2005 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:MieuxVoter/model/InlineResponse2005
   * @param hydramember {Array.<module:MieuxVoter/model/UserjsonldRead>} 
   */
  function InlineResponse2005(hydramember) {
    _classCallCheck(this, InlineResponse2005);

    InlineResponse2005.initialize(this, hydramember);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005, null, [{
    key: "initialize",
    value: function initialize(obj, hydramember) {
      obj['hydra:member'] = hydramember;
    }
    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        if (data.hasOwnProperty('hydra:member')) {
          obj['hydra:member'] = _ApiClient["default"].convertToType(data['hydra:member'], [_UserjsonldRead["default"]]);
        }

        if (data.hasOwnProperty('hydra:totalItems')) {
          obj['hydra:totalItems'] = _ApiClient["default"].convertToType(data['hydra:totalItems'], 'Number');
        }

        if (data.hasOwnProperty('hydra:view')) {
          obj['hydra:view'] = _InlineResponse200HydraView["default"].constructFromObject(data['hydra:view']);
        }

        if (data.hasOwnProperty('hydra:search')) {
          obj['hydra:search'] = _InlineResponse200HydraSearch["default"].constructFromObject(data['hydra:search']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2005;
}();
/**
 * @member {Array.<module:MieuxVoter/model/UserjsonldRead>} hydra:member
 */


InlineResponse2005.prototype['hydra:member'] = undefined;
/**
 * @member {Number} hydra:totalItems
 */

InlineResponse2005.prototype['hydra:totalItems'] = undefined;
/**
 * @member {module:MieuxVoter/model/InlineResponse200HydraView} hydra:view
 */

InlineResponse2005.prototype['hydra:view'] = undefined;
/**
 * @member {module:MieuxVoter/model/InlineResponse200HydraSearch} hydra:search
 */

InlineResponse2005.prototype['hydra:search'] = undefined;
var _default = InlineResponse2005;
exports["default"] = _default;