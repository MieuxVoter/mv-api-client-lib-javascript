"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResultjsonldRead = _interopRequireDefault(require("../model/ResultjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Result service.
* @module MieuxVoter/api/ResultApi
* @version 0.0.0-dev
*/
var ResultApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ResultApi. 
  * @alias module:MieuxVoter/api/ResultApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function ResultApi(apiClient) {
    _classCallCheck(this, ResultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Gets the result of a poll
   * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
   * @param {String} id Universally Unique IDentifier (UUID) 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/ResultjsonldRead} and HTTP response
   */


  _createClass(ResultApi, [{
    key: "getForPollResultItemWithHttpInfo",
    value: function getForPollResultItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getForPollResultItem");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _ResultjsonldRead["default"];
      return this.apiClient.callApi('/polls/{id}/result', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the result of a poll
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/ResultjsonldRead}
     */

  }, {
    key: "getForPollResultItem",
    value: function getForPollResultItem(id) {
      return this.getForPollResultItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ResultApi;
}();

exports["default"] = ResultApi;