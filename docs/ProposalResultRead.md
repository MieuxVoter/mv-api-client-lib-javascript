# MvApiClientLib.ProposalResultRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposal** | [**ProposalRead**](ProposalRead.md) |  | [optional] 
**rank** | **Number** | The computed rank of the Proposal in the Poll — Rank starts at 1 and goes upwards, and two proposals may have the same rank. | [optional] 
**medianGrade** | [**GradeRead**](GradeRead.md) |  | [optional] 
**tally** | **Number** | Total Amount of Ballots emitted for the Proposal this Result is about. | [optional] 
**gradesResults** | [**[ProposalGradeResultRead]**](ProposalGradeResultRead.md) | Results for each Grade, on this Proposal — This is the merit profile of the Proposal. | [optional] 


