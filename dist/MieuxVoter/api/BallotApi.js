"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BallotjsonldCreate = _interopRequireDefault(require("../model/BallotjsonldCreate"));

var _BallotjsonldCreated = _interopRequireDefault(require("../model/BallotjsonldCreated"));

var _BallotjsonldRead = _interopRequireDefault(require("../model/BallotjsonldRead"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Ballot service.
* @module MieuxVoter/api/BallotApi
* @version 0.0.0-dev
*/
var BallotApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BallotApi. 
  * @alias module:MieuxVoter/api/BallotApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function BallotApi(apiClient) {
    _classCallCheck(this, BallotApi);

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


  _createClass(BallotApi, [{
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
      var returnType = _InlineResponse["default"];
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
      var returnType = _InlineResponse["default"];
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
     * Removes the Ballot resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBallotItemWithHttpInfo",
    value: function deleteBallotItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBallotItem");
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
      return this.apiClient.callApi('/ballots/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes the Ballot resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBallotItem",
    value: function deleteBallotItem(id) {
      return this.deleteBallotItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Ballot resource.
     * Inspect a previously submitted Ballot.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/BallotjsonldRead} and HTTP response
     */

  }, {
    key: "getBallotItemWithHttpInfo",
    value: function getBallotItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBallotItem");
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
      var returnType = _BallotjsonldRead["default"];
      return this.apiClient.callApi('/ballots/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Ballot resource.
     * Inspect a previously submitted Ballot.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/BallotjsonldRead}
     */

  }, {
    key: "getBallotItem",
    value: function getBallotItem(id) {
      return this.getBallotItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates a Ballot resource.
     * @param {String} pollId Universally Unique IDentifier of the poll whose proposal we are judging.
     * @param {String} proposalId Universally Unique IDentifier of the proposal we are judging.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/BallotjsonldCreate} opts.ballotjsonldCreate The new Ballot resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/BallotjsonldCreated} and HTTP response
     */

  }, {
    key: "postBallotCollectionWithHttpInfo",
    value: function postBallotCollectionWithHttpInfo(pollId, proposalId, opts) {
      opts = opts || {};
      var postBody = opts['ballotjsonldCreate']; // verify the required parameter 'pollId' is set

      if (pollId === undefined || pollId === null) {
        throw new Error("Missing the required parameter 'pollId' when calling postBallotCollection");
      } // verify the required parameter 'proposalId' is set


      if (proposalId === undefined || proposalId === null) {
        throw new Error("Missing the required parameter 'proposalId' when calling postBallotCollection");
      }

      var pathParams = {
        'pollId': pollId,
        'proposalId': proposalId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKey'];
      var contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      var accepts = ['application/ld+json', 'application/json', 'text/html'];
      var returnType = _BallotjsonldCreated["default"];
      return this.apiClient.callApi('/polls/{pollId}/proposals/{proposalId}/ballots', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a Ballot resource.
     * @param {String} pollId Universally Unique IDentifier of the poll whose proposal we are judging.
     * @param {String} proposalId Universally Unique IDentifier of the proposal we are judging.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/BallotjsonldCreate} opts.ballotjsonldCreate The new Ballot resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/BallotjsonldCreated}
     */

  }, {
    key: "postBallotCollection",
    value: function postBallotCollection(pollId, proposalId, opts) {
      return this.postBallotCollectionWithHttpInfo(pollId, proposalId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BallotApi;
}();

exports["default"] = BallotApi;