Feature: Login functionality for Adactin Application 

Background:
    Given User launch application 
	When User enter "GanishkaSri" as username 
	And User enter "Ganishka04" as password 
	Then User verify valid username and valid password  

@Login1
Scenario: User enter valid username and valid password 
	Given User launch application 
	When User enter "SowmiyaSri" as username 
	And User enter "Sowmiya05" as password 
	Then User verify valid username and valid password  

@Login2	
Scenario Outline: User enter valid username and valid password 
	Given User launch application 
	When User enter "<username>" as username 
	And User enter "<password>" as password 
	Then User verify valid username and valid password  
		
		Examples:
		| username | password | 
		| SowmiyaSri | Sowmiya05 | 
		| Bharath | Bharath | 
		| Ganishka | Gani123 | 