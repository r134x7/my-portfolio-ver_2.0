import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import b1a from "../images/b1a.png";
import pic2 from "../images/canvasthumbnail2.jpg"


export default function Videos() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 333, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={b1a} height={250} alt="Video still" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Understanding the Traversal Mechanics of Sayonara Umihara Kawase</Text>
          <Badge color="red" variant="light">
            Video Game
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        The physics seen in this video are Newton&apos;s Laws of Motion, Hooke&apos;s Law, Pendulum Motion,  Simple Harmonic Motion and force vectors.

This video is to assist those playing the game Sayonara Umihara Kawase who have gotten stuck at stages and do not know how to get past obstacles. 
        </Text>

        <Button component="a" href="https://www.youtube.com/watch?v=BelfE5AxQwA&list=PLlia8-4etXyj1IYCN7OISVf63YJuZQi3w" variant="light" color="teal" fullWidth style={{ marginTop: 14 }}>
          Click here to YouTube video
        </Button>
      </Card>

      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={pic2} height={250} alt="Video still" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>ggx2ac: Nintendo Earnings Data Animation episode 1 - Nintendo FY3/2024 Q1 Earnings Release</Text>
          <Badge color="red" variant="light">
            Video Game Earnings Data
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        Data taken from my Nintendo Earnings Data webpage and animated using Motion Canvas
        </Text>

        <Button component="a" href="https://youtu.be/N5sT07oee_I" variant="light" color="teal" fullWidth style={{ marginTop: 14 }}>
          Click here to YouTube video
        </Button>
      </Card>
    </div>
  );
}
