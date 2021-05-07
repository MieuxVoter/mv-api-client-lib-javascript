# MvApiClientLib.ProposalResultjsonldRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** |  | [optional] [readonly] 
**id** | **String** |  | [optional] [readonly] 
**type** | **String** |  | [optional] [readonly] 
**proposal** | [**ProposaljsonldRead**](ProposaljsonldRead.md) |  | [optional] 
**rank** | **Number** | The computed rank of the Proposal in the Poll — Rank starts at 1 and goes upwards, and two proposals may have the same rank. | [optional] 
**medianGrade** | [**GradejsonldRead**](GradejsonldRead.md) |  | [optional] 
**tally** | **Number** | Total Amount of Ballots emitted for the Proposal this Result is about. | [optional] 
**gradesResults** | [**[ProposalGradeResultRead]**](ProposalGradeResultRead.md) | Results for each Grade, on this Proposal — This is the merit profile of the Proposal. | [optional] 


