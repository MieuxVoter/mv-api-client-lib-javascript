"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _ProposaljsonldCreate = _interopRequireDefault(require("../model/ProposaljsonldCreate"));

var _ProposaljsonldRead = _interopRequireDefault(require("../model/ProposaljsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Proposal service.
* @module MieuxVoter/api/ProposalApi
* @version 0.0.0-dev
*/
var ProposalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProposalApi. 
  * @alias module:MieuxVoter/api/ProposalApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function ProposalApi(apiClient) {
    _classCallCheck(this, ProposalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Retrieves the collection of Ballot resources.
   * @param {String} pollId Universally Unique IDentifier of the poll.
   * @param {String} proposalId Universally Unique IDentifier of the proposal.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2004} and HTTP response
   */


  _createClass(ProposalApi, [{
    key: "apiPollsProposalsBallotsGetSubresourceWithHttpInfo",
    value: function apiPollsProposalsBallotsGetSubresourceWithHttpInfo(pollId, proposalId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pollId' is set

      if (pollId === undefined || pollId === null) {
        throw new Error("Missing the required parameter 'pollId' when calling apiPollsProposalsBallotsGetSubresource");
      } // verify the required parameter 'proposalId' is set


      if (proposalId === undefined || proposalId === null) {
        throw new Error("Missing the required parameter 'proposalId' when calling apiPollsProposalsBallotsGetSubresource");
      }

      var pathParams = {
        'pollId': pollId,
        'proposalId': proposalId
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
      return this.apiClient.callApi('/polls/{pollId}/proposals/{proposalId}/ballots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Ballot resources.
     * @param {String} pollId Universally Unique IDentifier of the poll.
     * @param {String} proposalId Universally Unique IDentifier of the proposal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2004}
     */

  }, {
    key: "apiPollsProposalsBallotsGetSubresource",
    value: function apiPollsProposalsBallotsGetSubresource(pollId, proposalId, opts) {
      return this.apiPollsProposalsBallotsGetSubresourceWithHttpInfo(pollId, proposalId, opts).then(function (response_and_data) {
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
      var returnType = _InlineResponse["default"];
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
     * Retrieves the collection of Ballot resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "apiProposalsBallotsGetSubresourceWithHttpInfo",
    value: function apiProposalsBallotsGetSubresourceWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProposalsBallotsGetSubresource");
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
      return this.apiClient.callApi('/proposals/{id}/ballots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves the collection of Ballot resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2004}
     */

  }, {
    key: "apiProposalsBallotsGetSubresource",
    value: function apiProposalsBallotsGetSubresource(id, opts) {
      return this.apiProposalsBallotsGetSubresourceWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/ProposaljsonldRead} and HTTP response
     */

  }, {
    key: "getProposalItemWithHttpInfo",
    value: function getProposalItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProposalItem");
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
      var returnType = _ProposaljsonldRead["default"];
      return this.apiClient.callApi('/proposals/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/ProposaljsonldRead}
     */

  }, {
    key: "getProposalItem",
    value: function getProposalItem(id) {
      return this.getProposalItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/ProposaljsonldCreate} opts.proposaljsonldCreate The new Proposal resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/ProposaljsonldRead} and HTTP response
     */

  }, {
    key: "postProposalCollectionWithHttpInfo",
    value: function postProposalCollectionWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['proposaljsonldCreate']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postProposalCollection");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _ProposaljsonldRead["default"];
      return this.apiClient.callApi('/polls/{id}/proposals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/ProposaljsonldCreate} opts.proposaljsonldCreate The new Proposal resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/ProposaljsonldRead}
     */

  }, {
    key: "postProposalCollection",
    value: function postProposalCollection(id, opts) {
      return this.postProposalCollectionWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProposalApi;
}();

exports["default"] = ProposalApi;