import React from 'react';
import { TextInput, Textarea, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useClickOutside } from '@mantine/hooks';
import { useState } from 'react';

const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ; // taken from 16-Stu_React-Forms utils/helpers.js

function Contact() {
  const form = useForm({
    initialValues: {
        name: '',
        email: '',
        message: '',
    },

    validate: {
        name: (value) => (value.length < 2 ? 'Name must have at least 2 letters.' : null),
        email: (value) => (emailValidation.test(value) ? null : 'Invalid email'),
        message: (value) => (value.length === 0 ? 'Message is required.' : null),
    },
  });


const [emailError, setEmailError] = useState("");

  const emailref = useClickOutside(() => {
    if (!emailValidation.test(form.getInputProps("email").value)) {
        setEmailError("Invalid Email");
    } else {
        setEmailError("");
    }
});

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
            required
            label="Name"
            placeholder="Your Name"
            {...form.getInputProps('name')}
        />

        <TextInput
            ref={emailref}
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
        />

        <Textarea
            autosize
            required
            label="Message"
            {...form.getInputProps('message')}
        />

        <span>{emailError}</span>

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Contact;


// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact me</h1>
//       <p>
//         Testing...
//       </p>
//     </div>
//   );
// }
