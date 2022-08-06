import React from 'react';
import { TextInput, Textarea, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useClickOutside } from '@mantine/hooks';
import { useState } from 'react';

const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ; // regex taken from 16-Stu_React-Forms utils/helpers.js

// this form has three validate functions, one when clicking outside a text field, one while typing in your email address and the other when submitting the form.

function Contact() {
  const form = useForm({ // useForm is a Mantine function
    initialValues: { // objects for the fields you are using
        name: '',
        email: '',
        message: '',
    },

    validate: { // validate function that occurs on Submit.
        name: (value) => (value.length < 2 ? 'Name must have at least 2 letters.' : null),
        email: (value) => (emailValidation.test(value) ? null : 'Invalid email'),
        message: (value) => (value.length === 0 ? 'Message is required.' : null),
    },
  });

const [nameOpened, setNameOpened] = useState(false) // flag to check if Name text field was clicked on
const [emailOpened, setEmailOpened] = useState(false) // flag to check if Email text field was clicked on
const [messageOpened, setMessageOpened] = useState(false) // flag to check if Message text field was clicked on

const [nameError, setNameError] = useState(""); // error state when clicking outside text field
const [emailError, setEmailError] = useState(""); // error state when clicking outside text field
const [messageError, setMessageError] = useState(""); // error state when clicking outside text field

const [emailText, setEmailText] = useState(""); // to check text input for email to flag for error
const [emailValErr, setEmailValErr] = useState(""); // error state when typing an incorrect email

const nameRef = useClickOutside(() => { // Mantine function
    if (form.getInputProps("name").value.length < 2 && nameOpened) { // uses name input from form, checks if nameOpened is true
        setNameError("Name must have at least 2 letters."); // error displays in span
        setNameOpened(false);
    } else if (nameOpened) {
        setNameError(""); // if error occurred, it will be removed on correct input
        setNameOpened(false);
    }
});

const emailRef = useClickOutside(() => { // Mantine function
    if (!emailValidation.test(form.getInputProps("email").value) && emailOpened) { // uses email input from form and does validation check, checks if nameOpened is true
        setEmailError("Please enter your email."); // error displays in span
        setEmailOpened(false);
    } else if (emailOpened) {
        setEmailError(""); // if error occurred, it will be removed on correct input
        setEmailOpened(false);
    }
});

const messageRef = useClickOutside(() => {
    if (form.getInputProps("message").value.length === 0 && messageOpened) {
        setMessageError("Message is required."); // error displays in span
        setMessageOpened(false);
    } else if (messageOpened) {
        setMessageError(""); // if error occurred, it will be removed on correct input
        setMessageOpened(false);
    }
});

function handleChange(event) {
  setEmailText(event.target.value);

  if (!emailValidation.test(emailText)) {
    setEmailValErr("This is not a valid email address.")
  } else {
    setEmailValErr("");
  }
}

  return ( // Box, TextInput, Textarea, Group and Button are Mantine properties
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <h1>Contact</h1>
      <p>This contact form is for demonstration purposes only. To contact me please email to: r134x7@gmx.com </p>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput //name field
            onClick={() => setNameOpened(true)} // changes state when clicked
            ref={nameRef}
            required // requires entry
            label="Name"
            placeholder="Your Name"
            {...form.getInputProps('name')} // uses name input on submit
        />

        <TextInput // email field
            onClick={() => setEmailOpened(true)} // changes state when clicked
            ref={emailRef}
            required // requires entry
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')} // uses email input on submit
            value={emailText} // the order of this matters, needs to be placed below .getInputProps
            onChange={handleChange} // changes state when text is entered, the order of this matters, needs to be placed below .getInputProps
            />

        <Textarea // message field
            onClick={() => setMessageOpened(true)} // changes state when clicked
            ref={messageRef}
            autosize // text box will get larger as text is entered
            required // requires entry
            label="Message"
            {...form.getInputProps('message')} // uses message input on submit
        />

        {/* where the outside click errors occur */}
        <span> {`${nameError} ${emailError} ${emailValErr} ${messageError}`}</span>

        <Group position="left" mt="md">
          <Button color={"teal"} type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Contact;
