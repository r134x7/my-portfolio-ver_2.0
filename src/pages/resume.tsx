import React from 'react';
import { Box, Space, List, ThemeIcon} from "@mantine/core";
import { BrandHtml5, BrandCss3, BrandJavascript, BrandReactNative, CirclePlus, DeviceMobile, BrandPython, Keyboard, Brackets} from 'tabler-icons-react';

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
        <List  size="sm">
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='orange' >
                <BrandHtml5 />
              </ThemeIcon>
          }>
            HTML5 
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color="blue" >
                <BrandCss3 />
              </ThemeIcon>
          }>
            CSS3
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color="yellow" >
                <BrandJavascript />
              </ThemeIcon>
          }>
            JavaScript ES6+
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='cyan' >
                <BrandReactNative />
              </ThemeIcon>
          }>
            React
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <BrandReactNative />
              </ThemeIcon>
          }>
            Mantine (React component library)
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <BrandReactNative />
              </ThemeIcon>
          }>
            Next.js (React framework)
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>
            TypeScript
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>
            Redux Toolkit
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='blue' >
                <DeviceMobile />
              </ThemeIcon>
          }>
            Responsive web design
          </List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>
            Progressive web design
          </List.Item>
        </List>

<Space h="md" />

        <h2>
        Back-end Proficiencies
        </h2>
        <List size="sm">
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>Node.js (JavaScript back-end).</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>Express framework.</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>MySQL database, Object Relational Mapping using NPM Sequelize.</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>MongoDB database, Object Relational Mapping using NPM Mongoose.</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>GraphQL API (For CRUD operations like REST API).</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>Model-View-Controller folder structure.</List.Item>
        </List>

<Space h="md" />
        <h2>
        Miscellaneous Proficiencies
        </h2>
        <List size="sm">
        <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='red' >
                <Keyboard />
              </ThemeIcon>
          }>Engram Keyboard Layout with Caps Lock used as Backspace. (Primary typing method)</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='cyan' >
                <BrandPython />
              </ThemeIcon>
          }>Python programming language: self-taught.</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='teal' >
                <CirclePlus />
              </ThemeIcon>
          }>Java programming language: self-taught.</List.Item>
          <List.Item icon={
              <ThemeIcon size={24} radius='lg' color='violet' >
                <Brackets />
              </ThemeIcon>
          }>Problem solving skills.</List.Item>
        </List>

    </Box>
)
}
