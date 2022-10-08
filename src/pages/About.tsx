import React, { useState, useEffect } from "react";
import { Avatar, Box, Space, Text } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import c1b from "../images/c1b.png";

export default function About() {

    const paraOne = `I am Github user r134x7 also known as ggx2ac on some platforms, I recently completed a full-stack web development course via coding boot camp to gain programming skills and to build my portfolio so that I can find a career in web development. My educational background is a Bachelor of Science with a double major in Physics and, Financial Mathematics and Statistics.`;

    const paraTwo = `My programming experience during University consisted of learning Matlab for scientific applications and R language for applying statistics. After University, I learned Java (self-taught) to display finacial data in code printed format. I then taught myself Python to build new code for that same data because the Java IDE mobile app I was using no longer worked and there was no satisfactory replacement. To contact me for my resume, go to my Github profile for my contact details which is found in the "contact me" section below.`;

    const paraThree = `Head to the Resume section of this webpage to find out more about my proficiencies in Full Stack web development and head to my Portfolio to find some of the projects I created and/or collaborated with others to build.`;

    const splitOne = paraOne.split("");

    const splitTwo = paraTwo.split("");

    const splitThree = paraThree.split("");

    const [text, setText] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [textThree, setTextThree] = useState("");
    const [seconds, setSeconds] = useState(0);

    const interval = useInterval(() => setSeconds((s) => s + 1), 60);

    useEffect(() => {
        
        if (seconds < splitOne.length) {
            interval.start();
            setText(text + splitOne[seconds])
        } else if (seconds >= splitOne.length && seconds < splitOne.length + splitTwo.length) {
            interval.start();
            setTextTwo(textTwo + splitTwo[seconds-splitOne.length])
        } else if (seconds >= splitOne.length + splitTwo.length && seconds < splitOne.length + splitTwo.length + splitThree.length) {
            interval.start();
            setTextThree(textThree + splitThree[seconds-splitOne.length-splitTwo.length])
        } else {
            interval.stop();
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

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
            <Text>
                {text}
            </Text>

            <Space h="md" />
 
            <Text>
                {textTwo}
            </Text>

            <Space h="md" />
 
            <Text>
                {textThree}
            </Text>
        </Box>
    )
}