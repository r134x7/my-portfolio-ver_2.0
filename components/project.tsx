import React from "react";
import Portfolio from "../pages/portfolio";
import my2 from "../public/images/my2.jpg"
import my3 from "../public/images/tech2.jpg"
import my7 from "../public/images/my7.jpg"
import my8 from "../public/images/my8.jpg"
import my9 from "../public/images/my9.jpg"
import my10 from "../public/images/my10.jpg"

export const works = [
    {
        id: 1,
        name: "Project S.C.A.L.E.",
        deployedApp: "https://ambitions-scale-up.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/project-scale",
        image: my8.src,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "The culmination of everything I learned at the coding boot camp. A full stack application used for people who want to change who they are and can use the app daily to track their data input which is displayed in line charts."
    },
    {
        id: 1,
        name: "Nintendo Earnings Data and Other Video Game Companies",
        deployedApp: "https://r134x7.github.io/nintendo-earnings-data-and-other-video-game-companies/",
        githubRepo: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
        image: my10.src,
        badge: "Python and TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: " An ever-evolving personal project, what first started out with using Java Code (not on GitHub) then refactored into Python code to output data from earnings results of video game companies to post online now includes a Front-End deployed web app using React and TypeScript so that people can now view that data from my webpage. Lots of data manipulation used to display data you would not find in a company’s earnings release."
    },
    {
        id: 3,
        name: "Infernal Redux Toolkit Shop",
        deployedApp: "https://shrouded-headland-69573.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/infernal-redux-toolkit-shop",
        image: my9.src,
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
        image: my7.src,
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
        image: my2.src,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "This is a full-stack application with the MVC model where Handlebars is used for the view, MySQL is used for the model with Sequelize as the ORM and Express is used as the controller for routing all the CRUD operations. The app takes in data input from users who are fitness runners and displays their data in bar charts. Users who post their runs can have other users comment on the runs."
    },
    {
        id: 6,
        name: "Tech News Java API",
        deployedApp: "https://rocky-waters-09134.herokuapp.com/",
        githubRepo: "https://github.com/r134x7/tech-news-java-api",
        image: my3.src,
        badge: "Java",
        badgeColour: "orange",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A tech news blog API built on Java front and back-end frameworks. This project is mainly focused on building the back-end and API to handle CRUD requests using Java. You create an account to post links to various tech sites for which people can make comments on the post made, all posts appear on the homepage. This project uses the MVC layout with Spring Boot for the back-end, MySQL for the database and, Thymeleaf for the front-end."

    },
]

// function Project() { // exporting the props to Project.js
//     return <Portfolio works={works} />;    
// }

// export default Project;