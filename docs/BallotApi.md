# MvApiClientLib.BallotApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsProposalsBallotsGetSubresource**](BallotApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
[**apiProposalsBallotsGetSubresource**](BallotApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
[**deleteBallotItem**](BallotApi.md#deleteBallotItem) | **DELETE** /ballots/{id} | Removes the Ballot resource.
[**getBallotItem**](BallotApi.md#getBallotItem) | **GET** /ballots/{id} | Retrieves a Ballot resource.
[**postBallotCollection**](BallotApi.md#postBallotCollection) | **POST** /polls/{pollId}/proposals/{proposalId}/ballots | Creates a Ballot resource.



## apiPollsProposalsBallotsGetSubresource

> InlineResponse2004 apiPollsProposalsBallotsGetSubresource(pollId, proposalId, opts)

Retrieves the collection of Ballot resources.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.BallotApi();
let pollId = 6c1c8973-2df3-4b5a-a17d-a3a921dba448; // String | Universally Unique IDentifier of the poll.
let proposalId = ebf2fda8-5f45-4a33-9758-40d7f5a74998; // String | Universally Unique IDentifier of the proposal.
let opts = {
  'page': 1 // Number | The collection page number
};
apiInstance.apiPollsProposalsBallotsGetSubresource(pollId, proposalId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | **String**| Universally Unique IDentifier of the poll. | 
 **proposalId** | **String**| Universally Unique IDentifier of the proposal. | 
 **page** | **Number**| The collection page number | [optional] [default to 1]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


## apiProposalsBallotsGetSubresource

> InlineResponse2004 apiProposalsBallotsGetSubresource(id, opts)

Retrieves the collection of Ballot resources.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.BallotApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
let opts = {
  'page': 1 // Number | The collection page number
};
apiInstance.apiProposalsBallotsGetSubresource(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Universally Unique IDentifier (UUID)  | 
 **page** | **Number**| The collection page number | [optional] [default to 1]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


## deleteBallotItem

> deleteBallotItem(id)

Removes the Ballot resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.BallotApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.deleteBallotItem(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Universally Unique IDentifier (UUID)  | 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBallotItem

> BallotjsonldRead getBallotItem(id)

Retrieves a Ballot resource.

Inspect a previously submitted Ballot.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.BallotApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.getBallotItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Universally Unique IDentifier (UUID)  | 

### Return type

[**BallotjsonldRead**](BallotjsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


## postBallotCollection

> BallotjsonldCreated postBallotCollection(pollId, proposalId, opts)

Creates a Ballot resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.BallotApi();
let pollId = ed8c2754-4220-4f54-94e9-5e86982e85ac; // String | Universally Unique IDentifier of the poll whose proposal we are judging.
let proposalId = 368bd23a-6f19-4d8a-bb21-ff168ae2efc6; // String | Universally Unique IDentifier of the proposal we are judging.
let opts = {
  'ballotjsonldCreate': new MvApiClientLib.BallotjsonldCreate() // BallotjsonldCreate | The new Ballot resource
};
apiInstance.postBallotCollection(pollId, proposalId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollId** | **String**| Universally Unique IDentifier of the poll whose proposal we are judging. | 
 **proposalId** | **String**| Universally Unique IDentifier of the proposal we are judging. | 
 **ballotjsonldCreate** | [**BallotjsonldCreate**](BallotjsonldCreate.md)| The new Ballot resource | [optional] 

### Return type

[**BallotjsonldCreated**](BallotjsonldCreated.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

