import my2 from "../images/my2.jpg";
import my3 from "../images/tech2.jpg";
import my4 from "../images/my9.jpg";
import my7 from "../images/my7.jpg";
import my8 from "../images/my8.jpg";
import my9 from "../images/psmk2a1.jpg";
import my10 from "../images/my10.jpg";
import pic1 from "../images/canvasthumbnail2.jpg"

export const works = [
    {
        id: 1,
        name: "Project S.C.A.L.E. Mk2",
        deployedApp: "https://project-scale-mk2-next.vercel.app/",
        githubRepo: "https://github.com/r134x7/project-scale-mk2",
        image: my9,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Self-learning the latest technologies that benefit most from using TypeScript by using the T3 Stack. The project is a remake of Project S.C.A.L.E. but with new features to increase social engagement. Use your Discord account to sign in via OAuth2 provided by NextAuth.js. See Project Scale in this page for context."
    },
    {
        id: 2,
        name: "Project S.C.A.L.E.",
        deployedApp: "https://ambitions-scale-up.onrender.com/",
        githubRepo: "https://github.com/r134x7/project-scale",
        image: my8,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "The culmination of everything I learned at the coding boot camp. A full stack application used for people who want to change who they are and can use the app daily to track their data input which is displayed in line charts."
    },
    {
        id: 3,
        name: "Nintendo Earnings Data and Other Video Game Companies",
        deployedApp: "https://r134x7.github.io/nintendo-earnings-data-and-other-video-game-companies/",
        githubRepo: "https://github.com/r134x7/nintendo-earnings-data-and-other-video-game-companies",
        image: my10,
        badge: "Python and TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: " An ever-evolving personal project, what first started out with using Java Code (not on GitHub) then refactored into Python code to output data from earnings results of video game companies to post online now includes a Front-End deployed web app using React and TypeScript so that people can now view that data from my webpage. Lots of data manipulation used to display data you would not find in a company’s earnings release."
    },
    {
        id: 4,
        name: "GraphQL Book Search",
        deployedApp: "https://graphql-book-search.onrender.com/",
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
        name: "Infernal Redux Toolkit Shop",
        deployedApp: "https://infernal-redux-toolkit-shop.onrender.com/",
        githubRepo: "https://github.com/r134x7/infernal-redux-toolkit-shop",
        image: my4,
        badge: "JavaScript",
        badgeColour: "yellow",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A React app online shop using Redux Toolkit to handle the state and state changes throughout the app, react-redux is used specifically for useSelector and useDispatch redux functions in a react app. The app was refactored from using React's Context API to using Redux Toolkit. The app uses MongoDB for the database and mutations and queries for the database are handled by Apollo GraphQL. The online shop uses the Stripe API payment system but no actual payments are made as it is a test system. Purchases made on the app will appear in the order history of your account. JWT authentication is used when signing or logging in a user."
    }, 
    {
        id: 6,
        name: "Angular e-commerce store",
        deployedApp: "https://angular-e-commerce-store-omega.vercel.app/",
        githubRepo: "https://github.com/r134x7/angular-e-commerce-store",
        image: my4,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "Remake of the Infernal Redux Toolkit Shop by using Angular version 16 with Signals and RxJS to handle things without Redux. Now contains a version of the webpage using NgRx to show it working using State Management like Redux (when you are at the deployed app, click on “Go to NgRx Store”). This is a front-end only app."
    }, 
    {
        id: 7,
        name: "Nintendo Earnings Canvas",
        deployedApp: "https://youtu.be/N5sT07oee_I",
        githubRepo: "https://github.com/r134x7/nintendo-earnings-canvas",
        image: pic1,
        badge: "TypeScript",
        badgeColour: "blue",
        buttonAppText: "Click here to Deployed App",
        buttonRepoText: "Click here to GitHub Repo",
        textDescription: "A project using the data from my other repository: Nintendo Earnings Data and Other Video Game Companies. By using Motion Canvas I can visualize data with the Canvas API and output it into MP4 file format."
    },
    // {
    //     id: 6,
    //     name: "Tech News Java API",
    //     deployedApp: "https://rocky-waters-09134.herokuapp.com/",
    //     githubRepo: "https://github.com/r134x7/tech-news-java-api",
    //     image: my3,
    //     badge: "Java",
    //     badgeColour: "orange",
    //     buttonAppText: "Click here to Deployed App",
    //     buttonRepoText: "Click here to GitHub Repo",
    //     textDescription: "A tech news blog API built on Java front and back-end frameworks. This project is mainly focused on building the back-end and API to handle CRUD requests using Java. You create an account to post links to various tech sites for which people can make comments on the post made, all posts appear on the homepage. This project uses the MVC layout with Spring Boot for the back-end, MySQL for the database and, Thymeleaf for the front-end."

    // },
]

// function Project() { // exporting the props to Project.js
//     return <Portfolio works={works} />;    
// }

// export default Project;