# MvApiClientLib.Ballot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | Universally Unique IDentifier of the Ballot. | [optional] 
**id** | **Number** | Internal, incrementing numerical id, unused by ApiPlatform but used in tallying to ignore old|stale|overriden ballots by fetching the highest id, since ballots are immutable and new submissions after opinion changes create new ballots. | [optional] [readonly] 
**proposal** | **String** | The Majority Judgment Poll Proposal the author is giving a grade to. | [optional] 
**grade** | **String** | The Grade attributed by the Judge to the Proposal. | [optional] 
**participant** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 


