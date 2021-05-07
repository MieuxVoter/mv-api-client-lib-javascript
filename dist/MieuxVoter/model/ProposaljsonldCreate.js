"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PolljsonldCreate = _interopRequireDefault(require("./PolljsonldCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProposaljsonldCreate model module.
 * @module MieuxVoter/model/ProposaljsonldCreate
 * @version 0.0.0-dev
 */
var ProposaljsonldCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProposaljsonldCreate</code>.
   * A Proposal (aka. Candidate) of a Poll, whom any Participant can give a Grade to.
   * @alias module:MieuxVoter/model/ProposaljsonldCreate
   */
  function ProposaljsonldCreate() {
    _classCallCheck(this, ProposaljsonldCreate);

    ProposaljsonldCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProposaljsonldCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProposaljsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposaljsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposaljsonldCreate} The populated <code>ProposaljsonldCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProposaljsonldCreate();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('poll')) {
          obj['poll'] = _PolljsonldCreate["default"].constructFromObject(data['poll']);
        }
      }

      return obj;
    }
  }]);

  return ProposaljsonldCreate;
}();
/**
 * @member {String} @context
 */


ProposaljsonldCreate.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

ProposaljsonldCreate.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

ProposaljsonldCreate.prototype['@type'] = undefined;
/**
 * The title of the proposal.
 * @member {String} title
 */

ProposaljsonldCreate.prototype['title'] = undefined;
/**
 * @member {module:MieuxVoter/model/PolljsonldCreate} poll
 */

ProposaljsonldCreate.prototype['poll'] = undefined;
var _default = ProposaljsonldCreate;
exports["default"] = _default;