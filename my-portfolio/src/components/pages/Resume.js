import React from 'react';
import { Box, Space } from "@mantine/core";

export default function Resume() {
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
        <h1>Resume</h1>
        <Space h="md" />
        <p>
        Go to the contact page and send me an email if you request to view my resume.
        </p>
        <Space h="md" />
        <p>
        Front-end Proficencies
        </p>

<Space h="md" />

        <p>
        Back-end Proficencies
        </p>
    </Box>
)
}
