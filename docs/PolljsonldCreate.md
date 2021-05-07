# MvApiClientLib.PolljsonldCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** |  | [optional] [readonly] 
**id** | **String** |  | [optional] [readonly] 
**type** | **String** |  | [optional] [readonly] 
**slug** | **String** | A unique, short, human-friendly identifier for the Poll. | [optional] 
**scope** | **String** | The scope defines how and by whom the poll is accessible: &#x60;public&#x60;: Everyone may access the poll, and it will be publicly listed ; &#x60;unlisted&#x60;: Everyone may access the poll if they know its URI ; &#x60;private&#x60;: Only invited participants may participate ; The default scope is &#x60;unlisted&#x60;. | [optional] 
**subject** | **String** | The subject of the poll. Careful consideration should be taken in the writing of this. | 
**proposals** | [**[ProposaljsonldCreate]**](ProposaljsonldCreate.md) | A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion. | [optional] 
**grades** | [**[GradejsonldCreate]**](GradejsonldCreate.md) | A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss). | [optional] 


