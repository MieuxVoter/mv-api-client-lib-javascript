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
 * The GradejsonldRead model module.
 * @module MieuxVoter/model/GradejsonldRead
 * @version 0.0.0-dev
 */
class GradejsonldRead {
    /**
     * Constructs a new <code>GradejsonldRead</code>.
     * Grades are attributed to Proposals by Participants, in Ballots.
     * @alias module:MieuxVoter/model/GradejsonldRead
     */
    constructor() { 
        
        GradejsonldRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GradejsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/GradejsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/GradejsonldRead} The populated <code>GradejsonldRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GradejsonldRead();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
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
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
     * @return {Number}
     */
    getLevel() {
        return this.level;
    }

    /**
     * Sets Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
     * @param {Number} level Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
     */
    setLevel(level) {
        this['level'] = level;
    }

}

/**
 * @member {String} @context
 */
GradejsonldRead.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
GradejsonldRead.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
GradejsonldRead.prototype['@type'] = undefined;

/**
 * Universally Unique IDentifier, something like this: 10e3c5e8-4a7d-4d23-a20a-8c175bf45a92
 * @member {String} uuid
 */
GradejsonldRead.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
GradejsonldRead.prototype['name'] = undefined;

/**
 * Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
 * @member {Number} level
 */
GradejsonldRead.prototype['level'] = undefined;






export default GradejsonldRead;

