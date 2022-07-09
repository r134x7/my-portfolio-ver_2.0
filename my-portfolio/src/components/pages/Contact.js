import React from 'react';
import { TextInput, Textarea, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function Contact() {
  const form = useForm({
    initialValues: {
        name: '',
        email: '',
        message: '',
    },

    validate: {
        name: (value) => (value.length < 2 ? 'Name must have at least 2 letters.' : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        message: (value) => (value.length === 0 ? 'Message is required.' : null),
    },
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
