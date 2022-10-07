import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Header from "../components/header";
import Project from "../components/project";
import Footer from "../components/footer";
// import About from "../pages/about";
import Videos from "../pages/videos";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
import Index from '../pages';

export default function Layout({ children}: {children: React.ReactNode}) {

    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
    const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio page of r134x7 aka ggx2ac"
        />
      </Head>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <div>
                    <Header  />
                    <main>{children}</main>
                    <Footer />
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    </div>
  );
}