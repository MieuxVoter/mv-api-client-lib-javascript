"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PolljsonldRead = _interopRequireDefault(require("./PolljsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationjsonldRead model module.
 * @module MieuxVoter/model/InvitationjsonldRead
 * @version 0.0.0-dev
 */
var InvitationjsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationjsonldRead</code>.
   * An invitation to a poll.
   * @alias module:MieuxVoter/model/InvitationjsonldRead
   */
  function InvitationjsonldRead() {
    _classCallCheck(this, InvitationjsonldRead);

    InvitationjsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationjsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationjsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InvitationjsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InvitationjsonldRead} The populated <code>InvitationjsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationjsonldRead();

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('poll')) {
          obj['poll'] = _PolljsonldRead["default"].constructFromObject(data['poll']);
        }

        if (data.hasOwnProperty('accepted')) {
          obj['accepted'] = _ApiClient["default"].convertToType(data['accepted'], 'Boolean');
        }

        if (data.hasOwnProperty('acceptedByYou')) {
          obj['acceptedByYou'] = _ApiClient["default"].convertToType(data['acceptedByYou'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InvitationjsonldRead;
}();
/**
 * @member {String} @id
 */


InvitationjsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

InvitationjsonldRead.prototype['@type'] = undefined;
/**
 * @member {String} @context
 */

InvitationjsonldRead.prototype['@context'] = undefined;
/**
 * Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
 * @member {String} uuid
 */

InvitationjsonldRead.prototype['uuid'] = undefined;
/**
 * @member {module:MieuxVoter/model/PolljsonldRead} poll
 */

InvitationjsonldRead.prototype['poll'] = undefined;
/**
 * Whether this invitation was accepted by someone already.
 * @member {Boolean} accepted
 */

InvitationjsonldRead.prototype['accepted'] = undefined;
/**
 * Whether this invitation was accepted by the current user.
 * @member {Boolean} acceptedByYou
 */

InvitationjsonldRead.prototype['acceptedByYou'] = undefined;
var _default = InvitationjsonldRead;
exports["default"] = _default;