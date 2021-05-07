"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse200HydraSearch = _interopRequireDefault(require("./InlineResponse200HydraSearch"));

var _InlineResponse200HydraView = _interopRequireDefault(require("./InlineResponse200HydraView"));

var _InvitationjsonldRead = _interopRequireDefault(require("./InvitationjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200 model module.
 * @module MieuxVoter/model/InlineResponse200
 * @version 0.0.0-dev
 */
var InlineResponse200 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:MieuxVoter/model/InlineResponse200
   * @param hydramember {Array.<module:MieuxVoter/model/InvitationjsonldRead>} 
   */
  function InlineResponse200(hydramember) {
    _classCallCheck(this, InlineResponse200);

    InlineResponse200.initialize(this, hydramember);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200, null, [{
    key: "initialize",
    value: function initialize(obj, hydramember) {
      obj['hydra:member'] = hydramember;
    }
    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse200} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();

        if (data.hasOwnProperty('hydra:member')) {
          obj['hydra:member'] = _ApiClient["default"].convertToType(data['hydra:member'], [_InvitationjsonldRead["default"]]);
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

  return InlineResponse200;
}();
/**
 * @member {Array.<module:MieuxVoter/model/InvitationjsonldRead>} hydra:member
 */


InlineResponse200.prototype['hydra:member'] = undefined;
/**
 * @member {Number} hydra:totalItems
 */

InlineResponse200.prototype['hydra:totalItems'] = undefined;
/**
 * @member {module:MieuxVoter/model/InlineResponse200HydraView} hydra:view
 */

InlineResponse200.prototype['hydra:view'] = undefined;
/**
 * @member {module:MieuxVoter/model/InlineResponse200HydraSearch} hydra:search
 */

InlineResponse200.prototype['hydra:search'] = undefined;
var _default = InlineResponse200;
exports["default"] = _default;