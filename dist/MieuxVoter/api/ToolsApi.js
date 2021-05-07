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
* Tools service.
* @module MieuxVoter/api/ToolsApi
* @version 0.0.0-dev
*/
var ToolsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ToolsApi. 
  * @alias module:MieuxVoter/api/ToolsApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function ToolsApi(apiClient) {
    _classCallCheck(this, ToolsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Resolves the provided tally. 
   * This endpoint requires no authentication. 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(ToolsApi, [{
    key: "getJsonResultFromTallyWithHttpInfo",
    value: function getJsonResultFromTallyWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/{tally}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Resolves the provided tally. 
     * This endpoint requires no authentication. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getJsonResultFromTally",
    value: function getJsonResultFromTally() {
      return this.getJsonResultFromTallyWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generates a merit profile as SVG of the provided tally. 
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "getSvgMeritProfileFromTallyWithHttpInfo",
    value: function getSvgMeritProfileFromTallyWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/render/merit-profile.svg', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generates a merit profile as SVG of the provided tally. 
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "getSvgMeritProfileFromTally",
    value: function getSvgMeritProfileFromTally() {
      return this.getSvgMeritProfileFromTallyWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ToolsApi;
}();

exports["default"] = ToolsApi;