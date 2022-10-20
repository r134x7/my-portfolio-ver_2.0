import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Header from "./components/header";

export default function App() {

        const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
        const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    // Header acts as the shell for the app
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <Header />
            </MantineProvider>
        </ColorSchemeProvider>
    )
 } 
