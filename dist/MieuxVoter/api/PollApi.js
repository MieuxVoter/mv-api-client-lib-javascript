"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _PolljsonldCreate = _interopRequireDefault(require("../model/PolljsonldCreate"));

var _PolljsonldRead = _interopRequireDefault(require("../model/PolljsonldRead"));

var _ResultjsonldRead = _interopRequireDefault(require("../model/ResultjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Poll service.
* @module MieuxVoter/api/PollApi
* @version 0.0.0-dev
*/
var PollApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PollApi. 
  * @alias module:MieuxVoter/api/PollApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function PollApi(apiClient) {
    _classCallCheck(this, PollApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieves the collection of Grade resources.
   * @param {String} id Universally Unique IDentifier (UUID) 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2002} and HTTP response
   */


  _createClass(PollApi, [{
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
      var returnType = _InlineResponse2["default"];
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
     * Retrieves the collection of Proposal resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "apiPollsProposalsGetSubresourceWithHttpInfo",
    value: function apiPollsProposalsGetSubresourceWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPollsProposalsGetSubresource");
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/polls/{id}/proposals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Proposal resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2003}
     */

  }, {
    key: "apiPollsProposalsGetSubresource",
    value: function apiPollsProposalsGetSubresource(id, opts) {
      return this.apiPollsProposalsGetSubresourceWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Removes the Poll resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deletePollItemWithHttpInfo",
    value: function deletePollItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePollItem");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/polls/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes the Poll resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deletePollItem",
    value: function deletePollItem(id) {
      return this.deletePollItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the result of a poll
     * This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll's result _at any time_. 
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/ResultjsonldRead} and HTTP response
     */

  }, {
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
    /**
     * Retrieves the collection of Poll resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getPollCollectionWithHttpInfo",
    value: function getPollCollectionWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/polls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Poll resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2001}
     */

  }, {
    key: "getPollCollection",
    value: function getPollCollection(opts) {
      return this.getPollCollectionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Poll resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/PolljsonldRead} and HTTP response
     */

  }, {
    key: "getPollItemWithHttpInfo",
    value: function getPollItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPollItem");
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
      var returnType = _PolljsonldRead["default"];
      return this.apiClient.callApi('/polls/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Poll resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/PolljsonldRead}
     */

  }, {
    key: "getPollItem",
    value: function getPollItem(id) {
      return this.getPollItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a Poll resource.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/PolljsonldCreate} opts.polljsonldCreate The new Poll resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/PolljsonldRead} and HTTP response
     */

  }, {
    key: "postPollCollectionWithHttpInfo",
    value: function postPollCollectionWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['polljsonldCreate'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _PolljsonldRead["default"];
      return this.apiClient.callApi('/polls', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a Poll resource.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/PolljsonldCreate} opts.polljsonldCreate The new Poll resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/PolljsonldRead}
     */

  }, {
    key: "postPollCollection",
    value: function postPollCollection(opts) {
      return this.postPollCollectionWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PollApi;
}();

exports["default"] = PollApi;