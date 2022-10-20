import { Group, createStyles, ThemeIcon, ActionIcon, useMantineColorScheme, Text } from '@mantine/core';
import { User, Files, Message, Video, FileTypography, Sun, MoonStars } from 'tabler-icons-react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // changed from BrowserRouter to HashRouter to solve client-side issue of refreshing causing 404 error due to GitHub Pages, source: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Videos from "../pages/Videos";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Footer from "./footer";

const useStyles = createStyles((theme, _params, getRef) => ({ // basic usage example, source docs: https://mantine.dev/theming/create-styles/
  wrapper: { // css-in-js settings for wrapper
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,
    h1: {
        paddingRight: "1em",
    },
    ":active": {
        color: "crimson"
    },

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      [`& .${getRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: { // css-in-js settings for child DOM elements
    // assign ref to element
    ref: getRef('child'),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

// function Header({ currentPage, handlePageChange }) {
function Header() {

    const { classes } = useStyles(); // gets the css-in-js wrapper and childs by destructuring
    const { colorScheme, toggleColorScheme } = useMantineColorScheme(); // is referencing the useState in Header.js and using useMantineColorScheme function for toggling dark/light mode.
    const dark = colorScheme === 'dark'; // state is used as an if statement to toggle the light/dark mode

    return (
        <Router>
        <div className={classes.wrapper} >
            <h1>r134x7</h1>
            <Group className={classes.child} position="apart" spacing="lg">
                        <Text color={"teal"}>
                        <NavLink
                        className={({isActive}) =>(isActive ? "active" : "inactive")}
                        to="/ " // "/ " a temporary solution that does not solve this bug that doesn't happen in my other project.
                        >
                                <ThemeIcon radius="lg" color="cyan">
                                    <User />
                                </ThemeIcon>
                                About
                        </NavLink>
                        </Text>
                        <Text color={"teal"}>
                        <NavLink className={({isActive}) =>(isActive ? "active" : "inactive")} to={"/portfolio"}>
                                <ThemeIcon radius="lg" color="orange">
                                    <Files />
                                </ThemeIcon>
                            Portfolio
                        </NavLink>
                        </Text>
                        <Text color={"teal"}>
                            <NavLink className={({isActive}) =>(isActive ? "active" : "inactive")} to={"/videos"}>
                                <ThemeIcon radius="lg" color="red">
                                    <Video />
                                </ThemeIcon>
                                Videos
                            </NavLink>
                        </Text>
                        <Text color={"teal"}>
                            <NavLink className={({isActive}) =>(isActive ? "active" : "inactive")} to={"/contact"}>
                                <ThemeIcon radius="lg" color="green">
                                    <Message />
                                </ThemeIcon>
                                Contact
                            </NavLink>
                        </Text>
                        <Text color={"teal"}>
                            <NavLink className={({isActive}) =>(isActive ? "active" : "inactive")} to={"/resume"}>
                                <ThemeIcon radius="lg" color="gray">
                                    <FileTypography />
                                </ThemeIcon>
                                Resume/Skills
                            </NavLink>   
                        </Text>
                <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle mode"
                    >
                        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                </ActionIcon>
            </Group>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<About />} />
            </Routes>
        </div>
        <div>
            <Footer />
        </div>
        </Router>
      );
}

export default Header;