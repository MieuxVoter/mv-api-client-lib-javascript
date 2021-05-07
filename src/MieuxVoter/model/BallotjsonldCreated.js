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
 * The BallotjsonldCreated model module.
 * @module MieuxVoter/model/BallotjsonldCreated
 * @version 0.0.0-dev
 */
class BallotjsonldCreated {
    /**
     * Constructs a new <code>BallotjsonldCreated</code>.
     * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
     * @alias module:MieuxVoter/model/BallotjsonldCreated
     */
    constructor() { 
        
        BallotjsonldCreated.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BallotjsonldCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotjsonldCreated} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotjsonldCreated} The populated <code>BallotjsonldCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BallotjsonldCreated();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('proposal')) {
                obj['proposal'] = ApiClient.convertToType(data['proposal'], 'String');
            }
            if (data.hasOwnProperty('grade')) {
                obj['grade'] = ApiClient.convertToType(data['grade'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {String}
     */
    getContext() {
        return this.@context;
    }

    /**
     * @param {String} context
     */
    setContext(context) {
        this['@context'] = context;
    }
/**
     * @return {String}
     */
    getId() {
        return this.@id;
    }

    /**
     * @param {String} id
     */
    setId(id) {
        this['@id'] = id;
    }
/**
     * @return {String}
     */
    getType() {
        return this.@type;
    }

    /**
     * @param {String} type
     */
    setType(type) {
        this['@type'] = type;
    }
/**
     * Returns Universally Unique IDentifier of the Ballot.
     * @return {String}
     */
    getUuid() {
        return this.uuid;
    }

    /**
     * Sets Universally Unique IDentifier of the Ballot.
     * @param {String} uuid Universally Unique IDentifier of the Ballot.
     */
    setUuid(uuid) {
        this['uuid'] = uuid;
    }
/**
     * Returns The Majority Judgment Poll Proposal the author is giving a grade to.
     * @return {String}
     */
    getProposal() {
        return this.proposal;
    }

    /**
     * Sets The Majority Judgment Poll Proposal the author is giving a grade to.
     * @param {String} proposal The Majority Judgment Poll Proposal the author is giving a grade to.
     */
    setProposal(proposal) {
        this['proposal'] = proposal;
    }
/**
     * Returns The Grade attributed by the Judge to the Proposal.
     * @return {String}
     */
    getGrade() {
        return this.grade;
    }

    /**
     * Sets The Grade attributed by the Judge to the Proposal.
     * @param {String} grade The Grade attributed by the Judge to the Proposal.
     */
    setGrade(grade) {
        this['grade'] = grade;
    }

}

/**
 * @member {String} @context
 */
BallotjsonldCreated.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
BallotjsonldCreated.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
BallotjsonldCreated.prototype['@type'] = undefined;

/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */
BallotjsonldCreated.prototype['uuid'] = undefined;

/**
 * The Majority Judgment Poll Proposal the author is giving a grade to.
 * @member {String} proposal
 */
BallotjsonldCreated.prototype['proposal'] = undefined;

/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {String} grade
 */
BallotjsonldCreated.prototype['grade'] = undefined;






export default BallotjsonldCreated;

