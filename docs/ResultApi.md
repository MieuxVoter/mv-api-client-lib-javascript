# MvApiClientLib.ResultApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getForPollResultItem**](ResultApi.md#getForPollResultItem) | **GET** /polls/{id}/result | Gets the result of a poll



## getForPollResultItem

> ResultjsonldRead getForPollResultItem(id)

Gets the result of a poll

This endpoint computes a fresh result from the ballots currently received. For now, you may read a poll&#39;s result _at any time_. 

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ResultApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.getForPollResultItem(id).then((data) => {
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

[**ResultjsonldRead**](ResultjsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

