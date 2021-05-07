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
import GradejsonldCreate from './GradejsonldCreate';
import ProposaljsonldCreate from './ProposaljsonldCreate';

/**
 * The PolljsonldCreate model module.
 * @module MieuxVoter/model/PolljsonldCreate
 * @version 0.0.0-dev
 */
class PolljsonldCreate {
    /**
     * Constructs a new <code>PolljsonldCreate</code>.
     * A Liquid Majority Judgment Poll.
     * @alias module:MieuxVoter/model/PolljsonldCreate
     * @param subject {String} The subject of the poll. Careful consideration should be taken in the writing of this.
     */
    constructor(subject) { 
        
        PolljsonldCreate.initialize(this, subject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subject) { 
        obj['subject'] = subject;
    }

    /**
     * Constructs a <code>PolljsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/PolljsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/PolljsonldCreate} The populated <code>PolljsonldCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolljsonldCreate();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('proposals')) {
                obj['proposals'] = ApiClient.convertToType(data['proposals'], [ProposaljsonldCreate]);
            }
            if (data.hasOwnProperty('grades')) {
                obj['grades'] = ApiClient.convertToType(data['grades'], [GradejsonldCreate]);
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
     * Returns A unique, short, human-friendly identifier for the Poll.
     * @return {String}
     */
    getSlug() {
        return this.slug;
    }

    /**
     * Sets A unique, short, human-friendly identifier for the Poll.
     * @param {String} slug A unique, short, human-friendly identifier for the Poll.
     */
    setSlug(slug) {
        this['slug'] = slug;
    }
/**
     * Returns The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
     * @return {String}
     */
    getScope() {
        return this.scope;
    }

    /**
     * Sets The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
     * @param {String} scope The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
     */
    setScope(scope) {
        this['scope'] = scope;
    }
/**
     * Returns The subject of the poll. Careful consideration should be taken in the writing of this.
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets The subject of the poll. Careful consideration should be taken in the writing of this.
     * @param {String} subject The subject of the poll. Careful consideration should be taken in the writing of this.
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * Returns A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
     * @return {Array.<module:MieuxVoter/model/ProposaljsonldCreate>}
     */
    getProposals() {
        return this.proposals;
    }

    /**
     * Sets A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
     * @param {Array.<module:MieuxVoter/model/ProposaljsonldCreate>} proposals A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
     */
    setProposals(proposals) {
        this['proposals'] = proposals;
    }
/**
     * Returns A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
     * @return {Array.<module:MieuxVoter/model/GradejsonldCreate>}
     */
    getGrades() {
        return this.grades;
    }

    /**
     * Sets A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
     * @param {Array.<module:MieuxVoter/model/GradejsonldCreate>} grades A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
     */
    setGrades(grades) {
        this['grades'] = grades;
    }

}

/**
 * @member {String} @context
 */
PolljsonldCreate.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
PolljsonldCreate.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
PolljsonldCreate.prototype['@type'] = undefined;

/**
 * A unique, short, human-friendly identifier for the Poll.
 * @member {String} slug
 */
PolljsonldCreate.prototype['slug'] = undefined;

/**
 * The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
 * @member {String} scope
 */
PolljsonldCreate.prototype['scope'] = undefined;

/**
 * The subject of the poll. Careful consideration should be taken in the writing of this.
 * @member {String} subject
 */
PolljsonldCreate.prototype['subject'] = undefined;

/**
 * A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
 * @member {Array.<module:MieuxVoter/model/ProposaljsonldCreate>} proposals
 */
PolljsonldCreate.prototype['proposals'] = undefined;

/**
 * A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
 * @member {Array.<module:MieuxVoter/model/GradejsonldCreate>} grades
 */
PolljsonldCreate.prototype['grades'] = undefined;






export default PolljsonldCreate;

