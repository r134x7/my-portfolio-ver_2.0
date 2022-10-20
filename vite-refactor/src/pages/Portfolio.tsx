import { Card, Image, Text, Badge, Button, Group, useMantineTheme, SimpleGrid, Box } from '@mantine/core';
import { works } from '../../vite-refactor/src/components/project';

export default function Portfolio() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <Box sx={(theme) => ({
      h1: {
        paddingLeft: "2em",
        paddingRight: "2em",
      }
    })}>
      <h1>Portfolio</h1>

    <SimpleGrid cols={2}
    breakpoints={[
      { maxWidth: 768, cols: 1, spacing: 'sm' },
    ]}
    >
    {works.map(item => 

    <div style={{ width: 360, margin: 'auto' }} key={item.id}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image height={220} src={item.image} alt={`Project ${item.id}`} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{item.name}</Text>
          <Badge color={item.badgeColour} variant="light">
            {item.badge}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {item.textDescription}
        </Text>

        <Button component="a" href={item.deployedApp} variant="light" color="cyan" fullWidth style={{ marginTop: 14 }}>
          {item.buttonAppText}
        </Button>
        <Button component="a" href={item.githubRepo} variant="light" color="green" fullWidth style={{ marginTop: 14 }}>
        {item.buttonRepoText}
        </Button>
      </Card>
    </div>
      )
    }
    </SimpleGrid>
    </Box>
  );
}
