# MvApiClientLib.LoginApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCredentialsItem**](LoginApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.



## postCredentialsItem

> postCredentialsItem(opts)

Returns an authentication Token from login Credentials.

Creating and participating to private polls require authentication.  The Token returned is a [JWT](https://jwt.io/) valid for one hour.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.LoginApi();
let opts = {
  'credentials': new MvApiClientLib.Credentials() // Credentials | User Credentials
};
apiInstance.postCredentialsItem(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](Credentials.md)| User Credentials | [optional] 

### Return type

null (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: Not defined

