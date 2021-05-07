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
 * The UserjsonldCreate model module.
 * @module MieuxVoter/model/UserjsonldCreate
 * @version 0.0.0-dev
 */
var UserjsonldCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserjsonldCreate</code>.
   * Users create, maintain and participate in Polls.
   * @alias module:MieuxVoter/model/UserjsonldCreate
   * @param username {String} The username must be unique amongst Users.
   */
  function UserjsonldCreate(username) {
    _classCallCheck(this, UserjsonldCreate);

    UserjsonldCreate.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserjsonldCreate, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>UserjsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/UserjsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/UserjsonldCreate} The populated <code>UserjsonldCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserjsonldCreate();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserjsonldCreate;
}();
/**
 * @member {String} @context
 */


UserjsonldCreate.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

UserjsonldCreate.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

UserjsonldCreate.prototype['@type'] = undefined;
/**
 * When provided, the email must be unique amongst Users.
 * @member {String} email
 */

UserjsonldCreate.prototype['email'] = undefined;
/**
 * The username must be unique amongst Users.
 * @member {String} username
 */

UserjsonldCreate.prototype['username'] = undefined;
/**
 * The plain password of the User.
 * @member {String} password
 */

UserjsonldCreate.prototype['password'] = undefined;
var _default = UserjsonldCreate;
exports["default"] = _default;