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
 * The InlineResponse200HydraView model module.
 * @module MieuxVoter/model/InlineResponse200HydraView
 * @version 0.0.0-dev
 */
class InlineResponse200HydraView {
    /**
     * Constructs a new <code>InlineResponse200HydraView</code>.
     * @alias module:MieuxVoter/model/InlineResponse200HydraView
     */
    constructor() { 
        
        InlineResponse200HydraView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200HydraView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/InlineResponse200HydraView} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/InlineResponse200HydraView} The populated <code>InlineResponse200HydraView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200HydraView();

            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('hydra:first')) {
                obj['hydra:first'] = ApiClient.convertToType(data['hydra:first'], 'String');
            }
            if (data.hasOwnProperty('hydra:last')) {
                obj['hydra:last'] = ApiClient.convertToType(data['hydra:last'], 'String');
            }
            if (data.hasOwnProperty('hydra:next')) {
                obj['hydra:next'] = ApiClient.convertToType(data['hydra:next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} @id
 */
InlineResponse200HydraView.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
InlineResponse200HydraView.prototype['@type'] = undefined;

/**
 * @member {String} hydra:first
 */
InlineResponse200HydraView.prototype['hydra:first'] = undefined;

/**
 * @member {String} hydra:last
 */
InlineResponse200HydraView.prototype['hydra:last'] = undefined;

/**
 * @member {String} hydra:next
 */
InlineResponse200HydraView.prototype['hydra:next'] = undefined;






export default InlineResponse200HydraView;

