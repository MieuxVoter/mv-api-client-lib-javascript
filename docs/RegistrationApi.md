# MvApiClientLib.RegistrationApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postUserCollection**](RegistrationApi.md#postUserCollection) | **POST** /users | Registers a new User.



## postUserCollection

> UserjsonldRead postUserCollection(opts)

Registers a new User.

Registers a new User in the database.  The email is optional and will help you reset a forgotten password.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.RegistrationApi();
let opts = {
  'userjsonldCreate': new MvApiClientLib.UserjsonldCreate() // UserjsonldCreate | The new User resource
};
apiInstance.postUserCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userjsonldCreate** | [**UserjsonldCreate**](UserjsonldCreate.md)| The new User resource | [optional] 

### Return type

[**UserjsonldRead**](UserjsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

