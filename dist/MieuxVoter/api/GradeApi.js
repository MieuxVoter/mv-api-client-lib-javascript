"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradejsonldRead = _interopRequireDefault(require("../model/GradejsonldRead"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Grade service.
* @module MieuxVoter/api/GradeApi
* @version 0.0.0-dev
*/
var GradeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GradeApi. 
  * @alias module:MieuxVoter/api/GradeApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function GradeApi(apiClient) {
    _classCallCheck(this, GradeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieves the collection of Grade resources.
   * @param {String} id Universally Unique IDentifier (UUID) 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2002} and HTTP response
   */


  _createClass(GradeApi, [{
    key: "apiPollsGradesGetSubresourceWithHttpInfo",
    value: function apiPollsGradesGetSubresourceWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPollsGradesGetSubresource");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/polls/{id}/grades', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Grade resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2002}
     */

  }, {
    key: "apiPollsGradesGetSubresource",
    value: function apiPollsGradesGetSubresource(id, opts) {
      return this.apiPollsGradesGetSubresourceWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Grade resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/GradejsonldRead} and HTTP response
     */

  }, {
    key: "getGradeItemWithHttpInfo",
    value: function getGradeItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGradeItem");
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
      var returnType = _GradejsonldRead["default"];
      return this.apiClient.callApi('/grades/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Grade resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/GradejsonldRead}
     */

  }, {
    key: "getGradeItem",
    value: function getGradeItem(id) {
      return this.getGradeItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GradeApi;
}();

exports["default"] = GradeApi;