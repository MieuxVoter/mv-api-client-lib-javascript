"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Credentials = _interopRequireDefault(require("../model/Credentials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Login service.
* @module MieuxVoter/api/LoginApi
* @version 0.0.0-dev
*/
var LoginApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoginApi. 
  * @alias module:MieuxVoter/api/LoginApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function LoginApi(apiClient) {
    _classCallCheck(this, LoginApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Returns an authentication Token from login Credentials.
   * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
   * @param {Object} opts Optional parameters
   * @param {module:MieuxVoter/model/Credentials} opts.credentials User Credentials
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(LoginApi, [{
    key: "postCredentialsItemWithHttpInfo",
    value: function postCredentialsItemWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['credentials'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/ld+json', 'application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/_jwt', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns an authentication Token from login Credentials.
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/Credentials} opts.credentials User Credentials
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "postCredentialsItem",
    value: function postCredentialsItem(opts) {
      return this.postCredentialsItemWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoginApi;
}();

exports["default"] = LoginApi;