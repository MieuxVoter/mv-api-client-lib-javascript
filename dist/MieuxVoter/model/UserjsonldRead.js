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
 * The UserjsonldRead model module.
 * @module MieuxVoter/model/UserjsonldRead
 * @version 0.0.0-dev
 */
var UserjsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserjsonldRead</code>.
   * Users create, maintain and participate in Polls.
   * @alias module:MieuxVoter/model/UserjsonldRead
   */
  function UserjsonldRead() {
    _classCallCheck(this, UserjsonldRead);

    UserjsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserjsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserjsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/UserjsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/UserjsonldRead} The populated <code>UserjsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserjsonldRead();

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

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('polls')) {
          obj['polls'] = _ApiClient["default"].convertToType(data['polls'], [_PolljsonldRead["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UserjsonldRead;
}();
/**
 * @member {String} @context
 */


UserjsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

UserjsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

UserjsonldRead.prototype['@type'] = undefined;
/**
 * @member {String} uuid
 */

UserjsonldRead.prototype['uuid'] = undefined;
/**
 * When provided, the email must be unique amongst Users.
 * @member {String} email
 */

UserjsonldRead.prototype['email'] = undefined;
/**
 * The username must be unique amongst Users.
 * @member {String} username
 */

UserjsonldRead.prototype['username'] = undefined;
/**
 * The polls authored by this User.
 * @member {Array.<module:MieuxVoter/model/PolljsonldRead>} polls
 */

UserjsonldRead.prototype['polls'] = undefined;
var _default = UserjsonldRead;
exports["default"] = _default;