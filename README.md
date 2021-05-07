# mv-api-client-lib

Generated by https://github.com/MieuxVoter/mv-api-server-apiplatform

MvApiClientLib - JavaScript client for mv-api-client-lib
This is a **deliberation service** using **majority judgment** polling.
It's **libre software** ([source](https://github.com/mieuxvoter)) made and maintained by [MieuxVoter.fr](https://mieuxvoter.fr).
You're browsing the API documentation and sandbox.

## Use one of the known clients

- TODO: add an URL to a client of the API


## Try it out the hard way

### Create an account

You will need a user account to interact with polls.
Head to **Registration** → `POST /users` below.
Click _Try it out_, set your desired credentials, and execute the query.
Scroll down to see the response.

### Authenticate

Use your credentials in the **Login** → `POST /_jwt`, and the API will return a Json Web Token valid for one hour.
Copy the token (not the whole response, and without quotes) in the field behind the `Authorize 🔒` button.

### Create a poll

**Poll** → `POST /polls`

Keep the response, you'll need the uuids.

> TODO: document invitation generation

### Submit judgments

**Ballot** → `POST /polls/{pollId}/proposals/{proposalId}/ballots`

One request per proposal, for now.  We plan on making an endpoint to submit them all at once.

### Collect the results

**Result** → `GET /polls/{id}/result`

## Use a generated client library

- for php  (link!)
- for typescript-node  (link!!)
- …

There are clients we can generate for most languages.
Get in touch if you'd like one in particular!
Or clone this project and use `bin/generate-client.bash -t whatever`.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.0-dev
- Package version: 0.0.0-dev
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mv-api-client-lib --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your mv-api-client-lib from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/MieuxVoter/mv-api-client-lib-javascript
then install it via:

```shell
    npm install MieuxVoter/mv-api-client-lib-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MvApiClientLib = require('mv-api-client-lib');

var defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['Authorization'] = "Token"

var api = new MvApiClientLib.AdministrationApi()
var opts = {
  'page': 1 // {Number} The collection page number
};
api.getUserCollection(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://oas.mieuxvoter.fr*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MvApiClientLib.AdministrationApi* | [**getUserCollection**](docs/AdministrationApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.
*MvApiClientLib.BallotApi* | [**apiPollsProposalsBallotsGetSubresource**](docs/BallotApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
*MvApiClientLib.BallotApi* | [**apiProposalsBallotsGetSubresource**](docs/BallotApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
*MvApiClientLib.BallotApi* | [**deleteBallotItem**](docs/BallotApi.md#deleteBallotItem) | **DELETE** /ballots/{id} | Removes the Ballot resource.
*MvApiClientLib.BallotApi* | [**getBallotItem**](docs/BallotApi.md#getBallotItem) | **GET** /ballots/{id} | Retrieves a Ballot resource.
*MvApiClientLib.BallotApi* | [**postBallotCollection**](docs/BallotApi.md#postBallotCollection) | **POST** /polls/{pollId}/proposals/{proposalId}/ballots | Creates a Ballot resource.
*MvApiClientLib.GradeApi* | [**apiPollsGradesGetSubresource**](docs/GradeApi.md#apiPollsGradesGetSubresource) | **GET** /polls/{id}/grades | Retrieves the collection of Grade resources.
*MvApiClientLib.GradeApi* | [**getGradeItem**](docs/GradeApi.md#getGradeItem) | **GET** /grades/{id} | Retrieves a Grade resource.
*MvApiClientLib.InvitationApi* | [**getForPollInvitationCollection**](docs/InvitationApi.md#getForPollInvitationCollection) | **GET** /polls/{id}/invitations | Retrieves the collection of Invitation resources.
*MvApiClientLib.InvitationApi* | [**getInvitationCollection**](docs/InvitationApi.md#getInvitationCollection) | **GET** /invitations | Retrieves the collection of Invitation resources.
*MvApiClientLib.InvitationApi* | [**getInvitationItem**](docs/InvitationApi.md#getInvitationItem) | **GET** /invitations/{id} | Retrieves a Invitation resource.
*MvApiClientLib.LoginApi* | [**postCredentialsItem**](docs/LoginApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.
*MvApiClientLib.PollApi* | [**apiPollsGradesGetSubresource**](docs/PollApi.md#apiPollsGradesGetSubresource) | **GET** /polls/{id}/grades | Retrieves the collection of Grade resources.
*MvApiClientLib.PollApi* | [**apiPollsProposalsGetSubresource**](docs/PollApi.md#apiPollsProposalsGetSubresource) | **GET** /polls/{id}/proposals | Retrieves the collection of Proposal resources.
*MvApiClientLib.PollApi* | [**deletePollItem**](docs/PollApi.md#deletePollItem) | **DELETE** /polls/{id} | Removes the Poll resource.
*MvApiClientLib.PollApi* | [**getForPollResultItem**](docs/PollApi.md#getForPollResultItem) | **GET** /polls/{id}/result | Gets the result of a poll
*MvApiClientLib.PollApi* | [**getPollCollection**](docs/PollApi.md#getPollCollection) | **GET** /polls | Retrieves the collection of Poll resources.
*MvApiClientLib.PollApi* | [**getPollItem**](docs/PollApi.md#getPollItem) | **GET** /polls/{id} | Retrieves a Poll resource.
*MvApiClientLib.PollApi* | [**postPollCollection**](docs/PollApi.md#postPollCollection) | **POST** /polls | Creates a Poll resource.
*MvApiClientLib.ProposalApi* | [**apiPollsProposalsBallotsGetSubresource**](docs/ProposalApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
*MvApiClientLib.ProposalApi* | [**apiPollsProposalsGetSubresource**](docs/ProposalApi.md#apiPollsProposalsGetSubresource) | **GET** /polls/{id}/proposals | Retrieves the collection of Proposal resources.
*MvApiClientLib.ProposalApi* | [**apiProposalsBallotsGetSubresource**](docs/ProposalApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
*MvApiClientLib.ProposalApi* | [**getProposalItem**](docs/ProposalApi.md#getProposalItem) | **GET** /proposals/{id} | Retrieves a Proposal resource.
*MvApiClientLib.ProposalApi* | [**postProposalCollection**](docs/ProposalApi.md#postProposalCollection) | **POST** /polls/{id}/proposals | Creates a Proposal resource.
*MvApiClientLib.RegistrationApi* | [**postUserCollection**](docs/RegistrationApi.md#postUserCollection) | **POST** /users | Registers a new User.
*MvApiClientLib.ResultApi* | [**getForPollResultItem**](docs/ResultApi.md#getForPollResultItem) | **GET** /polls/{id}/result | Gets the result of a poll
*MvApiClientLib.ToolsApi* | [**getJsonResultFromTally**](docs/ToolsApi.md#getJsonResultFromTally) | **GET** /{tally}.json | Resolves the provided tally. 
*MvApiClientLib.ToolsApi* | [**getSvgMeritProfileFromTally**](docs/ToolsApi.md#getSvgMeritProfileFromTally) | **GET** /render/merit-profile.svg | Generates a merit profile as SVG of the provided tally. 
*MvApiClientLib.UserApi* | [**deleteUserItem**](docs/UserApi.md#deleteUserItem) | **DELETE** /users/{id} | Removes the User resource.
*MvApiClientLib.UserApi* | [**getUserCollection**](docs/UserApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.
*MvApiClientLib.UserApi* | [**getUserItem**](docs/UserApi.md#getUserItem) | **GET** /users/{id} | Gets information about a User.
*MvApiClientLib.UserApi* | [**postCredentialsItem**](docs/UserApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.
*MvApiClientLib.UserApi* | [**postUserCollection**](docs/UserApi.md#postUserCollection) | **POST** /users | Registers a new User.
*MvApiClientLib.UserApi* | [**putUserItem**](docs/UserApi.md#putUserItem) | **PUT** /users/{id} | Updates information about a User.


## Documentation for Models

 - [MvApiClientLib.Ballot](docs/Ballot.md)
 - [MvApiClientLib.BallotCreate](docs/BallotCreate.md)
 - [MvApiClientLib.BallotCreated](docs/BallotCreated.md)
 - [MvApiClientLib.BallotRead](docs/BallotRead.md)
 - [MvApiClientLib.Ballotjsonld](docs/Ballotjsonld.md)
 - [MvApiClientLib.BallotjsonldCreate](docs/BallotjsonldCreate.md)
 - [MvApiClientLib.BallotjsonldCreated](docs/BallotjsonldCreated.md)
 - [MvApiClientLib.BallotjsonldRead](docs/BallotjsonldRead.md)
 - [MvApiClientLib.Credentials](docs/Credentials.md)
 - [MvApiClientLib.GradeCreate](docs/GradeCreate.md)
 - [MvApiClientLib.GradeRead](docs/GradeRead.md)
 - [MvApiClientLib.GradejsonldCreate](docs/GradejsonldCreate.md)
 - [MvApiClientLib.GradejsonldRead](docs/GradejsonldRead.md)
 - [MvApiClientLib.InlineResponse200](docs/InlineResponse200.md)
 - [MvApiClientLib.InlineResponse2001](docs/InlineResponse2001.md)
 - [MvApiClientLib.InlineResponse2002](docs/InlineResponse2002.md)
 - [MvApiClientLib.InlineResponse2003](docs/InlineResponse2003.md)
 - [MvApiClientLib.InlineResponse2004](docs/InlineResponse2004.md)
 - [MvApiClientLib.InlineResponse2005](docs/InlineResponse2005.md)
 - [MvApiClientLib.InlineResponse200HydraSearch](docs/InlineResponse200HydraSearch.md)
 - [MvApiClientLib.InlineResponse200HydraSearchHydraMapping](docs/InlineResponse200HydraSearchHydraMapping.md)
 - [MvApiClientLib.InlineResponse200HydraView](docs/InlineResponse200HydraView.md)
 - [MvApiClientLib.InvitationRead](docs/InvitationRead.md)
 - [MvApiClientLib.InvitationjsonldRead](docs/InvitationjsonldRead.md)
 - [MvApiClientLib.PollCreate](docs/PollCreate.md)
 - [MvApiClientLib.PollRead](docs/PollRead.md)
 - [MvApiClientLib.PolljsonldCreate](docs/PolljsonldCreate.md)
 - [MvApiClientLib.PolljsonldRead](docs/PolljsonldRead.md)
 - [MvApiClientLib.ProposalCreate](docs/ProposalCreate.md)
 - [MvApiClientLib.ProposalGradeResultRead](docs/ProposalGradeResultRead.md)
 - [MvApiClientLib.ProposalGradeResultjsonldRead](docs/ProposalGradeResultjsonldRead.md)
 - [MvApiClientLib.ProposalRead](docs/ProposalRead.md)
 - [MvApiClientLib.ProposalResultRead](docs/ProposalResultRead.md)
 - [MvApiClientLib.ProposalResultjsonldRead](docs/ProposalResultjsonldRead.md)
 - [MvApiClientLib.ProposaljsonldCreate](docs/ProposaljsonldCreate.md)
 - [MvApiClientLib.ProposaljsonldRead](docs/ProposaljsonldRead.md)
 - [MvApiClientLib.ResultRead](docs/ResultRead.md)
 - [MvApiClientLib.ResultjsonldRead](docs/ResultjsonldRead.md)
 - [MvApiClientLib.Token](docs/Token.md)
 - [MvApiClientLib.UserCreate](docs/UserCreate.md)
 - [MvApiClientLib.UserEdit](docs/UserEdit.md)
 - [MvApiClientLib.UserRead](docs/UserRead.md)
 - [MvApiClientLib.UserjsonldCreate](docs/UserjsonldCreate.md)
 - [MvApiClientLib.UserjsonldEdit](docs/UserjsonldEdit.md)
 - [MvApiClientLib.UserjsonldRead](docs/UserjsonldRead.md)


## Documentation for Authorization



### apiKey


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

