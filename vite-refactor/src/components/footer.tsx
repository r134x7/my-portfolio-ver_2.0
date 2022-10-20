import { Anchor, Group, createStyles, ThemeIcon } from '@mantine/core';
import { BrandGithub, BrandLinkedin, BrandYoutube } from 'tabler-icons-react';

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

function Footer() {

    const { classes } = useStyles(); // gets the css-in-js wrapper and childs by destructuring

    return (
        <div className={classes.wrapper} >
            <Group className={classes.child} position="apart" spacing="lg">
                <Anchor
                color="cyan"
                href="https://github.com/r134x7"
                >
                    <ThemeIcon radius="lg" color="cyan">
                        <BrandGithub />
                    </ThemeIcon>
                    GitHub
                </Anchor>
                <Anchor 
                color="orange"
                href="#"
                >
                    <ThemeIcon radius="lg" color="orange">
                        <BrandLinkedin />
                    </ThemeIcon>
                    LonkedOn
                </Anchor>
                <Anchor 
                color="red"
                href="https://www.youtube.com/user/guiltygearx2ac"
                >
                    <ThemeIcon radius="lg" color="red">
                        <BrandYoutube />
                    </ThemeIcon>
                    YouTube
                </Anchor>
            </Group>
        </div>
      );
}

export default Footer;