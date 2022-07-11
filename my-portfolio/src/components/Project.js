import React from "react";
import Portfolio from "./pages/Portfolio";

const works = [
    {
        id: 1,
        name: "Nintendo Earnings Data and Other Video Game Companies",
        deployedApp: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
        githubRepo: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
    },
    {
        id: 2,
        name: "RunningTracks",
        deployedApp: "https://quiet-reaches-87273.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/RunningTracks",
    },
    {
        id: 3,
        name: "PWA JavaScript Text Editor",
        deployedApp: "https://morning-chamber-10447.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/pwa-javascript-text-editor",
    },
    {
        id: 4,
        name: "Milktoast TechBlog",
        deployedApp: "https://immense-brushlands-18787.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/milktoast-techBlog",
    },
    {
        id: 5,
        name: "Weather Dashboard",
        deployedApp: "https://r134x7.github.io/HW06-ServerSideAPIs-Weather-Dashboard/",
        githubRepo: "https://github.com/r134x7/HW06-ServerSideAPIs-Weather-Dashboard",
    },
    {
        id: 6,
        name: "Password Generator",
        deployedApp: "https://r134x7.github.io/HW03-JavaScript-Password-Generator/",
        githubRepo: "https://github.com/r134x7/HW03-JavaScript-Password-Generator",
    },
]

function Project() {
    return <Portfolio works={works} />;    
}

export default Project;