/**
 * Majority Judgment API
 * This is a **deliberation service** using **majority judgment** polling. It's **libre software** ([source](https://github.com/mieuxvoter)) made and maintained by [MieuxVoter.fr](https://mieuxvoter.fr). You're browsing the API documentation and sandbox.  ## Use one of the known clients  - TODO: add an URL to a client of the API   ## Try it out the hard way  ### Create an account  You will need a user account to interact with polls. Head to **Registration** → `POST /users` below. Click _Try it out_, set your desired credentials, and execute the query. Scroll down to see the response.  ### Authenticate  Use your credentials in the **Login** → `POST /_jwt`, and the API will return a Json Web Token valid for one hour. Copy the token (not the whole response, and without quotes) in the field behind the `Authorize 🔒` button.  ### Create a poll  **Poll** → `POST /polls`  Keep the response, you'll need the uuids.  > TODO: document invitation generation  ### Submit judgments  **Ballot** → `POST /polls/{pollId}/proposals/{proposalId}/ballots`  One request per proposal, for now.  We plan on making an endpoint to submit them all at once.  ### Collect the results  **Result** → `GET /polls/{id}/result`  ## Use a generated client library  - for php  (link!) - for typescript-node  (link!!) - …  There are clients we can generate for most languages. Get in touch if you'd like one in particular! Or clone this project and use `bin/generate-client.bash -t whatever`. 
 *
 * The version of the OpenAPI document: 0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import ProposaljsonldCreate from '../model/ProposaljsonldCreate';
import ProposaljsonldRead from '../model/ProposaljsonldRead';

/**
* Proposal service.
* @module MieuxVoter/api/ProposalApi
* @version 0.0.0-dev
*/
export default class ProposalApi {

    /**
    * Constructs a new ProposalApi. 
    * @alias module:MieuxVoter/api/ProposalApi
    * @class
    * @param {module:MieuxVoter/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:MieuxVoter/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves the collection of Ballot resources.
     * @param {String} pollId Universally Unique IDentifier of the poll.
     * @param {String} proposalId Universally Unique IDentifier of the proposal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/InlineResponse2004} and HTTP response
     */
    apiPollsProposalsBallotsGetSubresourceWithHttpInfo(pollId, proposalId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'pollId' is set
      if (pollId === undefined || pollId === null) {
        throw new Error("Missing the required parameter 'pollId' when calling apiPollsProposalsBallotsGetSubresource");
      }
      // verify the required parameter 'proposalId' is set
      if (proposalId === undefined || proposalId === null) {
        throw new Error("Missing the required parameter 'proposalId' when calling apiPollsProposalsBallotsGetSubresource");
      }

      let pathParams = {
        'pollId': pollId,
        'proposalId': proposalId
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/polls/{pollId}/proposals/{proposalId}/ballots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param {String} pollId Universally Unique IDentifier of the poll.
     * @param {String} proposalId Universally Unique IDentifier of the proposal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2004}
     */
    apiPollsProposalsBallotsGetSubresource(pollId, proposalId, opts) {
      return this.apiPollsProposalsBallotsGetSubresourceWithHttpInfo(pollId, proposalId, opts)
        .then(function(response_and_data) {
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
    apiPollsProposalsGetSubresourceWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiPollsProposalsGetSubresource");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/polls/{id}/proposals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of Proposal resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2003}
     */
    apiPollsProposalsGetSubresource(id, opts) {
      return this.apiPollsProposalsGetSubresourceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
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
    apiProposalsBallotsGetSubresourceWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiProposalsBallotsGetSubresource");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/proposals/{id}/ballots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of Ballot resources.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/InlineResponse2004}
     */
    apiProposalsBallotsGetSubresource(id, opts) {
      return this.apiProposalsBallotsGetSubresourceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:MieuxVoter/model/ProposaljsonldRead} and HTTP response
     */
    getProposalItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProposalItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProposaljsonldRead;
      return this.apiClient.callApi(
        '/proposals/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/ProposaljsonldRead}
     */
    getProposalItem(id) {
      return this.getProposalItemWithHttpInfo(id)
        .then(function(response_and_data) {
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
    postProposalCollectionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['proposaljsonldCreate'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postProposalCollection");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProposaljsonldRead;
      return this.apiClient.callApi(
        '/polls/{id}/proposals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a Proposal resource.
     * @param {String} id Universally Unique IDentifier (UUID) 
     * @param {Object} opts Optional parameters
     * @param {module:MieuxVoter/model/ProposaljsonldCreate} opts.proposaljsonldCreate The new Proposal resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:MieuxVoter/model/ProposaljsonldRead}
     */
    postProposalCollection(id, opts) {
      return this.postProposalCollectionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
