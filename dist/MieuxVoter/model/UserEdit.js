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
 * The UserEdit model module.
 * @module MieuxVoter/model/UserEdit
 * @version 0.0.0-dev
 */
var UserEdit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserEdit</code>.
   * Users create, maintain and participate in Polls.
   * @alias module:MieuxVoter/model/UserEdit
   * @param username {String} The username must be unique amongst Users.
   */
  function UserEdit(username) {
    _classCallCheck(this, UserEdit);

    UserEdit.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserEdit, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>UserEdit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/UserEdit} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/UserEdit} The populated <code>UserEdit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserEdit();

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

  return UserEdit;
}();
/**
 * When provided, the email must be unique amongst Users.
 * @member {String} email
 */


UserEdit.prototype['email'] = undefined;
/**
 * The username must be unique amongst Users.
 * @member {String} username
 */

UserEdit.prototype['username'] = undefined;
/**
 * The plain password of the User.
 * @member {String} password
 */

UserEdit.prototype['password'] = undefined;
var _default = UserEdit;
exports["default"] = _default;