"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InvitationjsonldRead = _interopRequireDefault(require("../model/InvitationjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Invitation service.
* @module MieuxVoter/api/InvitationApi
* @version 0.0.0-dev
*/
var InvitationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InvitationApi. 
  * @alias module:MieuxVoter/api/InvitationApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function InvitationApi(apiClient) {
    _classCallCheck(this, InvitationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieves the collection of Invitation resources.
   * @param {String} id Universally Unique IDentifier (UUID) 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse200} and HTTP response
   */


  _createClass(InvitationApi, [{
    key: "getForPollInvitationCollectionWithHttpInfo",
    value: function getForPollInvitationCollectionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getForPollInvitationCollection");
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
      return this.apiClient.callApi('/polls/{id}/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Invitation resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse200}
     */

  }, {
    key: "getForPollInvitationCollection",
    value: function getForPollInvitationCollection(id, opts) {
      return this.getForPollInvitationCollectionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves the collection of Invitation resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse200} and HTTP response
     */

  }, {
    key: "getInvitationCollectionWithHttpInfo",
    value: function getInvitationCollectionWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/invitations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Invitation resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse200}
     */

  }, {
    key: "getInvitationCollection",
    value: function getInvitationCollection(opts) {
      return this.getInvitationCollectionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Invitation resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InvitationjsonldRead} and HTTP response
     */

  }, {
    key: "getInvitationItemWithHttpInfo",
    value: function getInvitationItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvitationItem");
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
      var returnType = _InvitationjsonldRead["default"];
      return this.apiClient.callApi('/invitations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Invitation resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InvitationjsonldRead}
     */

  }, {
    key: "getInvitationItem",
    value: function getInvitationItem(id) {
      return this.getInvitationItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InvitationApi;
}();

exports["default"] = InvitationApi;