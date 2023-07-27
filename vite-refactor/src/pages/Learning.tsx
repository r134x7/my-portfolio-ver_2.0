import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export default function Learning() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <>
    <div style={{ width: 333, margin: 'auto' }}>
      <Card shadow="sm" p="lg" mb={'md'}>
        <Card.Section>
          {/* <Image src={b1a} height={250} alt="Video still" /> */}
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Learn how to use SQLite</Text>
          <Badge color="red" variant="light">
            SQLite
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          A thread I created on the forum Install Base to teach someone that wanted to know how to use SQL to create a database for video game related sales data.

          I structured it to go through learning about database theory and why relational databases are used, then going through online resources to learn basic SQL expressions and then I create a simple relational database in SQLite that is video game related.
        </Text>

        <Button component="a" href="https://www.installbaseforum.com/forums/threads/learn-badly-with-me-ggx2ac-chapter-1-build-a-relational-database-using-sqlite.1617/" variant="light" color="teal" fullWidth style={{ marginTop: 14 }}>
          Click here to view thread
        </Button>
      </Card>
    </div>

    <div style={{ width: 333, margin: 'auto' }}>
      <Card shadow="sm" p="lg" mb={'md'}>
        <Card.Section>
          {/* <Image src={b1a} height={250} alt="Video still" /> */}
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Learn how to use functional programming in Excel/Spreadsheets</Text>
          <Badge color="red" variant="light">
            Excel/Spreadsheets
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          A thread I created on the forum Install Base to teach people how to use Lambda functions in Microsoft Excel or Google Spreadsheets.

          The reason is that most people in the forum use Excel/Spreadsheets for video game related data so the idea was to teach them how they can create their own functions in the event that Excel/Spreadsheets did not have a built-in function available for something they would want to make.
        </Text>

        <Button component="a" href="https://www.installbaseforum.com/forums/threads/learn-badly-with-me-ggx2ac-chapter-2-functional-programming-with-lambda-functions-using-google-sheets-also-works-on-microsoft-excel.1692/" variant="light" color="teal" fullWidth style={{ marginTop: 14 }}>
          Click here to view thread
        </Button>
      </Card>
    </div>
  </>
  );
}
