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
import GradeRead from './GradeRead';
import ProposalGradeResultRead from './ProposalGradeResultRead';
import ProposalRead from './ProposalRead';

/**
 * The ProposalResultRead model module.
 * @module MieuxVoter/model/ProposalResultRead
 * @version 0.0.0-dev
 */
class ProposalResultRead {
    /**
     * Constructs a new <code>ProposalResultRead</code>.
     * The ranked Result of one Proposal in a Poll.
     * @alias module:MieuxVoter/model/ProposalResultRead
     */
    constructor() { 
        
        ProposalResultRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProposalResultRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposalResultRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposalResultRead} The populated <code>ProposalResultRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProposalResultRead();

            if (data.hasOwnProperty('proposal')) {
                obj['proposal'] = ProposalRead.constructFromObject(data['proposal']);
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('medianGrade')) {
                obj['medianGrade'] = GradeRead.constructFromObject(data['medianGrade']);
            }
            if (data.hasOwnProperty('tally')) {
                obj['tally'] = ApiClient.convertToType(data['tally'], 'Number');
            }
            if (data.hasOwnProperty('gradesResults')) {
                obj['gradesResults'] = ApiClient.convertToType(data['gradesResults'], [ProposalGradeResultRead]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:MieuxVoter/model/ProposalRead} proposal
 */
ProposalResultRead.prototype['proposal'] = undefined;

/**
 * The computed rank of the Proposal in the Poll — Rank starts at 1 and goes upwards, and two proposals may have the same rank.
 * @member {Number} rank
 */
ProposalResultRead.prototype['rank'] = undefined;

/**
 * @member {module:MieuxVoter/model/GradeRead} medianGrade
 */
ProposalResultRead.prototype['medianGrade'] = undefined;

/**
 * Total Amount of Ballots emitted for the Proposal this Result is about.
 * @member {Number} tally
 */
ProposalResultRead.prototype['tally'] = undefined;

/**
 * Results for each Grade, on this Proposal — This is the merit profile of the Proposal.
 * @member {Array.<module:MieuxVoter/model/ProposalGradeResultRead>} gradesResults
 */
ProposalResultRead.prototype['gradesResults'] = undefined;






export default ProposalResultRead;
