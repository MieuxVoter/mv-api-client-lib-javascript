# MvApiClientLib.ResultRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poll** | [**PollRead**](PollRead.md) |  | [optional] 
**algorithm** | **String** | The name of the algorithm used to derive this Result. | [optional] 
**leaderboard** | [**[ProposalResultRead]**](ProposalResultRead.md) | In order, each Proposals&#39; Result.  In extreme, low-participation polls, some Proposals may have the same rank ; in that case, their order should be the order they were added to the poll. | [optional] 


