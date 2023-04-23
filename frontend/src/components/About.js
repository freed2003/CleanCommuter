import React from "react";

const About = () => {
return (
	<div className="container" style={{padding:'2rem'}}>
        <h1>
            <center><b>About Us</b></center>
        </h1>
        <h2>
            <b>Inspiration</b>
        </h2>
        <p>
            As students who live in Los Angeles, a bustling metropolis, commuting is a huge part of our 
            everyday lives. We witness firsthand the significant impact commuting has on the environment. 
            The constant flow of cars and other modes of transportation produce large amounts of CO2, which 
            negatively impacts our environment. Witnessing this has inspired us to create a web application 
            aimed towards reducing the carbon footprint we create through commuting. We want to offer commuters 
            eco-friendly alternatives and encourage them to adopt sustainable commuting practices that could reduce 
            their carbon footprint, ultimately contributing towards a greener, cleaner, and more sustainable future.
        </p>
        <h2>
            <b>What it does</b>
        </h2>
        <p>
            Clean Commuter is a web application that’s designed to help users find the most efficient and eco-friendly 
            mode of transportation based on distance, desired arrival time, and carbon emissions. 
        </p>
        <p>
            First, users will be able to select their vehicle model. This information will be used to calculate how much CO2 emissions their vehicle produces in comparison to other transportation alternatives.
        </p>
        <p>
            When users enter their desired starting point and destination, they will be recommended a list of transportation options including public transport, biking, gas, and electric cars. Along with each transportation type, users will also be provided with information about CO2 emissions, travel time, and pricing.
        </p>
        <h2>
            <b>What's next for Clean Commuter</b>
        </h2>
        <p>
            To further improve Clean Commuter, we want to take more metrics into account, in terms of the accuracy of our data. This includes adding elevation, speed, and traffic data for routes, including more information and detail on transit and adding a user system so that users can track their carbon footprint and impact.
        </p>
	</div>
    

);
};

export default About;
