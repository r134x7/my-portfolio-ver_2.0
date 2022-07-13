import React from "react";
import { Anchor, Group, createStyles, ThemeIcon } from '@mantine/core';
import { User, Files, Message, Video, FileTypography } from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    maxWidth: 400,
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

  child: {
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

    const { classes } = useStyles();

    return (
        <div className={classes.wrapper} >
        <Group className={classes.child} position="apart" spacing="lg">
            <Anchor
                color="teal"
                icon={<User size={14} />}
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
                icon={<Files size={14} />}
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
                icon={<Video size={14} />}
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
            icon={<Message size={14} />}
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
            icon={<FileTypography size={14} />}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
                    <ThemeIcon radius="lg" color="gray">
                        <FileTypography />
                    </ThemeIcon>
                    Resume
                </Anchor>
                </Group>
        </div>
      );
}

// function Header({ currentPage, handlePageChange }) {
//     const firstTabRef = useRef(<a href="#about"
//     onClick={() => handlePageChange("About")}
//     className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</a>);

//     return (
//         <Tabs color="teal">
//           <Tabs.Tab ref={firstTabRef} label="About" icon={<User size={14} />}>
//             <Text
//                 href="#about"
//                 onClick={() => handlePageChange("About")}
//                 className={currentPage === "About" ? "nav-link active" : "nav-link"}
//                 >
//                     About
//                 </Text>
//                 </Tabs.Tab>
//           <Tabs.Tab label="Portfolio" icon={<Files size={14} />}>
//             <Anchor 
//                 href="#portfolio"
//                 onClick={() => handlePageChange("Portfolio")}
//                 className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
//                 >
//                     Portfolio
//                 </Anchor>
//                 </Tabs.Tab>
//           <Tabs.Tab label="Videos" icon={<Video size={14} />}>
//             <a 
//                 href="#video"
//                 onClick={() => handlePageChange("Videos")}
//                 className={currentPage === "Videos" ? "nav-link active" : "nav-link"}
//                 >
//                     Videos
//                 </a>
//                 </Tabs.Tab>
//           <Tabs.Tab label="Contact" icon={<Message size={14} />}>
//             <a 
//                 href="#contact"
//                 onClick={() => handlePageChange("Contact")}
//                 className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//                 >
//                     Contact
//                 </a>
//                 </Tabs.Tab>
//           <Tabs.Tab label="Resume" icon={<FileTypography size={14} />}>
//             <a 
//                 href="#resume"
//                 onClick={() => handlePageChange("Resume")}
//                 className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//                 >
//                     Resume
//                 </a>
//                 </Tabs.Tab>
//         </Tabs>
//       );
// }

// function Header({ currentPage, handlePageChange }) {
//     return (
//         <ul>
//             <li className="nav-item">
//                 <a 
//                 href="#about"
//                 onClick={() => handlePageChange("About")}
//                 className={currentPage === "About" ? "nav-link active" : "nav-link"}
//                 >
//                     About
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a 
//                 href="#portfolio"
//                 onClick={() => handlePageChange("Portfolio")}
//                 className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
//                 >
//                     Portfolio
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a 
//                 href="#video"
//                 onClick={() => handlePageChange("Videos")}
//                 className={currentPage === "Videos" ? "nav-link active" : "nav-link"}
//                 >
//                     Videos
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a 
//                 href="#contact"
//                 onClick={() => handlePageChange("Contact")}
//                 className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//                 >
//                     Contact
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a 
//                 href="#resume"
//                 onClick={() => handlePageChange("Resume")}
//                 className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//                 >
//                     Resume
//                 </a>
//             </li>
//         </ul>
//     )    
// }

export default Header;