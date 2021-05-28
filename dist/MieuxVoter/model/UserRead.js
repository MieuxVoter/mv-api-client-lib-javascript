"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PollRead = _interopRequireDefault(require("./PollRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserRead model module.
 * @module MieuxVoter/model/UserRead
 * @version 0.0.0-dev
 */
var UserRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserRead</code>.
   * Users create, maintain and participate in Polls.
   * @alias module:MieuxVoter/model/UserRead
   */
  function UserRead() {
    _classCallCheck(this, UserRead);

    UserRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/UserRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/UserRead} The populated <code>UserRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserRead();

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
          obj['polls'] = _ApiClient["default"].convertToType(data['polls'], [_PollRead["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UserRead;
}();
/**
 * @member {String} uuid
 */


UserRead.prototype['uuid'] = undefined;
/**
 * When provided, the email must be unique amongst Users.
 * @member {String} email
 */

UserRead.prototype['email'] = undefined;
/**
 * The username must be unique amongst Users.
 * @member {String} username
 */

UserRead.prototype['username'] = undefined;
/**
 * The polls authored by this User.
 * @member {Array.<module:MieuxVoter/model/PollRead>} polls
 */

UserRead.prototype['polls'] = undefined;
var _default = UserRead;
exports["default"] = _default;