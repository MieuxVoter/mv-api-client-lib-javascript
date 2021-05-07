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


import ApiClient from './ApiClient';
import Ballot from './model/Ballot';
import BallotCreate from './model/BallotCreate';
import BallotCreated from './model/BallotCreated';
import BallotRead from './model/BallotRead';
import Ballotjsonld from './model/Ballotjsonld';
import BallotjsonldCreate from './model/BallotjsonldCreate';
import BallotjsonldCreated from './model/BallotjsonldCreated';
import BallotjsonldRead from './model/BallotjsonldRead';
import Credentials from './model/Credentials';
import GradeCreate from './model/GradeCreate';
import GradeRead from './model/GradeRead';
import GradejsonldCreate from './model/GradejsonldCreate';
import GradejsonldRead from './model/GradejsonldRead';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse200HydraSearch from './model/InlineResponse200HydraSearch';
import InlineResponse200HydraSearchHydraMapping from './model/InlineResponse200HydraSearchHydraMapping';
import InlineResponse200HydraView from './model/InlineResponse200HydraView';
import InvitationRead from './model/InvitationRead';
import InvitationjsonldRead from './model/InvitationjsonldRead';
import PollCreate from './model/PollCreate';
import PollRead from './model/PollRead';
import PolljsonldCreate from './model/PolljsonldCreate';
import PolljsonldRead from './model/PolljsonldRead';
import ProposalCreate from './model/ProposalCreate';
import ProposalGradeResultRead from './model/ProposalGradeResultRead';
import ProposalGradeResultjsonldRead from './model/ProposalGradeResultjsonldRead';
import ProposalRead from './model/ProposalRead';
import ProposalResultRead from './model/ProposalResultRead';
import ProposalResultjsonldRead from './model/ProposalResultjsonldRead';
import ProposaljsonldCreate from './model/ProposaljsonldCreate';
import ProposaljsonldRead from './model/ProposaljsonldRead';
import ResultRead from './model/ResultRead';
import ResultjsonldRead from './model/ResultjsonldRead';
import Token from './model/Token';
import UserCreate from './model/UserCreate';
import UserEdit from './model/UserEdit';
import UserRead from './model/UserRead';
import UserjsonldCreate from './model/UserjsonldCreate';
import UserjsonldEdit from './model/UserjsonldEdit';
import UserjsonldRead from './model/UserjsonldRead';
import AdministrationApi from './api/AdministrationApi';
import BallotApi from './api/BallotApi';
import GradeApi from './api/GradeApi';
import InvitationApi from './api/InvitationApi';
import LoginApi from './api/LoginApi';
import PollApi from './api/PollApi';
import ProposalApi from './api/ProposalApi';
import RegistrationApi from './api/RegistrationApi';
import ResultApi from './api/ResultApi';
import ToolsApi from './api/ToolsApi';
import UserApi from './api/UserApi';


/**
* A javascript client for the Majority Judgment OpenAPI of MieuxVoter. Sandbox: https://oas.mieuxvoter.fr This library was generated automatically, best not edit it directly. .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MvApiClientLib = require('MieuxVoter/index'); // See note below*.
* var xxxSvc = new MvApiClientLib.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MvApiClientLib.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['MieuxVoter/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MvApiClientLib.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MvApiClientLib.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module MieuxVoter/index
* @version 0.0.0-dev
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:MieuxVoter/ApiClient}
     */
    ApiClient,

    /**
     * The Ballot model constructor.
     * @property {module:MieuxVoter/model/Ballot}
     */
    Ballot,

    /**
     * The BallotCreate model constructor.
     * @property {module:MieuxVoter/model/BallotCreate}
     */
    BallotCreate,

    /**
     * The BallotCreated model constructor.
     * @property {module:MieuxVoter/model/BallotCreated}
     */
    BallotCreated,

    /**
     * The BallotRead model constructor.
     * @property {module:MieuxVoter/model/BallotRead}
     */
    BallotRead,

    /**
     * The Ballotjsonld model constructor.
     * @property {module:MieuxVoter/model/Ballotjsonld}
     */
    Ballotjsonld,

    /**
     * The BallotjsonldCreate model constructor.
     * @property {module:MieuxVoter/model/BallotjsonldCreate}
     */
    BallotjsonldCreate,

    /**
     * The BallotjsonldCreated model constructor.
     * @property {module:MieuxVoter/model/BallotjsonldCreated}
     */
    BallotjsonldCreated,

    /**
     * The BallotjsonldRead model constructor.
     * @property {module:MieuxVoter/model/BallotjsonldRead}
     */
    BallotjsonldRead,

    /**
     * The Credentials model constructor.
     * @property {module:MieuxVoter/model/Credentials}
     */
    Credentials,

    /**
     * The GradeCreate model constructor.
     * @property {module:MieuxVoter/model/GradeCreate}
     */
    GradeCreate,

    /**
     * The GradeRead model constructor.
     * @property {module:MieuxVoter/model/GradeRead}
     */
    GradeRead,

    /**
     * The GradejsonldCreate model constructor.
     * @property {module:MieuxVoter/model/GradejsonldCreate}
     */
    GradejsonldCreate,

    /**
     * The GradejsonldRead model constructor.
     * @property {module:MieuxVoter/model/GradejsonldRead}
     */
    GradejsonldRead,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:MieuxVoter/model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse200HydraSearch model constructor.
     * @property {module:MieuxVoter/model/InlineResponse200HydraSearch}
     */
    InlineResponse200HydraSearch,

    /**
     * The InlineResponse200HydraSearchHydraMapping model constructor.
     * @property {module:MieuxVoter/model/InlineResponse200HydraSearchHydraMapping}
     */
    InlineResponse200HydraSearchHydraMapping,

    /**
     * The InlineResponse200HydraView model constructor.
     * @property {module:MieuxVoter/model/InlineResponse200HydraView}
     */
    InlineResponse200HydraView,

    /**
     * The InvitationRead model constructor.
     * @property {module:MieuxVoter/model/InvitationRead}
     */
    InvitationRead,

    /**
     * The InvitationjsonldRead model constructor.
     * @property {module:MieuxVoter/model/InvitationjsonldRead}
     */
    InvitationjsonldRead,

    /**
     * The PollCreate model constructor.
     * @property {module:MieuxVoter/model/PollCreate}
     */
    PollCreate,

    /**
     * The PollRead model constructor.
     * @property {module:MieuxVoter/model/PollRead}
     */
    PollRead,

    /**
     * The PolljsonldCreate model constructor.
     * @property {module:MieuxVoter/model/PolljsonldCreate}
     */
    PolljsonldCreate,

    /**
     * The PolljsonldRead model constructor.
     * @property {module:MieuxVoter/model/PolljsonldRead}
     */
    PolljsonldRead,

    /**
     * The ProposalCreate model constructor.
     * @property {module:MieuxVoter/model/ProposalCreate}
     */
    ProposalCreate,

    /**
     * The ProposalGradeResultRead model constructor.
     * @property {module:MieuxVoter/model/ProposalGradeResultRead}
     */
    ProposalGradeResultRead,

    /**
     * The ProposalGradeResultjsonldRead model constructor.
     * @property {module:MieuxVoter/model/ProposalGradeResultjsonldRead}
     */
    ProposalGradeResultjsonldRead,

    /**
     * The ProposalRead model constructor.
     * @property {module:MieuxVoter/model/ProposalRead}
     */
    ProposalRead,

    /**
     * The ProposalResultRead model constructor.
     * @property {module:MieuxVoter/model/ProposalResultRead}
     */
    ProposalResultRead,

    /**
     * The ProposalResultjsonldRead model constructor.
     * @property {module:MieuxVoter/model/ProposalResultjsonldRead}
     */
    ProposalResultjsonldRead,

    /**
     * The ProposaljsonldCreate model constructor.
     * @property {module:MieuxVoter/model/ProposaljsonldCreate}
     */
    ProposaljsonldCreate,

    /**
     * The ProposaljsonldRead model constructor.
     * @property {module:MieuxVoter/model/ProposaljsonldRead}
     */
    ProposaljsonldRead,

    /**
     * The ResultRead model constructor.
     * @property {module:MieuxVoter/model/ResultRead}
     */
    ResultRead,

    /**
     * The ResultjsonldRead model constructor.
     * @property {module:MieuxVoter/model/ResultjsonldRead}
     */
    ResultjsonldRead,

    /**
     * The Token model constructor.
     * @property {module:MieuxVoter/model/Token}
     */
    Token,

    /**
     * The UserCreate model constructor.
     * @property {module:MieuxVoter/model/UserCreate}
     */
    UserCreate,

    /**
     * The UserEdit model constructor.
     * @property {module:MieuxVoter/model/UserEdit}
     */
    UserEdit,

    /**
     * The UserRead model constructor.
     * @property {module:MieuxVoter/model/UserRead}
     */
    UserRead,

    /**
     * The UserjsonldCreate model constructor.
     * @property {module:MieuxVoter/model/UserjsonldCreate}
     */
    UserjsonldCreate,

    /**
     * The UserjsonldEdit model constructor.
     * @property {module:MieuxVoter/model/UserjsonldEdit}
     */
    UserjsonldEdit,

    /**
     * The UserjsonldRead model constructor.
     * @property {module:MieuxVoter/model/UserjsonldRead}
     */
    UserjsonldRead,

    /**
    * The AdministrationApi service constructor.
    * @property {module:MieuxVoter/api/AdministrationApi}
    */
    AdministrationApi,

    /**
    * The BallotApi service constructor.
    * @property {module:MieuxVoter/api/BallotApi}
    */
    BallotApi,

    /**
    * The GradeApi service constructor.
    * @property {module:MieuxVoter/api/GradeApi}
    */
    GradeApi,

    /**
    * The InvitationApi service constructor.
    * @property {module:MieuxVoter/api/InvitationApi}
    */
    InvitationApi,

    /**
    * The LoginApi service constructor.
    * @property {module:MieuxVoter/api/LoginApi}
    */
    LoginApi,

    /**
    * The PollApi service constructor.
    * @property {module:MieuxVoter/api/PollApi}
    */
    PollApi,

    /**
    * The ProposalApi service constructor.
    * @property {module:MieuxVoter/api/ProposalApi}
    */
    ProposalApi,

    /**
    * The RegistrationApi service constructor.
    * @property {module:MieuxVoter/api/RegistrationApi}
    */
    RegistrationApi,

    /**
    * The ResultApi service constructor.
    * @property {module:MieuxVoter/api/ResultApi}
    */
    ResultApi,

    /**
    * The ToolsApi service constructor.
    * @property {module:MieuxVoter/api/ToolsApi}
    */
    ToolsApi,

    /**
    * The UserApi service constructor.
    * @property {module:MieuxVoter/api/UserApi}
    */
    UserApi
};
