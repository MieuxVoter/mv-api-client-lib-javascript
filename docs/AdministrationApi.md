# MvApiClientLib.AdministrationApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserCollection**](AdministrationApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.



## getUserCollection

> InlineResponse2005 getUserCollection(opts)

Retrieves the collection of Users.

Only administrators are allowed to access this.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.AdministrationApi();
let opts = {
  'page': 1 // Number | The collection page number
};
apiInstance.getUserCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The collection page number | [optional] [default to 1]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

