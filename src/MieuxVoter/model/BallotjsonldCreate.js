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
import AnyOfGradejsonldCreate from './AnyOfGradejsonldCreate';

/**
 * The BallotjsonldCreate model module.
 * @module MieuxVoter/model/BallotjsonldCreate
 * @version 0.0.0-dev
 */
class BallotjsonldCreate {
    /**
     * Constructs a new <code>BallotjsonldCreate</code>.
     * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
     * @alias module:MieuxVoter/model/BallotjsonldCreate
     */
    constructor() { 
        
        BallotjsonldCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BallotjsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotjsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotjsonldCreate} The populated <code>BallotjsonldCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BallotjsonldCreate();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('grade')) {
                obj['grade'] = ApiClient.convertToType(data['grade'], AnyOfGradejsonldCreate);
            }
        }
        return obj;
    }


}

/**
 * @member {String} @context
 */
BallotjsonldCreate.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
BallotjsonldCreate.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
BallotjsonldCreate.prototype['@type'] = undefined;

/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {module:MieuxVoter/model/AnyOfGradejsonldCreate} grade
 */
BallotjsonldCreate.prototype['grade'] = undefined;






export default BallotjsonldCreate;
