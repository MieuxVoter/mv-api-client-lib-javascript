# MvApiClientLib.ProposalApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsProposalsBallotsGetSubresource**](ProposalApi.md#apiPollsProposalsBallotsGetSubresource) | **GET** /polls/{pollId}/proposals/{proposalId}/ballots | Retrieves the collection of Ballot resources.
[**apiPollsProposalsGetSubresource**](ProposalApi.md#apiPollsProposalsGetSubresource) | **GET** /polls/{id}/proposals | Retrieves the collection of Proposal resources.
[**apiProposalsBallotsGetSubresource**](ProposalApi.md#apiProposalsBallotsGetSubresource) | **GET** /proposals/{id}/ballots | Retrieves the collection of Ballot resources.
[**getProposalItem**](ProposalApi.md#getProposalItem) | **GET** /proposals/{id} | Retrieves a Proposal resource.
[**postProposalCollection**](ProposalApi.md#postProposalCollection) | **POST** /polls/{id}/proposals | Creates a Proposal resource.



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

let apiInstance = new MvApiClientLib.ProposalApi();
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


## apiPollsProposalsGetSubresource

> InlineResponse2003 apiPollsProposalsGetSubresource(id, opts)

Retrieves the collection of Proposal resources.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ProposalApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
let opts = {
  'page': 1 // Number | The collection page number
};
apiInstance.apiPollsProposalsGetSubresource(id, opts).then((data) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

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

let apiInstance = new MvApiClientLib.ProposalApi();
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


## getProposalItem

> ProposaljsonldRead getProposalItem(id)

Retrieves a Proposal resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ProposalApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.getProposalItem(id).then((data) => {
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

[**ProposaljsonldRead**](ProposaljsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


## postProposalCollection

> ProposaljsonldRead postProposalCollection(id, opts)

Creates a Proposal resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ProposalApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
let opts = {
  'proposaljsonldCreate': new MvApiClientLib.ProposaljsonldCreate() // ProposaljsonldCreate | The new Proposal resource
};
apiInstance.postProposalCollection(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Universally Unique IDentifier (UUID)  | 
 **proposaljsonldCreate** | [**ProposaljsonldCreate**](ProposaljsonldCreate.md)| The new Proposal resource | [optional] 

### Return type

[**ProposaljsonldRead**](ProposaljsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

