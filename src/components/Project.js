import React from "react";
import Portfolio from "./pages/Portfolio";
import my1 from "../assets/images/my1.jpg"
import my2 from "../assets/images/my2.jpg"
import my3 from "../assets/images/my3.jpg"
import my7 from "../assets/images/my7.jpg"
import my8 from "../assets/images/my8.jpg"
import my9 from "../assets/images/my9.jpg"

const works = [
    {
        id: 1,
        name: "Project S.C.A.L.E.",
        deployedApp: "https://ambitions-scale-up.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/project-scale",
        image: my8,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "The culmination of everything I learned at the coding boot camp. A full stack application used for people who want to change who they are and can use the app daily to track their data input which is displayed in line charts."
    },
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
        textDescription: "Takes financial data from companies and outputs it into tables in code format. Lots of data manipulation used to display data you would not find in a company’s earnings release."
    },
    {
        id: 3,
        name: "Infernal Redux Toolkit Shop",
        deployedApp: "https://shrouded-headland-69573.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/infernal-redux-toolkit-shop",
        image: my9,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A full-stack web application of an online store, uses Redux Toolkit to handle state management throughout the app. The app was refactored from code that used React’s Context API to use Redux Toolkit instead. The online store also uses the Stripe Payment system (In Testing Mode) where purchases of the products can be made (as a simulation, no real purchasing occurs). JSON Web Token authentication is used when signing up or logging into your account."
    },
    {
        id: 4,
        name: "GraphQL Book Search",
        deployedApp: "https://intense-everglades-58353.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/graphql-book-search",
        image: my7,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A React app Book Search \"engine\" using Google Books API to handle GET requests when searching for book titles. Apollo GraphQL is used for handling user data i.e. signing/logging a user, saving the list of books and removing books from their saved list. JWT authentication is used when signing or logging in a user. Apollo GraphQL saved books are cached to make it quicker to remove books from your list as opposed to making network calls to the database. The database used is MongoDB."
    },
    {
        id: 5,
        name: "RunningTracks",
        deployedApp: "https://quiet-reaches-87273.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/RunningTracks",
        image: my2,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "This is a full-stack application with the MVC model where Handlebars is used for the view, MySQL is used for the model with Sequelize as the ORM and Express is used as the controller for routing all the CRUD operations. The app takes in data input from users who are fitness runners and displays their data in bar charts. Users who post their runs can have other users comment on the runs."
    },
    {
        id: 6,
        name: "PWA JavaScript Text Editor",
        deployedApp: "https://morning-chamber-10447.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/pwa-javascript-text-editor",
        image: my3,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A progressive web app that uses a client/server folder structure to make use of webpack to bundle and minify the client files. The text-editor uses JavaScript syntax highlighting thanks to code-mirror. The progressive web app makes use of service workers and workbox CacheFirst strategies to allow the text-editor to work while offline. The web app is installable from the browser. The text-editor saves data using indexDB."

    },
]

function Project() { // exporting the props to Project.js
    return <Portfolio works={works} />;    
}

export default Project;