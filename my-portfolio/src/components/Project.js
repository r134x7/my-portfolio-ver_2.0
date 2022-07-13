import React from "react";
import Portfolio from "./pages/Portfolio";
import my1 from "../assets/images/my1.jpg"
import my2 from "../assets/images/my2.jpg"
import my3 from "../assets/images/my3.jpg"
import my4 from "../assets/images/my4.jpg"
import my5 from "../assets/images/my5.jpg"
import my6 from "../assets/images/my6.jpg"

const works = [
    {
        id: 1,
        name: "Nintendo Earnings Data and Other Video Game Companies",
        deployedApp: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
        githubRepo: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
        image: my1,
        badge: "Python",
        badgeColour: "blue",
        buttonAppText: "There is no Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Calculates and outputs code format data."
    },
    {
        id: 2,
        name: "RunningTracks",
        deployedApp: "https://quiet-reaches-87273.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/RunningTracks",
        image: my2,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Fullstack app, records user's running data and makes charts of it."
    },
    {
        id: 3,
        name: "PWA JavaScript Text Editor",
        deployedApp: "https://morning-chamber-10447.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/pwa-javascript-text-editor",
        image: my3,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Fullstack progressive web app, text editor functions offline."

    },
    {
        id: 4,
        name: "Milktoast TechBlog",
        deployedApp: "https://immense-brushlands-18787.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/milktoast-techBlog",
        image: my4,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Fullstack app, simple blog posts and comment functions."
    },
    {
        id: 5,
        name: "Weather Dashboard",
        deployedApp: "https://r134x7.github.io/HW06-ServerSideAPIs-Weather-Dashboard/",
        githubRepo: "https://github.com/r134x7/HW06-ServerSideAPIs-Weather-Dashboard",
        image: my5,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Front-end app, uses API calls to third party to display weather data."
    },
    {
        id: 6,
        name: "Password Generator",
        deployedApp: "https://r134x7.github.io/HW03-JavaScript-Password-Generator/",
        githubRepo: "https://github.com/r134x7/HW03-JavaScript-Password-Generator",
        image: my6,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Front-end app, uses functions to generate a password."
    },
]

function Project() {
    return <Portfolio works={works} />;    
}

export default Project;