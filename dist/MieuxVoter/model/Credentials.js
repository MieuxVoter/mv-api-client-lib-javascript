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
 * The Credentials model module.
 * @module MieuxVoter/model/Credentials
 * @version 0.0.0-dev
 */
var Credentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Credentials</code>.
   * User credentials to submit to the login endpoint in order to get a perishable authentication token (Json Web Token).
   * @alias module:MieuxVoter/model/Credentials
   */
  function Credentials() {
    _classCallCheck(this, Credentials);

    Credentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Credentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Credentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/Credentials} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/Credentials} The populated <code>Credentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Credentials();

        if (data.hasOwnProperty('usernameOrEmail')) {
          obj['usernameOrEmail'] = _ApiClient["default"].convertToType(data['usernameOrEmail'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Credentials;
}();
/**
 * The email or username you chose during registration.
 * @member {String} usernameOrEmail
 */


Credentials.prototype['usernameOrEmail'] = undefined;
/**
 * The password or passphrase you chose during registration.
 * @member {String} password
 */

Credentials.prototype['password'] = undefined;
var _default = Credentials;
exports["default"] = _default;