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
 * The InlineResponse200HydraView model module.
 * @module MieuxVoter/model/InlineResponse200HydraView
 * @version 0.0.0-dev
 */
var InlineResponse200HydraView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200HydraView</code>.
   * @alias module:MieuxVoter/model/InlineResponse200HydraView
   */
  function InlineResponse200HydraView() {
    _classCallCheck(this, InlineResponse200HydraView);

    InlineResponse200HydraView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200HydraView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200HydraView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse200HydraView} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse200HydraView} The populated <code>InlineResponse200HydraView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200HydraView();

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('hydra:first')) {
          obj['hydra:first'] = _ApiClient["default"].convertToType(data['hydra:first'], 'String');
        }

        if (data.hasOwnProperty('hydra:last')) {
          obj['hydra:last'] = _ApiClient["default"].convertToType(data['hydra:last'], 'String');
        }

        if (data.hasOwnProperty('hydra:next')) {
          obj['hydra:next'] = _ApiClient["default"].convertToType(data['hydra:next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200HydraView;
}();
/**
 * @member {String} @id
 */


InlineResponse200HydraView.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

InlineResponse200HydraView.prototype['@type'] = undefined;
/**
 * @member {String} hydra:first
 */

InlineResponse200HydraView.prototype['hydra:first'] = undefined;
/**
 * @member {String} hydra:last
 */

InlineResponse200HydraView.prototype['hydra:last'] = undefined;
/**
 * @member {String} hydra:next
 */

InlineResponse200HydraView.prototype['hydra:next'] = undefined;
var _default = InlineResponse200HydraView;
exports["default"] = _default;