# MvApiClientLib.ToolsApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJsonResultFromTally**](ToolsApi.md#getJsonResultFromTally) | **GET** /{tally}.json | Resolves the provided tally. 
[**getSvgMeritProfileFromTally**](ToolsApi.md#getSvgMeritProfileFromTally) | **GET** /render/merit-profile.svg | Generates a merit profile as SVG of the provided tally. 



## getJsonResultFromTally

> getJsonResultFromTally()

Resolves the provided tally. 

This endpoint requires no authentication. 

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ToolsApi();
apiInstance.getJsonResultFromTally().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSvgMeritProfileFromTally

> getSvgMeritProfileFromTally()

Generates a merit profile as SVG of the provided tally. 

The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.ToolsApi();
apiInstance.getSvgMeritProfileFromTally().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

