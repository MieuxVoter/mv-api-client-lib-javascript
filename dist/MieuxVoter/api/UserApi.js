"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Credentials = _interopRequireDefault(require("../model/Credentials"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

var _UserjsonldCreate = _interopRequireDefault(require("../model/UserjsonldCreate"));

var _UserjsonldEdit = _interopRequireDefault(require("../model/UserjsonldEdit"));

var _UserjsonldRead = _interopRequireDefault(require("../model/UserjsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module MieuxVoter/api/UserApi
* @version 0.0.0-dev
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:MieuxVoter/api/UserApi
  * @class
  * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Removes the User resource.
   * @param {String} id Universally Unique IDentifier (UUID) 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(UserApi, [{
    key: "deleteUserItemWithHttpInfo",
    value: function deleteUserItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserItem");
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
      return this.apiClient.callApi('/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Removes the User resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserItem",
    value: function deleteUserItem(id) {
      return this.deleteUserItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves the collection of Users.
     * Only administrators are allowed to access this.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2005} and HTTP response
     */

  }, {
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
    /**
     * Gets information about a User.
     * You are authorized to get information about yourself only.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/UserjsonldRead} and HTTP response
     */

  }, {
    key: "getUserItemWithHttpInfo",
    value: function getUserItemWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserItem");
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
      var returnType = _UserjsonldRead["default"];
      return this.apiClient.callApi('/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets information about a User.
     * You are authorized to get information about yourself only.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/UserjsonldRead}
     */

  }, {
    key: "getUserItem",
    value: function getUserItem(id) {
      return this.getUserItemWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns an authentication Token from login Credentials.
     * Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/Credentials} opts.credentials User Credentials
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
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
    /**
     * Registers a new User.
     * Registers a new User in the database.  The email is optional and will help you reset a forgotten password.
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/UserjsonldCreate} opts.userjsonldCreate The new User resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/UserjsonldRead} and HTTP response
     */

  }, {
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
    /**
     * Updates information about a User.
     * Logged-in users are authorized to update information about themselves only.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/UserjsonldEdit} opts.userjsonldEdit The updated User resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/UserjsonldRead} and HTTP response
     */

  }, {
    key: "putUserItemWithHttpInfo",
    value: function putUserItemWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['userjsonldEdit']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putUserItem");
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
      var returnType = _UserjsonldRead["default"];
      return this.apiClient.callApi('/users/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates information about a User.
     * Logged-in users are authorized to update information about themselves only.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/UserjsonldEdit} opts.userjsonldEdit The updated User resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/UserjsonldRead}
     */

  }, {
    key: "putUserItem",
    value: function putUserItem(id, opts) {
      return this.putUserItemWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;