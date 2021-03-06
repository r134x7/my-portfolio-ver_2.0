import React from "react";
import { Avatar, Box, Space } from "@mantine/core";
import c1b from "../../assets/images/c1b.png";

export default function About() {
    return (
        <Box sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "baseline",
            padding: "2em",
            '@media (max-width: 600px)': {
               flexDirection: "row"
             },
             h1: {
                paddingRight: "1em",
             }
        })}>
            <h1>About me</h1>
            <Space h="md" />
            <Avatar src={c1b} alt="Avatar" radius="lg" size="xl" />
            <Space h="md" />
            <p>
            I am Github user r134x7 also known as ggx2ac in some places, I am currently
            studying full-stack web development via coding bootcamp to gain programming skills
            and to build my portfolio so that I can find a career in web development.
            My educational background is a Bachelor of Science with a double major
            in Physics and, Financial Mathematics and Statistics.
            </p>

<Space h="md" />
 
            <p>
            My programming experience during University consisted of:
            learning Matlab for scientific applications and R language for
            applying statistics. After University, I learned Java (self-taught)
            to display finacial data in code printed format. I then taught myself
            Python to build new code for that same data because the Java IDE mobile
            app I was using no longer worked and there was no satisfactory replacement.
            To contact me for my resume, go to my Github profile for my contact details
            which is found in the "contact me" section below.
            </p>
        </Box>
    )
}