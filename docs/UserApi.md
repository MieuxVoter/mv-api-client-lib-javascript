# MvApiClientLib.UserApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserItem**](UserApi.md#deleteUserItem) | **DELETE** /users/{id} | Removes the User resource.
[**getUserCollection**](UserApi.md#getUserCollection) | **GET** /users | Retrieves the collection of Users.
[**getUserItem**](UserApi.md#getUserItem) | **GET** /users/{id} | Gets information about a User.
[**postCredentialsItem**](UserApi.md#postCredentialsItem) | **POST** /_jwt | Returns an authentication Token from login Credentials.
[**postUserCollection**](UserApi.md#postUserCollection) | **POST** /users | Registers a new User.
[**putUserItem**](UserApi.md#putUserItem) | **PUT** /users/{id} | Updates information about a User.



## deleteUserItem

> deleteUserItem(id)

Removes the User resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.UserApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.deleteUserItem(id).then(() => {
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

let apiInstance = new MvApiClientLib.UserApi();
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


## getUserItem

> UserjsonldRead getUserItem(id)

Gets information about a User.

You are authorized to get information about yourself only.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.UserApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.getUserItem(id).then((data) => {
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

[**UserjsonldRead**](UserjsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


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

let apiInstance = new MvApiClientLib.UserApi();
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

let apiInstance = new MvApiClientLib.UserApi();
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


## putUserItem

> UserjsonldRead putUserItem(id, opts)

Updates information about a User.

Logged-in users are authorized to update information about themselves only.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.UserApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
let opts = {
  'userjsonldEdit': new MvApiClientLib.UserjsonldEdit() // UserjsonldEdit | The updated User resource
};
apiInstance.putUserItem(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Universally Unique IDentifier (UUID)  | 
 **userjsonldEdit** | [**UserjsonldEdit**](UserjsonldEdit.md)| The updated User resource | [optional] 

### Return type

[**UserjsonldRead**](UserjsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

