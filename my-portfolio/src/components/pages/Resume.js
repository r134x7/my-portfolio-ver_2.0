import React from 'react';
import { Box, Space, List } from "@mantine/core";

export default function Resume() {
  return (
    <Box sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "baseline",
        padding: "1em",
        '@media (max-width: 600px)': {
           flexDirection: "row"
         },
         h1: {
            paddingRight: "1em",
         }
    })}>
        <h1>Resume</h1>
        <Space h="md" />
        <p>
        Go to the contact page and send me an email if you are requesting to view my resume.
        </p>
        <Space h="md" />
        <h2>
        Front-end Proficiencies
        </h2>
        <List size="sm">
          <List.Item>HTML5, CSS3 and JavaScript ES6+.</List.Item>
          <List.Item>React</List.Item>
          <List.Item>Mantine (React component library)</List.Item>
          <List.Item>Responsive web design.</List.Item>
          <List.Item>Progressive web design.</List.Item>
        </List>

<Space h="md" />

        <h2>
        Back-end Proficiencies
        </h2>
        <List size="sm">
          <List.Item>Node.js (JavaScript back-end).</List.Item>
          <List.Item>Express framework.</List.Item>
          <List.Item>MySQL database, Object Relational Mapping using NPM Sequelize.</List.Item>
          <List.Item>MongoDB database, Object Relational Mapping using NPM Mongoose.</List.Item>
          <List.Item>Model-View-Controller folder structure.</List.Item>
        </List>

<Space h="md" />
        <h2>
        Miscellaneous Proficiencies
        </h2>
        <List size="sm">
          <List.Item>Engram Keyboard Layout with Caps Lock used as Backspace. (Primary typing method)</List.Item>
          <List.Item>Python programming language: self-taught.</List.Item>
          <List.Item>Problem solving skills.</List.Item>
        </List>

    </Box>
)
}
