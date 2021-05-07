# MvApiClientLib.GradeApi

All URIs are relative to *https://oas.mieuxvoter.fr*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPollsGradesGetSubresource**](GradeApi.md#apiPollsGradesGetSubresource) | **GET** /polls/{id}/grades | Retrieves the collection of Grade resources.
[**getGradeItem**](GradeApi.md#getGradeItem) | **GET** /grades/{id} | Retrieves a Grade resource.



## apiPollsGradesGetSubresource

> InlineResponse2002 apiPollsGradesGetSubresource(id, opts)

Retrieves the collection of Grade resources.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.GradeApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
let opts = {
  'page': 1 // Number | The collection page number
};
apiInstance.apiPollsGradesGetSubresource(id, opts).then((data) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html


## getGradeItem

> GradejsonldRead getGradeItem(id)

Retrieves a Grade resource.

### Example

```javascript
import MvApiClientLib from 'mv-api-client-lib';
let defaultClient = MvApiClientLib.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new MvApiClientLib.GradeApi();
let id = d434a72c-20cb-480f-9955-1fa2ce2e91b1; // String | Universally Unique IDentifier (UUID) 
apiInstance.getGradeItem(id).then((data) => {
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

[**GradejsonldRead**](GradejsonldRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

