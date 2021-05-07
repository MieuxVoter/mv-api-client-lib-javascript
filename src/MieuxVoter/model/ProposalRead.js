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

import ApiClient from '../ApiClient';

/**
 * The ProposalRead model module.
 * @module MieuxVoter/model/ProposalRead
 * @version 0.0.0-dev
 */
class ProposalRead {
    /**
     * Constructs a new <code>ProposalRead</code>.
     * A Proposal (aka. Candidate) of a Poll, whom any Participant can give a Grade to.
     * @alias module:MieuxVoter/model/ProposalRead
     */
    constructor() { 
        
        ProposalRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProposalRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposalRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposalRead} The populated <code>ProposalRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProposalRead();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
     * @return {String}
     */
    getUuid() {
        return this.uuid;
    }

    /**
     * Sets Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
     * @param {String} uuid Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
     */
    setUuid(uuid) {
        this['uuid'] = uuid;
    }
/**
     * Returns The title of the proposal.
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets The title of the proposal.
     * @param {String} title The title of the proposal.
     */
    setTitle(title) {
        this['title'] = title;
    }

}

/**
 * Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
 * @member {String} uuid
 */
ProposalRead.prototype['uuid'] = undefined;

/**
 * The title of the proposal.
 * @member {String} title
 */
ProposalRead.prototype['title'] = undefined;






export default ProposalRead;

