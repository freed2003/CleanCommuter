# CleanCommuter Spec

## features

* Users can register and enter their car model -> for comparison against other options
	- Gives exact measurements of carbon emmissions
			* dataset with cars and carbon emissions (model and year)


*	Users should be able to enter their commute on a map 
	- requires map ui -> google maps
	- rank and recommend alternative transportation options (vehicles and routes)
	- potentially allow users to enter more than just a single commute for more in depth recommendation
	- requires some sort of algorithm to compare options (gradient descent, or something like that) (2d optimization problem)
		* to start off -> compare gas car, gas carpool, electric car, electric carpool, public transportation, biking, walking
	- comparisons based on travel time, carbon emissions [, price, "feasability"]
	- emphasis on visual representations
