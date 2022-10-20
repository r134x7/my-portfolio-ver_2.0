// import React, { useState } from "react";
// import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'; // used for light/dark mode. source docs: https://mantine.dev/theming/dark-theme/
// import Header from "./header";
// import Project from "./project";
// import Footer from "./footer";
// import About from "../pages/about";
// import Videos from "../pages/videos";
// import Contact from "../pages/contact";
// import Resume from "../pages/resume";

// export default function Navigation() {
//     const [currentPage, setCurrentPage] = useState("About");

//     const renderPage = () => {
//         if (currentPage === "About") {
//             return <About />;
//         }
//         if (currentPage === "Portfolio") {
//             return <Project />;
//         }
//         if (currentPage === "Videos") {
//             return <Videos />;
//         }
//         if (currentPage === "Contact") {
//             return <Contact />;
//         }
//         if (currentPage === "Resume") {
//             return <Resume />;
//         }
//     }

//     const handlePageChange = (page) => setCurrentPage(page);

//     const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
//     const toggleColorScheme = (value?: ColorScheme) =>
//     setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

//     return ( // ColorSchemeProvider, MantineProvider used for light/dark mode. source docs: https://mantine.dev/theming/dark-theme/
//         <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
//             <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
//                 <div>
//                     <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//                     {renderPage()}
//                     <Footer />
//                 </div>
//             </MantineProvider>
//         </ColorSchemeProvider>
//     );
// }
export {}