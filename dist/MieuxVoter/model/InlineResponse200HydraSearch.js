"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse200HydraSearchHydraMapping = _interopRequireDefault(require("./InlineResponse200HydraSearchHydraMapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200HydraSearch model module.
 * @module MieuxVoter/model/InlineResponse200HydraSearch
 * @version 0.0.0-dev
 */
var InlineResponse200HydraSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200HydraSearch</code>.
   * @alias module:MieuxVoter/model/InlineResponse200HydraSearch
   */
  function InlineResponse200HydraSearch() {
    _classCallCheck(this, InlineResponse200HydraSearch);

    InlineResponse200HydraSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200HydraSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200HydraSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse200HydraSearch} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse200HydraSearch} The populated <code>InlineResponse200HydraSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200HydraSearch();

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('hydra:template')) {
          obj['hydra:template'] = _ApiClient["default"].convertToType(data['hydra:template'], 'String');
        }

        if (data.hasOwnProperty('hydra:variableRepresentation')) {
          obj['hydra:variableRepresentation'] = _ApiClient["default"].convertToType(data['hydra:variableRepresentation'], 'String');
        }

        if (data.hasOwnProperty('hydra:mapping')) {
          obj['hydra:mapping'] = _ApiClient["default"].convertToType(data['hydra:mapping'], [_InlineResponse200HydraSearchHydraMapping["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200HydraSearch;
}();
/**
 * @member {String} @type
 */


InlineResponse200HydraSearch.prototype['@type'] = undefined;
/**
 * @member {String} hydra:template
 */

InlineResponse200HydraSearch.prototype['hydra:template'] = undefined;
/**
 * @member {String} hydra:variableRepresentation
 */

InlineResponse200HydraSearch.prototype['hydra:variableRepresentation'] = undefined;
/**
 * @member {Array.<module:MieuxVoter/model/InlineResponse200HydraSearchHydraMapping>} hydra:mapping
 */

InlineResponse200HydraSearch.prototype['hydra:mapping'] = undefined;
var _default = InlineResponse200HydraSearch;
exports["default"] = _default;