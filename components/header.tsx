import React from "react";
import { Anchor, Group, createStyles, ThemeIcon, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { User, Files, Message, Video, FileTypography, Sun, MoonStars } from 'tabler-icons-react';

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

function Header({ currentPage, handlePageChange }) {

    const { classes } = useStyles(); // gets the css-in-js wrapper and childs by destructuring
    const { colorScheme, toggleColorScheme } = useMantineColorScheme(); // is referencing the useState in Header.js and using useMantineColorScheme function for toggling dark/light mode.
    const dark = colorScheme === 'dark'; // state is used as an if statement to toggle the light/dark mode

    return (
        <div className={classes.wrapper} >
            <h1>r134x7</h1>
            <Group className={classes.child} position="apart" spacing="lg">
                <Anchor
                    color="teal"
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
                    >
                        <ThemeIcon radius="lg" color="cyan">
                            <User />
                        </ThemeIcon>
                        About
                </Anchor>
                <Anchor 
                    color="teal"
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                    >
                        <ThemeIcon radius="lg" color="orange">
                            <Files />
                        </ThemeIcon>
                        Portfolio
                </Anchor>
                <Anchor 
                    color="teal"
                    href="#video"
                    onClick={() => handlePageChange("Videos")}
                    className={currentPage === "Videos" ? "nav-link active" : "nav-link"}
                    >
                        <ThemeIcon radius="lg" color="red">
                            <Video />
                        </ThemeIcon>
                        Videos
                </Anchor>
                <Anchor 
                    color="teal"
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        <ThemeIcon radius="lg" color="green">
                            <Message />
                        </ThemeIcon>
                        Contact
                </Anchor>
                <Anchor
                    color="teal"
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                    >
                        <ThemeIcon radius="lg" color="gray">
                            <FileTypography />
                        </ThemeIcon>
                        Resume/Skills
                </Anchor>
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
      );
}

export default Header;