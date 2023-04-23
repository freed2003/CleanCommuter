## Inspiration
As students who live in Los Angeles, a bustling metropolis, commuting is a huge part of our everyday lives. We witness firsthand the significant impact commuting has on the environment. The constant flow of cars and other modes of transportation produce large amounts of CO2, which negatively impacts our environment. Witnessing this has inspired us to create a web application aimed towards reducing the carbon footprint we create through commuting. We want to offer commuters eco-friendly alternatives and encourage them to adopt sustainable commuting practices that could reduce their carbon footprint, ultimately contributing towards a greener, cleaner, and more sustainable future.

## What it does
Clean Commuter is a web application that’s designed to help users find the most efficient and eco-friendly mode of transportation based on distance, desired arrival time, and carbon emissions. 

First, users will be able to select their vehicle model. This information will be used to calculate how much CO2 emissions their vehicle produces in comparison to other transportation alternatives.

When users enter their desired starting point and destination, they will be recommended a list of transportation options including public transport, biking, gas, and electric cars. Along with each transportation type, users will also be provided with information about CO2 emissions, travel time, and pricing. 


## How we built it
Our app was built using a variety of techniques and technologies to create a comprehensive and user-friendly experience. To start, we aggregated data from multiple datasets to obtain carbon emissions and price data, which allowed us to make informed decisions about the best transportation options for our users. To determine distance and directions data, we used the Google Maps API, which provided us with up-to-date information about routes and travel times.

One of the key features of our app is the custom mathematical algorithm that we developed. This algorithm considers multiple factors, including carbon emissions, price, and time, to determine the most efficient and eco-friendly mode of transport. This algorithm allows us to provide users with a personalized and environmentally conscious transportation solution.

We utilized several technologies and frameworks to build our app, including Express, React, Material UI (Mui), and Google Maps. These tools allowed us to create a robust and user-friendly application that is easy to navigate. We also used Figma for designs, which allowed us to create a visually appealing interface that is intuitive and easy to use.

By combining all of these elements, we were able to build an app that provides users with a comprehensive and environmentally conscious transportation solution. 

## Challenges we ran into
None of our team members were very experienced with frontend so we ran into a ton of issues with css. This slowed our frontend development process. In addition, we had issues combining our datasets and thus we had to write several scripts to reconcile the differences between them.

## Accomplishments that we're proud of
Our app is designed to help users make informed decisions about their transportation choices and to promote eco-friendly practices. We believe that our app can make a real difference in reducing carbon emissions and promoting sustainability, and we are proud to have built such a powerful and impactful tool.

## What we learned
We learned that bicycling is a very good method of transportation! In all seriousness, we learned a lot about using the google maps api. Several members on our team also learned much about frontend development.

## What's next for Clean Commuter
To further improve Clean Commuter, we want to take more metrics into account, in terms of the accuracy of our data. This includes adding elevation, speed, and traffic data for routes, including more information and detail on transit and adding a user system so that users can track their carbon footprint and impact.
