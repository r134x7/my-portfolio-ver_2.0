// import React, { useState } from "react";
// import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
// import Header from "./header";
// import Footer from "./footer";

// export default function Layout({ children}: {children: React.ReactNode}) {

//     const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
//     const toggleColorScheme = (value?: ColorScheme) =>
//     setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

//   return (
//     <div>
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta
//           name="description"
//           content="Portfolio page of r134x7"
//         />
//       </Head>
//         <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
//             <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
//                 <div>
//                     <Header  />
//                     <main>{children}</main>
//                     <Footer />
//                 </div>
//             </MantineProvider>
//         </ColorSchemeProvider>
//     </div>
//   );
// }
export {}