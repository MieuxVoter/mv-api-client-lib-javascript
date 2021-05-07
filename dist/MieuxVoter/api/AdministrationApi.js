"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Administration service.
* @module MieuxVoter/api/AdministrationApi
* @version 0.0.0-dev
*/
var AdministrationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AdministrationApi. 
  * @alias module:MieuxVoter/api/AdministrationApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function AdministrationApi(apiClient) {
    _classCallCheck(this, AdministrationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieves the collection of Users.
   * Only administrators are allowed to access this.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2005} and HTTP response
   */


  _createClass(AdministrationApi, [{
    key: "getUserCollectionWithHttpInfo",
    value: function getUserCollectionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Users.
     * Only administrators are allowed to access this.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2005}
     */

  }, {
    key: "getUserCollection",
    value: function getUserCollection(opts) {
      return this.getUserCollectionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AdministrationApi;
}();

exports["default"] = AdministrationApi;