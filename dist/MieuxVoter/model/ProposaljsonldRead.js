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
 * The ProposaljsonldRead model module.
 * @module MieuxVoter/model/ProposaljsonldRead
 * @version 0.0.0-dev
 */
var ProposaljsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProposaljsonldRead</code>.
   * A Proposal (aka. Candidate) of a Poll, whom any Participant can give a Grade to.
   * @alias module:MieuxVoter/model/ProposaljsonldRead
   */
  function ProposaljsonldRead() {
    _classCallCheck(this, ProposaljsonldRead);

    ProposaljsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProposaljsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProposaljsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposaljsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposaljsonldRead} The populated <code>ProposaljsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProposaljsonldRead();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProposaljsonldRead;
}();
/**
 * @member {String} @context
 */


ProposaljsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

ProposaljsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

ProposaljsonldRead.prototype['@type'] = undefined;
/**
 * Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
 * @member {String} uuid
 */

ProposaljsonldRead.prototype['uuid'] = undefined;
/**
 * The title of the proposal.
 * @member {String} title
 */

ProposaljsonldRead.prototype['title'] = undefined;
var _default = ProposaljsonldRead;
exports["default"] = _default;