"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserjsonldCreate = _interopRequireDefault(require("../model/UserjsonldCreate"));

var _UserjsonldRead = _interopRequireDefault(require("../model/UserjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Registration service.
* @module MieuxVoter/api/RegistrationApi
* @version 0.0.0-dev
*/
var RegistrationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RegistrationApi. 
  * @alias module:MieuxVoter/api/RegistrationApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function RegistrationApi(apiClient) {
    _classCallCheck(this, RegistrationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Registers a new User.
   * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
   * @param {Object} opts Optional parameters
   * @param {module:MieuxVoter/model/UserjsonldCreate} opts.userjsonldCreate The new User resource
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/UserjsonldRead} and HTTP response
   */


  _createClass(RegistrationApi, [{
    key: "postUserCollectionWithHttpInfo",
    value: function postUserCollectionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['userjsonldCreate'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _UserjsonldRead["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Registers a new User.
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/UserjsonldCreate} opts.userjsonldCreate The new User resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/UserjsonldRead}
     */

  }, {
    key: "postUserCollection",
    value: function postUserCollection(opts) {
      return this.postUserCollectionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RegistrationApi;
}();

exports["default"] = RegistrationApi;